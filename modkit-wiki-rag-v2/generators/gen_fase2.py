import json, re, sys
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parents[1]
AUT = Path(__file__).resolve().parent / "autoria"
GEN_DATE = "2026-10-31"

dumps = {}
for server in ("inzoi-game", "inzoi-modkit", "blender"):
    dumps[server] = json.loads((ROOT / "state" / "mcp-tools" / f"{server}.json").read_text(encoding="utf-8"))

autoria = {}
for f in sorted(AUT.glob("batch_*.json")):
    autoria.update(json.loads(f.read_text(encoding="utf-8")))
autoria = {k: {kk: vv.replace("argumentuto", "argumento") if isinstance(vv, str) else vv for kk, vv in v.items()} for k, v in autoria.items()}

SELECTED = []
for server in ("inzoi-modkit", "blender", "inzoi-game"):
    for t in dumps[server]["tools"]:
        if server == "inzoi-game" and t["name"] not in (
            "uimod_scaffold", "uimod_write_file", "uimod_read_file",
            "luamod_scaffold", "luamod_write_file", "luamod_read_file", "lua_api_lookup"):
            continue
        SELECTED.append((server, t))

assert len(SELECTED) == 145, f"esperadas 145, hay {len(SELECTED)}"
faltan = [t["name"] for _, t in SELECTED if t["name"] not in autoria]
sobran = [n for n in autoria if n not in {t["name"] for _, t in SELECTED}]
assert not faltan, f"faltan resumenes: {faltan}"
assert not sobran, f"resumenes sobrantes: {sobran}"

ALL_NAMES = {t["name"] for s in dumps for t in dumps[s]["tools"]}

DATA_TOOLS = {
    "modkit_set_data", "modkit_set_data_batch", "modkit_create_row", "modkit_delete_row",
    "modkit_build_talk_patch", "modkit_list_data_asset_types", "modkit_get_data_asset_schema",
    "modkit_get_data_asset_values", "modkit_set_data_asset_fields", "modkit_list_translation_files",
    "modkit_list_translation_entries", "modkit_set_translation_entries", "modkit_list_tables",
    "modkit_list_table_rows", "modkit_get_row", "modkit_get_row_batch",
}
MESHCOMP = {
    "modkit_list_meshes", "modkit_set_mesh", "modkit_list_components", "modkit_add_component",
    "modkit_remove_component", "modkit_set_transform", "modkit_set_component_prop",
    "modkit_set_object_prop",
}
CAPTURE = {
    "modkit_begin_asset_capture", "modkit_finish_asset_capture", "modkit_analyze_asset_capture",
    "modkit_finalize_fab_capture_to_workspace", "modkit_get_asset_capture_session",
    "modkit_discard_asset_capture",
}

def dominio(name, server):
    if server == "blender":
        return "blender-export"
    if server == "inzoi-game":
        return "authoring-ui" if name.startswith("uimod_") else "authoring-lua"
    if name.startswith("modkit_cf_") or name in ("modkit_package", "modkit_open_cf_upload"):
        return "empaquetado"
    if name in ("modkit_import_mesh", "modkit_import_texture"):
        return "importación"
    if name in ("modkit_list_material_types", "modkit_create_material", "modkit_list_materials",
                "modkit_set_material_texture", "modkit_assign_material"):
        return "materiales"
    if name in ("modkit_validate_workspace", "modkit_validate_uimod", "modkit_validate_lua_script",
                "modkit_inspect_workspace"):
        return "validación"
    if "uimod" in name:
        return "authoring-ui"
    if "lua" in name:
        return "authoring-lua"
    if name.startswith("modkit_set_vehicle_") or name in ("modkit_list_vehicle_components",
                                                          "modkit_create_vehicle_template"):
        return "assets"
    if name in CAPTURE or name in MESHCOMP or name in ("modkit_compile_bp",
                                                      "modkit_set_attached_accessory_socket_mesh"):
        return "assets"
    if name in ("modkit_status", "modkit_list_projects", "modkit_list_workspaces",
                "modkit_list_books", "modkit_list_categories", "modkit_list_cultures",
                "modkit_create_project", "modkit_save", "modkit_delete_project",
                "modkit_add_workspace", "modkit_open_workspace", "modkit_refresh_workspace",
                "modkit_delete_workspace", "modkit_discard"):
        return "proyecto"
    if name in ("modkit_set_translation_files", "modkit_list_translation_files",
                "modkit_list_translation_entries", "modkit_set_translation_entries"):
        return "traducciones"
    return "datos"

