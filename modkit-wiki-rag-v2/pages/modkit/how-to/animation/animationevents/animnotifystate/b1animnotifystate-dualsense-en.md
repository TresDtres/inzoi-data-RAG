---
document_id: "4688fea77cca1335446d3206fc600d6d88cf7c287ff720efc22b7763f79385b3"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-dualsense-en"
title: "B1AnimNotifyState_DualSense"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "92a959a86f87415130ea4c35131aad8587d821b5ccce8113d7e4b17fea8040d8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-dualsense-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_DualSense.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a DualSense (PS5 controller) haptic feedback preset for the full duration of the notify range, then stops it cleanly when the range ends or the montage is interrupted.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_DualSense`.
3. Set `PresetId` and drag the right edge to cover the desired haptic duration.

## Editor Properties

| PropertyTypeDefaultDescription`PresetId``FName`—ID of the DualSense haptic preset from the data table |
| --- |
| `PresetId``FName`—ID of the DualSense haptic preset from the data table |

## Behavior

| CallbackAction`NotifyBegin`Calls `UB1DualSenseManager::PlayDualSense(PresetId)` — local player only`NotifyEnd`Calls `UB1DualSenseManager::StopDualSense(PresetId)` |
| --- |
| `NotifyBegin`Calls `UB1DualSenseManager::PlayDualSense(PresetId)` — local player only`NotifyEnd`Calls `UB1DualSenseManager::StopDualSense(PresetId)` |
| `NotifyEnd`Calls `UB1DualSenseManager::StopDualSense(PresetId)` |

## Related

- `B1AnimNotify_DualSense` — single-frame trigger variant (no stop on interruption)
