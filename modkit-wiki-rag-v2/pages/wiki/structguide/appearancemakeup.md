---
document_id: "1a6c7cd9b79c1a659d2d23ee3261f26d2bfc02a4e7549a86d35e4327e2da0f60"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup"
title: "📘 AppearanceMakeup Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "8327f004d7d68331bb0c3fb636b2e732325611ab79e9fea2244a28eb5bdc1438"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancemakeup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceMakeupTableRow

Defines a makeup preset, including mask texture, default parameter values, and associated makeup parts.

### Properties

- **Id** (`FName`): Unique identifier for the makeup item.
- **DescTextId** (`FString`): Localization text ID for the name or description of the makeup. *(StringTableKey = "Id")* *(Category = UI)*
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail texture used to visually represent this makeup option in the UI. *(Category = UI)*
- **DisabledChannels** (`TArray<EB1MakeupChannel>`): Channels that are disabled for this makeup item. Used to control which color or scalar parameters are active. *(Category = UI)*
- **MakeupPartsId** (`FName`): Identifier used to link this makeup to a specific makeup parts definition. *(Foreign = "AppearanceMakeupParts.Id")*
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Texture mask that defines the visible area of this makeup item on the face or body.
- **MatchingFaceHairId** (`FName`): ID of face hair that matches this makeup item. *(Foreign = "AppearanceEyebrow.Id")*
- **DefaultValues** (`TArray<FB1AppearanceMakeupParameterValue>`): Default parameter values such as colors and intensities applied when this makeup is selected.
- **SubCategories** (`TArray<FName>`): Subcategories used to group this makeup item in the UI. *(Foreign = "GarmentSubCategory.Id")*

## 🧩 Struct: FB1AppearanceMakeupParameterValue

Defines a set of parameter values for a specific makeup channel.

### Properties

- **MaskChannel** (`EB1MakeupChannel`): Which channel this parameter applies to (e.g., R, G, B, A).
- **ColorValues** (`TArray<FString>`): Hex color values applied to the makeup channel.
- **ScalarValues** (`TArray<float>`): Numeric parameters (e.g., intensity, blend).

## 🧩 Enum: EB1MakeupChannel

Represents individual RGBA channels used for layering or isolating parts of a makeup mask texture.

- **R**: Red channel (index 0).
- **G**: Green channel (index 1).
- **B**: Blue channel (index 2).
- **A**: Alpha channel (index 3).

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
