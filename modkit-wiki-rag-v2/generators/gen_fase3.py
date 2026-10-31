import json, re
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parents[1]
SCRATCH = Path(__file__).resolve().parent
GEN_DATE = "2026-10-15"
DUMP_VERSION = "inzoi-game.json (protocol 2024-11-05, 414 tools; 407 CLI tools; captured 2026-10-15)"

dump = json.loads((ROOT / "state" / "mcp-tools" / "inzoi-game.json").read_text(encoding="utf-8"))
clas = json.loads((ROOT / "state" / "mcp-tools" / "clasificacion.json").read_text(encoding="utf-8"))
wiki_page = {}
for r in clas["clasificacion"]:
    m = re.search(r"página dedicada en el snapshot: (pages/wiki/cli/\S+?)(?:;|$)", r["evidencia"])
    wiki_page[r["nombre"]] = m.group(1) if m else None

glosas = {}
for f in sorted((SCRATCH / "glosas").glob("g*.json")):
    glosas.update(json.loads(f.read_text(encoding="utf-8")))
for k in glosas:
    glosas[k] = (glosas[k].replace("trampaa", "trampa").replace("Gestifica", "Gestiona")
                    .replace("el trampa", "la trampa"))

AUTHORING = {"uimod_scaffold", "uimod_write_file", "uimod_read_file", "luamod_scaffold",
             "luamod_write_file", "luamod_read_file", "lua_api_lookup"}
cli_tools = [t for t in dump["tools"] if t["name"] not in AUTHORING]
assert len(cli_tools) == 407

INTENT_META = {
    "dinero-y-negocios": "Dinero y negocios del hogar",
    "carreras-y-trabajo": "Carreras y trabajo",
    "tiempo-clima-y-entorno": "Tiempo, clima y entorno",
    "camara-visual-y-capturas": "Camara, visual y capturas",
    "ajustes-rendimiento-y-audio": "Ajustes, rendimiento y audio",
    "partida-guardados-y-flujo": "Partida, guardados y flujo de juego",
    "construccion-y-casas": "Construccion y casas",
    "smartbuild-prototipado": "SmartBuild: prototipado rapido",
    "movimiento-teleport-y-grupos": "Movimiento, teleport y grupos de Zois",
    "interacciones-autonomia-y-comportamiento": "Interacciones, autonomia y comportamiento",
    "poses-animaciones-y-expresiones": "Poses, animaciones y expresiones",
    "apariencia-y-personalizacion": "Apariencia y personalizacion del Zoi",
    "estado-necesidades-y-ciclo-vital": "Estado, necesidades y ciclo vital",
    "ambiciones-y-esperanzas": "Ambiciones y esperanzas",
    "relaciones-familia-y-social": "Relaciones, familia y vida social",
    "mundo-entidades-y-escena": "Mundo, entidades y escena",
    "ui-del-juego": "UI del juego",
    "mods-de-ui": "Mods de UI en vivo",
    "mods-de-lua": "Mods de Lua en vivo",
    "datos-assets-y-traducciones": "Datos, assets y traducciones",
    "publicacion-en-curseforge": "Publicacion en CurseForge",
    "diagnostico-y-sistema": "Diagnostico y sistema",
}

