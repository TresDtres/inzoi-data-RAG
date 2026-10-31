---
document_id: "8681bd2b19317af380c4aa309021764eb5c2e9ccd70cb74021e9c5030cad36f9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-reverttemporaryappearance"
title: "Execute_RevertTemporaryAppearance"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:49+00:00"
content_sha256: "a718a02022c0e99285e6a89f489e6e08940371931df43557491cddccd648d0fb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-reverttemporaryappearance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Reverts the temporary appearance override of the specified type back to its original state.

# Parameters

| ParameterDescriptionBaseObjectThe character whose temporary appearance override will be reverted (Self or Target).S1Appearance type to revert: HairColor, SkinTone, MuscleMass, or BodyMassRatio. |
| --- |
| BaseObjectThe character whose temporary appearance override will be reverted (Self or Target).S1Appearance type to revert: HairColor, SkinTone, MuscleMass, or BodyMassRatio. |
| S1Appearance type to revert: HairColor, SkinTone, MuscleMass, or BodyMassRatio. |

# Examples

| DescriptionBaseObjectCommandS1Reverts self's temporary hair color override.SelfRevertTemporaryAppearanceHairColorReverts self's temporary skin tone override.SelfRevertTemporaryAppearanceSkinToneReverts self's temporary muscle mass override.SelfRevertTemporaryAppearanceMuscleMassReverts target's temporary body mass ratio override.TargetRevertTemporaryAppearanceBodyMassRatio |
| --- |
| Reverts self's temporary hair color override.SelfRevertTemporaryAppearanceHairColorReverts self's temporary skin tone override.SelfRevertTemporaryAppearanceSkinToneReverts self's temporary muscle mass override.SelfRevertTemporaryAppearanceMuscleMassReverts target's temporary body mass ratio override.TargetRevertTemporaryAppearanceBodyMassRatio |
| Reverts self's temporary skin tone override.SelfRevertTemporaryAppearanceSkinToneReverts self's temporary muscle mass override.SelfRevertTemporaryAppearanceMuscleMassReverts target's temporary body mass ratio override.TargetRevertTemporaryAppearanceBodyMassRatio |
| Reverts self's temporary muscle mass override.SelfRevertTemporaryAppearanceMuscleMassReverts target's temporary body mass ratio override.TargetRevertTemporaryAppearanceBodyMassRatio |
| Reverts target's temporary body mass ratio override.TargetRevertTemporaryAppearanceBodyMassRatio |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
