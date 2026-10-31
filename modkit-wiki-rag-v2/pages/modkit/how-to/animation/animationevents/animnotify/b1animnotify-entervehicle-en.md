---
document_id: "1e044f2ee8c388ae4ef262860e8461213afd66bca9196a57a48f2d3886403115"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-entervehicle-en"
title: "B1AnimNotify_EnterVehicle"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:24+00:00"
content_sha256: "1e0dd6b17f72930e75618d7afaac768ef60bc24b90af8ac767b2d6851b087bbe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-entervehicle-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_EnterVehicle.h / .cpp` **Base Class:** `UAnimNotify`

> **Note:** Data extraction only — no runtime logic implemented yet (as of 240328).

## Purpose

Marker notify that flags the exact frame at which a character enters a vehicle seat. The vehicle system reads this notify to determine when to complete the boarding transition.

## Editor Properties

| PropertyTypeDefaultDescription`VehicleSeat``FName`—Seat identifier within the vehicle |
| --- |
| `VehicleSeat``FName`—Seat identifier within the vehicle |

## Related

- `B1AnimNotify_ExitVehicle` — marks the exit frame
- See `Tech:b1-vehicle` for the vehicle system architecture
