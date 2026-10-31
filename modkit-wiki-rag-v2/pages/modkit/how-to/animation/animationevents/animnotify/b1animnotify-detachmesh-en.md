---
document_id: "c0dd3ec0126c69a58edfb33ef40df6e8151823e66ba6f00f9ef0594a8dc6d0ee"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-detachmesh-en"
title: "B1AnimNotify_DetachMesh (Deprecated)"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:23+00:00"
content_sha256: "7130d8bfb6b343dd5db3d8ee24a35d5a8c09bff33c41933ab1c426f67dd57388"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-detachmesh-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_DetachMesh.h / .cpp` **Base Class:** `UAnimNotify`

> **Deprecated.** Use `B1AnimNotifyState_AttachDetachMesh` instead, which handles both attach and detach automatically within a single state range.

## Purpose

Detaches and destroys all Static Mesh actors attached to the specified socket on the character's Skeletal Mesh.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket name whose attached meshes will be detached and removed |
| --- |
| `SocketName``FName`—Socket name whose attached meshes will be detached and removed |

## Behavior

At the notify frame, finds all `AStaticMeshActor` instances attached to the named socket and destroys them.

## Related

- `B1AnimNotifyState_AttachDetachMesh` — preferred replacement (auto attach + detach)
- `B1AnimNotify_AttachMesh` — spawns the mesh that this notify removes
