---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_list_categories]
wiki_refs: []
---

## modkit_list_categories

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Devuelve la lista de categorias de libros de mod: [{key, group?, count},...]; key se pasa tal cual a modkit_list_books.

**Descripción actual del MCP:** List book categories as [{key, group?, count}]. Call before modkit_list_books; pass `key` as its `category` and show it verbatim. group (BUILD only): Furniture or Construct. Language returns [] (use modkit_list_cultures); Script returns one synthetic {key:'Script'}.

**Cuándo usarla:** Siempre antes de modkit_list_books.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `book_class` (string, opcional) — Book class (e.g. BUILD, CAZ, Hair)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte de categorias con count=0 (vacias) al mostrar la lista.

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** `modkit_list_books`, `modkit_list_cultures`
