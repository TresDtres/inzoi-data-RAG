---
document_id: "06d4d23d1e7d33ddc341ca6b3b2e23cccf08be69443e31c83325ff55dbcd25fc"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-disablelayeredblend-en"
title: "B1AnimNotifyState_DisableLayeredBlend"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "33d03a3d3d4d7414e88834f5a17b481292e022fdda62c9851ffc8d0e9e20ddbb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-disablelayeredblend-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_DisableLayeredBlend.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Temporarily disables one or more layered blend channels (slot layer, right arm, left arm) for the duration of the notify range. Used in animations where IK or additive layers should not interfere with the base pose (e.g., a full-body pickup animation that shouldn't blend with upper-body idle IK).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_DisableLayeredBlend`.
3. Configure which blend channels to disable in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`bDisableSlotLayer``bool`trueDisables the entire slot layer (overrides the arm-specific options below)`bDisableRightArm``bool`falseDisables only the right arm layer — only editable when `bDisableSlotLayer` is false`bDisableLeftArm``bool`falseDisables only the left arm layer — only editable when `bDisableSlotLayer` is false |
| --- |
| `bDisableSlotLayer``bool`trueDisables the entire slot layer (overrides the arm-specific options below)`bDisableRightArm``bool`falseDisables only the right arm layer — only editable when `bDisableSlotLayer` is false`bDisableLeftArm``bool`falseDisables only the left arm layer — only editable when `bDisableSlotLayer` is false |
| `bDisableRightArm``bool`falseDisables only the right arm layer — only editable when `bDisableSlotLayer` is false`bDisableLeftArm``bool`falseDisables only the left arm layer — only editable when `bDisableSlotLayer` is false |
| `bDisableLeftArm``bool`falseDisables only the left arm layer — only editable when `bDisableSlotLayer` is false |

## Behavior

| CallbackAction`NotifyBegin`Builds `EB1LayeredBlendTarget` flags from checked properties, computes smoothing based on elapsed time since trigger, calls `animInstance->SetLayeredBlendDisabled(target, true, bApplySmoothing)``NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(target, false)` to re-enable all disabled channels |
| --- |
| `NotifyBegin`Builds `EB1LayeredBlendTarget` flags from checked properties, computes smoothing based on elapsed time since trigger, calls `animInstance->SetLayeredBlendDisabled(target, true, bApplySmoothing)``NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(target, false)` to re-enable all disabled channels |
| `NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(target, false)` to re-enable all disabled channels |

## Related

- Replaces the deprecated `UDEPRECATED_B1AnimNotify_PauseRightGrab`
