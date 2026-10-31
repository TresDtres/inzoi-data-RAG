---
document_id: "4bbfd476e4f647598292a20909d0ffed013fa0ffc7ae739930e47051a4812714"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-hideoriginmesh-en"
title: "B1AnimNotifyState_HideOriginMesh"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "e01670ac190aa31cadbaac2fb938d467c98f8dad750424f293b0df494a884da6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-hideoriginmesh-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Hides the character's original Skeletal Mesh component (or specified parts of it) while the notify range is active, then restores visibility when the range ends. Typically paired with `B1AnimNotifyState_AttachDetachMesh` to swap the visible mesh during a specific animation phase.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_HideOriginMesh`.
3. Set the duration to match the mesh-swap period.

## Behavior

| CallbackAction`NotifyBegin`Sets the specified mesh component(s) visibility to hidden`NotifyEnd`Restores visibility |
| --- |
| `NotifyBegin`Sets the specified mesh component(s) visibility to hidden`NotifyEnd`Restores visibility |
| `NotifyEnd`Restores visibility |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — often used together to show a replacement mesh while this hides the original
