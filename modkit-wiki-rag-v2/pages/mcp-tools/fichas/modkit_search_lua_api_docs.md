---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_search_lua_api_docs]
wiki_refs: []
---

## modkit_search_lua_api_docs

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Busca documentos indexados sobre el comportamiento de la API Lua por nombres de API o conceptos en lenguaje natural.

**Descripción actual del MCP:** Search the indexed Lua API behavior documents by English API names or natural-language concepts. Returns canonical Lua type tags, document ids, and excerpts.

**Cuándo usarla:** Investigar como se comporta una API o buscar un concepto, incluidas consultas en coreano.

**Requisitos:** docs_query es obligatorio; type filtra por un tipo Lua canonico. Lee el document_id devuelto con modkit_get_lua_api_doc; la documentacion no prueba que un miembro C++ este exportado a Lua.

**Parámetros clave:**
- `docs_query` (string, obligatorio) — Search terms; multiple terms are combined
- `type` (string, opcional) — Optional canonical Lua-exported type filter
- `limit` (integer, opcional) — Maximum results, default 10, max 25
- `offset` (integer, opcional) — Zero-based result offset

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
