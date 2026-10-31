---
document_id: "867409aa5cfeb48e0ddb37c735b63104f3e4a7def38cc1279f9c0976d9863933"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset"
title: "📘 AppearanceFacePreset Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "60237a297b57584a42ad72cc8d5ebeb4f182ba899dc65925b616fcc4d1257be4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancefacepreset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceFacePresetTableRow

Defines a preset face appearance entry, including mesh filters, gender/age targeting, and display configuration.

### Properties

- **Id** (`FName`): Unique identifier for this face preset entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for the face preset. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender that this face preset applies to.
- **BodyAgeType** (`EB1BodyAgeType`): Body age group that this preset supports.
- **SubCategories** (`TArray<FName>`): List of subcategories associated with this appearance. *(Foreign = "GarmentSubCategory.Id")*
- **HiddenFromUI** (`bool`): If true, this face preset is hidden from the customization interface.
- **Tags** (`TArray<FName>`): List of tags used for search or filtering in UI. *(Category = Tags)*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
