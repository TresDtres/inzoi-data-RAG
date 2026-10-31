---
document_id: "450ee0ed9e181baf51bec1015f2c234f7e04f3874f18f8bcb0b5e1ce4044be3b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttofront"
title: "Execute_SpawnGameobjectToFront"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "ea9296945400aadf49bad42e9b142fcbfb7e48dc6270ced36d0b95378cee2651"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawngameobjecttofront"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns the specified object at a given distance directly in front of the BaseObject character. The spawned object faces toward the character. Optionally applies a state after spawning.

# Parameters

| ParameterDescriptionBaseObjectThe character in front of whom the object will be spawnedS1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Distance in front of the character to spawn the object (in cm) |
| --- |
| BaseObjectThe character in front of whom the object will be spawnedS1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Distance in front of the character to spawn the object (in cm) |
| S1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Distance in front of the character to spawn the object (in cm) |
| S2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Distance in front of the character to spawn the object (in cm) |
| F1Distance in front of the character to spawn the object (in cm) |

# Examples

| DescriptionBaseObjectCommandS1F1Spawn a gift box 200cm in front of SelfSelfSpawnGameobjectToFrontGiftBox_01200Spawn a table 150cm in front of TargetTargetSpawnGameobjectToFrontTable_Wood_01150Spawn a chair 100cm in front of SelfSelfSpawnGameobjectToFrontChair_Simple_01100 |
| --- |
| Spawn a gift box 200cm in front of SelfSelfSpawnGameobjectToFrontGiftBox_01200Spawn a table 150cm in front of TargetTargetSpawnGameobjectToFrontTable_Wood_01150Spawn a chair 100cm in front of SelfSelfSpawnGameobjectToFrontChair_Simple_01100 |
| Spawn a table 150cm in front of TargetTargetSpawnGameobjectToFrontTable_Wood_01150Spawn a chair 100cm in front of SelfSelfSpawnGameobjectToFrontChair_Simple_01100 |
| Spawn a chair 100cm in front of SelfSelfSpawnGameobjectToFrontChair_Simple_01100 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
