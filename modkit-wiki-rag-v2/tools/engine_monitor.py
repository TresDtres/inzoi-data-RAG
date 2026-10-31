"""Monitor del motor: grabadora de vuelo de lo que el juego hace en automatico.

Sondea el estado de la partida via MCP (solo comandos de LECTURA), calcula el diff
entre muestras y escribe un registro de eventos JSONL: que cambio, cuando y en quien.
La partida sigue su curso (autonomia, necesidades cubiertas por cheats, etc.) y este
tool documenta lo que el motor decide por su cuenta — materia prima del "director de
guiones".

Uso:
    python tools/engine_monitor.py [--interval 5] [--duration 120] [--out <ruta.jsonl>]

Salidas:
    state/engine-monitor/<ts>.jsonl  — un evento por linea: {ts, entity, probe, changes, raw}
    stdout: resumen legible al terminar

Reglas:
    - SOLO sondas de lectura; ningun comando escribe estado.
    - Cada muestra guarda el diff contra la anterior por sonda/entidad; el raw solo
      se guarda en el primer sample y cuando hay cambio.
    - Las sondas que fallan se anotan como evento de error (no abortan la corrida).
"""
from __future__ import annotations

import argparse
import json
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from mcp_client import call  # noqa: E402

OUT_DIR = ROOT / "state" / "engine-monitor"

# Sondas globales (sin entidad) y por entidad. Nombres de tool MCP (puntos->guiones).
SONDAS_GLOBALES = [
    ("game.get_state", "game_get_state", {}),
    ("environment.get_state", "environment_get_state", {}),
    ("ui.list_windows", "ui_list_windows", {}),
]

SONDAS_ENTIDAD = [
    ("stat.get_all", "stat_get_all", {"entity_id": "{eid}"}),
    ("emotion.get_current", "emotion_get_current", {"entity_id": "{eid}"}),
    ("ambition.get", "ambition_get", {"entity_id": "{eid}"}),
    ("hope.list", "hope_list", {"entity_id": "{eid}"}),
    ("career.get_work_status", "career_get_work_status", {"entity_id": "{eid}"}),
    ("relationships.list", "relationships_list", {"owner_id": "{eid}"}),
]


def _ahora() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds")


def _norm(valor):
    """Normaliza la respuesta para comparar: texto JSON->objeto, listas estables.

    Algunas tools devuelven un preambulo legible + JSON (p.ej. ui_list_windows);
    se extrae el objeto JSON si existe."""
    if isinstance(valor, str):
        try:
            return json.loads(valor)
        except (json.JSONDecodeError, ValueError):
            ini, fin = valor.find("{"), valor.rfind("}")
            if ini >= 0 and fin > ini:
                try:
                    return json.loads(valor[ini:fin + 1])
                except (json.JSONDecodeError, ValueError):
                    return valor
            return valor
    return valor


CLAVES_LISTA = ("target_id", "entity_id", "window", "id", "name")


def _diff(antiguo, nuevo):
    """Diff plano recursivo: {ruta: [viejo, nuevo]} para hojas cambiadas/anadidas.

    Las listas de dicts con una clave identificadora (target_id, entity_id, window...)
    se comparan elemento a elemento por esa clave, para que el evento diga QUE
    elemento cambio en vez de volcar la lista entera.
    """
    cambios = {}
    if isinstance(antiguo, dict) and isinstance(nuevo, dict):
        for clave in sorted(set(antiguo) | set(nuevo)):
            sub = _diff(antiguo.get(clave), nuevo.get(clave))
            for ruta, par in sub.items():
                cambios[f"{clave}.{ruta}" if ruta else clave] = par
    elif isinstance(antiguo, list) and isinstance(nuevo, list):
        clave_id = None
        if antiguo and nuevo and all(isinstance(x, dict) for x in antiguo + nuevo):
            for candidata in CLAVES_LISTA:
                if all(candidata in x for x in antiguo + nuevo):
                    clave_id = candidata
                    break
        if clave_id:
            mapa_viejo = {str(x[clave_id]): x for x in antiguo}
            mapa_nuevo = {str(x[clave_id]): x for x in nuevo}
            for ident in sorted(set(mapa_viejo) | set(mapa_nuevo)):
                sub = _diff(mapa_viejo.get(ident), mapa_nuevo.get(ident))
                for ruta, par in sub.items():
                    cambios[f"[{clave_id}={ident}].{ruta}" if ruta else f"[{clave_id}={ident}]"] = par
        elif antiguo != nuevo:
            cambios["[]"] = [antiguo, nuevo]
    elif antiguo != nuevo:
        cambios[""] = [antiguo, nuevo]
    return cambios


def _llamar(server: str, tool: str, args: dict) -> dict:
    resultado = call(server, tool, args)
    return {
        "ok": resultado["ok"],
        "error": resultado["is_error"],
        "data": _norm(resultado["text"]),
    }


