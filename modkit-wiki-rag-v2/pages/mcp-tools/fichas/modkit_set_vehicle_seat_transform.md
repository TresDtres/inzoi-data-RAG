---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_seat_transform]
wiki_refs: [pages/modkit/project/vehicle/05-slots.chunks/part-002.md]
---

## modkit_set_vehicle_seat_transform

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Mueve un ancla de asiento del vehiculo; al mover el asiento se mueve su posicion de sentado hija y se desplaza el IK de pelvis emparejado (IK_Seat_<tag>_Pelvis) el mismo offset para que la postura del personaje siga alineada.

**Descripción actual del MCP:** Move a seat anchor on a VEHICLE workspace; its sit position and pelvis IK follow. Replaces the whole transform (omitted axes 0, scale 1).

**Cuándo usarla:** Para recolocar asientos.

**Requisitos:** Un component de seats de modkit_list_vehicle_components.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'seats'
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
