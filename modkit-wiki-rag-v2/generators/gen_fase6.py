"""FASE B (gen_fase6) — Fichas de la capa de ayudas desde el foro inZOI.

Materia prima: state/forum-raw/analysis/cases.jsonl
  - clase 'aceptado' (573) — sintoma + post aceptado.
  - clase 'resuelto-en-hilo(otros)' (137) — sintoma + evidencia del hilo.
  - clase 'resuelto-en-hilo(op)' (72) — SOLO si la evidencia deja la solucion
    explicita (marcadores accionables en el extracto).

Taxonomia por familia: mods-canvas-curseforge, instalacion-arranque, guardados,
graficos, gameplay, negocio, build, otros.

Deduplicacion: dentro de familia, fichas con sintoma muy similar se fusionan
(contencion de tokens >= 0.6); la ficha canonica se queda con la mayor traccion
y lista las demas URLs como reportes del mismo problema.

Salida: pages/mcp-tools/ayudas/<familia>/<id>-<slug>.md (source: mcp-tools)
        pages/mcp-tools/indice-ayudas.md
        state/forum-raw/analysis/fichas.jsonl (registro maquina)
        state/forum-raw/analysis/cobertura.jsonl (descubrimiento de cobertura)

Reglas: no bugs con workaround (la clase (c) no entra), verified: pendiente,
reconocimiento colectivo en la cabecera, NO rebuild del indice en esta fase.
"""
from __future__ import annotations

import html as html_mod
import json
import re
import time
import urllib.request
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ANA = ROOT / "state" / "forum-raw" / "analysis"
RAW = ROOT / "state" / "forum-raw"
OUT = ROOT / "pages" / "mcp-tools" / "ayudas"
GEN_DATE = "2026-10-09"
SEARCH_URL = "http://127.0.0.1:8088/search"

FAMILIAS = [
    ("mods-canvas-curseforge",
     re.compile(r"\b(mod|mods|modding|curseforge|canvas|cc|custom content|modkit|mod browser|mod manager)\b", re.I)),
    ("instalacion-arranque",
     re.compile(r"\b(install|launch|startup|start the game|won'?t (start|load|open|launch)|steam|epic|verify|black screen on launch|crash on launch|initiali[sz]e)\b", re.I)),
    ("guardados",
     re.compile(r"\b(save|saves|autosave|backup|lost progress|corrupt(ed)? (save|file)|load(ing)? (a )?save)\b", re.I)),
    ("graficos",
     re.compile(r"\b(graphics|fps|stutter|lag|resolution|quality preset|lumen|vsync|blur|grainy|shadow|render|vram|video memory|fullscreen)\b", re.I)),
    ("negocio",
     re.compile(r"\b(business|resort|store|shop|employee|tips|kiosk|market|restock|bakery|cafe)\b", re.I)),
    ("build",
     re.compile(r"\b(build mode|blueprint|wall|floor|roof|furniture placement|build/buy|room design)\b", re.I)),
    ("gameplay",
     re.compile(r"\b(how (do|to|can)|where (is|can|do)|can (i|you)|why (do|does|is)|skill|relationship|ambition|school|career|pregnan|baby|travel|move (in|to)|household|calendar|schedule)\b", re.I)),
]

TEMPLATE = re.compile(
    r"^\s*(game version\s*:?.*|platform\s*:?.*|mods?\s*:.*|hardware specifications.*|"
    r"operating system.*|cpu\s*:.*|gpu\s*:.*|ram\s*:.*|os\s*:.*|storage.*|"
    r"uid\s*:.*|issue date\s*:?.*|error message.*|details( \(providing[^)]*\))?:.*)$", re.I)
ACTIONABLE = re.compile(
    r"\b(delete|remove|move|install|reinstall|disable|enable|update|verify|check|change|set|"
    r"reset|clear|run|download|apply|edit|copy|rename|open|close|launch|repair|uninstall)\b", re.I)
STOP = set(
    "the a an of to in on for and or is are was were be been with without not no it its this "
    "that these those when where what which who how why can cannot could would should may might "
    "will won issue issues bug bugs fix fixed fixing problem problems after before game inzoi "
    "zoi zois windows steam pc version build update el la los las de del un una y o en con no "
    "si que se gpu ram cpu nvidia amd intel my i me you your any some get getting have has".split())


def clean(text: str, limit: int) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    return text[:limit].rstrip(" ,;:.")


