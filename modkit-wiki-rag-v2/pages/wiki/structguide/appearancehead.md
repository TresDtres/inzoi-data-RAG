---
document_id: "6c95e15a4c0b93b3a70e567132ff44a823565ba090ccdf35b27b7c5ce8328bc0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead"
title: "📘 AppearanceHead Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "0e0806536535c714b930c76299bbf79b547ea56c8dc4d88bf8e8b5225dea6f70"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancehead"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceHeadTableRow

Data for head mesh applied to the character.

### Properties

- **Id** (`FName`): Unique identifier for the head appearance entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Preview image used in the customization UI. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description of this appearance. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender this head mesh supports.
- **BodyAgeType** (`EB1BodyAgeType`): Age group this mesh applies to.
- **SubCategories** (`TArray<FName>`): Subcategories used for UI filtering. *(Foreign = "GarmentSubCategory.Id")*
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh for the head model.
- **FaceSkinColorId** (`FName`): Default skin color ID applied to body skin linked with this head. *(Foreign = "AppearanceSkinColor.Id")*
- **EyebrowId** (`FName`): Default eyebrow ID linked with this head. *(Foreign = "AppearanceEyebrow.Id")*
- **EyelashId** (`FName`): Default eyelash ID linked with this head. *(Foreign = "AppearanceEyelash.Id")*
- **DefaultHairId** (`FName`): Default hair ID linked with this head.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Mapping ID based on gender for the head mesh. *(Foreign = "AppearanceHead.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Mapping ID based on body age for the head mesh. *(Foreign = "AppearanceHead.Id")*
- **HiddenFromUI** (`bool`): Whether the head should be hidden from the character customization UI.

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
