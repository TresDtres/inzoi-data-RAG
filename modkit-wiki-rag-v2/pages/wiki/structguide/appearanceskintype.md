---
document_id: "04c2ad760fd3321cdb2ee240af46f3fef9be4229d195ea9782148fff575be6db"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceskintype"
title: "📘 AppearanceSkinType Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:21+00:00"
content_sha256: "ebb76de45bf87a329224327f8022e732e0de24668cb5cbd0b9731307f2446af3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearanceskintype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceSkinTableRow

Data for skin displayed in the character customization garment list.

### Properties

- **Id** (`FName`): Unique identifier for this skin entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI to preview the skin. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender this skin preset applies to.
- **BodyAgeType** (`EB1BodyAgeType`): Age group this skin preset is compatible with.
- **SubCategories** (`TArray<FName>`): Subcategories used to organize this skin preset. *(Foreign = "GarmentSubCategory.Id")*
- **HeadOverrideMaterial** (`TArray<TSoftObjectPtr<UMaterialInterface>>`): Material for customizing the head skin. Overrides the default head material when applying a new skin.
- **BodyOverrideMaterial** (`TSoftObjectPtr<UMaterialInterface>`): Material for customizing the body skin. Overrides the default body material when applying a new skin.
- **DefaultSkinColorId** (`FName`): Default skin color ID used for the character's skin tone. *(Foreign = "AppearanceSkinColor.Id")*
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the skin. *(Foreign = "AppearanceSkinType.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the skin. *(Foreign = "AppearanceSkinType.Id")*
- **HiddenFromUI** (`bool`): Whether the skin should be hidden from the character customization UI.
- **ShowColorChangeButton** (`bool`): Whether a color change button for skin color should be shown in the UI.

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)