def intent(name):
    if name in ("character_possess", "household_possess"):
        return "relaciones-familia-y-social"
    if name in ("weather_list", "disaster_list"):
        return "tiempo-clima-y-entorno"
    if name.startswith(("household_biz_", "currency_")):
        return "dinero-y-negocios"
    if name.startswith("career_"):
        return "carreras-y-trabajo"
    if name.startswith("environment_"):
        return "tiempo-clima-y-entorno"
    if name.startswith(("camera_", "visual_", "view_", "screenshot_")):
        return "camara-visual-y-capturas"
    if name.startswith(("settings_", "graphics_", "optimization_", "simulation_", "sound_", "gameplay_")):
        return "ajustes-rendimiento-y-audio"
    if name.startswith("game_"):
        return "partida-guardados-y-flujo"
    if name.startswith(("build_", "building_", "cleaning_", "quality_of_life_")):
        return "construccion-y-casas"
    if name.startswith("smartbuild_"):
        return "smartbuild-prototipado"
    if name.startswith(("movement_", "zoi_group_")):
        return "movimiento-teleport-y-grupos"
    if name.startswith(("interaction_", "autonomy_", "smartzoi_", "schedule_")):
        return "interacciones-autonomia-y-comportamiento"
    if name.startswith(("pose_", "motion_", "facial_")):
        return "poses-animaciones-y-expresiones"
    if name.startswith("appearance_"):
        return "apariencia-y-personalizacion"
    if name.startswith(("needs_", "stat_", "skill_", "status_and_health_", "illness_", "buff_",
                        "emotion_", "growth_", "life_and_death_", "pregnancy_and_birth_",
                        "crime_", "zoi_freeze", "zoi_destroy", "bio_")):
        return "estado-necesidades-y-ciclo-vital"
    if name.startswith(("ambition_", "hope_")):
        return "ambiciones-y-esperanzas"
    if name.startswith(("relationships_", "marriage_", "contacts_", "social_event_", "gedcom_", "household_")):
        return "relaciones-familia-y-social"
    if name.startswith(("world_", "site_", "entity_", "fx_", "bag_", "photoframe_", "object_")):
        return "mundo-entidades-y-escena"
    if name.startswith(("ui_", "toast_")):
        return "ui-del-juego"
    if name.startswith("uimod_"):
        return "mods-de-ui"
    if name.startswith(("luamod_", "lua_module_", "mod_toggle_insight")):
        return "mods-de-lua"
    if name.startswith(("data_", "l10n_", "clipboard_", "asset_")):
        return "datos-assets-y-traducciones"
    if name.startswith("curseforge_"):
        return "publicacion-en-curseforge"
    if name.startswith(("system_", "cli_", "event_")):
        return "diagnostico-y-sistema"
    raise AssertionError(f"comando sin intencion: {name}")

OBSERVED_RET = {
    "game_goto_lobby": "observado en vivo 2026-10-09: {\"accepted\":true,\"saving\":false} + instruccion de polling; error literal 'Already in lobby' si ya esta en lobby (V5)",
    "game_continue": "observado en vivo 2026-10-09: {\"accepted\":true,\"folder\",\"file\",\"slot\"} del guardado MANUAL mas reciente — ignora autosaves mas nuevos (V11)",
    "game_load": "observado en vivo 2026-10-09: {\"accepted\":true,\"folder\",\"file\",\"slot\"} + polling con game.get_state hasta in_game (V5)",
    "game_new_game": "observado en vivo 2026-10-09: {\"accepted\":true,\"step\":\"click_new_game\",\"map_id\"} + polling del flujo (V12)",
    "game_cancel_flow": "observado en vivo 2026-10-09: {\"cancelled\":true,\"step\":\"cancelled\"} + aviso SIN ROLLBACK con la via de recuperacion (V12)",
    "stat_get_all": "observado en vivo 2026-10-09: {\"_type\":\"FB2StatComponent\",\"stats\":{...},\"stat_names\":{...}} — incluye las necesidades con nombres localizados (V6)",
    "smartbuild_shape": "observado en vivo 2026-10-09: spawn devuelve {\"handle\",\"shape\",\"label\",...}; list devuelve las shapes trackeadas de la sesion (V13)",
    "currency_add_money": "verificado en vivo (V17, V18): con cheats activados (Psycat's Advice -> Enable Cheats) SUMA y el HUD se actualiza en <4 s (saldo 49.673 -> 99.673 -> 149.673); retorno VACIO sin readback y con una caida silenciosa observada (ok sin efecto): tras aplicaciones criticas verificar con el oraculo HUD (ui_find sobre el widget numerico del HUD)",
    "currency_add_meow_coin": "verificado en vivo (V17): mismo patron que currency_add_money; retorno vacio",
    "currency_add_resort_coin": "verificado en vivo (V17): mismo patron que currency_add_money; retorno vacio",
}

