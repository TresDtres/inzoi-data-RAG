---
document_id: "01fdb1dbb8c76ad95a4d5739921b81c5c86af46da9bece73a86ac59b52f9bf71"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-changevehiclepartstate-en"
title: "B1AnimNotify_ChangeVehiclePartState"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "fd91e7b69cf18c8e39da28aa942e5741780181844cdc968937641cfa48ceeb9d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-changevehiclepartstate-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeVehiclePartState.h / .cpp` **Base Class:** `UAnimNotify`

> **Note:** Implementation body is empty — data extraction only as of the current version.

## Purpose

Changes the visual state of a vehicle part (e.g., open/close a door) at the notify frame.

## Editor Properties

| PropertyTypeDefaultDescription`PartType``EB1VehiclePartType``Invalid`Which vehicle part to affect`PartState``FName`—New state name to apply to that part |
| --- |
| `PartType``EB1VehiclePartType``Invalid`Which vehicle part to affect`PartState``FName`—New state name to apply to that part |
| `PartState``FName`—New state name to apply to that part |

## Related

- See also `Tech:b1-vehicle` for the vehicle system architecture.
