---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: datos
tools: [modkit_set_data_asset_fields]
wiki_refs: []
---

## modkit_set_data_asset_fields

**Servidor:** inzoi-modkit | **Dominio:** datos

**Qué hace:** Fija campos de un workspace DA en lote. Solo se sobrescriben las claves proporcionadas; el resto se conserva.

**Descripción actual del MCP:** Set many DA fields in one call; unlisted fields are kept. Check names, types and enums in the category doc (modkit://data-asset-schemas/...) or with modkit_get_data_asset_schema first. TMap fields merge per key: send only your keys. Arrays and scalars replace: send arrays in full. Removing a base-game map key or array element is rejected (entries this mod added can be removed). In arrays whose elements have no Id, prefer appending: other edits are anchored by position. Encoding: TMap/struct = JSON object, TArray = array, soft object = asset path, enum = member name. Check result.success; result.delta shows changes vs defaults, so do not re-read with modkit_get_data_asset_values. Patch format: modkit://workspace-docs/ws_data_asset.

**Cuándo usarla:** Para editar varios campos de un DataAsset en una sola llamada.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — DA workspace id
- `fields` (object, obligatorio) — { fieldName: value } for every field to change

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado advierte: los mapas se fusionan por clave y los arrays/s(calares) se reemplazan completos; quitar una clave base del juego requiere enviar el mapa completo.

**Forma parte de:** WF: parchear datos del juego (tablas, DataAssets, traducciones)

**Herramientas relacionadas:** `modkit_get_data_asset_schema`, `modkit_get_data_asset_values`
