---
document_id: "02c6ef90bb9fdcb9ba2df215e973d34ffa5913581f62afdd5d6ffaef0b80267b"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-detachactor-en"
title: "B1AnimNotify_DetachActor"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "da212499ed4f79c09bef3677233a613ee627cf73029aa51063ca6394e09e1724"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-detachactor-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DetachActor.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Detaches and destroys all actors attached to the character mesh whose tag matches `ActorTag`. Intended as the cleanup counterpart to `B1AnimNotify_AttachActor`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_DetachActor`.
3. Set `ActorTag` to match the tag used in the corresponding `B1AnimNotify_AttachActor`.

## Editor Properties

| PropertyTypeDefaultDescription`ActorTag``FName`—Tag identifying which attached actors to detach and destroy |
| --- |
| `ActorTag``FName`—Tag identifying which attached actors to detach and destroy |

## Behavior

At the notify frame, iterates over all actors currently attached to the character's Skeletal Mesh and destroys those whose actor tag matches `ActorTag`.

## Related

- `B1AnimNotify_AttachActor` — spawns and attaches actors
- `B1AnimNotifyState_AttachDetachActor` — state variant that handles attach/detach automatically without needing this notify
