---
document_id: "8e7b3a093848d68a56febea25e180b12544d93cbe3f894f30d8b634421a3d755"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject"
title: "Execute_SpawnGameObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:57+00:00"
content_sha256: "da42b01c6cdd5cc1706870153f4d72832fa1ff4dd8b1719c3dc58d6040614ee6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawngameobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns a GameObject at a safe location near the BaseObject character within the specified range. Finds a safe space on the same floor and spawns the object there. If the object is a CarriableObject, also updates the site's pathfinding grid information. Optionally applies a state after spawning.

# Parameters

| ParameterDescriptionBaseObjectThe character used as the origin for finding a safe spawn locationS1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Minimum spawn range in cm from BaseObjectF2Maximum spawn range in cm from BaseObject |
| --- |
| BaseObjectThe character used as the origin for finding a safe spawn locationS1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Minimum spawn range in cm from BaseObjectF2Maximum spawn range in cm from BaseObject |
| S1ObjectId of the game object to spawnS2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Minimum spawn range in cm from BaseObjectF2Maximum spawn range in cm from BaseObject |
| S2Optional "StateGroupId,StateId" (comma-separated) to apply after spawningF1Minimum spawn range in cm from BaseObjectF2Maximum spawn range in cm from BaseObject |
| F1Minimum spawn range in cm from BaseObjectF2Maximum spawn range in cm from BaseObject |
| F2Maximum spawn range in cm from BaseObject |

# Examples

| DescriptionBaseObjectCommandS1S2F1F2Spawn KitchenRange01 within 500-1000cm rangeSelfSpawnGameObjectKitchenRange01Broken,Broken5001000Spawn KitchenRange01 within 100cm rangeSelfSpawnGameObjectKitchenRange010100 |
| --- |
| Spawn KitchenRange01 within 500-1000cm rangeSelfSpawnGameObjectKitchenRange01Broken,Broken5001000Spawn KitchenRange01 within 100cm rangeSelfSpawnGameObjectKitchenRange010100 |
| Spawn KitchenRange01 within 100cm rangeSelfSpawnGameObjectKitchenRange010100 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
