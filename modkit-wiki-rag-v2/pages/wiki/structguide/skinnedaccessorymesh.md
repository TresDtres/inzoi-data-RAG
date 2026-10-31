---
document_id: "0ffb8ca9583ddcc8a9fedae465e2b5a9c81963a4034c370d3d8c38eb3ee3a021"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessorymesh"
title: "📘 SkinnedAccessoryMesh Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:04+00:00"
content_sha256: "cd41a69fd5e82650d56c5800a59755db6e821e6d72575ef611f47f1a254b6feb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/skinnedaccessorymesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SkinnedAccessoryMeshTableRow

Defines a skeletal mesh variant for a skinned accessory, including gender/age remapping and deformation mesh.

### Properties

- **Id** (`FName`): Unique identifier for this mesh entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image preview used in the customization UI.
- **DescTextId** (`FString`): Localization key for the mesh description. *(StringTableKey)*
- **GenderType** (`EB1GenderType`): Gender this mesh is designed for.
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this mesh applies to.
- **SubCategories** (`TArray<FName>`): Subcategories for filtering this mesh. *(Foreign = "GarmentSubCategory.Id")*
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Default skeletal mesh used for this bottom item.
- **GroupId** (`FName`): Grouping identifier to cluster similar garment meshes.
- **OverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): List of material overrides applied to this mesh.
- **bRequireCustomParts** (`bool`): Whether this is a custom part for crafted garments.
- **SkinningTarget** (`EB1MeshSkinningTarget`): Skeleton target that this mesh binds to (e.g., Body, Head).
- **LayerPriority** (`int32`): Determines priority when overlapping with other garments, based on DrawingRegion/CoveringRegion.
- **DrawingRegions** (`TArray<EB1GarmentCoveringRegion>`): Combination of regions where this garment is drawn, even by 1 pixel. Masked by upper layer's CoveringRegions.
- **CoveringRegions** (`TArray<EB1GarmentCoveringRegion>`): Combination of regions this garment completely covers. Masks lower layer's DrawingRegions.
- **BodyRegions** (`TArray<EB1BodyRegion>`): Body mesh parts completely hidden by this garment. Only uncovered parts are used for body mesh recombination.
- **Tags** (`TArray<FName>`): Custom tags used for garment mesh filtering or logic. *(ModTip: Tags of the GarmentMeshTables that inherit from the specified class)*
- **AccessoryType** (`FName`): Type of accessory (e.g., Glasses, Gloves).
- **DeformedMesh** (`TSoftObjectPtr<USkeletalMesh>`): Mesh used for deformation effects.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Gender-specific mesh remap IDs. *(Foreign = "SkinnedAccessoryMesh.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Age-specific mesh remap IDs. *(Foreign = "SkinnedAccessoryMesh.Id")*

## 📚 References

- [EB1MeshSkinningTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1meshskinningtarget)
- [EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)
- [EB1BodyRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyregion)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSkinned[SkinnedAccessory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessory)[SkinnedAccessoryPars Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessoryparts)[FB1SkinnedAccessoryMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorymeshtablerow)[FB1SkinnedAccessoryPartsTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorypartstablerow)[FB1SkinnedAccessoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorytablerow)
