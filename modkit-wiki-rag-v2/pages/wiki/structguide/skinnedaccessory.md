---
document_id: "b08aa7a430ec0de988dacf9a84777108fc88b4a1419d870ae094d9e7823d0de4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessory"
title: "📘 SkinnedAccessory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:04+00:00"
content_sha256: "5eb35368c017f9dbe427bdb88061ed18b882696ef527b4c540fd998d0d702f37"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/skinnedaccessory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1SkinnedAccessoryTableRow

Defines a skinned accessory item, such as gloves or belts, including mesh configuration and outfit tags.

### Properties

- **Id** (`FName`): Unique identifier for this garment.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the garment in the customization UI. *(Category = UI)*
- **DescTextId** (`FString`): Localization key for the description shown in the UI. *(StringTableKey)*
- **GenderType** (`EB1GenderType`): Gender this garment is intended for.
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this garment supports.
- **SubCategories** (`TArray<FName>`): Tags used to categorize the garment in UI filters. *(Foreign = "GarmentSubCategory.Id")*
- **bCustomizable** (`bool`): If true, the garment supports customization.
- **NumColorChannels** (`int32`): Number of color channels available for customization.
- **AITextureChannels** (`int32`): Number of channels that support AI-generated textures.
- **Variants** (`TArray<FName>`): List of mesh or design variant IDs for this garment.
- **HiddenFromUI** (`bool`): If true, this garment is hidden from the customization interface. *(Category = UI)*
- **VariantGroups** (`TArray<FB1GarmentVariantGroup>`): Groups of design variants grouped by context for customizable garment.
- **PartsGroup** (`TArray<FB1GarmentPartsGroup>`): Parts data that defines mesh components for customizable garment.
- **OutfitCategoryTags** (`TArray<EB1OutfitCategory>`): Tags used to categorize this garment within outfit sets.
- **OutfitBuffList** (`TArray<FName>`): List of buffs that apply when wearing this garment. *(Foreign = "Buff.Id")*
- **AccessoryType** (`FName`): Logical type of the accessory (e.g., Ring, Belt).

## 📚 References

- [EB1OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1outfitcategory)
- [FB1GarmentVariantGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentvariantgroup)
- [FB1GarmentPartsGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentpartsgroup)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSkinned[SkinnedAccessoryMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessorymesh)[SkinnedAccessoryPars Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/skinnedaccessoryparts)[FB1SkinnedAccessoryMeshTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorymeshtablerow)[FB1SkinnedAccessoryPartsTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorypartstablerow)[FB1SkinnedAccessoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1skinnedaccessorytablerow)
