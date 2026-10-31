---
document_id: "514dd4edff9cdc453ce25b6bb29a0c15eb77d93e819d39cdbfac22863eb2c046"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeoutfitcategory"
title: "Execute_RemoveOutfitCategory"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:46+00:00"
content_sha256: "051c08f951693fdaa3d5de3f79ed20d57b4449b151580459225e8dcbd36903f2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removeoutfitcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes the specified outfit category from the character's active outfit list.

# Parameters

| ParameterDescriptionBaseObjectThe character whose outfit will be modified (Self or Target).S1Outfit category name to remove (e.g. "Casual", "Formal", "Sport").S2"Always" keeps this removal working even when the rule-based outfitoption is on. Use it only for removals the new rules do not replaceyet, such as the post-shower cleanup. |
| --- |
| BaseObjectThe character whose outfit will be modified (Self or Target).S1Outfit category name to remove (e.g. "Casual", "Formal", "Sport").S2"Always" keeps this removal working even when the rule-based outfitoption is on. Use it only for removals the new rules do not replaceyet, such as the post-shower cleanup. |
| S1Outfit category name to remove (e.g. "Casual", "Formal", "Sport").S2"Always" keeps this removal working even when the rule-based outfitoption is on. Use it only for removals the new rules do not replaceyet, such as the post-shower cleanup. |
| S2"Always" keeps this removal working even when the rule-based outfitoption is on. Use it only for removals the new rules do not replaceyet, such as the post-shower cleanup. |
| option is on. Use it only for removals the new rules do not replaceyet, such as the post-shower cleanup. |
| yet, such as the post-shower cleanup. |

# Examples

| DescriptionBaseObjectCommandS1S2Removes the Casual outfit category from self.SelfRemoveOutfitCategoryCasualPost-shower cleanup that must always run.SelfRemoveOutfitCategorySleepAlwaysRemoves the Formal outfit category from self.SelfRemoveOutfitCategoryFormalRemoves the Sport outfit category from target.TargetRemoveOutfitCategorySportRemoves the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |
| --- |
| Removes the Casual outfit category from self.SelfRemoveOutfitCategoryCasualPost-shower cleanup that must always run.SelfRemoveOutfitCategorySleepAlwaysRemoves the Formal outfit category from self.SelfRemoveOutfitCategoryFormalRemoves the Sport outfit category from target.TargetRemoveOutfitCategorySportRemoves the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |
| Post-shower cleanup that must always run.SelfRemoveOutfitCategorySleepAlwaysRemoves the Formal outfit category from self.SelfRemoveOutfitCategoryFormalRemoves the Sport outfit category from target.TargetRemoveOutfitCategorySportRemoves the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |
| Removes the Formal outfit category from self.SelfRemoveOutfitCategoryFormalRemoves the Sport outfit category from target.TargetRemoveOutfitCategorySportRemoves the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |
| Removes the Sport outfit category from target.TargetRemoveOutfitCategorySportRemoves the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |
| Removes the Swimwear outfit category from self.SelfRemoveOutfitCategorySwimwear |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
