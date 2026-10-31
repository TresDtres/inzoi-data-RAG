---
document_id: "8cfc288fc2df46d147efe4125c88f649ed8fa6becb68c880b93dfe9ce818ee88"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setmeshtospawner"
title: "Execute_SetMeshToSpawner"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:56+00:00"
content_sha256: "9b96ac0560a274741311bb0a770b575f127ff25991ac5ffe2588012e3e783eb9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setmeshtospawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets or clears the override mesh on the first MeshSpawner belonging to the site entity resolved from BaseObject. If S1 is empty, the override mesh is cleared.

# Parameters

| ParameterDescriptionBaseObjectThe site entity whose first MeshSpawner will be updated (Self or Target).S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |
| --- |
| BaseObjectThe site entity whose first MeshSpawner will be updated (Self or Target).S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |
| S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |

# Examples

| DescriptionBaseObjectCommandSet the House_Snow mesh on the site's MeshSpawnerSelfSetMeshToSpawnerClear the override mesh on the site's MeshSpawnerSelfSetMeshToSpawnerSet the Shop_Night mesh on the target site's MeshSpawnerTargetSetMeshToSpawner |
| --- |
| Set the House_Snow mesh on the site's MeshSpawnerSelfSetMeshToSpawnerClear the override mesh on the site's MeshSpawnerSelfSetMeshToSpawnerSet the Shop_Night mesh on the target site's MeshSpawnerTargetSetMeshToSpawner |
| Clear the override mesh on the site's MeshSpawnerSelfSetMeshToSpawnerSet the Shop_Night mesh on the target site's MeshSpawnerTargetSetMeshToSpawner |
| Set the Shop_Night mesh on the target site's MeshSpawnerTargetSetMeshToSpawner |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
