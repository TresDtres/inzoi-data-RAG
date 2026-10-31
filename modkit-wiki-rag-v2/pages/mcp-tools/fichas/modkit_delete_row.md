---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_delete_row]
wiki_refs: []
---

## modkit_delete_row

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Elimina los parches que este plugin escribio para una fila de datos: tanto la fila creada con create_row como las sobreescrituras de set_data.

**Descripción actual del MCP:** Remove this plugin's patches for one row: the row it added (create_row) and its field overrides (set_data). ⚠️ Cannot delete a base-game row: if the Id exists in shipped data, that row reappears (`base_row_remains`). Fails if the plugin has no patch for the row. Call modkit_save to persist.

**Cuándo usarla:** Para deshacer los cambios del plugin sobre una fila.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `table` (string, obligatorio) — Data table name
- `id` (string, obligatorio) — Row Id
- `dlc` (string, opcional) — DLC code

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte: NO borra una fila del juego base; si ese Id tambien existe en los datos originales, la fila original reaparece.

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_save`
