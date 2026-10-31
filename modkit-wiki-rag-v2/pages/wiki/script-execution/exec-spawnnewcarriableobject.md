---
document_id: "f518c21cc423e6833fe915e01f57623eaf0d1d04791696be66c1dba88edf7d2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnnewcarriableobject"
title: "Execute_SpawnNewCarriableObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "f0c5a1fd9a1594d176f32bf35a2161af2d0ded5fcaf0a840958dcedddd7d7217"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnnewcarriableobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns a new CarriableObject with the specified ObjectId and attaches it to the BaseObject character. If spawning or attachment fails, the object is destroyed and an error is logged.

# Parameters

| ParameterDescriptionBaseObjectCharacter entity to receive the spawned carriable objectS1ObjectId of the carriable object to spawn |
| --- |
| BaseObjectCharacter entity to receive the spawned carriable objectS1ObjectId of the carriable object to spawn |
| S1ObjectId of the carriable object to spawn |

# Examples

| DescriptionBaseObjectCommandS1Spawn a book for characterSelfSpawnNewCarriableObjectBook_Novel_001Spawn a phone for target characterTargetSpawnNewCarriableObjectPhone_Smart_01 |
| --- |
| Spawn a book for characterSelfSpawnNewCarriableObjectBook_Novel_001Spawn a phone for target characterTargetSpawnNewCarriableObjectPhone_Smart_01 |
| Spawn a phone for target characterTargetSpawnNewCarriableObjectPhone_Smart_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
