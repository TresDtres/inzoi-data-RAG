---
document_id: "f886d92f4df9e8119a541b610b866c6f68714bcead25883fb7fd033f9817a734"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh"
title: "📘 AppearanceHairMesh Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "6acfcb3f1556d5050853ff29dafb607f2b7441069f5539e31fe524486a5862e7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancehairmesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceHairMeshTableRow

Defines skeletal mesh and material configuration for a hair variant, including hat compatibility and matching rules.

### Properties

- **Id** (`FName`): Unique identifier for this hair mesh entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for this mesh. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender this mesh variant supports.
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this mesh variant applies to.
- **SubCategories** (`TArray<FName>`): List of subcategories used to filter the appearance. *(Foreign = "GarmentSubCategory.Id")*
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used for this hair variant.
- **GroupId** (`FName`): ID that groups multiple garments or appearances. *(ModTip = "This data is data that groups Garment information.")*
- **OverrideMaterials** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): Overrides the default hair material when applying a new hair.
- **HatTypeMesh** (`TMap<EB1HatType, TSoftObjectPtr<USkeletalMesh>>`): Mapping of hat types to their corresponding hair meshes to support hat compatibility.
- **bEnableHairCutHeight** (`bool`): Whether to enable haircut customization for this mesh.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Mapping ID based on gender for the hair mesh. *(Foreign = "AppearanceHairMesh.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Mapping ID based on body age for the hair mesh. *(Foreign = "AppearanceHairMesh.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)
- [EB1HatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1hattype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