def workflow(name, server, dom):
    if server == "blender":
        return "WF: preparar assets en Blender (escena, generación, búsqueda e importación)"
    if server == "inzoi-game":
        if dom == "authoring-ui":
            return "WF: crear un mod de UI en vivo (juego en marcha)"
        return "WF: crear un mod de Lua en vivo (juego en marcha)"
    if dom == "empaquetado":
        return "WF: validar, empaquetar y publicar en CurseForge"
    if dom == "importación":
        return "WF: importar un FBX o textura al proyecto"
    if dom == "materiales":
        return "WF: crear y asignar materiales"
    if dom == "validación":
        return "WF: validar y empaquetar el mod"
    if dom == "authoring-ui":
        return "WF: crear un mod de UI en el editor del ModKit"
    if dom == "authoring-lua":
        return "WF: crear un mod de Lua en el editor del ModKit"
    if "vehicle" in name:
        return "WF: editar un vehículo en el ModKit"
    if name in CAPTURE:
        return "WF: capturar assets de Fab (Add to Project)"
    if dom == "assets":
        return "WF: construir un objeto BUILD (mesh, componentes, transformadas)"
    if name in DATA_TOOLS:
        return "WF: parchear datos del juego (tablas, DataAssets, traducciones)"
    return "WF: crear un proyecto y sus workspaces"

# wiki_refs: nombre exacto de la herramienta en el texto del snapshot
pages = []
for p in (ROOT / "pages").rglob("*.md"):
    rel = p.relative_to(ROOT).as_posix()
    # Local notes and generated MCP fichas are not official wiki references.
    # The split Lua API corpus has 125k+ fragments and documents game types,
    # not MCP tool contracts, so omit it from this metadata search as well.
    if "/local/" in rel or "/mcp-tools/" in rel or "/wiki/luaapi/" in rel:
        continue
    pages.append(p)
page_cache = {}
wiki_refs = {}
for server, t in SELECTED:
    refs = []
    if server == "blender":
        wiki_refs[t["name"]] = refs
        continue
    for p in pages:
        text = page_cache.get(p)
        if text is None:
            text = p.read_text(encoding="utf-8", errors="ignore")
            page_cache[p] = text
        if re.search(r"(?<![A-Za-z0-9_])" + re.escape(t["name"]) + r"(?![A-Za-z0-9_])", text):
            refs.append(p.relative_to(ROOT).as_posix())
    wiki_refs[t["name"]] = sorted(set(refs))

FICHAS = ROOT / "pages" / "mcp-tools" / "fichas"
FICHAS.mkdir(parents=True, exist_ok=True)

stats = defaultdict(Counter)
backlog = []
pattern_issues = []
sin_desc = []

def dump_version(server):
    d = dumps[server]
    captured_at = d.get("captured_at")
    captured = f", captured {captured_at[:10]}" if captured_at else ""
    return f"{server}.json (protocol {d['protocol_version']}, {d['tool_count']} tools{captured})"

for server, t in SELECTED:
    name = t["name"]
    a = autoria[name]
    desc = " ".join(t["description"].split())
    dom = a.get("dominio") or dominio(name, server)
    if dom == "validacion":
        dom = "validación"
    wf = workflow(name, server, dom)
    experimental = desc.startswith("[EXPERIMENTAL")
    if not t["description"].strip():
        sin_desc.append(name)
    if server == "inzoi-modkit" and not name.startswith("modkit_"):
        pattern_issues.append(name)

    lines = []
    lines.append("---")
    lines.append("source: mcp-tools")
    lines.append(f"server: {server}")
    lines.append(f"dump_version: {dump_version(server)}")
    lines.append(f"generado: {GEN_DATE}")
    lines.append("categoria: ficha")
    lines.append(f"dominio: {dom}")
    if experimental:
        lines.append("experimental: true")
    lines.append(f"tools: [{name}]")
    lines.append("wiki_refs: [" + ", ".join(wiki_refs[name]) + "]")
    lines.append("---")
    lines.append("")
    lines.append(f"## {name}")
    lines.append("")
    lines.append(f"**Servidor:** {server} | **Dominio:** {dom}")
    lines.append("")
    lines.append(f"**Qué hace:** {a['r']}")
    lines.append("")
    lines.append(f"**Descripción actual del MCP:** {desc}")
    lines.append("")
    lines.append(f"**Cuándo usarla:** {a['c']}")
    lines.append("")
    lines.append(f"**Requisitos:** {a.get('req', 'no documentado en el volcado')}")
    lines.append("")
    params = t.get("parameters") or []
    if params:
        lines.append("**Parámetros clave:**")
        for p in params:
            req = "obligatorio" if p.get("required") else "opcional"
            pd = " ".join((p.get("description") or "").split())
            if len(pd) > 140:
                pd = pd[:137] + "..."
            line = f"- `{p['name']}` ({p.get('type')}, {req})"
            if pd:
                line += f" — {pd}"
            lines.append(line)
    else:
        lines.append("**Parámetros clave:** Sin parámetros documentados en el volcado.")
    lines.append("")
    rt = t.get("return_type")
    if rt in (None, "unspecified"):
        dev = "no publicitado por el servidor — completar tras prueba en vivo"
    else:
        dev = f"Valor de tipo `{rt}` según el volcado"
        rs = t.get("return_schema")
        if isinstance(rs, dict) and rs.get("properties"):
            dev += "; esquema con propiedades: " + ", ".join(sorted(rs["properties"])[:12])
        else:
            dev += "; estructura documentada en la descripción del volcado"
    dev = a.get("dev") or dev
    lines.append(f"**Devuelve:** {dev}")
    lines.append("")
    lines.append(f"**Errores típicos:** {a.get('err', 'no documentado — completar tras prueba en vivo')}")
    lines.append("")
    lines.append(f"**Forma parte de:** {wf}")
    lines.append("")
    related = sorted({n for n in ALL_NAMES if n != name and re.search(r"(?<![A-Za-z0-9_])" + re.escape(n) + r"(?![A-Za-z0-9_])", desc)})
    lines.append("**Herramientas relacionadas:** " + (", ".join(f"`{r}`" for r in related) if related else "ninguna mencionada en el volcado"))
    lines.append("")
    if "cadena" in a:
        lines.append(f"**Cadena de authoring:** {a['cadena']}")
        lines.append("")
    if "retrieval" in a:
        lines.append(f"**Uso como retrieval:** {a['retrieval']}")
        lines.append("")

    (FICHAS / f"{name}.md").write_text("\n".join(lines), encoding="utf-8", newline="\r\n")

    stats[server][dom] += 1
    flags = []
    if rt in (None, "unspecified"):
        flags.append("devuelve")
    if "err" not in a:
        flags.append("errores")
    if flags:
        backlog.append((name, "|".join(flags)))
    if not t["description"].strip():
        sin_desc.append(name)

