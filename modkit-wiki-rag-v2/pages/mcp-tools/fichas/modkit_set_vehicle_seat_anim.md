---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_seat_anim]
wiki_refs: [pages/modkit/project/vehicle/04-animation.chunks/part-003.md, pages/modkit/project/vehicle/05-slots.chunks/part-002.md]
---

## modkit_set_vehicle_seat_anim

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Establece o limpia el AnimCharacter asociado a un campo de animacion de un asiento de vehiculo.

**Descripción actual del MCP:** Set a passenger animation Id on a VEHICLE seat. list_vehicle_components 'seats' shows which fields apply to each seat; a non-applicable field is rejected. - `VehiclePostureAnimId`: board/exit/seated idle; every seat. - `DrivingAnimId`: moving forward; bicycle/motorcycle/ship driver seats. - `ReverseDrivingAnimId`: reversing; bicycle/motorcycle driver seats. - `DriverLeftSteeringAnimId` / `DriverRightSteeringAnimId`: turning; any driver seat (cars have only these). Ids are `AnimCharacter` rows (bike/boat in `AnimCharacter_Vehicle`, car postures in `AnimCharacter_Posture`). Rows are shared across vehicles: editing one changes all of them, so to change one vehicle clone the row to a new Id first (workspace Clone button) and point the field at the copy.

**Cuándo usarla:** Para editar una animacion de pasajero compatible con ese asiento.

**Requisitos:** Consultar los campos aplicables en la lista de componentes; component debe ser un asiento y anim_id un row Id de AnimCharacter.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'seats'
- `field` (string, obligatorio) — Animation field
- `anim_id` (string, opcional) — AnimCharacter row Id; omit or empty clears it

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** ninguna mencionada en el volcado
