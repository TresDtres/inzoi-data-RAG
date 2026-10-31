---
document_id: "6b94b89ea056f95593b02c9d9ccc6b2b88d677c12dd8505c9f603f96650825ea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance"
title: "Execute_ModifyTemporaryAppearance"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:33+00:00"
content_sha256: "06bc10ede36b6dda75f6564f6436f65e72ffffb6c854c72037be531bbd5bfb02"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-modifytemporaryappearance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Temporarily overrides a specific aspect of the character's appearance (skin tone, muscle mass, or body mass ratio). The override is reverted after the specified duration or when RevertTemporaryAppearance is called.

# Note

This action is blocked for pregnant characters; a toast message is sent if the character is pregnant. S1 value "HairColor" is not supported by this command — use ModifyTemporaryAppearanceHair instead.

# Parameters

| ParameterDescriptionBaseObjectThe character whose appearance will be temporarily overridden (Self or Target).S1Appearance type to change: SkinTone, MuscleMass, or BodyMassRatio.S2Value to apply: hex color string for SkinTone; numeric string in range 0.0–1.0 for others.F1Duration override in seconds; 0 uses the default duration from the data table. |
| --- |
| BaseObjectThe character whose appearance will be temporarily overridden (Self or Target).S1Appearance type to change: SkinTone, MuscleMass, or BodyMassRatio.S2Value to apply: hex color string for SkinTone; numeric string in range 0.0–1.0 for others.F1Duration override in seconds; 0 uses the default duration from the data table. |
| S1Appearance type to change: SkinTone, MuscleMass, or BodyMassRatio.S2Value to apply: hex color string for SkinTone; numeric string in range 0.0–1.0 for others.F1Duration override in seconds; 0 uses the default duration from the data table. |
| S2Value to apply: hex color string for SkinTone; numeric string in range 0.0–1.0 for others.F1Duration override in seconds; 0 uses the default duration from the data table. |
| F1Duration override in seconds; 0 uses the default duration from the data table. |

# Examples

| DescriptionBaseObjectCommandS1S2F1Temporarily sets self's skin tone to a specific hex color.SelfModifyTemporaryAppearanceSkinTone#C686420Temporarily sets self's muscle mass to maximum.SelfModifyTemporaryAppearanceMuscleMass1.00Temporarily sets self's body mass ratio to 50%.SelfModifyTemporaryAppearanceBodyMassRatio0.50Temporarily sets target's muscle mass to minimum for 30 sec.TargetModifyTemporaryAppearanceMuscleMass0.030 |
| --- |
| Temporarily sets self's skin tone to a specific hex color.SelfModifyTemporaryAppearanceSkinTone#C686420Temporarily sets self's muscle mass to maximum.SelfModifyTemporaryAppearanceMuscleMass1.00Temporarily sets self's body mass ratio to 50%.SelfModifyTemporaryAppearanceBodyMassRatio0.50Temporarily sets target's muscle mass to minimum for 30 sec.TargetModifyTemporaryAppearanceMuscleMass0.030 |
| Temporarily sets self's muscle mass to maximum.SelfModifyTemporaryAppearanceMuscleMass1.00Temporarily sets self's body mass ratio to 50%.SelfModifyTemporaryAppearanceBodyMassRatio0.50Temporarily sets target's muscle mass to minimum for 30 sec.TargetModifyTemporaryAppearanceMuscleMass0.030 |
| Temporarily sets self's body mass ratio to 50%.SelfModifyTemporaryAppearanceBodyMassRatio0.50Temporarily sets target's muscle mass to minimum for 30 sec.TargetModifyTemporaryAppearanceMuscleMass0.030 |
| Temporarily sets target's muscle mass to minimum for 30 sec.TargetModifyTemporaryAppearanceMuscleMass0.030 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
