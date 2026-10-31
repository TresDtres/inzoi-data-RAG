---
document_id: "5149f87c89e7ac3e002a149ce2936f02333f6d3344640176db2a1bdc7053ee7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoslot"
title: "Execute_SpawnGameObjectToSlot"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "86be51372cf10308db99cdb55d58b55f1075427fa5f2f174c86baea0cd46b731"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawngameobjecttoslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns the specified object and places it into a slot of the BaseObject. If S2 is None, an empty slot is found automatically based on the object's ObjectCategory. If S2 specifies a SlotId, the object is placed in the matching slot.

# Parameters

| ParameterDescriptionBaseObjectThe game object whose slot will receive the spawned objectS1ObjectId of the game object to spawn into a slotS2Optional SlotId (ObjectSlotTableRow.Id). If None, an empty slot is found based on ObjectCategory |
| --- |
| BaseObjectThe game object whose slot will receive the spawned objectS1ObjectId of the game object to spawn into a slotS2Optional SlotId (ObjectSlotTableRow.Id). If None, an empty slot is found based on ObjectCategory |
| S1ObjectId of the game object to spawn into a slotS2Optional SlotId (ObjectSlotTableRow.Id). If None, an empty slot is found based on ObjectCategory |
| S2Optional SlotId (ObjectSlotTableRow.Id). If None, an empty slot is found based on ObjectCategory |

# Examples

| DescriptionBaseObjectCommandS1S2Spawn a plate into the first available slot on TargetTargetSpawnGameObjectToSlotPlate_Ceramic_01Spawn a book into a specific slot on Target shelfTargetSpawnGameObjectToSlotBook_Novel_001SlotId01Spawn a food item into Self object's available slotSelfSpawnGameObjectToSlotFood_Apple_01 |
| --- |
| Spawn a plate into the first available slot on TargetTargetSpawnGameObjectToSlotPlate_Ceramic_01Spawn a book into a specific slot on Target shelfTargetSpawnGameObjectToSlotBook_Novel_001SlotId01Spawn a food item into Self object's available slotSelfSpawnGameObjectToSlotFood_Apple_01 |
| Spawn a book into a specific slot on Target shelfTargetSpawnGameObjectToSlotBook_Novel_001SlotId01Spawn a food item into Self object's available slotSelfSpawnGameObjectToSlotFood_Apple_01 |
| Spawn a food item into Self object's available slotSelfSpawnGameObjectToSlotFood_Apple_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
