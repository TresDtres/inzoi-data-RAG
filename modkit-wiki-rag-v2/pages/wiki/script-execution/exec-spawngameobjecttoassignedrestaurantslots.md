---
document_id: "f21f9c88f386084cb1881050814a35fb06f36e8b29a28bd88368bc1d6879fcb3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots"
title: "Execute_SpawnGameObjectToAssignedRestaurantSlots"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:58+00:00"
content_sha256: "e290e1b025c9b89327d8a79496fb7c7e174062b4f6379a604511f23146d88b33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns S1 objects only into table slots connected to seats in the current restaurant assignment (BL-58952). The assignment is used instead of physical posture occupancy, so a menu is still placed for a guest who has been assigned a seat but has not finished sitting down yet or is temporarily standing.

# Parameters

| ParameterDescriptionBaseObjectTarget is the assigned restaurant table; Self is recorded as the spawned object's ownerS1ObjectId to spawnS2Optional ObjectSlotId filter. None accepts every compatible connected object slot |
| --- |
| BaseObjectTarget is the assigned restaurant table; Self is recorded as the spawned object's ownerS1ObjectId to spawnS2Optional ObjectSlotId filter. None accepts every compatible connected object slot |
| S1ObjectId to spawnS2Optional ObjectSlotId filter. None accepts every compatible connected object slot |
| S2Optional ObjectSlotId filter. None accepts every compatible connected object slot |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