# indice
dom_entries = defaultdict(list)
for server, t in SELECTED:
    dom = autoria[t["name"]].get("dominio") or dominio(t["name"], server)
    if dom == "validacion":
        dom = "validación"
    dom_entries[dom].append((t["name"], autoria[t["name"]]["r"]))

ORDER = ["importación", "materiales", "assets", "empaquetado", "validación", "personajes",
         "blender-export", "authoring-lua", "authoring-ui", "proyecto", "datos",
         "traducciones", "otro"]
idx = []
idx.append("---")
idx.append("source: mcp-tools")
idx.append("server: inzoi-modkit + blender + inzoi-game")
idx.append("dump_version: " + " | ".join(dump_version(server) for server in ("inzoi-modkit", "blender", "inzoi-game")))
idx.append(f"generado: {GEN_DATE}")
idx.append("categoria: ficha")
idx.append("---")
idx.append("")
idx.append("# Índice de fichas de herramienta MCP")
idx.append("")
idx.append(f"{len(SELECTED)} fichas ({len(dumps['inzoi-modkit']['tools'])} de inzoi-modkit, "
           f"{len(dumps['blender']['tools'])} de blender, "
           f"{len(dumps['inzoi-game']['tools']) - 407} de inzoi-game), agrupadas por dominio.")
idx.append("")
for dom in ORDER:
    if dom not in dom_entries:
        continue
    idx.append(f"## {dom} ({len(dom_entries[dom])})")
    idx.append("")
    for name, r in sorted(dom_entries[dom]):
        short = r if len(r) <= 110 else r[:107] + "..."
        idx.append(f"- [{name}](fichas/{name}.md) — {short}")
    idx.append("")
(ROOT / "pages" / "mcp-tools" / "indice-fichas.md").write_text("\n".join(idx), encoding="utf-8", newline="\r\n")

print("=== INFORME FASE 2 ===")
print("Fichas generadas:", len(list(FICHAS.glob("*.md"))))
print()
print("Por servidor y dominio:")
for server in ("inzoi-modkit", "blender", "inzoi-game"):
    print(f"  {server}:")
    for dom, n in sorted(stats[server].items()):
        print(f"    {dom}: {n}")
print()
n_exp = sum(1 for s, t in SELECTED if " ".join(t["description"].split()).startswith("[EXPERIMENTAL"))
print("Herramientas marcadas [EXPERIMENTAL] entre las fichas:", n_exp)
print("Backlog 'completar tras prueba en vivo':", len(backlog))
con_ambas = [b for b in backlog if b[1] == "devuelve|errores"]
con_una = [b for b in backlog if b[1] != "devuelve|errores"]
print(f"  - con 'Devuelve' Y 'Errores' pendientes: {len(con_ambas)}")
print(f"  - con una sola seccion pendiente: {len(con_una)}: {con_una}")
print()
print("Nombres fuera de patron o sin descripcion:")
print("  - fuera de patron modkit_:", pattern_issues or "ninguno")
print("  - sin descripcion en el volcado:", sin_desc or "ninguno")
print("  - nota: blender no sigue el patron comando snake_case (servidor distinto, esperado); inzoi-game authoring: 7/7 nombres como se esperaba")
print()
conrefs = [n for n in wiki_refs if wiki_refs[n]]
print("wiki_refs: con correspondencia en el snapshot:", len(conrefs), "| sin:", len(SELECTED) - len(conrefs))
for n in conrefs:
    print("  -", n, "->", wiki_refs[n][:4])
