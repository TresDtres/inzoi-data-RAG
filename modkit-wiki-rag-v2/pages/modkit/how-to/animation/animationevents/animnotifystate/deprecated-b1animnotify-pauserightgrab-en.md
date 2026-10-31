---
document_id: "2443b29311488c8c866cbeb539905fe19fe856460cc2c5cc471ac8abb20feb7f"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/deprecated-b1animnotify-pauserightgrab-en"
title: "DEPRECATED_B1AnimNotify_PauseRightGrab (Deprecated)"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:29+00:00"
content_sha256: "97d75cf563a881175aeeb230f4de66e7a31cb24126f9e2522fdf7cda0fbca244"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/deprecated-b1animnotify-pauserightgrab-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_PauseRightGrab.h / .cpp` **Class Name:** `UDEPRECATED_B1AnimNotify_PauseRightGrab` **Base Class:** `UAnimNotifyState`

> **Deprecated.** Use `B1AnimNotifyState_DisableLayeredBlend` instead.

## Purpose

Temporarily disables the global layered blend (used for right-hand grab IK overrides) for the duration of the notify range. Replaced by the more flexible `B1AnimNotifyState_DisableLayeredBlend`.

## Behavior

| CallbackAction`NotifyBegin`Gets `UB1CharacterAnimInstance`, calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, true, ...)``NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, false)` |
| --- |
| `NotifyBegin`Gets `UB1CharacterAnimInstance`, calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, true, ...)``NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, false)` |
| `NotifyEnd`Calls `animInstance->SetLayeredBlendDisabled(EB1LayeredBlendTarget::Global, false)` |

## Migration

Replace with `B1AnimNotifyState_DisableLayeredBlend` and set `bDisableSlotLayer = true`.
