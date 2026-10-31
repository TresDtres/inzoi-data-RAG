---
document_id: "b5669026f4e89e5349b5f6fbf9e714f6b995821ae02b226b985a67ecfc5702d9"
source: "modkit"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playvatanim-en"
title: "B1AnimNotifyState_PlayVATAnim"
section: "modkit/how-to"
breadcrumb: ["ModKit Documentation", "ModKit", "How To", "Animation", "AnimationEvents", "AnimNotifyState"]
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:48:28+00:00"
content_sha256: "ad2f2938a74613d9f7d3f786605f5e12c24ddfad65d4238919a7d74a8fb54dd7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "modkit/how-to/animation/animationevents/animnotifystate/b1animnotifystate-playvatanim-en"
breadcrumb_status: "present"
classification_basis: "breadcrumb_and_url"
---

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotifyState_PlayVATAnim.h / .cpp` **Base Class:** `UAnimNotifyState`

## Purpose

Plays a Vertex Animation Texture (VAT) animation on a spawned Static Mesh Actor for the duration of the notify range. VAT is used for lightweight prop animations that don't require a Skeletal Mesh (e.g., a folding chair, a flag waving).

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify State** → `B1AnimNotifyState_PlayVATAnim`.
3. Assign the `StaticMesh` (must have a VAT material) and set `AnimName` in the **Details panel**.

## Editor Properties

| PropertyTypeDefaultDescription`SocketName``FName`—Socket at which to spawn the mesh`StaticMesh``UStaticMesh*`—Static mesh with a VAT-compatible material`bAttached``bool`falseIf true, the spawned mesh follows the socket during the animation`bSync``bool`falseIf true, synchronizes the VAT start time with the current montage playback position`LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| --- |
| `SocketName``FName`—Socket at which to spawn the mesh`StaticMesh``UStaticMesh*`—Static mesh with a VAT-compatible material`bAttached``bool`falseIf true, the spawned mesh follows the socket during the animation`bSync``bool`falseIf true, synchronizes the VAT start time with the current montage playback position`LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `StaticMesh``UStaticMesh*`—Static mesh with a VAT-compatible material`bAttached``bool`falseIf true, the spawned mesh follows the socket during the animation`bSync``bool`falseIf true, synchronizes the VAT start time with the current montage playback position`LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `bAttached``bool`falseIf true, the spawned mesh follows the socket during the animation`bSync``bool`falseIf true, synchronizes the VAT start time with the current montage playback position`LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `bSync``bool`falseIf true, synchronizes the VAT start time with the current montage playback position`LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `LocationOffset``FVector`(0,0,0)Position offset`RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `RotationOffset``FRotator`(0,0,0)Rotation offset`Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `Scale``FVector`(1,1,1)Scale of the spawned mesh`AnimName``FName`—Name of the VAT animation sequence to play |
| `AnimName``FName`—Name of the VAT animation sequence to play |

## Behavior

| CallbackAction`NotifyBegin`Spawns `AStaticMeshActor` with `UB1AnimToTexComponent`; if `bSync`, calculates the VAT start time from the current montage position; calls `animToTexComponent->PlayAnimSequence(AnimName, startTime)``NotifyEnd`Destroys all spawned actors for this notify instance and cleans up the internal tracking map |
| --- |
| `NotifyBegin`Spawns `AStaticMeshActor` with `UB1AnimToTexComponent`; if `bSync`, calculates the VAT start time from the current montage position; calls `animToTexComponent->PlayAnimSequence(AnimName, startTime)``NotifyEnd`Destroys all spawned actors for this notify instance and cleans up the internal tracking map |
| `NotifyEnd`Destroys all spawned actors for this notify instance and cleans up the internal tracking map |
