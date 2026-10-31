---
document_id: "294f88e1e36b14e2f34a7d87fa29cf853bbb6220f65886266440ad7c081138ef"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachtemporarymesh-en"
title: "B1AnimNotifyState_AttachTemporaryMesh"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:27+00:00"
content_sha256: "8ee3a66d076cc1b74d2c982c00119743ebf2ed201369966b1b6e830430093efe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-attachtemporarymesh-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_AttachTemporaryMesh.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Attaches a "temporary mesh" to a socket for the duration of the notify range. Unlike `AttachDetachMesh`, the mesh asset is **not set in the notify** — it is resolved at runtime from `UB1AttachMeshComponent::GetCachedTemporaryMeshId()`. This allows the same notify to show different props depending on the current interaction context (e.g., whatever food item the character is currently serving).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_AttachTemporaryMesh`.
3. Set socket and offset properties. The mesh asset itself is determined at runtime.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket to attach the temporary mesh to`LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| --- |
| `SocketName``FName`—Socket to attach the temporary mesh to`LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `LocationOffset``FVector`(0,0,0)Local position offset`RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `RotationOffset``FRotator`(0,0,0)Local rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh |
| `Scale``FVector`(1,1,1)Scale of the spawned mesh |

## Behavior

| CallbackAction`NotifyBegin`Calls `UB1AttachMeshComponent::GetCachedTemporaryMeshId()`, loads the mesh from `UB1TemporaryMeshDataAsset`, spawns `AStaticMeshActor`, attaches to socket`NotifyEnd`Destroys the spawned actor |
| --- |
| `NotifyBegin`Calls `UB1AttachMeshComponent::GetCachedTemporaryMeshId()`, loads the mesh from `UB1TemporaryMeshDataAsset`, spawns `AStaticMeshActor`, attaches to socket`NotifyEnd`Destroys the spawned actor |
| `NotifyEnd`Destroys the spawned actor |

## Related

- `B1AnimNotifyState_AttachDetachMesh` — hardcoded mesh reference variant
- `B1AnimNotifyState_AttachDetachMeshByData` — key-based data table lookup variant
