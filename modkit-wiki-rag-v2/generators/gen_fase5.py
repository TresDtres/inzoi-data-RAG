import json, random, re
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).resolve().parents[1]
QA = Path(__file__).resolve().parent / "qa"

fichas_q = {}
for f in ("fichas_a.json", "fichas_b.json", "fichas_c.json", "fichas_d.json", "fichas_e.json", "fichas_j.json"):
    fichas_q.update(json.loads((QA / f).read_text(encoding="utf-8")))
cli_q = json.loads((QA / "cli.json").read_text(encoding="utf-8"))
wf_q = json.loads((QA / "workflows.json").read_text(encoding="utf-8"))
ayudas_q = json.loads((QA / "ayudas.json").read_text(encoding="utf-8"))

fichas = sorted(p.stem for p in (ROOT / "pages/mcp-tools/fichas").glob("*.md"))
cli_pages = sorted(p.stem for p in (ROOT / "pages/mcp-tools/cli").glob("*.md"))
wf_files = sorted(p.name for p in (ROOT / "pages/mcp-tools/workflows").glob("*.md"))
assert len(fichas) == 145 and len(cli_pages) == 22 and len(wf_files) == 21

# cobertura fichas
faltan_f = [t for t in fichas if t not in fichas_q]
sobran_f = [t for t in fichas_q if t not in set(fichas)]
assert not faltan_f, f"fichas sin preguntas: {faltan_f}"
assert not sobran_f, f"preguntas de fichas inexistentes: {sobran_f}"

# cobertura cli
faltan_c = [s for s in cli_pages if s not in cli_q]
sobran_c = [s for s in cli_q if s not in set(cli_pages)]
assert not faltan_c, f"intenciones sin preguntas: {faltan_c}"
assert not sobran_c, f"intenciones inexistentes: {sobran_c}"

# cobertura workflows
faltan_w = [f for f in wf_files if f not in wf_q]
assert not faltan_w, f"workflows sin preguntas: {faltan_w}"

def wf_tools(fname):
    text = (ROOT / "pages/mcp-tools/workflows" / fname).read_text(encoding="utf-8")
    m = re.search(r"^tools: \[(.*)\]$", text, re.M)
    return [t.strip() for t in m.group(1).split(",") if t.strip()]

pares = []
for t in fichas:
    for preg in fichas_q[t]:
        pares.append({"pregunta": preg,
                      "documento": f"pages/mcp-tools/fichas/{t}.md",
                      "tools": [t], "categoria": "ficha"})
for slug, entries in cli_q.items():
    for preg, tools in entries:
        pares.append({"pregunta": preg,
                      "documento": f"pages/mcp-tools/cli/{slug}.md",
                      "tools": tools, "categoria": "cli-intencion"})
for a in ayudas_q:
    pares.append({"pregunta": a["query"], "documento": a["file"],
                  "tools": [], "categoria": "ayuda"})
for fname, pregs in wf_q.items():
    tools = wf_tools(fname)
    for preg in pregs:
        pares.append({"pregunta": preg,
                      "documento": f"pages/mcp-tools/workflows/{fname}",
                      "tools": tools, "categoria": "workflow"})

out = ROOT / "state/mcp-tools/qa-pairs.jsonl"
with out.open("w", encoding="utf-8", newline="\n") as fh:
    for p in pares:
        fh.write(json.dumps(p, ensure_ascii=False) + "\n")

# informe
cat_counts = Counter(p["categoria"] for p in pares)
doc_counts = Counter(p["documento"] for p in pares)
todos_docs = ([f"pages/mcp-tools/fichas/{t}.md" for t in fichas]
              + [f"pages/mcp-tools/cli/{s}.md" for s in cli_pages]
              + [f"pages/mcp-tools/workflows/{f}" for f in wf_files])
sin_preg = [d for d in todos_docs if d not in doc_counts]

TRAMPAS = [
 "como consulto el dinero de mi hogar?",
 "si uso game_continue, me carga el autosave?",
 "puedo crear un negocio nuevo por consola?",
 "borre mi proyecto con modkit_delete_project, queda algo en disco?",
 "que hace game_cancel_flow exactamente?",
 "si uso game_continue me vuelve a cargar el autosave o el manual?",
 "que pasa si cancelo la creacion automatica de partida nueva a medias?",
 "si coloco formas con smartbuild se quedan al guardar?",
 "borre mi proyecto del modkit y me sobra espacio en disco, es normal?",
 "donde veo los errores de mi mod de Lua sin abrir el editor?",
]
trampas_ok = [(tr, any(tr == p["pregunta"] for p in pares)) for tr in TRAMPAS]

random.seed(20261009)
muestra = random.sample(pares, 10)

print("=== INFORME FASE 5 ===")
print("total pares:", len(pares))
print("por categoria:", dict(cat_counts))
print("documentos sin ninguna pregunta:", len(sin_preg), sin_preg)
print()
print("=== TRAMPAS ===")
for tr, ok in trampas_ok:
    print(("OK  " if ok else "FALTA"), tr)
print()
print("=== MUESTRA ALEATORIA (10, semilla 20261009) ===")
for p in muestra:
    print(f"[{p['categoria']}] {p['pregunta']}")
    print(f"    -> {p['documento']} | tools: {p['tools'][:3]}{'...' if len(p['tools'])>3 else ''}")
