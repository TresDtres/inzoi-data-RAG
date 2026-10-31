---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_list_lua_api_catalog]
wiki_refs: []
---

## modkit_list_lua_api_catalog

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Navega la superficie de la API de modding Lua: callbacks de ciclo de vida, la estructura de inzoi.*, ids de comandos CLI y nombres de enums.

**Descripción actual del MCP:** Browse Lua lifecycle callbacks, `inzoi.*` helpers, CLI ids and enums. For exported C++ types and members use `modkit_search_lua_api` / `modkit_lookup_lua_api`; for behavior and Korean concept search use `modkit_search_lua_api_docs` followed by `modkit_get_lua_api_doc`. Verify the current binding metadata before treating a documented C++ member as Lua-callable.

**Cuándo usarla:** Para descubrir que ofrece la API antes de escribir codigo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `category` (string, opcional) — 'lifecycle', 'inzoi', 'cli', or 'enum'; omit for all
- `query` (string, opcional) — Substring filter
- `limit` (integer, opcional) — Max CLI/enum results (CLI default 100, max 500; enum default 100, max 1000)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** `modkit_get_lua_api_doc`, `modkit_lookup_lua_api`, `modkit_search_lua_api`, `modkit_search_lua_api_docs`
