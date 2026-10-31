---
document_id: "567847a6d89e4ab73c4a4c29d9e1c364da2122d52e3c512625438be1657bd460"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-attachactor-en"
title: "B1AnimNotify_AttachActor"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:22+00:00"
content_sha256: "940d4396bb2fdba5d2f31084970943ac00209492a4bd14c3612b7987a3655cc0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-attachactor-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachActor.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Spawns an Actor of the specified class and attaches it to a named socket on the character's Skeletal Mesh at the notify frame. The actor persists until explicitly removed by `B1AnimNotify_DetachActor`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_AttachActor`.
3. Click the notify icon to open the **Details panel** and configure the properties below.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket on the Skeletal Mesh to attach the actor to`ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor; used by `B1AnimNotify_DetachActor` to find and remove it`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| --- |
| `SocketName``FName`—Socket on the Skeletal Mesh to attach the actor to`ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor; used by `B1AnimNotify_DetachActor` to find and remove it`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor; used by `B1AnimNotify_DetachActor` to find and remove it`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `ActorTag``FName`—Tag assigned to the spawned actor; used by `B1AnimNotify_DetachActor` to find and remove it`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `Scale``FVector`(1,1,1)Scale of the spawned actor |

## Behavior

At the notify frame, the actor is spawned in the world and then `AttachToComponent()` is called to attach it to the specified socket of the character's Skeletal Mesh. The actor remains attached until removed by `B1AnimNotify_DetachActor` (which matches on `ActorTag`).

## Related

- `B1AnimNotify_DetachActor` — removes actors by tag
- `B1AnimNotifyState_AttachDetachActor` — state variant that auto-detaches at end of range
