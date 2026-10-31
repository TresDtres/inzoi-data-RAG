---
document_id: "3f99aabb6d02fa5e042b1bd1d0dda3c24a3079f2f45c5ea761c5b7a9613e2f42"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setclothweatheringintensity"
title: "Execute_SetClothWeatheringIntensity"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:54+00:00"
content_sha256: "00d57c1e2cd7ea434eeb2ab7f48d5aa8eab30f3417eef543084215d64ce7ac23"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setclothweatheringintensity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets the weathering intensity value for the character's clothing. Has no effect on NPC characters.

# Note

This action is ignored for NPC characters; weathering is only applied to player characters.

# Parameters

| ParameterDescriptionBaseObjectThe character whose clothing weathering intensity will be set.F1Weathering intensity value to apply (range: 0.0 = clean to 1.0 = worn). |
| --- |
| BaseObjectThe character whose clothing weathering intensity will be set.F1Weathering intensity value to apply (range: 0.0 = clean to 1.0 = worn). |
| F1Weathering intensity value to apply (range: 0.0 = clean to 1.0 = worn). |

# Examples

| DescriptionBaseObjectCommandF1Sets self's clothing weathering to fully clean.SelfSetClothWeatheringIntensity0.0Sets self's clothing weathering to fully worn.SelfSetClothWeatheringIntensity1.0Sets target's clothing weathering to 50%.TargetSetClothWeatheringIntensity0.5Sets self's clothing weathering to lightly worn.SelfSetClothWeatheringIntensity0.2 |
| --- |
| Sets self's clothing weathering to fully clean.SelfSetClothWeatheringIntensity0.0Sets self's clothing weathering to fully worn.SelfSetClothWeatheringIntensity1.0Sets target's clothing weathering to 50%.TargetSetClothWeatheringIntensity0.5Sets self's clothing weathering to lightly worn.SelfSetClothWeatheringIntensity0.2 |
| Sets self's clothing weathering to fully worn.SelfSetClothWeatheringIntensity1.0Sets target's clothing weathering to 50%.TargetSetClothWeatheringIntensity0.5Sets self's clothing weathering to lightly worn.SelfSetClothWeatheringIntensity0.2 |
| Sets target's clothing weathering to 50%.TargetSetClothWeatheringIntensity0.5Sets self's clothing weathering to lightly worn.SelfSetClothWeatheringIntensity0.2 |
| Sets self's clothing weathering to lightly worn.SelfSetClothWeatheringIntensity0.2 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
