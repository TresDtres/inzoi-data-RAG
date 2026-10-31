---
document_id: "c3b7f3a8cd2e2ad9ea857f521eb53b5abc00c6abd8f8f11f1e21b252426d9b9e"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotify/b1animnotify-attachmesh-en"
title: "B1AnimNotify_AttachMesh"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotify"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:22+00:00"
content_sha256: "6a83fcd2a5f88b1951d9c8102b955fdd951f616b1506b416b962285ac99ef5a1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotify/b1animnotify-attachmesh-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp` **Base Class:** `UAnimNotify`

## Purpose

Attaches a Static Mesh to a named socket on the character's Skeletal Mesh at the notify frame.

> **Prefer** `B1AnimNotifyState_AttachDetachMesh` for new work — it handles detachment automatically at the end of its range, avoiding the need for a separate detach notify.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_AttachMesh`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket on the Skeletal Mesh to attach the mesh to`StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| --- |
| `SocketName``FName`—Socket on the Skeletal Mesh to attach the mesh to`StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| `StaticMesh``UStaticMesh*`—Static mesh asset to spawn and attach`LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| `LocationOffset``FVector`(0,0,0)Local position offset relative to the socket`RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset relative to the socket`Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| `Scale``FVector`(1,1,1)Scale of the spawned mesh`bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |
| `bDeleteOnlySelfCreatedMesh``bool`falseIf true, only removes meshes spawned by this notify instance (leaves others intact) |

## Behavior

At the notify frame, spawns an `AStaticMeshActor`, sets the provided mesh, configures LOD and visibility, then attaches it to the named socket. To remove it, use `B1AnimNotify_DetachMesh` (deprecated) or place a `B1AnimNotifyState_AttachDetachMesh` instead.

## Related

- `B1AnimNotify_DetachMesh` — removes meshes by socket name *(deprecated)*
- `B1AnimNotifyState_AttachDetachMesh` — preferred state variant with auto-detach
- `B1AnimNotifyState_AttachDetachMeshByData` — data-table-driven variant
