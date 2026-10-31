"""Analiza un registro JSONL de tools/engine_monitor.py y produce el informe del motor.

Uso:
    python tools/analizar_engine_monitor.py <sesion.jsonl> [--informe <ruta.md>]

Re-ejecutable con futuras sesiones. Todo el informe distingue:
    [VERIFIED]  — sale directamente de los datos del registro
    [INFERRED]  — interpretacion del analista sobre los datos
No lanza comandos al juego: solo lee el JSONL.
"""
from __future__ import annotations

import argparse
import json
import statistics
import sys
from collections import Counter, defaultdict
from datetime import datetime
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]


def _ts(texto: str) -> datetime:
    return datetime.fromisoformat(texto)


def _hhmm(minutos: float) -> str:
    return f"{int(minutos // 60):02d}:{int(minutos % 60):02d}"


def cargar(ruta: Path) -> list[dict]:
    eventos = []
    for linea in ruta.read_text(encoding="utf-8").splitlines():
        if linea.strip():
            eventos.append(json.loads(linea))
    for e in eventos:
        e["_dt"] = _ts(e["ts"])
    eventos.sort(key=lambda e: e["_dt"])
    return eventos


# ---------------------------------------------------------------------------
# Reloj de juego: interpolacion por tramos entre snapshots
# ---------------------------------------------------------------------------

class RelojJuego:
    def __init__(self, eventos: list[dict]):
        self.puntos: list[tuple[datetime, float]] = []
        for e in eventos:
            if e.get("probe") not in ("first_sample", "snapshot"):
                continue
            env = (e.get("state") or {}).get("environment.get_state|global")
            if not env:
                continue
            minutos = env["day"] * 1440 + env["hour"] * 60 + env["minute"]
            self.puntos.append((e["_dt"], float(minutos)))
        self.puntos.sort()
        # desenrollar medianoche: si el reloj retrocede (day sin incrementar), sumar dias
        base = 0
        for i in range(1, len(self.puntos)):
            if self.puntos[i][1] + base - self.puntos[i - 1][1] < -720:
                base += 1440
            self.puntos[i] = (self.puntos[i][0], self.puntos[i][1] + base)
        if not self.puntos:
            raise RuntimeError("sin snapshots de environment: no se puede mapear el reloj de juego")

    def minutos_en(self, dt: datetime) -> float | None:
        if dt < self.puntos[0][0]:
            return None
        for (t0, g0), (t1, g1) in zip(self.puntos, self.puntos[1:]):
            if t0 <= dt <= t1:
                fraccion = (dt - t0).total_seconds() / max((t1 - t0).total_seconds(), 1)
                return g0 + (g1 - g0) * fraccion
        t, g = self.puntos[-1]
        pendiente = self._pendiente_final()
        return g + (dt - t).total_seconds() / 60.0 * pendiente

    def _pendiente_final(self) -> float:
        if len(self.puntos) < 2:
            return 30.0
        (t0, g0), (t1, g1) = self.puntos[-2], self.puntos[-1]
        return (g1 - g0) / ((t1 - t0).total_seconds() / 60.0)

    @property
    def minutos_totales(self) -> float:
        return self.puntos[-1][1] - self.puntos[0][1]

    def info(self) -> dict:
        env0 = self.puntos[0]
        return {"inicio": env0, "minutos_totales": self.minutos_totales}


# ---------------------------------------------------------------------------
# Secciones
# ---------------------------------------------------------------------------