INTENT_NOTA = {
    "tiempo-clima-y-entorno": ("Nota: para hacer que llueva u otro clima concreto, weather.list lista los ids de clima disponibles y "
                            "environment.control_weather / environment.override_weather los aplican; environment.get_state devuelve el clima actual."),
    "mods-de-ui": ("Nota: tras editar los archivos de un mod de UI montado, uimod.remount lo recarga en caliente (desmonta y "
                   "vuelve a montar); uimod.list muestra los mods montados."),
    "diagnostico-y-sistema": ("Nota: cli.list lista todos los comandos de consola disponibles (407 en el volcado, con nivel de acceso) "
                              "y cli.help muestra el detalle de uno concreto; system.get_info devuelve la version del juego."),
    "dinero-y-negocios": ("Nota verificada en vivo (2026-10-09): NO existe getter CLI del dinero del hogar — data.list_tables no contiene tabla de hogar/dinero "
                          "(error literal: \"Unknown DataTable alias: 'Household'\") y household.list no expone dinero. Ademas, los comandos household_biz REQUIEREN un negocio "
                          "preexistente creado por el flujo normal del juego; sin negocio responden \"Could not resolve household_biz_id (not specified, and possessed character "
                          "neither manages nor is located at a business)\" y la creacion no es posible por CLI (plantillas disponibles: Bakery_Default, Cafe_Default, ..._Default x12 "
                          "en HouseholdBizTemplate). Ver pages/local/verificaciones-2026-10-09.md (V7, V16).\n\nNota verificada en vivo CON CHEATS ACTIVADOS (2026-10-09, Psycat's Advice -> Enable Cheats; V17): el getter del dinero sigue sin existir con cheats ON. data.table_get responde el mismo error literal con 'Household' y 'household'; el catalogo de 389 DataTables no contiene ninguna tabla de balance (Currency y CurrencyExchange listan solo los TIPOS de moneda: Zen, CatShopPoint, Mew, Nyang, Ong, ResortCoin; la fila Zen es nameTextId/icon/colores, pura configuracion de UI); household.list sigue sin exponer dinero. Lo que SI desbloquean los cheats son los comandos de acceso UserCheat: currency.add_money se ejecuta con exito con cheats activados, con retorno VACIO y sin readback del balance resultante. El catalogo de comandos no cambia con cheats (405; literal: \"408 commands registered, 405 exposed as MCP tools\"). Conclusion: la lectura del dinero no existe en ninguna superficie del juego (gap de funcionalidad, ver pages/local/informe-devs.md)."),
}



INTENT_EN = {
    "tiempo-clima-y-entorno": "**EN:** weather and environment: make it rain or set any weather (weather.list ids, environment.control_weather/override_weather), read current weather, time of day and season.",
    "mods-de-ui": "**EN:** live UI mods: hot-reload a mounted UI mod after editing its files (uimod.remount), list mounted mods (uimod.list).",
    "diagnostico-y-sistema": "**EN:** diagnostics and system: cli.list all console commands (407 in the dump, with access level), cli.help for one command's detail, system.get_info game version.",
    "dinero-y-negocios": "**EN:** household money and family business: NO CLI getter for household money exists (verified live with cheats on and off; only currency.add_money to add — verify via the HUD widget); household_biz commands require a business created through normal gameplay, creating one via CLI is not possible; settle the tips pool with household_biz.settle_tips.",
    "carreras-y-trabajo": "**EN:** careers and work: CLI commands for job and career info.",
    "camara-visual-y-capturas": "**EN:** camera, visual and captures: FOV, sensitivity, free camera, first person, screenshots, Zoi debug info overlay.",
    "ajustes-rendimiento-y-audio": "**EN:** settings, performance and audio: game options, autosave enable/interval (gameplay.set_autosave), audio.",
    "partida-guardados-y-flujo": "**EN:** saves and game flow: game.list_saves slots, game.load a concrete slot by Folder/File, game.continue loads the most recent MANUAL save NOT the newest autosave (verified live), game.goto_lobby does NOT save, game.cancel_flow has NO rollback — all game.* commands EXPERIMENTAL.",
    "construccion-y-casas": "**EN:** building and houses: CLI commands for build mode and construction.",
    "smartbuild-prototipado": "**EN:** SmartBuild rapid prototyping: place primitive shapes, import GLB/GLTF meshes at runtime, apply user textures, drag previews — EXPERIMENTAL; shapes do NOT survive a reload without saving.",
    "movimiento-teleport-y-grupos": "**EN:** movement, teleport and Zoi groups: teleport to someone, summon them near you, go home, walk to target, camera-relative character scan, group movement.",
    "interacciones-autonomia-y-comportamiento": "**EN:** interactions, autonomy and behavior: CLI commands for interactions and AI behavior.",
    "poses-animaciones-y-expresiones": "**EN:** poses, animations and expressions: play poses, facial expressions and animations.",
    "apariencia-y-personalizacion": "**EN:** Zoi appearance and customization: CAS appearance values, garment data tables (GarmentTop, GarmentTopMesh, stockings recolor).",
    "estado-necesidades-y-ciclo-vital": "**EN:** Zoi state, needs and life cycle: read all needs/stats with stat_get_all (Hunger, Sleep, Energy and more — verified live), set them with stat_set_all, freeze decay with stat_freeze, skills, emotions, growth.",
    "ambiciones-y-esperanzas": "**EN:** ambitions and desires: CLI commands for current ambition and milestones.",
    "relaciones-familia-y-social": "**EN:** relationships, family and social life: relationship values, family members, contacts.",
    "mundo-entidades-y-escena": "**EN:** world, entities and scene: scan nearby characters and objects, entity info, possession.",
    "ui-del-juego": "**EN:** game UI: find UI widgets (ui_find, e.g. the household money balance in the HUD), overlays, toasts, dialogs.",
    "mods-de-lua": "**EN:** live Lua mods: scaffold, write, mount, hot-reload (luamod.reload), Lua API lookup (lua_api_lookup), diagnostics on disk.",
    "datos-assets-y-traducciones": "**EN:** data, assets and translations: list data tables, read and patch table rows, PO translation entries.",
    "publicacion-en-curseforge": "**EN:** publishing to CurseForge: CLI commands for the game's sharing/UGC flow."
}