PLANTILLA_LLENOS = re.compile(
    r"(UID: [0-9a-f]{8,}|Issue Date: ?[\d./]*|Error Message \(optional\): ?[^.]*|"
    r"Details \(Providing reproduction steps helps us\):?|Platform: ?[\w /]*|"
    r"Game Version: ?[\w.]*|Mods: ?\(Choose one: ?[\w /]*\))", re.I)

PLANTILLA_FRASES = re.compile(
    r"(If you have used mods before[^.]*\.?|Please provide the entire save file\(s\)[^.]*\.?|"
    r"Details: Please share the date[^.]*\.?|Instruction: How to Send User Files[^.]*\.?|"
    r"Steps to Reproduce:?|Hardware Specifications[^.]*\.?|Please share the date[^.]*\.?|"
    r"How to Send User Files to The inZOI Team[^.]*\.?)", re.I)


BOILERPLATE = re.compile(
    r"(Please create a new thread[^.]*\.?|Please refer to (the|my) (image|guide)[^.]*\.?|"
    r"Thank you!|Thank you\.|Thanks!|image \d+[x\u00d7]\d+ \d+ KB|"
    r"\d{4}-\d{2}-\d{2} [\d_:]+-inZOI[\d x\u00d7KB]*|"
    r"If (it|they) still (does|doesn)[^.]*\.|If you are still experiencing[^.]*\.)", re.I)
SUCCESS_CRY = re.compile(r"(that (fixed|worked)|AHH|fixed it!|is innn|got it working)", re.I)


def clean_symptom(s: str) -> str:
    lines = [l.strip() for l in (s or "").splitlines()]
    keep = [l for l in lines if l and not TEMPLATE.match(l)]
    text = " ".join(keep)
    text = html_mod.unescape(text)
    text = PLANTILLA_LLENOS.sub(" ", text)
    text = PLANTILLA_FRASES.sub(" ", text)
    return clean(text, 700)


def tokens(text: str) -> set[str]:
    return {w for w in re.findall(r"[a-z0-9]+", (text or "").lower())
            if len(w) > 2 and w not in STOP}


