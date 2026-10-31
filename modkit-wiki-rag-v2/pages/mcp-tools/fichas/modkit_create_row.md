---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_create_row]
wiki_refs: []
---

## modkit_create_row

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Crea una fila NUEVA en cualquier tabla de datos del juego. Con source se duplica una fila existente; sin source se inicializa con los valores por defecto del struct.

**Descripción actual del MCP:** Create a new row in a data table (modkit_set_data only overrides existing rows). Pass 'source' to duplicate a similar row (preferred), or omit it for struct defaults. Then edit it with set_data(data=<table>, item=<id>). The row is visible only while its plugin is open. Call modkit_save to persist.

**Cuándo usarla:** Cuando la fila todavia no existe: modkit_set_data solo puede sobrescribir filas existentes.

**Requisitos:** Elegir la tabla; tras crearla, rellenarla con modkit_set_data.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `table` (string, obligatorio) — Data table name (e.g. ObjectSlot)
- `id` (string, obligatorio) — New, unused row Id
- `source` (string, opcional) — Existing row Id to duplicate
- `dlc` (string, opcional) — DLC code

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_save`, `modkit_set_data`
