---
document_id: "f253f4ab31ce373f8a981de41efc67596b5968c62d1df4acf6ebca12a681742f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh"
title: "Execute_DetachMesh"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:26+00:00"
content_sha256: "382343eedb82d992d89b257d115d3bd59914c20d78863c9c72eab6d260c58148"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-detachmesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Detaches a visual mesh from the character specified by BaseObject. The mesh is identified by S1 and is managed by the character's AttachMeshComponent.

# Note

The character entity must be valid and must have a valid FB2AttachMeshComponent.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to detach the mesh from (Self or Target).S1Mesh ID to detach from the character (e.g., Hat_001). |
| --- |
| BaseObjectThe character entity to detach the mesh from (Self or Target).S1Mesh ID to detach from the character (e.g., Hat_001). |
| S1Mesh ID to detach from the character (e.g., Hat_001). |

# Examples

| DescriptionBaseObjectCommandS1Detach a hat mesh from selfSelfDetachMeshHat_001Detach an accessory mesh from the target characterTargetDetachMeshAccessory_02 |
| --- |
| Detach a hat mesh from selfSelfDetachMeshHat_001Detach an accessory mesh from the target characterTargetDetachMeshAccessory_02 |
| Detach an accessory mesh from the target characterTargetDetachMeshAccessory_02 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