def slugify(t: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", (t or "").lower()).strip("-")
    return s[:60] or "tema"


def family_of(text: str) -> str:
    for name, rx in FAMILIAS:
        if rx.search(text):
            return name
    return "otros"


SUBFAMILIAS = [
    ("otros-meta-foro",
     re.compile(r"\b(forum|discord|profile image|edge|duck league|brainstorm|suggestion\b|inzoiforum)\b", re.I)),
    ("otros-interacciones-animacion",
     re.compile(r"\b(interaction|interactions|animation|pose|clip|clipping|multitask|dumbbell|surfing|medication|mopping|vacuum|baking|paint|easel|cleaning|fired|career|homework|meeting|stairs|babysitter|pregnancy|gestur)\b", re.I)),
    ("otros-objetos-muebles",
     re.compile(r"\b(object|objects|furniture|repair|dirty|stove|counter|lamp|lamps|fireplace|mirror|piercing|crackers|fruit bowl|motorbike|bowl|plants|container|easel\b)\b", re.I)),
    ("otros-texto-localizacion",
     re.compile(r"\b(typo|typos|spelling|casing|translation|missspelling|text|named|icon|icons|width|jewelry)\b", re.I)),
    ("otros-crash-rendimiento",
     re.compile(r"\b(crash|crashes|freeze|frozen|memory|fps|stutter|hang|unresponsive|lag|not responding|not properly closing|black screen)\b", re.I)),
    ("otros-social-relaciones",
     re.compile(r"\b(romance|romantic|marriage|married|marry|relationship|family ties|family tree|gay|lgbtq|contact|message|friend|divorce|children|boss)\b", re.I)),
    ("otros-npc-comportamiento",
     re.compile(r"\b(npc|npcs|autonomous|autonomy|running away|dead|ghost|stranger|aging|toddler|pregnan|baby|disappointed|outfit|wear|shoes|clothes|clothing|eating|eat|fridge|hunger|sleep|karma|mood|emotion|urge|need)\b", re.I)),
    ("otros-visual-ui",
     re.compile(r"\b(camera|scrolling|search|interface|ui |visual|floating|glitch|texture|shadow|display|screen|flicker|lighting|brightness|ghosting|artifact|coloring|makeup|preset|graphic|photo|sound|audio|voice)\b", re.I)),
    ("otros-mundo-lotes",
     re.compile(r"\b(lot|lots|traffic|despawn|trees|property|city|billboard|taxi|car|enter|detour|stuck)\b", re.I)),
    ("otros-mecanicas-juego",
     re.compile(r"\b(fishing|mine|mining|crime|crop|food|smart zoi|cheat|collection|schedule|court|spa|cart|how long|where are|disaster|fish tank|farming|water|nightclub|hours|comission|commission|skill|gi-battle|difference|what is)\b", re.I)),
    ("otros-eventos-actualizaciones",
     re.compile(r"\b(event|update|summer|cooler|postcards|june|october|april)\b", re.I)),
]

def classify_family(title: str, symptom: str) -> str:
    fam = family_of(html_mod.unescape(title))
    if fam == "otros":
        fam2 = family_of(symptom[:300])
        return fam2
    return fam


def subfamilia_of(title: str, symptom: str) -> str:
    text = title + " " + symptom[:300]
    for name, rx in SUBFAMILIAS:
        if rx.search(text):
            return name
    return "otros-residual"

def solution_steps(text: str) -> list[str] | None:
    """Convierte la solucion en pasos numerados si detecta acciones claras."""
    sentences = re.split(r"(?<=[.!?])\s+|\n+", text or "")
    steps = [clean(s, 220) for s in sentences if s and ACTIONABLE.search(s)]
    return steps if len(steps) >= 2 else None


CHAT = re.compile(r"(poll|playstyle|your favorite|your fav|first time|share your|show off|anything funny|looking for friends|let's talk|who is your|who are your|enjoying the game|what zois have you)", re.I)

def real_solution(case: dict, accepted_text: str) -> str:
    """Si el post aceptado es el grito de exito del OP, la solucion util esta en
    el post al que responde (o el ultimo post sustancioso de otro usuario)."""
    if not accepted_text or not SUCCESS_CRY.search(accepted_text):
        return accepted_text
    tpath = RAW / "topics" / (str(case["id"]) + ".json")
    try:
        data = json.loads(tpath.read_text(encoding="utf-8"))
    except Exception:
        return accepted_text
    posts = data.get("post_stream", {}).get("posts", [])
    if not posts:
        return accepted_text
    op_user = posts[0].get("username")
    acc = next((pp for pp in posts if pp.get("accepted_answer")), None)
    if not acc or acc.get("username") != op_user:
        return accepted_text
    parent_no = acc.get("reply_to_post_number")
    parent = next((pp for pp in posts if pp.get("post_number") == parent_no), None)
    if parent and len(parent.get("cooked") or "") > 80:
        return clean(re.sub(r"<[^>]+>", " ", parent["cooked"]), 1200)
    others = [pp for pp in posts if pp.get("username") != op_user
              and len(pp.get("cooked") or "") > 120]
    if others:
        return clean(re.sub(r"<[^>]+>", " ", others[-1]["cooked"]), 1200)
    return accepted_text


TITLE_OVERRIDES = {
    1469: "Why does my game crash or freeze in Create a Zoi and loading screens?",
    3730: "Why did my married Zois become Relatives after the update?",
    6629: "Why are there no gay Zois in cities other than the city of origin?",
    1065: "Why do I get a black screen when entering the Mods page?",
    5913: "Why do my in-game mod downloads not show up (OneDrive)?",
}


def load_materia() -> list[dict]:
    cases = [json.loads(l) for l in (ANA / "cases.jsonl").read_text(encoding="utf-8").splitlines() if l.strip()]
    out = []
    for c in cases:
        if CHAT.search(c["title_en"] or c["title"]):
            continue
        clase = c.get("final")
        if clase == "aceptado":
            sol = real_solution(c, c.get("solution") or "")
        elif clase == "resuelto-en-hilo(otros)":
            sol = (c.get("resolution_evidence") or [{}])[0].get("excerpt", "")
        elif clase == "resuelto-en-hilo(op)":
            ev = c.get("resolution_evidence") or [{}]
            sol = ev[0].get("excerpt", "") if ev else ""
            # solo si la evidencia deja la solucion explicita
            if not (len(sol) > 80 and ACTIONABLE.search(sol)):
                continue
        else:
            continue
        sym = clean_symptom(c.get("symptom") or "")
        sol = BOILERPLATE.sub(" ", sol)
        if len(sym) < 40 or len(clean(sol, 99999)) < 40:
            continue
        out.append({
            "id": c["id"], "url": c["url"], "category": c["category"],
            "title": TITLE_OVERRIDES.get(c["id"], c["title_en"] or c["title"]),
            "title_orig": c["title"],
            "idioma": c.get("op_language") or "en",
            "views": c.get("views", 0), "created_at": c.get("created_at"),
            "game_version": (c.get("versions") or [None])[0],
            "clase": "aceptado" if clase == "aceptado" else "en-hilo",
            "symptom": sym, "solution": clean(sol, 1200),
            "t_sym": tokens((c["title_en"] or c["title"]) + " " + sym),
        })
    return out


def dedup(items: list[dict]) -> list[dict]:
    by_fam: dict[str, list[dict]] = {}
    for it in items:
        by_fam.setdefault(it["familia"], []).append(it)
    merged = []
    for fam, group in by_fam.items():
        group.sort(key=lambda x: -x["views"])
        canon = []
        for it in group:
            target = None
            for c in canon:
                inter = len(it["t_sym"] & c["t_sym"])
                cont = inter / min(len(it["t_sym"]), len(c["t_sym"]))
                if inter >= 5 and cont >= 0.6:
                    target = c
                    break
            if target is None:
                it2 = dict(it)
                it2["tambien"] = []
                canon.append(it2)
            else:
                target["tambien"].append({"id": it["id"], "url": it["url"],
                                           "title": it["title"]})
        merged += canon
    return merged


def causa_of(sym: str, sol: str) -> str:
    text = sol + " " + sym
    m = re.search(
        r"(?:because of|caused by|due to)\s*([A-Za-z][^.]{15,200}\.)", text, re.I)
    if m:
        cand = clean(m.group(1), 200)
        if len(cand) >= 20 and not re.search(r"thank|please|image|fixed it", cand, re.I):
            return cand
    return "desconocida"


def verifiable_of(sym: str, sol: str) -> bool:
    return bool(re.search(
        r"\b(documents/inzoi|appdata|cheat|console|setting| Mods/|webcache|\.pak|curseforge|canvas|"
        r"mod manager|save file|autosave|gameplay\.|ui_find)\b", (sol + " " + sym), re.I))


def write_fichas(fichas: list[dict]) -> None:
    import shutil
    if OUT.exists():
        shutil.rmtree(OUT)
    for fam in [f[0] for f in FAMILIAS] + ["otros"]:
        (OUT / fam).mkdir(parents=True, exist_ok=True)
    fam_counts = Counter()
    for f in fichas:
        fam_counts[f["familia"]] += 1
        steps = solution_steps(f["solution"])
        title_q = f["title"].strip()
        if not re.search(r"[?]$", title_q) and re.match(
                r"^(how|what|where|can|does|is|why|when|do|does|any)\b", title_q, re.I):
            title_q += "?"
        body = ["---"]
        body.append("source: mcp-tools")
        body.append("categoria: ayuda")
        body.append(f"familia: {f['familia']}")
        body.append(f"clase: {f['clase']}")
        if f.get("subfamilia"):
            body.append(f"subfamilia: {f['subfamilia']}")
        body.append("verified: pendiente")
        ver = f.get("game_version")
        if ver:
            body.append(f"game_version: {ver}")
        body.append(f"source_url: {f['url']}")
        body.append(f"idioma: {f['idioma']}")
        body.append(f"foro_capturado: {GEN_DATE}")
        body.append("---")
        body.append("")
        body.append(f"# {title_q}")
        body.append("")
        body.append(f"**Sintoma:** {f['symptom']}")
        causa = f.get("causa") or ""
        if causa:
            body.append("")
            body.append(f"**Causa:** {causa}")
        body.append("")
        if steps:
            body.append("**Solucion:**")
            body.append("")
            for i, s in enumerate(steps, 1):
                body.append(f"{i}. {s}")
        else:
            body.append(f"**Solucion:** {f['solution']}")
        body.append("")
        if f["idioma"] != "en" or True:
            body.append(f"**EN:** {(f['title'] or '').strip()}")
        body.append("")
        fuentes = [f["url"]] + [t["url"] for t in f.get("tambien", [])]
        body.append("**Reportado tambien en:** " + "; ".join(
            f"[foro {t['id']}]({t['url']})" for t in f.get("tambien", []))) if f.get("tambien") else None
        body.append(f"**Fuente:** {f['url']} ({f['clase']}, views {f['views']}, "
                    f"creado {(f.get('created_at') or '')[:10]})")
        body.append("")
        slug = f"{f['id']}-{slugify(f['title'])}"
        (OUT / f["familia"] / f"{slug}.md").write_text("\n".join(body), encoding="utf-8")
    return fam_counts


def cobertura(fichas: list[dict]) -> list[dict]:
    """Consulta el indice ACTUAL (sin las fichas nuevas) por cada pregunta."""
    out = []
    for f in fichas:
        q = (f["title"] or "")[:200]
        payload = json.dumps({"query": q, "top_k": 3}).encode("utf-8")
        req = urllib.request.Request(
            SEARCH_URL, data=payload,
            headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                res = json.loads(resp.read().decode("utf-8"))
        except Exception:  # noqa: BLE001
            res = {"results": []}
        hits = res.get("results") or []
        t_q = tokens(q)
        cubierto = None
        for h in hits:
            t_h = tokens((h.get("title") or "") + " " + (h.get("text") or "")[:400])
            inter = len(t_q & t_h)
            cont = inter / max(1, min(len(t_q), len(t_h)))
            if inter >= 4 and cont >= 0.35:
                cubierto = {"file": h.get("file"), "title": h.get("title"), "source": h.get("source")}
                break
        out.append({
            "id": f["id"], "familia": f["familia"], "pregunta": q,
            "cobertura": "corpus-ya-respondia (aprox)" if cubierto else "nueva",
            "hit": cubierto,
            "top1": {"file": hits[0].get("file"), "title": hits[0].get("title"),
                     "score": hits[0].get("score")} if hits else None,
        })
        time.sleep(0.05)
    return out


RUN_COBERTURA = True

def main() -> int:
    global RUN_COBERTURA
    RUN_COBERTURA = "--sin-cobertura" not in __import__("sys").argv
    materia = load_materia()
    for it in materia:
        it["title"] = html_mod.unescape(it["title"])
        it["familia"] = classify_family(it["title"], it["symptom"])
        if it["familia"] == "otros":
            it["subfamilia"] = subfamilia_of(it["title"], it["symptom"])
        it["causa"] = causa_of(it["symptom"], it["solution"])
        it["verificable"] = verifiable_of(it["symptom"], it["solution"])
    fichas = dedup(materia)
    print(f"materia prima: {len(materia)} casos -> {len(fichas)} fichas tras dedup")

    fam_counts = write_fichas(fichas)
    print("fichas por familia:", dict(fam_counts))

    with (ANA / "fichas.jsonl").open("w", encoding="utf-8") as fh:
        for f in fichas:
            rec = {k: v for k, v in f.items() if k != "t_sym"}
            fh.write(json.dumps(rec, ensure_ascii=False) + chr(10))
    # indice de la capa con reconocimiento colectivo
    idx = ["---", "source: mcp-tools", "categoria: ayuda", f"generado: {GEN_DATE}", "---", ""]
    idx.append("# Indice de ayudas del foro")
    idx.append("")
    idx.append(f"{len(fichas)} fichas generadas desde el foro oficial de inZOI "
               f"(captura del {GEN_DATE}): sintomas reales de jugadores con su solucion "
               f"verificada por la comunidad (respuesta aceptada) o resuelta en el hilo.")
    idx.append("")
    idx.append("**Reconocimiento colectivo:** este conocimiento existe gracias a los "
               "jugadores y el staff del foro de inZOI que reportaron, respondieron y "
               "marcaron las soluciones. Cada ficha cita su tema de origen; el texto esta "
               "reestructurado, no copiado. Si eres autor de uno de esos hilos y quieres "
               "corregir o retirar algo, se ajusta a peticion.")
    idx.append("")
    for fam, n in fam_counts.most_common():
        idx.append(f"- {fam}: {n} fichas")
    (ROOT / "pages" / "mcp-tools" / "indice-ayudas.md").write_text(
        "\n".join(idx), encoding="utf-8")

    cov = cobertura(fichas) if RUN_COBERTURA else []
    if cov:
        with (ANA / "cobertura.jsonl").open("w", encoding="utf-8") as fh:
            for r in cov:
                fh.write(json.dumps(r, ensure_ascii=False) + "\n")
        cov_counts = Counter(r["cobertura"] for r in cov)
        print("cobertura:", dict(cov_counts))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
