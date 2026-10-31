---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_add_lua_binding]
wiki_refs: []
---

## modkit_add_lua_binding

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Anade una entrada de binding a lua_manifest.json; valida que el tipo sea valido para el entorno y que no haya duplicados. Solo registra el binding: el archivo .lua debe existir o crearse aparte.

**Descripción actual del MCP:** Add one binding to lua_manifest.json (rejects types invalid for env and duplicates). Does not create the script file. Take type/key from `modkit_list_lua_binding_types` / `modkit_list_lua_binding_keys`; never guess. Type-exclusive callbacks never fire on other types: on_possessed/on_unpossessed/on_emotion_changed need Zoi, on_member_enter/on_member_leave need Household.

**Cuándo usarla:** Para enlazar un script existente a un tipo de entidad/componente.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `env` (string, obligatorio) — 'B2' or 'B1'
- `type` (string, obligatorio) — Binding type, e.g. 'Zoi'
- `key` (string, opcional) — Binding key; '*' (default) = all of this type
- `script` (string, obligatorio) — Dotted module path, e.g. 'Zoi.Greeter' for {env}/Zoi/Greeter.lua

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_list_lua_binding_keys`, `modkit_list_lua_binding_types`
