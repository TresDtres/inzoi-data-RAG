---
document_id: "a60e76d6f2baa2032e0bb02e5703cf77fe62c462d9d65cd4cd831b5d10160046"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessoryparts"
title: "📘 SkinnedAccessoryPars Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:04+00:00"
content_sha256: "0684a0e07261c8a716c11678ac70bf56f5734121ac94a95b5658d74965ede900"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/skinnedaccessoryparts"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SkinnedAccessoryPartsTableRow

Defines the parts that compose a skinned accessory, including mesh, parameter controls, and age/gender-based remapping.

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
- **DeformedMesh** (`TSoftObjectPtr<USkeletalMesh>`): Mesh used for deformation, typically applied to dynamic parts.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Gender-specific remap IDs for this part. *(Foreign = "SkinnedAccessoryParts.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Body age-specific remap IDs for this part. *(Foreign = "SkinnedAccessoryParts.Id")*

## 📚 References

- [EB1MeshSkinningTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1meshskinningtarget)
- [EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)
- [EB1BodyRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyregion)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSkinned[SkinnedAccessory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessory)[SkinnedAccessoryMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessorymesh)[FB1SkinnedAccessoryMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorymeshtablerow)[FB1SkinnedAccessoryPartsTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorypartstablerow)[FB1SkinnedAccessoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorytablerow)
