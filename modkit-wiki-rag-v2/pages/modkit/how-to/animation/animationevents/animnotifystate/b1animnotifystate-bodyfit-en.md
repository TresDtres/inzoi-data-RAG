---
document_id: "f34cb83c16c4d2e5cf2cb1ba2d12c27d82308c05907753513debb268df7e2da9"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-bodyfit-en"
title: "B1AnimNotifyState_BodyFit"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "9c3e9089e078d1d751d158010d4d8cd83d0daeb30c613d58dc255d5990a5ae2b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-bodyfit-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_BodyFit.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Activates a bone IK constraint that makes a specific bone chain conform to a target socket position (e.g., hand gripping a handle, foot planting on a surface). Active for the duration of the notify range with smooth blend-in and blend-out.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_BodyFit`.
3. Drag the right edge to set the duration. Configure properties in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`ChainBone``EB1ChainBoneType``Invalid`Bone chain to apply IK to (e.g., right hand, left hand, right foot)`TargetSocket``FName`—Socket name on the scene that the bone chain should aim toward`BlendIn``float`0.25Blend-in duration (normalized 0–1, clamped)`BlendOut``float`0.25Blend-out duration (normalized 0–1, clamped)`Weight``float`1.0Maximum IK weight at full blend (min: 0) |
| --- |
| `ChainBone``EB1ChainBoneType``Invalid`Bone chain to apply IK to (e.g., right hand, left hand, right foot)`TargetSocket``FName`—Socket name on the scene that the bone chain should aim toward`BlendIn``float`0.25Blend-in duration (normalized 0–1, clamped)`BlendOut``float`0.25Blend-out duration (normalized 0–1, clamped)`Weight``float`1.0Maximum IK weight at full blend (min: 0) |
| `TargetSocket``FName`—Socket name on the scene that the bone chain should aim toward`BlendIn``float`0.25Blend-in duration (normalized 0–1, clamped)`BlendOut``float`0.25Blend-out duration (normalized 0–1, clamped)`Weight``float`1.0Maximum IK weight at full blend (min: 0) |
| `BlendIn``float`0.25Blend-in duration (normalized 0–1, clamped)`BlendOut``float`0.25Blend-out duration (normalized 0–1, clamped)`Weight``float`1.0Maximum IK weight at full blend (min: 0) |
| `BlendOut``float`0.25Blend-out duration (normalized 0–1, clamped)`Weight``float`1.0Maximum IK weight at full blend (min: 0) |
| `Weight``float`1.0Maximum IK weight at full blend (min: 0) |

## Console Variable

`b1.Anim.BodyFit 0` — disables BodyFit globally (useful for debugging IK issues).

## Behavior

| CallbackAction`NotifyBegin`Gets `UB1BonePostProcessAnimInstance`, creates `FB1BodyFitData` from socket transform + chain config, calls `animInstance->StartBodyFitIK(ChainBone, data)``NotifyEnd`Calls `animInstance->StopBodyFitIK(ChainBone, GetUniqueID())` to release the IK constraint |
| --- |
| `NotifyBegin`Gets `UB1BonePostProcessAnimInstance`, creates `FB1BodyFitData` from socket transform + chain config, calls `animInstance->StartBodyFitIK(ChainBone, data)``NotifyEnd`Calls `animInstance->StopBodyFitIK(ChainBone, GetUniqueID())` to release the IK constraint |
| `NotifyEnd`Calls `animInstance->StopBodyFitIK(ChainBone, GetUniqueID())` to release the IK constraint |
