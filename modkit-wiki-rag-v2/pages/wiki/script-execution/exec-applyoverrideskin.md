---
document_id: "e40a94c35e3bfe0bb9c16b59ae12b07b8516dc825786c1dffd78e18ea3007079"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin"
title: "Execute_ApplyOverrideSkin"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:14+00:00"
content_sha256: "1212ff2eb1b5244eea13276fde067e84a75c70083638f89d1fd9810a852734fa"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applyoverrideskin"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Applies an override skin to the character. Pass "None" as S1 to remove any currently applied override skin.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply or remove the override skin on (Self or Target).S1AppearanceSkinId from AppearanceSkinType.json, or "None" to remove the skin. |
| --- |
| BaseObjectThe character to apply or remove the override skin on (Self or Target).S1AppearanceSkinId from AppearanceSkinType.json, or "None" to remove the skin. |
| S1AppearanceSkinId from AppearanceSkinType.json, or "None" to remove the skin. |

# Examples

| DescriptionBaseObjectCommandS1Applies a zombie skin override to self.SelfApplyOverrideSkinZombieSkinRemoves any override skin from self.SelfApplyOverrideSkinNoneApplies a ghost skin override to target.TargetApplyOverrideSkinGhostSkinRemoves any override skin from target.TargetApplyOverrideSkinNone |
| --- |
| Applies a zombie skin override to self.SelfApplyOverrideSkinZombieSkinRemoves any override skin from self.SelfApplyOverrideSkinNoneApplies a ghost skin override to target.TargetApplyOverrideSkinGhostSkinRemoves any override skin from target.TargetApplyOverrideSkinNone |
| Removes any override skin from self.SelfApplyOverrideSkinNoneApplies a ghost skin override to target.TargetApplyOverrideSkinGhostSkinRemoves any override skin from target.TargetApplyOverrideSkinNone |
| Applies a ghost skin override to target.TargetApplyOverrideSkinGhostSkinRemoves any override skin from target.TargetApplyOverrideSkinNone |
| Removes any override skin from target.TargetApplyOverrideSkinNone |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
