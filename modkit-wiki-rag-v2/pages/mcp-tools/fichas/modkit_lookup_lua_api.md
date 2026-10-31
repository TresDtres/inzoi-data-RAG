---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_lookup_lua_api]
wiki_refs: []
---

## modkit_lookup_lua_api

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Muestra propiedades, funciones, overrides y, si se pide, miembros heredados de un tipo exportado actualmente a Lua.

**Descripción actual del MCP:** Look up a current Lua-exported type's properties, functions, overrides and optional inherited members. Use the exact type from search_lua_api. Use search_lua_api_docs / get_lua_api_doc to understand behavior.

**Cuándo usarla:** Confirmar los miembros disponibles y sus nombres exactos antes de escribir un script Lua.

**Requisitos:** Pasar el type_name canonico devuelto por modkit_search_lua_api; member y kind filtran, limit y offset paginan.

**Parámetros clave:**
- `type_name` (string, obligatorio) — Canonical exported type name
- `member` (string, opcional) — Optional case-insensitive substring filter
- `kind` (string, opcional) — Optional function, property, or override filter
- `include_inherited` (boolean, opcional) — Include inherited members; defaults to false
- `limit` (integer, opcional) — Members per page, default 25, max 50
- `offset` (integer, opcional) — Zero-based member offset

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