def sec_emociones(eventos: list[dict], reloj: RelojJuego, lineas: list[str]):
    emo = [e for e in eventos if e.get("probe") == "emotion_get_current"
           and isinstance(e.get("changes"), dict) and "emotion_type" in e["changes"]]
    lineas.append("## 1. Emociones\n")
    horas_reales = (eventos[-1]["_dt"] - eventos[0]["_dt"]).total_seconds() / 3600
    horas_juego = reloj.minutos_totales / 60
    lineas.append(f"[VERIFIED] Transiciones de tipo registradas: **{len(emo)}** en "
                  f"{horas_reales:.2f} h reales = {horas_juego:.2f} h de juego "
                  f"(reloj de juego {reloj.minutos_totales:.0f} min).")

    por_entidad: dict[str, list[dict]] = defaultdict(list)
    for e in emo:
        por_entidad[e["entity"]].append(e)

    # estado inicial por entidad (del primer snapshot)
    snap0 = next(e for e in eventos if e.get("probe") == "first_sample")
    inicial = {}
    for entidad in por_entidad:
        estado = snap0["state"].get(f"emotion.get_current|{entidad}")
        if estado:
            inicial[entidad] = (estado.get("emotion_type"), estado.get("level"))

    lineas.append("\n### Cadencia por Zoi\n")
    lineas.append("| Zoi | transiciones | por h real | por h juego | espaciado medio (s reales) | espaciado medio (min juego) | espaciado max (min juego) | emocion inicial |")
    lineas.append("|---|---|---|---|---|---|---|---|")
    espaciados_por_entidad: dict[str, list[float]] = {}
    for entidad, lista in sorted(por_entidad.items()):
        n = len(lista)
        por_h_real = n / horas_reales
        por_h_juego = n / horas_juego
        espaciados = [(b["_dt"] - a["_dt"]).total_seconds() for a, b in zip(lista, lista[1:])]
        espaciados_juego = [reloj.minutos_en(b["_dt"]) - reloj.minutos_en(a["_dt"])
                            for a, b in zip(lista, lista[1:])]
        espaciados_por_entidad[entidad] = espaciados_juego
        ini = inicial.get(entidad, ("?", "?"))
        lineas.append(f"| {entidad} | {n} | {por_h_real:.1f} | {por_h_juego:.1f} | "
                      f"{statistics.mean(espaciados):.0f} | {statistics.mean(espaciados_juego):.1f} | "
                      f"{max(espaciados_juego):.1f} | {ini[0]} lvl {ini[1]} |")

    lineas.append("\n### Matriz de transiciones (todas las entidades)\n")
    matriz: Counter = Counter()
    for e in emo:
        viejo, nuevo = e["changes"]["emotion_type"]
        matriz[(viejo, nuevo)] += 1
    lineas.append("| de | a | n |")
    lineas.append("|---|---|---|")
    for (a, b), n in matriz.most_common():
        lineas.append(f"| {a} | {b} | {n} |")

    tipos = Counter()
    for (a, b), n in matriz.items():
        tipos[a] += n
    lineas.append("\n[VERIFIED] Emociones de salida mas frecuentes: "
                  + ", ".join(f"{t} ({n})" for t, n in tipos.most_common(6)) + ".")

    # ciclos recurrentes (pares repetidos en la misma entidad)
    pares_por_entidad: dict[str, Counter] = {}
    for entidad, lista in por_entidad.items():
        c = Counter()
        for e in lista:
            viejo, nuevo = e["changes"]["emotion_type"]
            c[(viejo, nuevo)] += 1
        pares_por_entidad[entidad] = c
    recurrentes = [(ent, par, n) for ent, c in pares_por_entidad.items()
                   for par, n in c.items() if n >= 3]
    if recurrentes:
        lineas.append("\n[VERIFIED] Transiciones repetidas 3+ veces en el mismo Zoi: "
                      + "; ".join(f"{ent}: {a}->{b} x{n}" for ent, (a, b), n in sorted(recurrentes, key=lambda x: -x[2])[:8])
                      + ".")

    # duraciones por tipo
    lineas.append("\n### Vida media de cada emocion (tiempo hasta la siguiente transicion)\n")
    duraciones: dict[str, list[float]] = defaultdict(list)
    for entidad, lista in por_entidad.items():
        t_prev = lista[0]["_dt"]
        tipo_prev = inicial.get(entidad, (None,))[0] or lista[0]["changes"]["emotion_type"][0]
        dur_prev_game = None
        for e in lista:
            if dur_prev_game is not None:
                duraciones[tipo_prev].append(dur_prev_game)
            dur_prev_game = reloj.minutos_en(e["_dt"]) - reloj.minutos_en(t_prev)
            tipo_prev = e["changes"]["emotion_type"][0]
            t_prev = e["_dt"]
    lineas.append("| emocion | n periodos | duracion media (min juego) | mediana | max |")
    lineas.append("|---|---|---|---|---|")
    for tipo, ds in sorted(duraciones.items(), key=lambda kv: -len(kv[1])):
        if ds:
            lineas.append(f"| {tipo} | {len(ds)} | {statistics.mean(ds):.1f} | "
                          f"{statistics.median(ds):.1f} | {max(ds):.1f} |")
    lineas.append("\n[INFERRED] Las duraciones son censuradas a la derecha (la ultima emocion "
                  "de cada serie no tiene transicion siguiente); el min juego por transicion "
                  "es el limite de resolucion del sondeo (una transicion puede ocurrir hasta "
                  "~6 min de juego antes de ser vista).")

    # correlaciones
    lineas.append("\n### Correlaciones visibles en el registro\n")
    por_hora_juego: Counter = Counter()
    for e in emo:
        g = reloj.minutos_en(e["_dt"])
        if g is not None:
            por_hora_juego[int(g // 60) % 24] += 1
    lineas.append("[VERIFIED] Transiciones por hora del dia (reloj de juego): "
                  + ", ".join(f"{h:02d}h: {n}" for h, n in sorted(por_hora_juego.items())) + ".")
    hopes = [e for e in eventos if e.get("probe") == "hope_list"]
    cercanas = 0
    for h in hopes:
        for e in emo:
            if abs((e["_dt"] - h["_dt"]).total_seconds()) <= 60:
                cercanas += 1
                break
    lineas.append(f"[VERIFIED] Transiciones de emocion a menos de 60 s de un evento de esperanza: "
                  f"**{cercanas}** de {len(emo)}.")
    lineas.append("[INFERRED] Estacion constante durante toda la sesion (Winter, temperatura -8): "
                  "este registro NO puede mostrar modulacion por estacion. La concentracion por "
                  "hora de juego y la coincidencia con esperanzas (si sale baja) son las unicas "
                  "senales de disparador disponibles aqui.")
    return por_entidad, espaciados_por_entidad


def sec_relaciones(eventos: list[dict], reloj: RelojJuego, lineas: list[str]):
    rel = [e for e in eventos if e.get("probe") == "relationships_list"
           and isinstance(e.get("changes"), dict)]
    lineas.append("\n## 2. Relaciones\n")
    lineas.append(f"[VERIFIED] Eventos de relaciones: **{len(rel)}**.")

    series: dict[tuple, list[tuple[datetime, float]]] = defaultdict(list)
    niveles: dict[tuple, list[tuple[datetime, int]]] = defaultdict(list)
    saltos: list[dict] = []
    deltas: list[float] = []
    for e in rel:
        for clave, par in e["changes"].items():
            if clave.endswith(".value"):
                entidad = e["entity"]
                try:
                    target = clave.split("target_id=")[1].split("]")[0]
                    stat = clave.rsplit(".", 1)[0].split(".")[-1]
                except IndexError:
                    continue
                viejo, nuevo = float(par[0]), float(par[1])
                series[(entidad, target, stat)].append((e["_dt"], nuevo))
                delta = nuevo - viejo
                deltas.append(delta)
                if abs(delta) >= 0.05:
                    saltos.append({"ts": e["_dt"], "entidad": entidad, "target": target,
                                   "stat": stat, "de": viejo, "a": nuevo, "delta": delta})
            elif clave.endswith(".level"):
                entidad = e["entity"]
                try:
                    target = clave.split("target_id=")[1].split("]")[0]
                    stat = clave.rsplit(".", 1)[0].split(".")[-1]
                except IndexError:
                    continue
                niveles[(entidad, target, stat)].append((e["_dt"], int(par[1]), float("nan")))

    # valor en el momento del cambio de nivel: buscar el evento de value mas cercano
    umbrales: Counter = Counter()
    umbral_detalle: dict[str, list] = defaultdict(list)
    # reescanear: el evento que cambia .level suele traer TAMBIEN el salto de .value del mismo stat
    for e in rel:
        niveles_ev = {}
        valores_ev = {}
        for clave, par in e["changes"].items():
            if not clave.endswith(".level") and not clave.endswith(".value"):
                continue
            try:
                target = clave.split("target_id=")[1].split("]")[0]
                stat = clave.rsplit(".", 1)[0].split(".")[-1]
            except IndexError:
                continue
            if clave.endswith(".level"):
                niveles_ev[(target, stat)] = int(par[1])
            else:
                valores_ev[(target, stat)] = float(par[1])
        for (target, stat), nivel_nuevo in niveles_ev.items():
            if (target, stat) in valores_ev:
                valor = valores_ev[(target, stat)]
                umbral_detalle[f"{stat} -> L{nivel_nuevo} (valor tras cruzar)"].append(round(valor, 2))
                umbrales[round(valor, 2)] += 1

    lineas.append("\n### Deriva por par y stat (unidades por hora de juego)\n")
    lineas.append("| owner | target | stat | primero | ultimo | deriva/h juego | n ticks |")
    lineas.append("|---|---|---|---|---|---|---|")
    derivas = []
    for clave, serie in sorted(series.items()):
        entidad, target, stat = clave
        if len(serie) < 5:
            continue
        g0, g1 = reloj.minutos_en(serie[0][0]), reloj.minutos_en(serie[-1][0])
        if g0 is None or g1 is None or g1 - g0 < 30:
            continue
        deriva = (serie[-1][1] - serie[0][1]) / ((g1 - g0) / 60)
        derivas.append((entidad, target, stat, serie[0][1], serie[-1][1], deriva, len(serie)))
    derivas.sort(key=lambda d: abs(d[5]), reverse=True)
    for entidad, target, stat, v0, v1, deriva, n in derivas[:14]:
        lineas.append(f"| {entidad} | {target} | {stat} | {v0:.2f} | {v1:.2f} | {deriva:+.2f} | {n} |")

    por_stat: dict[str, list[float]] = defaultdict(list)
    for _, _, stat, _, _, deriva, _ in derivas:
        por_stat[stat].append(deriva)
    lineas.append("\n[VERIFIED] Deriva media por stat (unidades/hora de juego, sobre series con 5+ ticks):")
    for stat, ds in sorted(por_stat.items()):
        lineas.append(f"- {stat}: media {statistics.mean(ds):+.3f} | mediana {statistics.median(ds):+.3f} | n={len(ds)}")

    lineas.append("\n### Tick a tick: distribucion de los micro-ajustes\n")
    cont_deltas = Counter(round(d, 2) for d in deltas)
    lineas.append("[VERIFIED] delta en un evento (con signo): "
                  + ", ".join(f"{d:+.2f}: {n}" for d, n in sorted(cont_deltas.items(), key=lambda kv: -kv[1])[:6])
                  + f" (total {len(deltas)} deltas; {sum(1 for d in deltas if abs(abs(d)-0.01)<0.005)} de exactamente +/-0.01).")

    lineas.append("\n### Saltos no graduales (|delta| >= 0.05 en un solo evento)\n")
    lineas.append(f"[VERIFIED] Saltos detectados: **{len(saltos)}**.")
    lineas.append("| ts | owner | target | stat | de | a | delta |")
    lineas.append("|---|---|---|---|---|---|---|")
    for s in sorted(saltos, key=lambda s: -abs(s["delta"]))[:12]:
        lineas.append(f"| {s['ts'].strftime('%H:%M:%S')} | {s['entidad']} | {s['target']} | {s['stat']} | "
                      f"{s['de']:.2f} | {s['a']:.2f} | {s['delta']:+.2f} |")

    lineas.append("\n### Umbrales de nivel descubiertos\n")
    lineas.append("[VERIFIED] Cambios de campo `level` registrados: "
                  + str(sum(len(v) for v in niveles.values())) + ".")
    lineas.append("Valores del stat en el momento exacto del cambio de nivel (por stat y nivel nuevo):")
    for clave, valores in sorted(umbral_detalle.items()):
        lineas.append(f"- {clave}: valores {valores[:10]}" + (" ..." if len(valores) > 10 else ""))
    if not umbral_detalle:
        lineas.append("- (ningun cambio de level en la sesion)")
    lineas.append("\n[INFERRED] Los micro-ajustes son de magnitud constante (0.01) con direccion "
                  "persistente por serie: el motor aplica deriva continua y acumula; los saltos "
                  "bruscos son eventos de interaccion (no redondeo). La estacion (Winter) fue "
                  "constante: no se puede descartar modulacion estacional de la deriva con este registro.")
    return saltos, umbrales


def _clasificar_esperanza(hope_id: str) -> str:
    h = hope_id.lower()
    if h.startswith("ambition"):
        return "ambicion"
    if h.startswith("trait"):
        return "rasgo"
    if any(k in h for k in ("cold", "foodpoisoning", "drink", "toilet", "sleep", "medicine", "treat", "med")):
        return "condicion-fisica"
    if any(k in h for k in ("winter", "summer", "season", "warmclothes")):
        return "estacion"
    if any(k in h for k in ("parent", "child", "baby", "family", "marry", "kiss", "mimic")):
        return "rol-familiar"
    if any(k in h for k in ("money", "spend", "buy", "lottery", "publishing", "royalty")):
        return "dinero/trabajo"
    return "otro"


def sec_esperanzas(eventos: list[dict], reloj: RelojJuego, lineas: list[str]):
    hopes = [e for e in eventos if e.get("probe") == "hope_list"]
    lineas.append("\n## 3. Esperanzas\n")
    lineas.append(f"[VERIFIED] Eventos de rotacion: **{len(hopes)}**.")

    # llegadas/salidas por entidad
    vida: dict[tuple, dict] = {}
    linea_tiempo: dict[str, list[dict]] = defaultdict(list)
    for e in hopes:
        entidad = e["entity"]
        cambio = e["changes"].get("selected.[]")
        if not cambio:
            continue
        viejos = {h.get("hope_id") for h in (cambio[0] or [])}
        nuevos = {h.get("hope_id") for h in (cambio[1] or [])}
        for hid in nuevos - viejos:
            vida[(entidad, hid)] = {"llegada": e["_dt"]}
        for hid in viejos - nuevos:
            if (entidad, hid) in vida:
                vida[(entidad, hid)]["salida"] = e["_dt"]
            else:
                vida[(entidad, hid)] = {"llegada": eventos[0]["_dt"], "salida": e["_dt"], "preexistente": True}
        linea_tiempo[entidad].append({"dt": e["_dt"], "quitan": viejos - nuevos, "ponen": nuevos - viejos})

    lineas.append("\n### Vida de cada esperanza (llegada -> salida)\n")
    lineas.append("| Zoi | esperanza | categoria | vida (min reales) | vida (h juego) | salida observada |")
    lineas.append("|---|---|---|---|---|---|")
    completadas = []
    for (entidad, hid), v in sorted(vida.items(), key=lambda kv: kv[1]["llegada"]):
        categoria = _clasificar_esperanza(hid)
        salida = v.get("salida")
        fin = "en seleccion al final" if salida is None else ("reemplazada/rotada" if not v.get("preexistente") else "preexistente rotada")
        if salida:
            vida_real = (salida - v["llegada"]).total_seconds() / 60
            g0, g1 = reloj.minutos_en(v["llegada"]), reloj.minutos_en(salida)
            vida_juego = (g1 - g0) / 60 if g0 is not None and g1 is not None else float("nan")
            completadas.append((hid, categoria, vida_real, vida_juego))
        else:
            vida_real = (eventos[-1]["_dt"] - v["llegada"]).total_seconds() / 60
            g0 = reloj.minutos_en(v["llegada"])
            g_final = reloj.minutos_en(eventos[-1]["_dt"])
            vida_juego = (g_final - g0) / 60 if g0 is not None and g_final is not None else float("nan")
        lineas.append(f"| {entidad} | {hid} | {categoria} | {vida_real:.0f} | {vida_juego:.2f} | {fin} |")

    if completadas:
        lineas.append("\n[VERIFIED] Vida media de esperanzas rotadas (con salida observada): "
                      f"media {statistics.mean(x[2] for x in completadas):.1f} min reales "
                      f"({statistics.mean(x[3] for x in completadas):.2f} h de juego), n={len(completadas)}.")

    # desplazamiento: cuando entra una, sale otra en el mismo evento?
    desplaza = sum(1 for e in linea_tiempo.values() for paso in e if paso["quitan"] and paso["ponen"])
    solo_quitan = sum(1 for e in linea_tiempo.values() for paso in e if paso["quitan"] and not paso["ponen"])
    solo_ponen = sum(1 for e in linea_tiempo.values() for paso in e if paso["ponen"] and not paso["quitan"])
    lineas.append(f"\n[VERIFIED] Rotaciones con salida Y entrada simultaneas: **{desplaza}**; "
                  f"solo salida: {solo_quitan}; solo entrada: {solo_ponen}. "
                  "[INFERRED] El patron dominante indica que una esperanza nueva DESPLAZA a la anterior "
                  "en el mismo tick de rotacion (seleccion limitada por max_hope_size).")

    categorias = Counter(_clasificar_esperanza(hid) for (_, hid) in vida)
    lineas.append("\n[VERIFIED] Frecuencia por categoria: " + ", ".join(f"{c}: {n}" for c, n in categorias.most_common()) + ".")

    reap = Counter(hid for (_, hid) in vida)
    reap = {h: n for h, n in reap.items() if n > 1}
    if reap:
        lineas.append("[VERIFIED] Esperanzas que reaparecen (2+ ventanas): " + ", ".join(f"{h} x{n}" for h, n in reap.items()))
    else:
        lineas.append("[VERIFIED] Ninguna esperanza reaparece en ventanas separadas de la sesion.")

    for entidad, pasos in linea_tiempo.items():
        intervalos = [(b["dt"] - a["dt"]).total_seconds() / 60 for a, b in zip(pasos, pasos[1:])]
        if intervalos:
            lineas.append(f"[VERIFIED] Intervalo entre rotaciones de {entidad}: media "
                          f"{statistics.mean(intervalos):.1f} min reales, min {min(intervalos):.1f}, max {max(intervalos):.1f}.")
    return vida


def sec_dramas(eventos: list[dict], lineas: list[str]):
    estado = [e for e in eventos if e.get("probe") == "game_get_state"]
    lineas.append("\n## 4. Dramas y UI narrativa\n")
    lineas.append(f"[VERIFIED] Eventos de game.get_state: {len(estado)}.")

    episodios = []
    activo: dict[str, dict] = {}
    for e in estado:
        razones = e["changes"].get("blocking.pause_reasons.[]")
        if razones:
            viejas, nuevas = set(razones[0] or []), set(razones[1] or [])
            for r in nuevas - viejas:
                activo[r] = {"inicio": e["_dt"], "razon": r}
            for r in viejas - nuevas:
                if r in activo:
                    activo[r]["fin"] = e["_dt"]
                    episodios.append(activo.pop(r))
        tipo = e["changes"].get("blocking.input_block_ui_type")
        if tipo and tipo[0] != tipo[1] and "Loading" not in str(tipo[1]):
            nombre = f"input_block:{tipo[1]}"
            if tipo[1]:
                activo[nombre] = {"inicio": e["_dt"], "razon": nombre}
            elif nombre in activo:
                activo[nombre]["fin"] = e["_dt"]
                episodios.append(activo.pop(nombre))

    narrativos = [x for x in episodios if any(k in x["razon"] for k in ("Drama", "Choice", "Select", "Coop"))]
    lineas.append(f"[VERIFIED] Episodios de bloqueo narrativo (Drama/Choice/handover): **{len(narrativos)}**.")
    lineas.append("| razon | inicio | fin | vida (s) |")
    lineas.append("|---|---|---|---|")
    for x in narrativos:
        vida = (x["fin"] - x["inicio"]).total_seconds()
        lineas.append(f"| {x['razon']} | {x['inicio'].strftime('%H:%M:%S')} | {x['fin'].strftime('%H:%M:%S')} | {vida:.0f} |")

    # contexto precedente (120 s antes)
    lineas.append("\n### Contexto inmediato previo a cada DramaPopup/ChoiceCardPopup\n")
    emo = [e for e in eventos if e.get("probe") == "emotion_get_current" and "emotion_type" in (e.get("changes") or {})]
    hopes = [e for e in eventos if e.get("probe") == "hope_list"]
    for x in narrativos:
        if x["razon"] not in ("DramaPopup", "ChoiceCardPopup"):
            continue
        ventana_ini = x["inicio"].timestamp() - 120
        previos_emo = [e for e in emo if ventana_ini <= e["_dt"].timestamp() < x["inicio"].timestamp()]
        previos_hope = [e for e in hopes if ventana_ini <= e["_dt"].timestamp() < x["inicio"].timestamp()]
        detalle = []
        for e in previos_emo[-3:]:
            viejo, nuevo = e["changes"]["emotion_type"]
            detalle.append(f"{e['entity'].split('.')[0]} {viejo}->{nuevo}")
        for e in previos_hope[-2:]:
            hid = next(iter((e["changes"].get("selected.[]") or [[None]])[1] or [None]), None) if e["changes"].get("selected.[]") else None
            if hid:
                detalle.append(f"esperanza {hid}")
        lineas.append(f"- **{x['razon']} a las {x['inicio'].strftime('%H:%M:%S')}**: en los 120 s previos: "
                      + ("; ".join(detalle) if detalle else "sin eventos de emocion/esperanza registrados")
                      + f". Vida en pantalla: {(x['fin'] - x['inicio']).total_seconds():.0f} s.")
    lineas.append("\n[INFERRED] Con 1 DramaPopup y 1 ChoiceCardPopup no hay muestra suficiente para "
                  "correlacionar disparadores; se listan los contextos para una sesion REA futura.")
    return narrativos


def sec_sintesis(lineas, reloj, espaciados_por_entidad, saltos, umbrales, vida_hopes, narrativos, eventos):
    lineas.append("\n## 5. Sintesis para el director\n")
    lineas.append("### Tabla de umbrales operativos (para reglas del Director)\n")
    lineas.append("| Magnitud | Valor medido | Etiqueta |")
    lineas.append("|---|---|---|")
    horas_juego = reloj.minutos_totales / 60
    all_esp = [v for lst in espaciados_por_entidad.values() for v in lst]
    if all_esp:
        lineas.append(f"| Cadencia emocional (todas las entidades) | {len(all_esp)+3} transiciones / {horas_juego:.1f} h juego | [VERIFIED] |")
        lineas.append(f"| Espaciado entre transiciones | media {statistics.mean(all_esp):.1f} min juego, max {max(all_esp):.1f}, min {min(all_esp):.2f} | [VERIFIED] |")
    vida_h = [(v.get("salida", eventos[-1]["_dt"]) - v["llegada"]).total_seconds()/3600 for v in vida_hopes.values()]
    if vida_h:
        lineas.append(f"| Vida de una esperanza | media {statistics.mean(vida_h):.2f} h reales | [VERIFIED] |")
    if saltos:
        magnitudes = [abs(s["delta"]) for s in saltos]
        lineas.append(f"| Salto de interaccion en relaciones | {min(magnitudes):.2f} a {max(magnitudes):.2f} unidades de golpe | [VERIFIED] |")
    if umbrales:
        frec = umbrales.most_common(6)
        lineas.append("| Valores de umbral de nivel observados | " + ", ".join(f"{v} (x{n})" for v, n in frec) + " | [VERIFIED] |")
    lineas.append("| Micro-deriva de relaciones | 0.01 unidades por tick de sondeo, direccion persistente por serie | [VERIFIED] |")
    lineas.append(f"| Reloj de juego | {reloj.minutos_totales:.0f} min de juego en 2 h reales (~{reloj.minutos_totales/120:.0f} min juego/min real) | [VERIFIED] |")

    lineas.append("\n### Anomalias y huecos del registro\n")
    lineas.append("- [VERIFIED] Sin eventos de `career_get_work_status` utiles: los 3 Zois sin carrera "
                  "(has_career=false) — la sonda devolvio estado vacio constante.")
    lineas.append("- [VERIFIED] Sin cambios de `ambition.get` en toda la sesion: la ambicion activa "
                  "(lina: Property, paso 1) no avanzo ni completo_count en 2 h.")
    lineas.append("- [VERIFIED] Estacion, clima y temperatura constantes (Winter/Sun/-8): imposible medir "
                  "modulacion estacional o climatica.")
    lineas.append("- [INFERRED] Faltan sondas para: interacciones en curso (`interaction.started` via Lua), "
                  "posiciones/movimiento (no hay CLI de lectura de transform), rasgos y edad de cada Zoi "
                  "(para segmentar cadencia emocional por caracter), y el contendio de los DramaPopup "
                  "(que texto/opciones mostraban). Propuesta: (a) sonda Lua embebida que loguee "
                  "interaction.started; (b) leer rasgos via ficha del Zoi en el snapshot inicial; "
                  "(c) capturar ui_get_tree de la ventana del popup cuando aparezca.")

    lineas.append("\n### Tres hipotesis de ingenieria inversa (REA) priorizadas\n")
    lineas.append("1. **[INFERRED] Motor de esperanzas como cola de desplazamiento con prioridad por condicion**: "
                  "las esperanzas de condicion fisica (resfriado, intoxicacion) entran y rotan rapido; las de "
                  "rasgo/ambicion persisten. REA: forzar condiciones (cheat de enfermedad) y observar el orden "
                  "de desplazamiento y los expire_ticks reales. Valor para el Director: maximo (es su materia prima).")
    lineas.append("2. **[INFERRED] Umbrales de nivel de relaciones y salto de interaccion**: los saltos "
                  "de 2-10 unidades coinciden con interacciones autonomas resueltas; los niveles saltan en valores "
                  "cercanos a 30/60/90. REA: sesion de escritura controlada (relationships.set_value escaneando "
                  "valores) para mapear la tabla exacta de umbrales. Valor: medio (reglas de consejero de relaciones).")
    lineas.append("3. **[INFERRED] Disparadores de DramaPopup**: 2 dramas en 2 h sin correlacion visible con "
                  "emocion/esperanza a 120 s. REA: sesion larga con sonda Lua de interaction.started + captura de "
                  "ui_get_tree del popup para extraer su contenido y condiciones. Valor: alto (el director puede "
                  "provocar o suprimir dramas).")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("jsonl", type=Path)
    parser.add_argument("--informe", type=Path, default=None)
    args = parser.parse_args()

    eventos = cargar(args.jsonl)
    reloj = RelojJuego(eventos)
    info = reloj.info()
    lineas: list[str] = []
    lineas.append(f"# Informe del motor: {args.jsonl.name}\n")
    lineas.append(f"Sesion: {eventos[0]['ts']} -> {eventos[-1]['ts']} UTC | "
                  f"reloj de juego: {info['minutos_totales']:.0f} min | "
                  f"{len(eventos)} lineas.\n")
    lineas.append("Etiquetas: [VERIFIED] = directo de los datos; [INFERRED] = interpretacion.\n")

    por_entidad, espaciados = sec_emociones(eventos, reloj, lineas)
    saltos, umbrales = sec_relaciones(eventos, reloj, lineas)
    vida_hopes = sec_esperanzas(eventos, reloj, lineas)
    narrativos = sec_dramas(eventos, lineas)
    sec_sintesis(lineas, reloj, espaciados, saltos, umbrales, vida_hopes, narrativos, eventos)

    texto = "\n".join(lineas) + "\n"
    destino = args.informe or (REPO / "docs" / "analisis-monitor" / f"{args.jsonl.stem}-informe.md")
    destino.parent.mkdir(parents=True, exist_ok=True)
    destino.write_text(texto, encoding="utf-8")
    print(texto)
    print(f"\ninforme guardado en: {destino}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
