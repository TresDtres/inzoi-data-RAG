---
document_id: "e46989fa052928aae9de046eaed5bba67930ea4779416bc61f298c1f74adad3b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthat"
title: "📘 GarmentHat Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:46+00:00"
content_sha256: "77ca9c5086a1e15c3ae6c9804ba964fd369c921527724ab829597eb31f23a3f7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/garmenthat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GarmentHatTableRow

Defines a hat garment entry for character customization, including color channels, variants, and customization flags.

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
- **HatType** (`EB1HatType`): Type of hat (e.g., BallCap, Beanie) used for compatibility with hairstyles.

## 📚 References

- [EB1HatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1hattype)
- [FB1GarmentVariantGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentvariantgroup)
- [FB1GarmentVariantInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentvariantinfo)
- [FB1GarmentPartsGroup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentpartsgroup)
- [FB1GarmentPartsInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1garmentpartsinfo)
- [EB1OutfitCategory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1outfitcategory)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGarment[EB1GarmentCoveringRegion](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1garmentcoveringregion)[GarmentBottom Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottom)[GarmentBottomMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentbottommesh)[GarmentFull Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfull)[GarmentFullMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentfullmesh)[GarmentHatMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmenthatmesh)[GarmentInnerTop Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertop)[GarmentInnerTopMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnertopmesh)[GarmentInnerUnder Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerunder)[GarmentInnerUnderMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentinnerundermesh)[GarmentJacket Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacket)[GarmentJacketMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/garmentjacketmesh)
