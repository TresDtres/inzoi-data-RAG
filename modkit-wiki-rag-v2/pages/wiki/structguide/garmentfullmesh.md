---
document_id: "e52cd1e2840103ad510d54639bc08066597d3ab96d8d7341be639a7ed31afddf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfullmesh"
title: "📘 GarmentFullMesh Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:46+00:00"
content_sha256: "17f259e0011fc6cf72179d6b10892344eccf5575aebd503167d72a94bf3a63c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/garmentfullmesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GarmentFullMeshTableRow

Defines a skeletal mesh entry for full-body garments, including layering, customization flags, region coverage, and gender/age-specific mappings.

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
- **bDeformingHead** (`bool`): If true, this full-body mesh modifies or blends into the head region.
- **DeformedMesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used when bottom deformation is enabled. (e.g., jacket).
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the bottom mesh. *(Foreign = "GarmentBottomMesh.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the bottom mesh. *(Foreign = "GarmentBottomMesh.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)
- [EB1MeshSkinningTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1meshskinningtarget)
- [EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)
- [EB1BodyRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyregion)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGarment[EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)[GarmentBottom Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottom)[GarmentBottomMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottommesh)[GarmentFull Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfull)[GarmentHat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthat)[GarmentHatMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthatmesh)[GarmentInnerTop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertop)[GarmentInnerTopMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertopmesh)[GarmentInnerUnder Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerunder)[GarmentInnerUnderMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerundermesh)[GarmentJacket Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacket)[GarmentJacketMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacketmesh)
