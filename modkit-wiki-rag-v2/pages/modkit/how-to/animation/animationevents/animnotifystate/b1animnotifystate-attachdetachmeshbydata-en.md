---
document_id: "0fcc672ff7524e77b1899672265e589efc51b00d963decfd2b067838bfe648a6"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachmeshbydata-en"
title: "B1AnimNotifyState_AttachDetachMeshByData"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:26+00:00"
content_sha256: "861d10530d9db1ce31fe4dcac97c5911b4b6247a97f149961145d8edd2a950c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachdetachmeshbydata-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_AttachMesh.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Data-driven variant of `B1AnimNotifyState_AttachDetachMesh`. Instead of referencing a mesh asset directly, it uses a `AttachMeshVariationKey` to look up the mesh from `FB1AnimAttachMeshTableRow` at runtime. Useful when the same notify needs to show different meshes depending on context (e.g., different tool types).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachDetachMeshByData`.
3. Drag the right edge to set the duration, then configure properties in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket to attach the mesh to`AttachMeshVariationKey``FName`—Key used to look up the mesh in `FB1AnimAttachMeshTableRow` via `DT_FINDROW``LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| --- |
| `SocketName``FName`—Socket to attach the mesh to`AttachMeshVariationKey``FName`—Key used to look up the mesh in `FB1AnimAttachMeshTableRow` via `DT_FINDROW``LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `AttachMeshVariationKey``FName`—Key used to look up the mesh in `FB1AnimAttachMeshTableRow` via `DT_FINDROW``LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `Scale``FVector`(1,1,1)Scale of the spawned mesh |

## Behavior

| CallbackAction`NotifyBegin`Looks up `FB1AnimAttachMeshTableRow` using `AttachMeshVariationKey`, loads the mesh, spawns `AStaticMeshActor`, attaches to socket`NotifyEnd`Destroys the spawned mesh actor |
| --- |
| `NotifyBegin`Looks up `FB1AnimAttachMeshTableRow` using `AttachMeshVariationKey`, loads the mesh, spawns `AStaticMeshActor`, attaches to socket`NotifyEnd`Destroys the spawned mesh actor |
| `NotifyEnd`Destroys the spawned mesh actor |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — direct mesh reference variant
