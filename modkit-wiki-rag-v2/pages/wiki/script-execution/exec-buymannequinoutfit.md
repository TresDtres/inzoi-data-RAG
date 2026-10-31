---
document_id: "520f19ba1b9ceada0a51fc20192b23bfcdd6fbf75c19bd7083b3931e8248ce9a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit"
title: "Execute_BuyMannequinOutfit"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:17+00:00"
content_sha256: "8d4a9c76f8b8d0f03c476ecf26d2a8b77d25373246f043d2a951826b57b51e73"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-buymannequinoutfit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Registers the Target mannequin's outfit into the Self character's CategorizedStyles for the mannequin's own OutfitCategory (unlike Execute_BuyAndWearMannequinOutfit, does not override with the character's currently-worn category). If the current worn category matches, the outfit is applied immediately; otherwise only the appearance data is refreshed. Also posts an activity feed entry and reduces the purchase desire gauge on success.

# Parameters

| ParameterDescriptionBaseObjectSelf (character buying the outfit). |
| --- |
| BaseObjectSelf (character buying the outfit). |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
