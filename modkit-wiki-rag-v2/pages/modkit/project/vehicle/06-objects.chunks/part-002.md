---
document_id: "946125f426b38b7bb8bf55ded740778b1ef928643375ca047c620f4d0451d454"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/06-objects"
title: "Objects"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:41+00:00"
content_sha256: "702418b6674a2306cb99ded1f63945055a02085be68d5e6c5387098cbc550ac6"
chunk: 2
chunk_count: 2
page_type: "article"
route: "modkit/project/vehicle/06-objects"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ChecklistDoneDid **Show Placement Markers** report every id as valid?✅Are carried objects positioned relative to the vehicle root?✅For a boat, do disembark points sit somewhere standable?✅If I added a chair, is there room in the seat count?✅ |
| --- |
| Did **Show Placement Markers** report every id as valid?✅Are carried objects positioned relative to the vehicle root?✅For a boat, do disembark points sit somewhere standable?✅If I added a chair, is there room in the seat count?✅ |
| Are carried objects positioned relative to the vehicle root?✅For a boat, do disembark points sit somewhere standable?✅If I added a chair, is there room in the seat count?✅ |
| For a boat, do disembark points sit somewhere standable?✅If I added a chair, is there room in the seat count?✅ |
| If I added a chair, is there room in the seat count?✅ |

---

### 08. What the MCP tools cover

| ToolUse`modkit_list_vehicle_components`Returns `seat_objects`, `owned_objects` (each with `object_id` and `vehicle_seat`) and `disembark_points`.`modkit_set_vehicle_component_transform`Move any of them. Carried objects are positioned relative to the vehicle root, the same frame the game reads. |
| --- |
| `modkit_list_vehicle_components`Returns `seat_objects`, `owned_objects` (each with `object_id` and `vehicle_seat`) and `disembark_points`.`modkit_set_vehicle_component_transform`Move any of them. Carried objects are positioned relative to the vehicle root, the same frame the game reads. |
| `modkit_set_vehicle_component_transform`Move any of them. Carried objects are positioned relative to the vehicle root, the same frame the game reads. |

Adding and removing entries is editor-only.

---

### 09. Data reference

- [Object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object) - the table an **Object ID** has to appear in.
- [VehicleTemplate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicletemplate) - where the seat count lives.
- [FB1VehicleAssetDescription](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehicleassetdescription) - dimensions and `MaxSeatNum`.
