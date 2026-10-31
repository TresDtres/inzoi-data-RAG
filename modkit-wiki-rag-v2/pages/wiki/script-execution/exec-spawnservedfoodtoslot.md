---
document_id: "bcf365dea655dcece8adf5356d4a00623e6631c3a3f861e96e8eaa88ca187712"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnservedfoodtoslot"
title: "Execute_SpawnServedFoodToSlot"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:59+00:00"
content_sha256: "723f5587eccff081cbd718d646cd5e7193fcc227b7c3cbfafd06b9fd0c13f99e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnservedfoodtoslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Takes the FoodObject currently held by the NonBaseObject character and spawns its served form (ServedFood for PreparedFood, or itself if already ServedFood) into an empty or replaceable slot on the BaseObject GameObject. The number of servings spawned matches the food's own NumServings.

# Parameters

| ParameterDescriptionBaseObjectThe GameObject whose slots will receive the spawned served foodS1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| --- |
| BaseObjectThe GameObject whose slots will receive the spawned served foodS1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| S1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| S2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |

# Notes

- The character holding the food is resolved internally via ScriptContext (NonBaseObject).
- See SpawnServedFoodToSlotInternal for slot selection and occupied-slot replacement rules.

# Examples

| DescriptionBaseObjectCommandS1S2Serve held food onto Target's matching empty slotTargetSpawnServedFoodToSlotServe held food into a specific slotTargetSpawnServedFoodToSlotSlot_Table_01 |
| --- |
| Serve held food onto Target's matching empty slotTargetSpawnServedFoodToSlotServe held food into a specific slotTargetSpawnServedFoodToSlotSlot_Table_01 |
| Serve held food into a specific slotTargetSpawnServedFoodToSlotSlot_Table_01 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
