---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_transform]
wiki_refs: [pages/modkit/project/vehicle/03-appearance.chunks/part-002.md]
---

## modkit_set_vehicle_transform

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Fija la transformada relativa de un slot de mesh del vehiculo; usar tras cambiar un mesh cuyo tamano u origen difiere del original.

**Descripción actual del MCP:** Set a mesh slot's relative transform on a VEHICLE workspace, e.g. after a mesh swap changes size/origin. Replaces the whole transform: omitted location/rotation axes become 0 and scale 1, so pass the full pose.

**Cuándo usarla:** Para recolocar la pieza tras un cambio de mesh.

**Requisitos:** Los valores omitidos de location/rotation por defecto son 0 y los de scale 1 (documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'slots'
- `x` (number, opcional) — Location X (cm)
- `y` (number, opcional) — Location Y (cm)
- `z` (number, opcional) — Location Z (cm)
- `pitch` (number, opcional) — Pitch (deg)
- `yaw` (number, opcional) — Yaw (deg)
- `roll` (number, opcional) — Roll (deg)
- `sx` (number, opcional) — Scale X
- `sy` (number, opcional) — Scale Y
- `sz` (number, opcional) — Scale Z

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
