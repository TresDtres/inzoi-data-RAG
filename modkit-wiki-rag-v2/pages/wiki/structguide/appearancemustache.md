---
document_id: "3ed6ce400919506070e3e6ea304a3c6e4d4a3d4d53d6bd0093b8793d77e187ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemustache"
title: "📘 AppearanceMustache Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:19+00:00"
content_sha256: "d182dc967f348a398abc9c2da4fe3fa3418d3c87a04405b6f4da8d3d9312b6d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancemustache"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceMustacheTableRow

Defines a mustache appearance entry for character customization, including mesh, filters, and dynamic remapping.

### Properties

- **Id** (`FName`): Unique identifier for this mustache appearance entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the mustache in UI.
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)*
- **GenderType** (`EB1GenderType`): Gender this mustache style is valid for.
- **BodyAgeType** (`EB1BodyAgeType`): Age group this mustache is designed for.
- **SubCategories** (`TArray<FName>`): Subcategory tags for filtering in UI. *(Foreign = "GarmentSubCategory.Id")*
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh asset for the mustache.
- **bHiddenFromUI** (`bool`): If true, this option is hidden from the customization UI.
- **PartsId** (`FName`): Facial part ID this mustache is associated with.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternate appearance IDs for each gender. *(Foreign = "AppearanceMustache.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternate appearance IDs for each age group. *(Foreign = "AppearanceMustache.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)
