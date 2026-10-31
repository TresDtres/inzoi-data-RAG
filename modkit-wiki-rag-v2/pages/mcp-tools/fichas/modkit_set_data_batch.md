---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_set_data_batch]
wiki_refs: []
---

## modkit_set_data_batch

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Sobrescribe muchos campos de datos en una sola llamada; todos los cambios van en un unico array entries y se llama exactamente una vez.

**Descripción actual del MCP:** modkit_set_data for many fields, across items and tables. ⚠️ Put every change in one `entries` array and call exactly once. Check result.success and result.fail_count; per-entry causes are in result.errors.

**Cuándo usarla:** Cuando hay que aplicar multiples cambios de datos a la vez.

**Requisitos:** Cada entrada lleva item, field y value (data opcional, por defecto Object); las reglas de valor son las de modkit_set_data.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `entries` (array, obligatorio) — All changes for this call
- `dlc` (string, opcional) — DLC code

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_set_data`
