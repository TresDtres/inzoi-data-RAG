---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_create_lua_script]
wiki_refs: []
---

## modkit_create_lua_script

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Crea un script Lua nuevo con contenido de scaffold consciente de bindings (callbacks on_begin, on_end, on_tick con las firmas correctas segun el tipo de binding) y opcionalmente lo registra en lua_manifest.json.

**Descripción actual del MCP:** Create a Lua script from a binding-aware scaffold (lifecycle callbacks with typed `---@param` lines). With `type` set it is registered as a manifest binding; without `type` it is not bound, so only Main and chunk modules (chunk=true) run that way. Auto-creates the Script workspace if missing. Fails if the file exists; use modkit_write_lua_script then. Before calling, query modkit_list_lua_api_catalog(category="lifecycle"), modkit_list_lua_binding_types and, for enum-keyed types, modkit_list_lua_binding_keys. Never guess types, keys or callbacks. Binding types: B2 Zoi, ObjectTemplate, Household, Vehicle, Component, Manager; B1 Zoi, ObjectTemplate, Vehicle, Component. Static/Actors are chunk modules: pass chunk=true and add_binding=false (with type set, add_binding defaults to true and wins). module='Main' with no type scaffolds the boot module.

**Cuándo usarla:** Para empezar un script nuevo con la estructura correcta.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `env` (string, obligatorio) — 'B2' (simulation) or 'B1' (client/render)
- `module` (string, obligatorio) — Dotted module path → workspace/lua/{env}/<path>.lua (e.g. 'Zoi.Greeter', 'Main')
- `type` (string, opcional) — Binding type; selects the scaffold
- `key` (string, opcional) — Binding key: '*' for all or an enum value. Default: '*'
- `add_binding` (boolean, opcional) — Register a manifest binding. Default: true when type is set. Set false for chunk modules.
- `chunk` (boolean, opcional) — Record under chunkScripts (Static/Actors); only applies when no binding is added. Default: false.
- `content` (string, opcional) — Full file content instead of the scaffold; include the ---@param annotations yourself.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_lua_api_catalog`, `modkit_list_lua_binding_keys`, `modkit_list_lua_binding_types`, `modkit_write_lua_script`
