---
document_id: "2519f0532a5efd020fb97ab24104706b988d86feb28e0d4d00bfc598112af0af"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearancehair"
title: "Execute_ModifyTemporaryAppearanceHair"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "9630019e67e103aeaeeb94ceb7a5f3957c4217b0b898678838e13d50381e99d9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifytemporaryappearancehair"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Temporarily overrides the color of a specific hair part (Hair, Eyebrow, Eyelash) on the character. The override is reverted after the specified duration or when RevertTemporaryAppearance is called.

# Note

This action is blocked for pregnant characters; a toast message is sent if the character is pregnant.

# Parameters

| ParameterDescriptionBaseObjectThe character whose hair color will be temporarily overridden (Self or Target).S1Hair part identifier to color (e.g. Hair, Eyebrow, Eyelash).S2Hair color as a hex color string (e.g. "#1A1A1A").F1Duration override in seconds; 0 uses the default duration from the data table. |
| --- |
| BaseObjectThe character whose hair color will be temporarily overridden (Self or Target).S1Hair part identifier to color (e.g. Hair, Eyebrow, Eyelash).S2Hair color as a hex color string (e.g. "#1A1A1A").F1Duration override in seconds; 0 uses the default duration from the data table. |
| S1Hair part identifier to color (e.g. Hair, Eyebrow, Eyelash).S2Hair color as a hex color string (e.g. "#1A1A1A").F1Duration override in seconds; 0 uses the default duration from the data table. |
| S2Hair color as a hex color string (e.g. "#1A1A1A").F1Duration override in seconds; 0 uses the default duration from the data table. |
| F1Duration override in seconds; 0 uses the default duration from the data table. |

# Examples

| DescriptionBaseObjectCommandS1S2F1Temporarily dyes self's hair black.SelfModifyTemporaryAppearanceHairHair#1A1A1A0Temporarily dyes self's eyebrow blonde.SelfModifyTemporaryAppearanceHairEyebrow#F5DEB30Temporarily dyes target's hair red for 60 seconds.TargetModifyTemporaryAppearanceHairHair#8B000060Temporarily dyes self's eyelash dark brown.SelfModifyTemporaryAppearanceHairEyelash#3B1E080 |
| --- |
| Temporarily dyes self's hair black.SelfModifyTemporaryAppearanceHairHair#1A1A1A0Temporarily dyes self's eyebrow blonde.SelfModifyTemporaryAppearanceHairEyebrow#F5DEB30Temporarily dyes target's hair red for 60 seconds.TargetModifyTemporaryAppearanceHairHair#8B000060Temporarily dyes self's eyelash dark brown.SelfModifyTemporaryAppearanceHairEyelash#3B1E080 |
| Temporarily dyes self's eyebrow blonde.SelfModifyTemporaryAppearanceHairEyebrow#F5DEB30Temporarily dyes target's hair red for 60 seconds.TargetModifyTemporaryAppearanceHairHair#8B000060Temporarily dyes self's eyelash dark brown.SelfModifyTemporaryAppearanceHairEyelash#3B1E080 |
| Temporarily dyes target's hair red for 60 seconds.TargetModifyTemporaryAppearanceHairHair#8B000060Temporarily dyes self's eyelash dark brown.SelfModifyTemporaryAppearanceHairEyelash#3B1E080 |
| Temporarily dyes self's eyelash dark brown.SelfModifyTemporaryAppearanceHairEyelash#3B1E080 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
