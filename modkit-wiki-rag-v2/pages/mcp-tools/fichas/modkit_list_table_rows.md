---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_list_table_rows]
wiki_refs: []
---

## modkit_list_table_rows

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Devuelve las filas de una tabla de datos concreta con paginacion. Si el plugin abierto edita esa tabla, devuelve los datos base fusionados con su capa de parches Override/Duplicate.

**Descripción actual del MCP:** List a data table's row Ids (and Name when it differs), paginated. Merges the plugin's patches when it edits the table (`plugin_overlay`).

**Cuándo usarla:** Para explorar el contenido de una tabla.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `table` (string, obligatorio) — Data table name
- `page` (integer, opcional) — Page index (0-based)
- `page_size` (integer, opcional) — Rows per page (max 200)
- `plugin` (string, opcional) — Plugin whose patches to include, even if its tab is inactive. Default: open plugin.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** ninguna mencionada en el volcado
