---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_get_row]
wiki_refs: []
---

## modkit_get_row

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Devuelve una fila de una tabla como JSON, buscando primero en la capa de parches del plugin actual y luego en los datos base del juego.

**Descripción actual del MCP:** Return one data row as JSON: the plugin's patched/added row first, else base game data. Use it to find field names for set_data or to check a write.

**Cuándo usarla:** Para descubrir los campos antes de un set_data o verificar un parche recien aplicado.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `table` (string, obligatorio) — Data table name
- `id` (string, obligatorio) — Row ID
- `dlc` (string, opcional) — DLC code
- `plugin` (string, opcional) — Plugin whose patches to read, even if its tab is inactive. Default: open plugin.
- `fields` (array, opcional) — Fields to return, to save tokens (Id always included). Empty = all.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** ninguna mencionada en el volcado
