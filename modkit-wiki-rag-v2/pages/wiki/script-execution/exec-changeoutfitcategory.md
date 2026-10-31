---
document_id: "5d8be59a621a3fcbd3882b949191e33dd1da64005c3112165e0d6764aae4db47"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory"
title: "Execute_ChangeOutfitCategory"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:19+00:00"
content_sha256: "0b8641357b0bae39d5f2555216f4caacd88fa1bd211483992e33e18cde4b7024"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changeoutfitcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the character's active outfit to the specified outfit category.

# Parameters

| ParameterDescriptionBaseObjectThe character whose outfit category will be changed (Self or Target).S1Outfit category name to apply (e.g. "Casual", "Formal", "Sport").S2"Manual" marks a user-directed change (closet / hanger / self menu).It uses the Action reason so the rule-based outfit option never blocks it.Any other value keeps the default Script reason. |
| --- |
| BaseObjectThe character whose outfit category will be changed (Self or Target).S1Outfit category name to apply (e.g. "Casual", "Formal", "Sport").S2"Manual" marks a user-directed change (closet / hanger / self menu).It uses the Action reason so the rule-based outfit option never blocks it.Any other value keeps the default Script reason. |
| S1Outfit category name to apply (e.g. "Casual", "Formal", "Sport").S2"Manual" marks a user-directed change (closet / hanger / self menu).It uses the Action reason so the rule-based outfit option never blocks it.Any other value keeps the default Script reason. |
| S2"Manual" marks a user-directed change (closet / hanger / self menu).It uses the Action reason so the rule-based outfit option never blocks it.Any other value keeps the default Script reason. |
| It uses the Action reason so the rule-based outfit option never blocks it.Any other value keeps the default Script reason. |
| Any other value keeps the default Script reason. |

# Examples

| DescriptionBaseObjectCommandS1S2Changes self's outfit category to Casual.SelfChangeOutfitCategoryCasualChanges self's outfit category to Formal.SelfChangeOutfitCategoryFormalChanges target's outfit category to Sport.TargetChangeOutfitCategorySportChanges self's outfit category to Swimwear.SelfChangeOutfitCategorySwimwearUser picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |
| --- |
| Changes self's outfit category to Casual.SelfChangeOutfitCategoryCasualChanges self's outfit category to Formal.SelfChangeOutfitCategoryFormalChanges target's outfit category to Sport.TargetChangeOutfitCategorySportChanges self's outfit category to Swimwear.SelfChangeOutfitCategorySwimwearUser picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |
| Changes self's outfit category to Formal.SelfChangeOutfitCategoryFormalChanges target's outfit category to Sport.TargetChangeOutfitCategorySportChanges self's outfit category to Swimwear.SelfChangeOutfitCategorySwimwearUser picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |
| Changes target's outfit category to Sport.TargetChangeOutfitCategorySportChanges self's outfit category to Swimwear.SelfChangeOutfitCategorySwimwearUser picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |
| Changes self's outfit category to Swimwear.SelfChangeOutfitCategorySwimwearUser picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |
| User picked Sleep at the closet.SelfChangeOutfitCategorySleepManual |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
