---
document_id: "520a2a93b368a7c999c8ebb47faf3f9bad8e81c91216068274f0c6f9a5c14e70"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnnewfoodobject"
title: "Execute_SpawnNewFoodObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "3112cf1482516cebfc18f5d1d5bfebecc42230ebf6b14640574dc8db92808196"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnnewfoodobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns a carriable FoodObject and attaches it to the BaseObject character as if the character picked it up.

# Note

S2 (hand selection) is not currently used; the object is always attached to the right hand via pick-up logic.

# Parameters

| ParameterDescriptionBaseObjectThe character who will receive the spawned foodS1Food ID (FoodTableRow Id) |
| --- |
| BaseObjectThe character who will receive the spawned foodS1Food ID (FoodTableRow Id) |
| S1Food ID (FoodTableRow Id) |

# Examples

| DescriptionBaseObjectCommandS1Spawn PreparedCake01 and attach to SelfSelfSpawnNewFoodObjectPreparedCake01Spawn Soup01 food object for Target characterTargetSpawnNewFoodObjectSoup01 |
| --- |
| Spawn PreparedCake01 and attach to SelfSelfSpawnNewFoodObjectPreparedCake01Spawn Soup01 food object for Target characterTargetSpawnNewFoodObjectSoup01 |
| Spawn Soup01 food object for Target characterTargetSpawnNewFoodObjectSoup01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
