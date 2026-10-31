---
source: mcp-tools
server: inzoi-game
dump_version: inzoi-game.json (protocol 2024-11-05, 414 tools, captured 2026-10-21)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [luamod_scaffold]
wiki_refs: []
---

## luamod_scaffold

**Servidor:** inzoi-game | **Dominio:** authoring-lua

**Qué hace:** Crea un mod de Lua o anade scripts lua/ a un mod existente bajo Documents/inZOI/Mods/InGame/. Modo A (mod nuevo) con mod_name: crea {mod_id}.uplugin, mod_manifest.json, lua/lua_manifest.json, lua/B2/Main.lua (script global de simulacion), lua/B2/{script_name}.lua (script por personaje) y lua/B1/Main.lua (script de presentacion). Modo B con mod_id existente: anade solo el subarbol lua/ (util para dar scripts Lua a un mod UI). El script por destino se elige con type/key/env (por defecto Zoi, clave '*', B2) y lua_manifest.json se escribe con el binding correspondiente; los callbacks llevan anotaciones LuaLS ---@param (p. ej. ---@param owner FB2Character).

**Descripción actual del MCP:** Create a Lua mod or add lua/ scripts to an existing mod under the user InGame mods directory. TWO MODES: (A) NEW MOD: pass mod_name. Creates {mod_id}.uplugin, mod_manifest.json, lua/lua_manifest.json, lua/B2/Main.lua (global sim script), lua/B2/{script_name}.lua (per-character script), lua/B1/Main.lua (presentation script). (B) ADD TO EXISTING MOD: pass mod_id (must exist). Adds only the lua/ subtree to the existing mod. Useful for adding Lua scripts to a UI mod. The generated per-target script is selected by 'type'/'key'/'env' (default: Zoi, key="*", B2). Its callback params carry LuaLS ---@param annotations (e.g. ---@param owner FB2Character) so hover/autocomplete works out of the box, and lua_manifest.json is written with the matching binding. After scaffolding, use luamod_write_file to edit scripts and uimod_mount to load the mod in-game.

**Cuándo usarla:** Cuando el usuario quiere crear un mod de Lua en vivo o anadir scripts a un mod existente.

**Requisitos:** Tras el scaffold, editar con luamod_write_file y cargar el mod en el juego con uimod_mount (flujo documentado en el volcado).

**Parámetros clave:**
- `mod_name` (string, opcional) — Mod display name (e.g. AutoGreet). REQUIRED for new mods. mod_id = {mod_name}_{RANDOM6}.
- `mod_id` (string, opcional) — Existing mod identifier. Pass this to add lua/ to an existing mod instead of creating a new one.
- `script_name` (string, opcional) — Name for the per-character script file (without .lua). Defaults to mod_name. Creates lua/{env}/{script_name}.lua and a matching lua_manif...
- `type` (string, opcional) — Binding type: Zoi (default) | ObjectTemplate | Household | Vehicle | Component | Manager | Static | Actors. Sets the callback shape and t...
- `key` (string, opcional) — Binding key. '*' (default) binds all for entity types; Component/Manager/Static/Actors need a concrete key (e.g. Stat -> FB2StatComponent).
- `env` (string, opcional) — Environment: B2 (default, simulation) or B1 (presentation).

**Devuelve:** Observado en vivo 2026-10-09 (pages/local/verificaciones-2026-10-09.md, V14): texto con la ruta del mod, el mod_id (con sufijo aleatorio {mod_name}_{RANDOM6}) y la lista de archivos creados; crea ademas lua/.luarc.json y lua/AGENTS.md (no documentados en el volcado); en este sistema Documents esta redirigido a OneDrive (Dokumente).

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en vivo (juego en marcha)

**Herramientas relacionadas:** `luamod_write_file`, `uimod_mount`

**Cadena de authoring:** Paso SCAFFOLD del pipeline de authoring Lua en vivo: crea mod, manifest y scripts base; el codigo se edita con luamod_write_file y se revisa con luamod_read_file.
