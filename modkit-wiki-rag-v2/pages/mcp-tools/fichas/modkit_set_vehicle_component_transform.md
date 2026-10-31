---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_component_transform]
wiki_refs: [pages/modkit/project/vehicle/05-slots.chunks/part-002.md, pages/modkit/project/vehicle/06-objects.chunks/part-002.md]
---

## modkit_set_vehicle_component_transform

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Mueve un punto de interaccion, pivote, posicion de asiento, objeto transportado o punto de descarga del vehiculo.

**Descripción actual del MCP:** Move an interaction/FX point, pivot, seat position, carried object or disembark point on a VEHICLE workspace (seat anchors: modkit_set_vehicle_seat_transform). Replaces the whole transform (omitted axes 0, scale 1). Scale applies only to pivots and seat positions; disembark points use location only; carried objects are relative to the vehicle root.

**Cuándo usarla:** Para ajustar los anclajes funcionales del vehiculo.

**Requisitos:** Un component de la lista correspondiente de modkit_list_vehicle_components (interaction_slots, pivot_slots, seat_positions...).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'interaction_slots', 'pivot_slots', 'seat_positions', 'seat_objects', 'owned_objects' or 'disembark_points'
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

**Herramientas relacionadas:** `modkit_set_vehicle_seat_transform`
