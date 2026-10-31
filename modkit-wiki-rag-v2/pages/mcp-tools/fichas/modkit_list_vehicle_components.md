---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_list_vehicle_components]
wiki_refs: [pages/modkit/project/vehicle/01-overview.chunks/part-005.md, pages/modkit/project/vehicle/03-appearance.chunks/part-002.md, pages/modkit/project/vehicle/04-animation.chunks/part-003.md, pages/modkit/project/vehicle/05-slots.chunks/part-002.md, pages/modkit/project/vehicle/06-objects.chunks/part-002.md]
---

## modkit_list_vehicle_components

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Lista todos los componentes editables de un workspace VEHICLE: slots de mesh, luces, asientos, puntos de interaccion, pivotes y mas. El volcado exige llamarla PRIMERO: todas las demas herramientas de vehiculo necesitan un nombre de component de esta respuesta.

**Descripción actual del MCP:** List a VEHICLE workspace's editable components. Call first: every other vehicle tool takes `component` = a `component_name` from here. Entries (except colors) carry component_name, component_class; all but lights also location, rotation, scale. - `slots[]` mesh slots, + mesh_type, mesh_path. - `light_slots[]` + light_color (hex), intensity, attenuation_radius. - `colors[]` color_id, color (sRGB hex). - `seats[]` seat anchors, + slot data and the seat anim Ids that apply. Empty on boats (they use `seat_objects`). - `seat_positions[]` sit points. - `interaction_slots[]` + `slot_type` (Interaction or Fx) and its slot data. - `pivot_slots[]` audio/UI pivots. - `seat_objects[]` (boat chairs) / `owned_objects[]` + object_id, vehicle_seat. - `disembark_points[]` (boats) location only. - `dimensions` {size, box_origin_offset} cm; `audio` {main_sound, spawn_sound, despawn_sound}. Enums are fully qualified (`EB1SlotType::Fx`, `EB1VehicleSeat::Driver`); match the suffix. Mesh/light slots, seats and pivots are fixed. Adding/removing interaction/FX points, owned objects or disembark points is editor-only. Driving params are not here; read them with modkit_get_row(table="ObjectBP", id=<BP id>). ModKit ships no /Game/BG/VH meshes: if source assets were not copied, unresolved slots show empty and those parts are missing in game; import a mesh per slot.

**Cuándo usarla:** Primer paso de cualquier edicion de vehiculo.

**Requisitos:** no documentado en el volcado

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id (from modkit_list_workspaces)

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_get_row`
