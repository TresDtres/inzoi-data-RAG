---
document_id: "753dab824436b3d71e232022470ec54826d26b611292ddce8bf9d751438d2aac"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-playobjectslotfx-en"
title: "B1AnimNotify_PlayObjectSlotFX"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:25+00:00"
content_sha256: "1ba764e8178f514ebb5ab990d6abb29530c888a33228b21b3d3b6e40b5c44f30"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-playobjectslotfx-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PlayObjectSlotFX.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Plays the FX assigned to a named slot on a target game object. The FX asset and attachment position are defined in the game object's slot data, not in this notify.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_PlayObjectSlotFX`.
3. Set `Target` and `SlotName` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`Target``EB1BaseObject``Target`Which object to target: `Self` or `Target` (interaction target)`SlotName``FName`—Name of the slot whose FX should be triggered |
| --- |
| `Target``EB1BaseObject``Target`Which object to target: `Self` or `Target` (interaction target)`SlotName``FName`—Name of the slot whose FX should be triggered |
| `SlotName``FName`—Name of the slot whose FX should be triggered |

## Behavior

Gets `UB1SlotComponent` from the resolved target actor and calls `TryPlayFx(SlotName)`. The FX asset, position, and parameters are all determined by the slot's configuration in the game object's data table.
