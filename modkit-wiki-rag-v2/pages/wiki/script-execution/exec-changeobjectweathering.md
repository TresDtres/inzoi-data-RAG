---
document_id: "01adc0111ff3e4f6da4717a5484ec3b1a4efea9f01895968a7d0b33fb1d1a28f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeobjectweathering"
title: "Execute_ChangeObjectWeathering"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:19+00:00"
content_sha256: "52eab93f6eec6de0642046372942ceba9c08540222aafd7105663b4f38e08edc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changeobjectweathering"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the weathering (wear) grade of the target GameObject to the specified level.

# Parameters

| ParameterDescriptionBaseObjectThe target GameObject on which the weathering grade will be changed.F1Weathering grade as an integer index into the WeatheringInfos array defined in ObjectWeathering.json. |
| --- |
| BaseObjectThe target GameObject on which the weathering grade will be changed.F1Weathering grade as an integer index into the WeatheringInfos array defined in ObjectWeathering.json. |
| F1Weathering grade as an integer index into the WeatheringInfos array defined in ObjectWeathering.json. |

# Examples

| DescriptionBaseObjectCommandSet the target object’s wear level to index 0.TargetChangeObjectWeatheringSet the target object’s wear level to index 1.TargetChangeObjectWeatheringSet the target object’s wear level to index 2.TargetChangeObjectWeatheringReset the self object’s wear level to the base (0).SelfChangeObjectWeathering |
| --- |
| Set the target object’s wear level to index 0.TargetChangeObjectWeatheringSet the target object’s wear level to index 1.TargetChangeObjectWeatheringSet the target object’s wear level to index 2.TargetChangeObjectWeatheringReset the self object’s wear level to the base (0).SelfChangeObjectWeathering |
| Set the target object’s wear level to index 1.TargetChangeObjectWeatheringSet the target object’s wear level to index 2.TargetChangeObjectWeatheringReset the self object’s wear level to the base (0).SelfChangeObjectWeathering |
| Set the target object’s wear level to index 2.TargetChangeObjectWeatheringReset the self object’s wear level to the base (0).SelfChangeObjectWeathering |
| Reset the self object’s wear level to the base (0).SelfChangeObjectWeathering |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoObject Spawn & Destroy[AddCraftingProgress](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcraftingprogress)[DeliverFreelanceCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-deliverfreelancecraftobject)[DespawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-despawngameobject)[DestroyCarriableObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycarriableobject)[DestroyChildrenObjects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroychildrenobjects)[DestroyCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-destroycraftobject)[PublishCraftObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-publishcraftobject)[SetCraftObjectVisibility](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setcraftobjectvisibility)[SetInvisible](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setinvisible)[SpawnFakeObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawnfakeobject)[SpawnGameObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobject)[SpawnGameObjectToAssignedRestaurantSlots](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-spawngameobjecttoassignedrestaurantslots)
