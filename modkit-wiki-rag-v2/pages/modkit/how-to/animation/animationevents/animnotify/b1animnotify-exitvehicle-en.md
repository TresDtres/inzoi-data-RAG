---
document_id: "8cb154d351318f88a71cc01cbb6490f961315a93d32ee63c9e02fcc248c5cff8"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-exitvehicle-en"
title: "B1AnimNotify_ExitVehicle"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:24+00:00"
content_sha256: "498315504a8d980a3ce2e3c3905622bb182583139390cae35282254234003db1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-exitvehicle-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ExitVehicle.h / .cpp` **Base Class:** `UAnimNotify`

> **Note:** Data extraction only — no runtime logic implemented yet (as of 240328).

## Purpose

Marker notify that flags the exact frame at which a character exits a vehicle. The vehicle system reads this notify to complete the disembarking transition.

## Editor Properties

| PropertyTypeDefaultDescription`VehicleSeat``FName`—Seat identifier the character is leaving |
| --- |
| `VehicleSeat``FName`—Seat identifier the character is leaving |

## Related

- `B1AnimNotify_EnterVehicle` — marks the boarding frame
- See `Tech:b1-vehicle` for the vehicle system architecture
