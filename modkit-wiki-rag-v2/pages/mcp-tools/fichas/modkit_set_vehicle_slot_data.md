---
source: mcp-tools
server: inzoi-modkit
dump_version: inzoi-modkit.json (protocol 2025-03-26, 129 tools, captured 2026-10-31)
generado: 2026-10-31
categoria: ficha
dominio: assets
tools: [modkit_set_vehicle_slot_data]
wiki_refs: []
---

## modkit_set_vehicle_slot_data

**Servidor:** inzoi-modkit | **Dominio:** assets

**Qué hace:** Escribe un campo SlotComponents en un asiento o punto de interaccion/FX de vehiculo.

**Descripción actual del MCP:** Set one slot field on a VEHICLE seat or interaction/FX point (ObjectBP `SlotComponents`, read by the game). Vehicle replacement for modkit_set_component_prop. A field of another Slot Type is written but has no effect in game. - Interaction: `EnableOnlyInteractionTags` (on a seat must stay its `EB1VehicleSeat` name, e.g. `Driver`, or it stops being a seat), `SlotGroupId`, `BodyAge`, `bRequireSpace`, `ShowRequireSpace`, `bShowDisabledSlot`, `SlotOwnershipTag`. `VehiclePostureAnimId`: use modkit_set_vehicle_seat_anim. - Fx: `FXType`, `NiagaraSystem`, `NiagaraFXObject`, `ParticleSystem`, `FXCullDistance`. `SlotType` can change on interaction points, not on seats.

**Cuándo usarla:** Para ajustar datos de slot que lee el juego en esos componentes.

**Requisitos:** Consultar el componente y el tipo de slot. Un valor escrito en un campo de otro Slot Type no tiene efecto en el juego.

**Parámetros clave:**
- `plugin` (string, obligatorio) — Mod plugin name
- `item` (string, obligatorio) — Vehicle workspace Id
- `component` (string, obligatorio) — component_name from 'seats' or 'interaction_slots'
- `field` (string, obligatorio) — Slot field name
- `value` (string, opcional) — Unreal property text: True/False, enum name, ("A","B") for name arrays, number, or asset path. Empty clears.

**Devuelve:** no publicitado por el servidor — completar tras prueba en vivo

**Errores típicos:** no documentado — completar tras prueba en vivo

**Forma parte de:** WF: editar un vehículo en el ModKit

**Herramientas relacionadas:** `modkit_set_component_prop`, `modkit_set_vehicle_seat_anim`
