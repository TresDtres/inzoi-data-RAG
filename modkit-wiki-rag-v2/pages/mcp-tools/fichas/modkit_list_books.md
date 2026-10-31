---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: proyecto
tools: [modkit_list_books]
wiki_refs: []
---

## modkit_list_books

**Servidor:** inzoi-modkit | **Dominio:** proyecto

**Qué hace:** Devuelve los libros de mod (items origen) de una categoria: [{id, dlc_code},...].

**Descripción actual del MCP:** List base items (books) as [{id, dlc_code}]; show id verbatim. ⚠️ Always pass `category` unless the user gave a concrete id. Language returns [] (use modkit_list_cultures); Script returns one synthetic {id:'Script'}. An empty result carries a `hint` (usually wrong book_class).

**Cuándo usarla:** Para elegir el item origen al crear un workspace; el id se muestra al usuario tal cual.

**Requisitos:** category previamente obtenida con modkit_list_categories (salvo que el usuario aporte un id concreto).

**Parámetros clave:**
- `book_class` (string, opcional) — Book class (e.g. BUILD, CAZ, Hair)
- `category` (string, opcional) — Category key from modkit_list_categories. Empty returns everything (huge).

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** Para workspaces de animacion, book_class es el valor unico CHARACTER_ANIMATION (aviso del volcado).

**Forma parte de:** WF: crear un proyecto y sus workspaces

**Herramientas relacionadas:** `modkit_list_cultures`
