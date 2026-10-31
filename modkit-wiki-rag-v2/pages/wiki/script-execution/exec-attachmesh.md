---
document_id: "782981dcc301b283c61e43deeed4a8a257b9146109bf01fac754b21300795fbe"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh"
title: "Execute_AttachMesh"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "2417432bbf1ebacabaf0597a23ecba43b2bc74065d1dcef6585da0d8151bdb62"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-attachmesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Attaches a visual mesh to the character specified by BaseObject. The mesh is identified by S1 and is managed by the character's AttachMeshComponent.

# Note

The character entity must be valid and must have a valid FB2AttachMeshComponent.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to attach the mesh to (Self or Target).S1Mesh ID to attach to the character (e.g., Hat_001). |
| --- |
| BaseObjectThe character entity to attach the mesh to (Self or Target).S1Mesh ID to attach to the character (e.g., Hat_001). |
| S1Mesh ID to attach to the character (e.g., Hat_001). |

# Examples

| DescriptionBaseObjectCommandS1Attach a hat mesh to selfSelfAttachMeshHat_001Attach an accessory mesh to the target characterTargetAttachMeshAccessory_02 |
| --- |
| Attach a hat mesh to selfSelfAttachMeshHat_001Attach an accessory mesh to the target characterTargetAttachMeshAccessory_02 |
| Attach an accessory mesh to the target characterTargetAttachMeshAccessory_02 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)[ModifyTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-modifytemporaryappearance)
