---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_owned_object]
wiki_refs: []
---

## modkit_set_vehicle_owned_object

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Asigna un slot de objeto de vehiculo a otro registro Object; object_id solo puede omitirse o vaciarse para limpiar un slot owned_objects.

**Descripción actual del MCP:** Point a VEHICLE's carried-object slot (spawned chair, storage box, light; boats seat Zois on chair objects) at a different `Object` row. Boat pieces live in `Object_Ship` (e.g. `SpeedBoat01_DriverChair`). A 'seat_objects' entry only accepts a chair tagged for its seat (Driver / Passenger) and cannot be cleared. Move it with modkit_set_vehicle_component_transform.

**Cuándo usarla:** Para cambiar un objeto transportado o asignar una silla compatible a un asiento; no sirve para quitar una entrada seat_objects.

**Requisitos:** Consultar el componente en la lista de componentes del vehiculo. seat_objects solo acepta una silla etiquetada para ese asiento (Driver/Passenger) y no se puede limpiar.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'seat_objects' or 'owned_objects'
- `object_id` (string, opcional) — Object row Id. Omit or empty clears it: the vehicle stops spawning that object. Not allowed on seat_objects.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_set_vehicle_component_transform`
