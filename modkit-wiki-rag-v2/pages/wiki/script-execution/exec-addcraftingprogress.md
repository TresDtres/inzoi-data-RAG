---
document_id: "7fa68e92cf6e3579d0815eff28435c5e4a9939c0ed038ce5940482e674e3c31f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress"
title: "Execute_AddCraftingProgress"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:05+00:00"
content_sha256: "ea5c69ce96612b22f5f182dbcbe9a48c04fb95cdb234e4f6b40eab87ad832768"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcraftingprogress"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Calculates the crafting progress increment for a single tick and adds it to the Progress stat of the current craft object being processed by the BaseObject actor. The progress amount is computed by B2CraftingHelper::CalculateProgress using the actor, the current craft object, and F1.

# Parameters

| ParameterDescriptionBaseObjectThe actor performing the crafting operation (Self or Target)F1Tick duration in seconds used to calculate the progress increment for this tick |
| --- |
| BaseObjectThe actor performing the crafting operation (Self or Target)F1Tick duration in seconds used to calculate the progress increment for this tick |
| F1Tick duration in seconds used to calculate the progress increment for this tick |

# Examples

| DescriptionBaseObjectCommandF1Add one tick of crafting progress to self (0.1s tick)SelfAddCraftingProgress0.1Add a half-second tick of progress for the targetTargetAddCraftingProgress0.5Advance crafting progress by one full secondSelfAddCraftingProgress1.0 |
| --- |
| Add one tick of crafting progress to self (0.1s tick)SelfAddCraftingProgress0.1Add a half-second tick of progress for the targetTargetAddCraftingProgress0.5Advance crafting progress by one full secondSelfAddCraftingProgress1.0 |
| Add a half-second tick of progress for the targetTargetAddCraftingProgress0.5Advance crafting progress by one full secondSelfAddCraftingProgress1.0 |
| Advance crafting progress by one full secondSelfAddCraftingProgress1.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[ChangeObjectWeathering](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
