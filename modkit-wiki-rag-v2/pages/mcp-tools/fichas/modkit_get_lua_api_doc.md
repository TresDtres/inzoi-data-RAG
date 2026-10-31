---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: authoring-lua
tools: [modkit_get_lua_api_doc]
wiki_refs: []
---

## modkit_get_lua_api_doc

**Servidor:** inzoi-modkit | **Dominio:** authoring-lua

**Qué hace:** Lee un documento indexado sobre el comportamiento de una API Lua; puede devolver el documento completo o una seccion Markdown.

**Descripción actual del MCP:** Read an indexed Lua API behavior document returned by search_lua_api_docs. A C++ member appearing in a document is not proof that it is Lua-callable.

**Cuándo usarla:** Despues de buscar documentacion de comportamiento, para consultar la evidencia antes de explicar o usar una API.

**Requisitos:** Usar el document_id devuelto por modkit_search_lua_api_docs; section es opcional. El documento no confirma que un miembro C++ sea invocable desde Lua.

**Parámetros clave:**
- `document_id` (string, obligatorio) — document_id returned by search_lua_api_docs
- `section` (string, opcional) — Optional Markdown heading to return only that section

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: crear un mod de Lua en el editor del ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