CONSULTIVO = {"Devuelve", "Lista", "Listado", "Muestra", "Comprueba", "Consulta", "Escanea",
              "Busca", "Verifica", "Obtiene", "Diagnostica", "DEPRECADO"}
ACTIVO_OVERRIDE = {"entity_show_speech_bubble", "toast_show"}

def tipo(name):
    if name in ACTIVO_OVERRIDE:
        return "activo"
    first = glosas[name].split(" ")[0].rstrip(":,")
    return "consultivo" if first in CONSULTIVO else "activo"

def wiki_returns(page_path):
    text = page_path.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"# Returns\s+(.*?)(?=\n# |\Z)", text, re.S)
    if not m:
        return None
    parts = []
    for ln in m.group(1).splitlines():
        s = ln.strip()
        if not s or s.startswith("|") or s == "---":
            continue
        if s.startswith("- "):
            s = s[2:].strip()
        parts.append(s)
    body = " ".join(parts)
    if not body or "not declared" in body:
        return None
    return body[:220]

def wiki_url(page_path):
    text = page_path.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r'url: "?([^"\n]+)"?', text)
    return m.group(1) if m else ""

page_cache = {}
def read_page(p):
    if p not in page_cache:
        page_cache[p] = p.read_text(encoding="utf-8", errors="ignore")
    return page_cache[p]

by_intent = defaultdict(list)
for t in cli_tools:
    by_intent[intent(t["name"])].append(t)

assigned = [t["name"] for lst in by_intent.values() for t in lst]
assert len(assigned) == 407, f"asignados {len(assigned)}"
assert len(set(assigned)) == 407, "duplicados"

OUT = ROOT / "pages" / "mcp-tools" / "cli"
OUT.mkdir(parents=True, exist_ok=True)

