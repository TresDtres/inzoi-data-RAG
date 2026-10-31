---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_search_lua_api]
wiki_refs: []
---

## modkit_search_lua_api

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Busca nombres de tipos y miembros en los metadatos actuales de exportacion Lua y devuelve el tipo propietario.

**Descripción actual del MCP:** Search current Lua-export metadata by type or member name. Results identify the owning type and can be passed to lookup_lua_api. Use search_lua_api_docs for behavior or Korean concept searches.

**Cuándo usarla:** Descubrir nombres canonicos antes de consultar el tipo; la busqueda de nombres no explica el comportamiento.

**Requisitos:** api_query es obligatorio; kind, limit y offset son opcionales. Usa el tipo canonico devuelto con modkit_lookup_lua_api.

**Parámetros clave:**
- `api_query` (string, obligatorio) — Type or member name, e.g. Emotion or GetEntityId
- `kind` (string, opcional) — Optional type, function, property, or override filter
- `limit` (integer, opcional) — Maximum results, default 10, max 50
- `offset` (integer, opcional) — Zero-based result offset

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
