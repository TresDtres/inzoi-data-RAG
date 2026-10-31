---
document_id: "0d8df5ef56c8291a72752626522b0c7c1b3940faf5c209d398be21707cbcaf20"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachactor-en"
title: "B1AnimNotifyState_AttachDetachActor"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:26+00:00"
content_sha256: "1f5800c254176923dbfcec52d1b659728cbdbc35060edbb26312520a87e46002"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachactor-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachActor.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Attaches a spawned Actor to a socket for the duration of the notify range, then automatically detaches and destroys it when the range ends. Preferred over the `B1AnimNotify_AttachActor` + `B1AnimNotify_DetachActor` pair.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachActor`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket on the Skeletal Mesh to attach the actor to`ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| --- |
| `SocketName``FName`—Socket on the Skeletal Mesh to attach the actor to`ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `ActorClass``UClass*`—Class of the actor to spawn`ActorTag``FName`—Tag assigned to the spawned actor`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `ActorTag``FName`—Tag assigned to the spawned actor`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned actor |
| `Scale``FVector`(1,1,1)Scale of the spawned actor |

## Behavior

| CallbackAction`NotifyBegin`Spawns the actor and attaches it to the socket`NotifyEnd`Detaches and destroys the actor — called even on montage interruption |
| --- |
| `NotifyBegin`Spawns the actor and attaches it to the socket`NotifyEnd`Detaches and destroys the actor — called even on montage interruption |
| `NotifyEnd`Detaches and destroys the actor — called even on montage interruption |

## Related

- `B1AnimNotify_AttachActor` — single-frame spawn (requires manual `DetachActor` notify)
- `B1AnimNotify_DetachActor` — manual detach counterpart
