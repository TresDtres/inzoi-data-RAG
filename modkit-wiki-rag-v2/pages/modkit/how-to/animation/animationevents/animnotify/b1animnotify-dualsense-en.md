---
document_id: "99160bb7b7f3d07af895e8028765233f31033ada33e2b05bd52219d012db7046"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-dualsense-en"
title: "B1AnimNotify_DualSense"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "22e2f16bf877067c2aff769be3779821719d35d6dba0c4617f4867e1dd98d7ce"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-dualsense-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DualSense.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Fires a DualSense (PS5 controller) haptic feedback preset once at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_DualSense`.
3. Set `PresetId` to the desired haptic preset ID in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`PresetId``FName`—ID of the DualSense haptic preset defined in the DualSense data table |
| --- |
| `PresetId``FName`—ID of the DualSense haptic preset defined in the DualSense data table |

## Behavior

Calls `UB1DualSenseManager::PlayDualSense(PresetId)` only when the owning pawn is locally controlled. Has no effect on AI characters or remote players.

## Related

- `B1AnimNotifyState_DualSense` — state variant that sustains haptic feedback for a duration and stops it cleanly on end
