---
document_id: "52272ce40f1c79141e02a0523f28a4ce84be512afa0a588cc1c5494a29d8f881"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid"
title: "Execute_CacheTemporaryMeshId"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:17+00:00"
content_sha256: "d56bd4ff8cb1d7eb71fd32ad88b35f241ff7e86c4baf963206ec5a8bb32a0a01"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-cachetemporarymeshid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Caches a temporary mesh ID in the AttachMeshComponent of the BaseObject character. This is used to store a mesh ID temporarily so it can be applied or referenced later without permanently modifying the character's appearance data.

# Parameters

| ParameterDescriptionBaseObjectThe character whose AttachMeshComponent will cache the mesh ID (Self or Target)S1Temporary mesh ID to cache (e.g., a mesh row key from the mesh data table) |
| --- |
| BaseObjectThe character whose AttachMeshComponent will cache the mesh ID (Self or Target)S1Temporary mesh ID to cache (e.g., a mesh row key from the mesh data table) |
| S1Temporary mesh ID to cache (e.g., a mesh row key from the mesh data table) |

# Examples

| DescriptionBaseObjectCommandS1Cache a temporary costume mesh ID on selfSelfCacheTemporaryMeshIdTempCostume_01Cache a temporary accessory mesh ID on targetTargetCacheTemporaryMeshIdTempAccessory_HatCache a temporary outfit mesh ID for a cutscene on selfSelfCacheTemporaryMeshIdCutsceneOutfit_ACache a temporary event costume mesh on selfSelfCacheTemporaryMeshIdEventCostume_Summer |
| --- |
| Cache a temporary costume mesh ID on selfSelfCacheTemporaryMeshIdTempCostume_01Cache a temporary accessory mesh ID on targetTargetCacheTemporaryMeshIdTempAccessory_HatCache a temporary outfit mesh ID for a cutscene on selfSelfCacheTemporaryMeshIdCutsceneOutfit_ACache a temporary event costume mesh on selfSelfCacheTemporaryMeshIdEventCostume_Summer |
| Cache a temporary accessory mesh ID on targetTargetCacheTemporaryMeshIdTempAccessory_HatCache a temporary outfit mesh ID for a cutscene on selfSelfCacheTemporaryMeshIdCutsceneOutfit_ACache a temporary event costume mesh on selfSelfCacheTemporaryMeshIdEventCostume_Summer |
| Cache a temporary outfit mesh ID for a cutscene on selfSelfCacheTemporaryMeshIdCutsceneOutfit_ACache a temporary event costume mesh on selfSelfCacheTemporaryMeshIdEventCostume_Summer |
| Cache a temporary event costume mesh on selfSelfCacheTemporaryMeshIdEventCostume_Summer |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