def _miembros() -> list[dict]:
    respuesta = _llamar("game", "household_get_members", {})
    if not respuesta["ok"]:
        raise RuntimeError(f"household.get_members fallo: {respuesta['data']}")
    return respuesta["data"].get("members", [])


def tomar_muestra(previa: dict | None) -> tuple[dict, list]:
    """Ejecuta todas las sondas EN PARALELO (el MCP del juego atiende llamadas concurrentes);
    devuelve (estado_actual, eventos_diff)."""
    estado: dict = {}
    eventos: list = []
    resultados: dict = {}
    claves: dict = {}

    def sondear(clave: str, server: str, tool: str, args: dict, etiqueta: str):
        resultados[clave] = _llamar(server, tool, args)
        claves[clave] = (tool, etiqueta)

    try:
        miembros = _miembros()
    except RuntimeError as exc:
        raise
    estado["members"] = miembros
    if previa is not None:
        cambios = _diff(previa.get("members"), miembros)
        if cambios:
            eventos.append({"ts": _ahora(), "entity": "household", "probe": "household.get_members",
                            "changes": cambios})

    tareas = []
    for nombre, tool, args in SONDAS_GLOBALES:
        tareas.append((f"{nombre}|global", "game", tool, args, "global"))
    for miembro in miembros:
        eid = miembro.get("entity_id")
        if eid is None:
            continue
        etiqueta = f"{miembro.get('first_name', '')}.{eid}"
        for nombre, tool, plantilla in SONDAS_ENTIDAD:
            args = {k: v.replace("{eid}", str(eid)) for k, v in plantilla.items()}
            tareas.append((f"{nombre}|{etiqueta}", "game", tool, args, etiqueta))

    with ThreadPoolExecutor(max_workers=12) as pool:
        futuros = [pool.submit(sondear, *tarea) for tarea in tareas]
        for futuro in futuros:
            futuro.result()

    for clave in sorted(resultados):
        tool, etiqueta = claves[clave]
        respuesta = resultados[clave]
        actual = respuesta if respuesta["error"] else respuesta["data"]
        estado[clave] = actual
        if previa is None:
            continue
        anterior = previa.get(clave)
        if respuesta["error"]:
            if anterior != actual:
                eventos.append({"ts": _ahora(), "entity": etiqueta, "probe": tool,
                                "error": True, "changes": {"respuesta": [anterior, actual]}})
            continue
        cambios = _diff(anterior, actual)
        if cambios:
            eventos.append({"ts": _ahora(), "entity": etiqueta, "probe": tool, "changes": cambios})

    return estado, eventos


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--interval", type=float, default=5.0, help="Segundos entre muestras")
    parser.add_argument("--duration", type=float, default=120.0, help="Duracion total en segundos")
    parser.add_argument("--out", type=Path, default=None, help="Ruta del JSONL de salida")
    parser.add_argument("--snapshot-every", type=float, default=600.0,
                        help="Segundos entre snapshots de estado completo (0 = desactivado)")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    salida = args.out or (OUT_DIR / f"{datetime.now().strftime('%Y%m%dT%H%M%SZ')}.jsonl")
    inicio = time.time()
    print(f"monitor del motor: {args.duration:.0f}s a intervalo {args.interval:.1f}s -> {salida.name}", flush=True)

    previa = None
    eventos_totales = 0
    muestras = 0
    fallos_consecutivos = 0
    ultima_snapshot = 0.0
    con_salida = salida.open("w", encoding="utf-8")
    try:
        while time.time() - inicio < args.duration:
            t_muestra = time.time()
            try:
                estado, eventos = tomar_muestra(previa)
            except RuntimeError as exc:
                fallos_consecutivos += 1
                con_salida.write(json.dumps({"ts": _ahora(), "entity": "session", "probe": "gap",
                                             "error": True, "changes": {"motivo": [None, str(exc)]}},
                                            ensure_ascii=False) + "\n")
                if fallos_consecutivos >= 10:
                    print(f"error persistente tras {fallos_consecutivos} intentos: {exc}", file=sys.stderr)
                    return 2
                time.sleep(min(30.0, args.interval * fallos_consecutivos))
                continue
            fallos_consecutivos = 0
            muestras += 1
            for evento in eventos:
                con_salida.write(json.dumps(evento, ensure_ascii=False) + "\n")
            eventos_totales += len(eventos)
            if previa is None or (args.snapshot_every > 0
                                  and t_muestra - ultima_snapshot >= args.snapshot_every):
                con_salida.write(json.dumps({"ts": _ahora(), "entity": "session",
                                             "probe": "first_sample" if previa is None else "snapshot",
                                             "state": estado}, ensure_ascii=False) + "\n")
                ultima_snapshot = t_muestra
            previa = estado
            espera = args.interval - (time.time() - t_muestra)
            if espera > 0 and time.time() - inicio + espera < args.duration:
                time.sleep(espera)
    finally:
        con_salida.close()

    print(f"\nmuestras: {muestras} | eventos detectados: {eventos_totales}")
    print(f"salida: {salida.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
