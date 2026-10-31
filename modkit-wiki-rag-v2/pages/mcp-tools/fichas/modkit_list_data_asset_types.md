---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_list_data_asset_types]
wiki_refs: []
---

## modkit_list_data_asset_types

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Lista los libros DA seleccionables para workspaces DataAsset (book_class='DA'): [{id, class_name, class_path, display_name, category?},...].

**Descripción actual del MCP:** List DA books (book_class='DA'). Pass an entry's `id` as modkit_add_workspace `book` or modkit_get_data_asset_schema `book_id`.

**Cuándo usarla:** Antes de crear un workspace DA; el id devuelto se usa como book en modkit_add_workspace y book_id en modkit_get_data_asset_schema.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `category` (string, opcional) — Category filter
- `search` (string, opcional) — Substring filter on id or class_name

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_add_workspace`, `modkit_get_data_asset_schema`