report = []
for slug in INTENT_META:
    tools = by_intent.get(slug, [])
    lines = []
    refs = sorted({wiki_page[t["name"]] for t in tools if wiki_page[t["name"]]})
    any_exp = any(" ".join(t["description"].split()).startswith("[EXPERIMENTAL") for t in tools)
    lines.append("---")
    lines.append("source: mcp-tools")
    lines.append("server: inzoi-game")
    lines.append(f"dump_version: {DUMP_VERSION}")
    lines.append(f"generado: {GEN_DATE}")
    lines.append("categoria: cli-intencion")
    if any_exp:
        lines.append("experimental: true")
    lines.append("tools: [" + ", ".join(t["name"] for t in tools) + "]")
    lines.append("wiki_refs: [" + ", ".join(refs) + "]")
    lines.append("---")
    lines.append("")
    lines.append(f"## {INTENT_META[slug]}")
    lines.append("")
    lines.append(f"{len(tools)} comandos CLI del servidor inzoi-game para esta intencion. "
                 "Los nombres y parametros son exactos; la forma de retorno solo se cita cuando la wiki la declara.")
    lines.append("")
    if slug in INTENT_EN:
        lines.append(INTENT_EN[slug])
        lines.append("")
    if slug in INTENT_NOTA:
        lines.append(INTENT_NOTA[slug])
        lines.append("")
    lines.append("| Comando | Sintaxis | Que hace | Descripcion MCP actual | Que devuelve | Tipo |")
    lines.append("|---|---|---|---|---|---|")
    n_exp = n_sinwiki = 0
    for t in tools:
        name = t["name"]
        desc = " ".join(t["description"].split())
        mcp_description = desc.replace("|", "\\|")
        m = re.search(r"\[CLI: ([^\]]+)\]", desc)
        cmd = m.group(1)
        experimental = desc.startswith("[EXPERIMENTAL")
        params = [p["name"] for p in (t.get("parameters") or [])]
        sintaxis = f"`{cmd}({', '.join(params)})`"
        que = glosas[name]
        if experimental:
            que += " **[EXPERIMENTAL]**"
            n_exp += 1
        if name in OBSERVED_RET:
            devuelve = OBSERVED_RET[name]
        else:
            wp = wiki_page.get(name)
            if wp:
                ret = wiki_returns(ROOT / wp)
                devuelve = f"wiki: {ret}" if ret else "no publicitado — completar tras prueba en vivo"
            else:
                devuelve = "sin documentación oficial — el volcado es única fuente; requiere verificación en vivo"
                n_sinwiki += 1
        disp = f"**{name}**" if experimental else name
        lines.append(f"| {disp} | {sintaxis} | {que} | {mcp_description} | {devuelve} | {tipo(name)} |")
    lines.append("")
    if refs:
        lines.append("### Enlaces a la wiki oficial")
        lines.append("")
        for r in refs:
            u = wiki_url(ROOT / r)
            lines.append(f"- [{r}]({r}) — {u}")
        lines.append("")
    (OUT / f"{slug}.md").write_text("\n".join(lines), encoding="utf-8", newline="\r\n")
    report.append((slug, len(tools), n_exp, n_sinwiki, len(refs)))

idx = []
idx.append("---")
idx.append("source: mcp-tools")
idx.append("server: inzoi-game")
idx.append(f"dump_version: {DUMP_VERSION}")
idx.append(f"generado: {GEN_DATE}")
idx.append("categoria: cli-intencion")
idx.append("---")
idx.append("")
idx.append("# Indice de intenciones CLI del juego")
idx.append("")
idx.append("Los 407 comandos CLI expuestos por inzoi-game agrupados por intencion de usuario.")
idx.append("")
total = 0
for slug, n, n_exp, n_sin, n_refs in report:
    total += n
    extra = []
    if n_exp:
        extra.append(f"{n_exp} experimentales")
    if n_sin:
        extra.append(f"{n_sin} sin doc wiki")
    tail = ("; " + ", ".join(extra)) if extra else ""
    idx.append(f"- [{INTENT_META[slug]}](cli/{slug}.md) — {n} comandos{tail}")
idx.append("")
idx.append(f"Total: {total} comandos, cada uno asignado exactamente a una intencion.")
(ROOT / "pages" / "mcp-tools" / "indice-cli.md").write_text("\n".join(idx), encoding="utf-8", newline="\r\n")

print("=== VERIFICACION ===")
print(f"asignados: {total}/407 | duplicados: 0 | fuera de intencion: 0")
print()
print("=== INFORME POR INTENCION (comandos | experimentales | sin-doc-wiki | wiki_refs) ===")
for slug, n, n_exp, n_sin, n_refs in report:
    print(f"{slug}: {n} | exp {n_exp} | sinwiki {n_sin} | refs {n_refs}")
print()
total_exp = sum(r[2] for r in report)
total_sin = sum(r[3] for r in report)
print(f"TOTALES: experimentales {total_exp}, sin-doc-wiki {total_sin} (esperados 104)")
