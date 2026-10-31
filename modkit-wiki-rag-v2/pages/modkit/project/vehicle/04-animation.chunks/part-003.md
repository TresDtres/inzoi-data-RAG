---
document_id: "cbb40b21b9476a06acea7460e01979f7db15fe8381a891c1fd7fcecb36aa3a3e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/project/vehicle/04-animation"
title: "Animation"
section: "modkit/project"
breadcrumb: ["ModKit Documentation", "ModKit", "Project", "Vehicle"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:40+00:00"
content_sha256: "822110443505fc9209c4a59069c074faf14ccf7064df0e0ab0e2d09a137592e2"
chunk: 3
chunk_count: 3
page_type: "article"
route: "modkit/project/vehicle/04-animation"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

| ToolUse`modkit_set_vehicle_animation`Author a part animation from a delta: part, state, location/rotation offset, duration, smoothing.`modkit_create_vehicle_template`Split off a private template up front, before any template-level edit.`modkit_set_vehicle_seat_anim`Set a passenger animation Id on a seat: posture, driving, reverse or steering.`modkit_list_vehicle_components`Reports each seat's current passenger Ids, and only the fields that apply to it. |
| --- |
| `modkit_set_vehicle_animation`Author a part animation from a delta: part, state, location/rotation offset, duration, smoothing.`modkit_create_vehicle_template`Split off a private template up front, before any template-level edit.`modkit_set_vehicle_seat_anim`Set a passenger animation Id on a seat: posture, driving, reverse or steering.`modkit_list_vehicle_components`Reports each seat's current passenger Ids, and only the fields that apply to it. |
| `modkit_create_vehicle_template`Split off a private template up front, before any template-level edit.`modkit_set_vehicle_seat_anim`Set a passenger animation Id on a seat: posture, driving, reverse or steering.`modkit_list_vehicle_components`Reports each seat's current passenger Ids, and only the fields that apply to it. |
| `modkit_set_vehicle_seat_anim`Set a passenger animation Id on a seat: posture, driving, reverse or steering.`modkit_list_vehicle_components`Reports each seat's current passenger Ids, and only the fields that apply to it. |
| `modkit_list_vehicle_components`Reports each seat's current passenger Ids, and only the fields that apply to it. |

Shaping the curve by hand is editor-only. The tool gives you the seed; the inline curve editor gives you the finish.

---

### 12. Data reference

- [VehicleTemplate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/vehicletemplate) - where a vehicle's animated parts are listed.
- [FB1VehiclePart](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclepart) - one animated part and the meshes it moves.
- [FB1VehiclePartState](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1vehiclepartstate) - one state of that part.
- [EB1VehiclePartType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1vehicleparttype) - the parts that can be animated.
