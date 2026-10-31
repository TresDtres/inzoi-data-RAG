---
document_id: "8155133fbec58c4d548b07f9cfbcfe38fce180b46ba95d5a1cf8d8eec1816f65"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-setmeshtonearestspawner"
title: "Execute_SetMeshToNearestSpawner"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:56+00:00"
content_sha256: "0f5d84c98b0b4105385f4cf2c46fcc35758029b0f7ed3b95f482835f57f0c68e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-setmeshtonearestspawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Sets or clears the override mesh on the MeshSpawner of the site nearest to the BaseObject's current location. The nearest site is determined by the actor's located site or, if unavailable, the closest site found by distance. If S1 is empty, the override mesh is cleared.

# Parameters

| ParameterDescriptionBaseObjectThe actor whose location is used to find the nearest site's MeshSpawner.S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |
| --- |
| BaseObjectThe actor whose location is used to find the nearest site's MeshSpawner.S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |
| S1MeshDescription ID to set on the spawner. If empty, clears the override mesh. |

# Examples

| DescriptionBaseObjectCommandSet the House_Summer mesh on the nearest site's MeshSpawnerSelfSetMeshToNearestSpawnerClear the override mesh on the nearest site's MeshSpawnerSelfSetMeshToNearestSpawnerSet the Building_Rain mesh on the MeshSpawner nearest TargetTargetSetMeshToNearestSpawner |
| --- |
| Set the House_Summer mesh on the nearest site's MeshSpawnerSelfSetMeshToNearestSpawnerClear the override mesh on the nearest site's MeshSpawnerSelfSetMeshToNearestSpawnerSet the Building_Rain mesh on the MeshSpawner nearest TargetTargetSetMeshToNearestSpawner |
| Clear the override mesh on the nearest site's MeshSpawnerSelfSetMeshToNearestSpawnerSet the Building_Rain mesh on the MeshSpawner nearest TargetTargetSetMeshToNearestSpawner |
| Set the Building_Rain mesh on the MeshSpawner nearest TargetTargetSetMeshToNearestSpawner |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoAppearance & Outfit[AllRevertTemporaryAppearance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-allreverttemporaryappearance)[ApplyOverrideSkin](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskin)[ApplyOverrideSkinColor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-applyoverrideskincolor)[AttachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-attachmesh)[BuyAndWearMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearmannequinoutfit)[BuyAndWearOverwriteMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buyandwearoverwritemannequinoutfit)[BuyMannequinOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-buymannequinoutfit)[CacheTemporaryMeshId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-cachetemporarymeshid)[ChangeBaseOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changebaseoutfitcategory)[ChangeOutfit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfit)[ChangeOutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeoutfitcategory)[DetachMesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-detachmesh)
