---
document_id: "fecd6d1afbc73e9f6bc3931b29e6cef71021ac9147a814421e87e7ea87238d99"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor"
title: "Execute_ApplyOverrideSkinColor"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:14+00:00"
content_sha256: "c4bfcb4ff1ae4b85496c234a4acb88b99fbee48b0ee64d8bbc38bce23283fe5f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-applyoverrideskincolor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Applies an override skin color to the character. Pass "None" as S1 to remove any currently applied override skin color.

# Parameters

| ParameterDescriptionBaseObjectThe character to apply or remove the override skin color on (Self or Target).S1SkinColorId from AppearanceSkinColorType.json, or "None" to remove the skin color. |
| --- |
| BaseObjectThe character to apply or remove the override skin color on (Self or Target).S1SkinColorId from AppearanceSkinColorType.json, or "None" to remove the skin color. |
| S1SkinColorId from AppearanceSkinColorType.json, or "None" to remove the skin color. |

# Examples

| DescriptionBaseObjectCommandS1Applies a pale blue override skin color to self.SelfApplyOverrideSkinColorPaleBlueApplies a golden tan override skin color to target.TargetApplyOverrideSkinColorGoldenTanRemoves any override skin color from self.SelfApplyOverrideSkinColorNoneApplies an undead gray skin color to self.SelfApplyOverrideSkinColorUndeadGray |
| --- |
| Applies a pale blue override skin color to self.SelfApplyOverrideSkinColorPaleBlueApplies a golden tan override skin color to target.TargetApplyOverrideSkinColorGoldenTanRemoves any override skin color from self.SelfApplyOverrideSkinColorNoneApplies an undead gray skin color to self.SelfApplyOverrideSkinColorUndeadGray |
| Applies a golden tan override skin color to target.TargetApplyOverrideSkinColorGoldenTanRemoves any override skin color from self.SelfApplyOverrideSkinColorNoneApplies an undead gray skin color to self.SelfApplyOverrideSkinColorUndeadGray |
| Removes any override skin color from self.SelfApplyOverrideSkinColorNoneApplies an undead gray skin color to self.SelfApplyOverrideSkinColorUndeadGray |
| Applies an undead gray skin color to self.SelfApplyOverrideSkinColorUndeadGray |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
