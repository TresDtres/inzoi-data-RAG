---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_color]
wiki_refs: [pages/modkit/project/vehicle/02-general.md, pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_set_vehicle_color

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Anade o actualiza una variante de color de pintura del vehiculo; color es un hex sRGB como FF8800 (igual que la tabla Vehicle). Un color_id existente se actualiza; uno nuevo se anade.

**Descripción actual del MCP:** Add or update a paint color variant on a VEHICLE workspace. Use this, not modkit_set_data, for `Vehicle.Color` (struct array).

**Cuándo usarla:** Para anadir opciones de pintura.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `color_id` (string, obligatorio) — Variant Id (e.g. BlueSky); existing updates, new appends
- `color` (string, obligatorio) — sRGB hex, e.g. FF8800

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** El volcado prohibe editar Vehicle.Color via modkit_set_data: es un struct array y solo se gestiona con esta herramienta.

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_set_data`
