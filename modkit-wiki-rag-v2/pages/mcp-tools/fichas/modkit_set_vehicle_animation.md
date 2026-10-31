---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_animation]
wiki_refs: [pages/modkit/project/vehicle/04-animation.chunks/part-003.md]
---

## modkit_set_vehicle_animation

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Autora una animacion parametrica de pieza (apertura de puerta/maletero/limpiaparabrisas/ventanilla) del vehiculo.

**Descripción actual del MCP:** Author a part's open motion (door/trunk/wiper/window) on a VEHICLE workspace as a delta from the closed pose; give at least one non-zero delta. Only template PartList parts with a `PlayStaticMeshAnim` state work (check with modkit_get_row(table="VehicleTemplate")). Close replays the same curve in reverse, so author `Open` only. Creates curves, a `DA_StaticMeshAnim` entry and a dedicated vehicle template, so the source vehicle is unaffected. See modkit://workspace-docs/ws_vehicle.

**Cuándo usarla:** Para animar partes del vehiculo.

**Requisitos:** Solo se pueden animar piezas que ya tengan un estado PlayStaticMeshAnim en el PartList de la plantilla (p. ej. DriverDoor, Passenger0Door...; documentado en el volcado).

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `part_type` (string, obligatorio) — PartType, e.g. DriverDoor, Passenger0Door, Trunk
- `state` (string, opcional) — State to author
- `loc_x` (number, opcional) — Open delta X (cm)
- `loc_y` (number, opcional) — Open delta Y (cm)
- `loc_z` (number, opcional) — Open delta Z (cm, up)
- `rot_pitch` (number, opcional) — Open delta pitch (deg)
- `rot_yaw` (number, opcional) — Open delta yaw (deg)
- `rot_roll` (number, opcional) — Open delta roll (deg)
- `duration` (number, opcional) — Seconds
- `smooth` (boolean, opcional) — Cubic ease if true, Linear if false

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_get_row`
