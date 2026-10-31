---
document_id: "f45f199f6248357c46900e901c0a7eb019a30b0ca7dc88bbe9a6310b9b7958ab"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachmesh-en"
title: "B1AnimNotifyState_AttachDetachMesh"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:26+00:00"
content_sha256: "ee6921f5c764439f2f08d78a9c3c7ab8215bca2a2597c5823242bc45c8ebe566"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachmesh-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Attaches a Static Mesh to a socket for the duration of the notify range, then automatically detaches and destroys it on end. Preferred over `B1AnimNotify_AttachMesh` + `B1AnimNotify_DetachMesh`.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachMesh`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket on the Skeletal Mesh to attach to`StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| --- |
| `SocketName``FName`—Socket on the Skeletal Mesh to attach to`StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| `StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| `LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| `Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |
| `bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance |

## Behavior

| CallbackAction`NotifyBegin`Spawns `AStaticMeshActor`, configures LOD/visibility, attaches to socket`NotifyEnd`Destroys the spawned mesh actor — called even on montage interruption |
| --- |
| `NotifyBegin`Spawns `AStaticMeshActor`, configures LOD/visibility, attaches to socket`NotifyEnd`Destroys the spawned mesh actor — called even on montage interruption |
| `NotifyEnd`Destroys the spawned mesh actor — called even on montage interruption |

## Related

- `B1AnimNotifyState_AttachDetachMeshByData` — data-table-driven variant (no direct mesh reference)
- `B1AnimNotifyState_HideOriginMesh` — hides the character's original mesh while active
- `B1AnimNotifyState_AttachTemporaryMesh` — runtime-resolved mesh variant
