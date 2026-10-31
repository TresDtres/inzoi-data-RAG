import json, re
from pathlib import Path
from collections import Counter

ROOT = Path(__file__).resolve().parents[1]
SCRATCH = Path(__file__).resolve().parent
WF_SRC = SCRATCH / "workflows"

all_tools = {}
for server in ("inzoi-game", "inzoi-modkit", "blender"):
    d = json.loads((ROOT / "state" / "mcp-tools" / f"{server}.json").read_text(encoding="utf-8"))
    for t in d["tools"]:
        all_tools[t["name"]] = server
fichas_tools = {f.stem for f in (ROOT / "pages" / "mcp-tools" / "fichas").glob("*.md")}

files = sorted(WF_SRC.glob("wf-*.md"))
assert len(files) == 21, f"esperados 21 workflows, hay {len(files)}"

OUT = ROOT / "pages" / "mcp-tools" / "workflows"
OUT.mkdir(parents=True, exist_ok=True)

problems = []
per_wf = []
used_tools = set()
for f in files:
    text = f.read_text(encoding="utf-8")
    fm = text.split("---")[1]
    m_nivel = re.search(r"^nivel: (.+)$", fm, re.M)
    m_tools = re.search(r"^tools: \[(.*)\]$", fm, re.M)
    m_refs = re.search(r"^wiki_refs: \[(.*)\]$", fm, re.M)
    title = re.search(r"^# (WF-\d+): (.+)$", text, re.M)
    nivel = m_nivel.group(1).strip()
    tools = [t.strip() for t in m_tools.group(1).split(",") if t.strip()]
    refs = [r.strip() for r in m_refs.group(1).split(",") if r.strip()]
    for t in tools:
        if t not in all_tools:
            problems.append(f"{f.name}: herramienta inexistente: {t}")
        else:
            used_tools.add(t)
    for r in refs:
        if not (ROOT / r).is_file():
            problems.append(f"{f.name}: wiki_ref inexistente: {r}")
    for t in re.findall(r"`([a-z_]+)`", text):
        if "_" in t and t in all_tools:
            used_tools.add(t)
    n_verificar = len(re.findall(r"paso a verificar en vivo", text, re.I))
    per_wf.append((f.name, title.group(1), title.group(2), nivel, len(tools), n_verificar, refs))

    (OUT / f.name).write_text(text, encoding="utf-8", newline="\r\n")

# indice
idx = []
idx.append("---")
idx.append("source: mcp-tools")
idx.append("categoria: workflow")
idx.append("dump_version: inzoi-game 2024-11-05 (414 tools; 407 CLI, captured 2026-10-15) | "
           "inzoi-modkit 2025-03-26 (129 tools, captured 2026-10-31) | "
           "blender 2024-11-05 (9 tools; prior export)")
idx.append("generado: 2026-10-31")
idx.append("---")
idx.append("")
idx.append("# Indice de workflows")
idx.append("")
idx.append("21 workflows transversales sobre las herramientas MCP y el CLI del juego.")
idx.append("Nota: los contratos de ModKit se refrescaron el 2026-10-31; el comportamiento de los workflows no se revalidó en vivo. El MCP de juego no estaba disponible para una captura nueva.")
idx.append("")
for name, wf_id, titulo, nivel, n_tools, n_ver, refs in per_wf:
    idx.append(f"- [{wf_id}: {titulo}](workflows/{name}) — nivel: {nivel}; {n_tools} herramientas; {n_ver} pasos a verificar en vivo")
idx.append("")
(ROOT / "pages" / "mcp-tools" / "indice-workflows.md").write_text("\n".join(idx), encoding="utf-8", newline="\r\n")

print("=== VALIDACION ===")
if problems:
    for p in problems:
        print("PROBLEMA:", p)
else:
    print("OK: todas las herramientas existen en los volcados y todas las wiki_refs existen en el snapshot")
print()
print("=== WORKFLOWS POR NIVEL ===")
for nivel in ("principiante", "intermedio", "avanzado"):
    ws = [w for w in per_wf if w[3] == nivel]
    print(f"{nivel}: {len(ws)} -> {[w[1] for w in ws]}")
print()
print("=== PASOS 'A VERIFICAR EN VIVO' (backlog) ===")
total_ver = 0
for name, wf_id, titulo, nivel, n_tools, n_ver, refs in per_wf:
    if n_ver:
        print(f"{wf_id} ({name}): {n_ver}")
        total_ver += n_ver
print("total:", total_ver)
print()
print("=== HERRAMIENTAS DE FICHAS QUE NINGUN WORKFLOW USA ===")
unused = sorted(fichas_tools - used_tools)
print(f"{len(unused)} de {len(fichas_tools)}:")
for u in unused:
    print(" -", u, f"({all_tools.get(u, '?')})")
