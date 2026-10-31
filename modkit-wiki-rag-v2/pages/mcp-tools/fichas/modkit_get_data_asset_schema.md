---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_get_data_asset_schema]
wiki_refs: []
---

## modkit_get_data_asset_schema

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Devuelve el esquema de reflexion UClass de un libro DA concreto: nombre de clase, ruta, campos (name, type, cpp_type, category, required, enum_values, estructuras anidadas...) y valores por defecto.

**Descripción actual del MCP:** Return one DA class's reflection schema (field names, types, cpp_type, enum_values, nested struct `inner`) and game `defaults`. Use it to check fields before modkit_set_data_asset_fields.

**Cuándo usarla:** Para conocer los campos editables y sus tipos antes de escribir valores.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `book_id` (string, obligatorio) — DA book ID (from modkit_list_data_asset_types)
- `max_depth` (integer, opcional) — Struct recursion depth (1-8)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_set_data_asset_fields`
