---
document_id: "6fd26dea4527aa6ab3911b4f1998806ef3ebc10c178648093733eb388cb78991"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair"
title: "📘 AppearanceHair Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "71ad6f01f537c314190d7dc95bf4e5b3a55ee74bade229245c3bf4c973b467e9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancehair"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceHairTableRow

Data for hair displayed in the character customization hair list.

### Properties

- **Id** (`FName`): Unique identifier for this hair entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): UI preview image for this hairstyle. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)* *(Category = UI)*
- **GenderType** (`EB1GenderType`): Gender this hairstyle is valid for.
- **BodyAgeType** (`EB1BodyAgeType`): Age group this hairstyle supports.
- **SubCategories** (`TArray<FName>`): List of appearance subcategories for filtering. *(Foreign = "GarmentSubCategory.Id")*
- **PartsId** (`FName`): Identifier used to group hair customization options. Determines which scalar parameters appear as sliders in the customization UI. *(Foreign = "AppearanceParts.Id")*
- **HairType** (`EB1HairType`): Hair type used to determine inherited hairstyle traits from parents to children.
- **HiddenFromUI** (`bool`): Whether to hide this hair style from the character customization hair list.
- **Tags** (`TArray<FName>`): Used to filter hair list items based on hair length subcategories.
- **Variants** (`TArray<FName>`): List of variant IDs that belong to this hair style. *(Foreign = "AppearanceHairMesh.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)
- [EB1HairType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1hairtype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
