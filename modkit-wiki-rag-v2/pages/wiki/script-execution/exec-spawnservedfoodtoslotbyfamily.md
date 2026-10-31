---
document_id: "8e41e37bc620ef84db9f9f5a4ec80c22c708c3302f381516a142393db956b3ab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnservedfoodtoslotbyfamily"
title: "Execute_SpawnServedFoodToSlotByFamily"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:59+00:00"
content_sha256: "8b8054f1e0c0d488f6c2f5269904e6e38c0adb894a533fe4148b7339f624c0d9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-spawnservedfoodtoslotbyfamily"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Same as SpawnServedFoodToSlot, but overrides the serving count with the number of household members currently located at the same site as the NonBaseObject character (minimum 1), instead of using the food's own NumServings.

# Parameters

| ParameterDescriptionBaseObjectThe GameObject whose slots will receive the spawned served foodS1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| --- |
| BaseObjectThe GameObject whose slots will receive the spawned served foodS1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| S1Optional ObjectSlotId to target; if empty, an empty slot matching the food's ObjectCategory is usedS2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |
| S2Optional State to apply to each spawned food after spawning, e.g. "Saleable_HHB" |

# Notes

- The character holding the food is resolved internally via ScriptContext (NonBaseObject).
- Serving count = number of household members located at the character's site (falls back to 1 if the count cannot be determined).

# Examples

| DescriptionBaseObjectCommandS1S2Serve food onto Target sized for the family present at the siteTargetSpawnServedFoodToSlotByFamily |
| --- |
| Serve food onto Target sized for the family present at the siteTargetSpawnServedFoodToSlotByFamily |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)
