---
document_id: "96e061723c1c0519ce8c131cc1b2c53c4ad7d30b3c110a385427c6ba5dfe39bf"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-cameraoffset-en"
title: "B1AnimNotify_CameraOffset"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:22+00:00"
content_sha256: "5626fb8a9e5b0ee7f22f33c0b9b91cce5288f9bd172be06190cd5b9554cdc779"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-cameraoffset-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_CameraOffset.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Applies a camera position offset to the local player's shoulder-view camera at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_CameraOffset`.
3. Set `LocationOffset` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`LocationOffset``FVector`(0,0,0)World-space offset applied to the shoulder camera position |
| --- |
| `LocationOffset``FVector`(0,0,0)World-space offset applied to the shoulder camera position |

## Behavior

At the notify frame, calls `AB1Player::SetShoulderViewCameraOffset(LocationOffset)` on the owning pawn. Only executes for the locally controlled player — no effect on AI or remote characters.
