---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_light]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_set_vehicle_light

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija color, intensidad y radio de atenuacion de un slot de luz del vehiculo.

**Descripción actual del MCP:** Set a light slot's color/intensity/attenuation radius on a VEHICLE workspace. Omitted fields keep their current value.

**Cuándo usarla:** Para ajustar faros o luces.

**Requisitos:** Un component de light_slots de modkit_list_vehicle_components; los campos omitidos conservan el valor actual.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'light_slots'
- `color` (string, opcional) — Hex color, e.g. FFFFFFFF
- `intensity` (number, opcional) — Intensity
- `attenuation_radius` (number, opcional) — Attenuation radius (cm)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
