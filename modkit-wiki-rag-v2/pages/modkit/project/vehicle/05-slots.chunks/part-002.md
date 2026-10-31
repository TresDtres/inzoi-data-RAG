---
document_id: "88dc85d243a015c3574fcf48cc8fbe434d9773eb2bc60b381237ee19a802ed42"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/05-slots"
title: "Slots"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:41+00:00"
content_sha256: "4c09220169920c5c2e92cf169eb517f5bc47bd206025a4e762775c5a8876f8be"
chunk: 2
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/05-slots"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ToolUse`modkit_list_vehicle_components`Returns `seats`, `seat_positions`, `interaction_slots` (with `slot_type`) and `pivot_slots`.`modkit_set_vehicle_seat_transform`Move a seat anchor; the sit position and seated pose follow.`modkit_set_vehicle_component_transform`Move an interaction/FX point, pivot or seat position.`modkit_set_vehicle_seat_anim`Set a seat's Vehicle Posture Anim Id, or the driver seat's driving/steering Ids. |
| --- |
| `modkit_list_vehicle_components`Returns `seats`, `seat_positions`, `interaction_slots` (with `slot_type`) and `pivot_slots`.`modkit_set_vehicle_seat_transform`Move a seat anchor; the sit position and seated pose follow.`modkit_set_vehicle_component_transform`Move an interaction/FX point, pivot or seat position.`modkit_set_vehicle_seat_anim`Set a seat's Vehicle Posture Anim Id, or the driver seat's driving/steering Ids. |
| `modkit_set_vehicle_seat_transform`Move a seat anchor; the sit position and seated pose follow.`modkit_set_vehicle_component_transform`Move an interaction/FX point, pivot or seat position.`modkit_set_vehicle_seat_anim`Set a seat's Vehicle Posture Anim Id, or the driver seat's driving/steering Ids. |
| `modkit_set_vehicle_component_transform`Move an interaction/FX point, pivot or seat position.`modkit_set_vehicle_seat_anim`Set a seat's Vehicle Posture Anim Id, or the driver seat's driving/steering Ids. |
| `modkit_set_vehicle_seat_anim`Set a seat's Vehicle Posture Anim Id, or the driver seat's driving/steering Ids. |

Adding and removing slot points is editor-only; the MCP tools edit values in place. Move slots through the workspace or these tools rather than hand-editing the packaged patch, which is easy to leave in an inconsistent state.

---

### 08. Data reference

- [EB1SlotType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1slottype) - the slot types, including `Interaction` and `Fx`.
- [FB1SlotComponentData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1slotcomponentdata) - everything one slot carries.
- [FB1InteractionSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionslotdata) - the interaction rules: tags, slot group, age, space requirements.
- [FB1FxSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1fxslotdata) - the FX side of a slot.
