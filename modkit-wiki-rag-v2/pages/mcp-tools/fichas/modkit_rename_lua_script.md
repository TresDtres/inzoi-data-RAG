---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_rename_lua_script]
wiki_refs: []
---

## modkit_rename_lua_script

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Renombra (mueve) un script Lua dentro del workspace. NO actualiza lua_manifest.json: los bindings se actualizan aparte con modkit_remove_lua_binding y modkit_add_lua_binding.

**Descripción actual del MCP:** Rename/move a Lua workspace file. Does NOT update lua_manifest.json; fix bindings with `modkit_remove_lua_binding` + `modkit_add_lua_binding`.

**Cuándo usarla:** Para reorganizar archivos de script.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `old_path` (string, obligatorio) — Current path relative to workspace/lua/
- `new_path` (string, obligatorio) — New path relative to workspace/lua/

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_add_lua_binding`, `modkit_remove_lua_binding`
