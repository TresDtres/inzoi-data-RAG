"""EXPERIMENTO 2: umbrales de nivel de relaciones por escritura controlada.

Escribe con relationships.set_value sobre UN solo par owner->target (un stat),
lee de vuelta y registra LITERAL cada paso en un JSONL. Re-ejecutable.

Uso (subcomandos):
    python tools/experimento2_umbrales.py estado                       # leer valor/nivel actuales
    python tools/experimento2_umbrales.py escribir <valor>              # una escritura + lectura
    python tools/experimento2_umbrales.py escanear <v0> <v1> <paso>     # barrido de escrituras
    python tools/experimento2_umbrales.py restaurar <valor>             # escribir y verificar

El sujeto se fija con constantes abajo. Todo queda en:
    state/engine-monitor/experimento2-pasos.jsonl  (una linea por operacion)
"""
from __future__ import annotations

import argparse
import json
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from mcp_client import call  # noqa: E402

REGISTRO = ROOT / "state" / "engine-monitor" / "experimento2-pasos.jsonl"

# SUJETO DEL EXPERIMENTO ( unico par modificado )
OWNER = 20524        # lara (poseida al arrancar el experimento)
TARGET = 34821       # Tuoran Han
STAT = "Friendship"


def _ahora() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="milliseconds")


def _log(registro: dict) -> None:
    REGISTRO.parent.mkdir(parents=True, exist_ok=True)
    with REGISTRO.open("a", encoding="utf-8") as fh:
        fh.write(json.dumps(registro, ensure_ascii=False) + "\n")


def leer_stat() -> dict:
    """Lee de vuelta la relacion sujeto y devuelve {valor, nivel, fila_completa, literal}."""
    resultado = call("game", "relationships_list", {"owner_id": OWNER})
    texto = resultado["text"]
    # el literal trae preambulo + JSON
    ini = texto.find("[")
    filas = json.loads(texto[ini:texto.rfind("]") + 1]) if ini >= 0 else []
    fila = next((f for f in filas if f.get("target_id") == TARGET), None)
    if not fila:
        return {"ok": False, "literal": texto[:400]}
    stat = fila["stats"].get(STAT, {})
    return {"ok": True, "valor": stat.get("value"), "nivel": stat.get("level"),
            "romance": fila["stats"].get("Romance", {}).get("value"),
            "family": fila["stats"].get("Family", {}).get("value"),
            "fila": fila}


def escribir(valor: float, espera_s: float = 1.0) -> dict:
    """Escribe el valor del stat sujeto y lee de vuelta. Devuelve el registro del paso."""
    args = {"entity_id": TARGET, "value": round(valor, 2), "relationship_id": STAT}
    respuesta = call("game", "relationships_set_value", args)
    paso = {"ts": _ahora(), "accion": "set_value", "escrito": round(valor, 2),
            "retorno_ok": respuesta["ok"], "retorno_literal": respuesta["text"][:300]}
    time.sleep(espera_s)
    lectura = leer_stat()
    paso["leido_valor"] = lectura.get("valor")
    paso["leido_nivel"] = lectura.get("nivel")
    paso["conservado"] = (lectura.get("valor") is not None
                          and abs(lectura["valor"] - round(valor, 2)) < 0.005)
    _log(paso)
    return paso


def cmd_estado(_: list[str]) -> int:
    lectura = leer_stat()
    print(json.dumps({k: v for k, v in lectura.items() if k != "fila"}, ensure_ascii=False, indent=1))
    _log({"ts": _ahora(), "accion": "estado", "leido_valor": lectura.get("valor"),
          "leido_nivel": lectura.get("nivel")})
    return 0


def cmd_escribir(args: list[str]) -> int:
    paso = escribir(float(args[0]))
    print(f"escrito={paso['escrito']} -> leido={paso['leido_valor']} nivel={paso['leido_nivel']} "
          f"conservado={paso['conservado']} | retorno: {paso['retorno_literal'][:120]}")
    return 0


def cmd_escanear(args: list[str]) -> int:
    v0, v1, paso_tamano = float(args[0]), float(args[1]), float(args[2])
    n = int(round((v1 - v0) / paso_tamano))
    for i in range(n + 1):
        valor = round(v0 + i * paso_tamano, 2)
        paso = escribir(valor)
        marca = " <<< BORDE" if paso["leido_nivel"] != escribir.nivel_prev and i > 0 else ""
        if i > 0 and paso.get("leido_nivel") != escribir.nivel_prev:
            marca = f" <<< NIVEL {escribir.nivel_prev}->{paso['leido_nivel']}"
        escribir.nivel_prev = paso.get("leido_nivel")
        print(f"{valor:8.2f} -> leido {paso['leido_valor']} nivel {paso['leido_nivel']}{marca}",
              flush=True)
    return 0


def cmd_restaurar(args: list[str]) -> int:
    paso = escribir(float(args[0]))
    print(f"restaurado a {paso['escrito']}: leido={paso['leido_valor']} conservado={paso['conservado']}")
    return 0


escribir.nivel_prev = None


def main(argv: list[str]) -> int:
    comandos = {
        "estado": (cmd_estado, 0),
        "escribir": (cmd_escribir, 1),
        "escanear": (cmd_escanear, 3),
        "restaurar": (cmd_restaurar, 1),
    }
    if len(argv) < 1 or argv[0] not in comandos:
        print(__doc__)
        return 2
    funcion, n_args = comandos[argv[0]]
    args = argv[1:]
    if len(args) != n_args:
        print(f"error: {argv[0]} espera {n_args} argumento(s)", file=sys.stderr)
        return 2
    return funcion(args)


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
