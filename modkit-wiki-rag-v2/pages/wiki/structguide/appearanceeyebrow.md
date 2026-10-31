---
document_id: "d6440e344ae11ab4ad3ee682d3b4b30cf29becb9a55d3102864e2b26bca0f7e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow"
title: "📘 AppearanceEyebrow Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:17+00:00"
content_sha256: "096d62bdf5d3bd17ba86f3ae0d72c1b7dcee2f2f28f25a4f6819fb3b03fa134a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearanceeyebrow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceEyebrowTableRow

Defines an eyebrow appearance entry with mesh, texture mask, customization options, and age/gender-based remapping.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Icon used to represent this eyebrow style in the UI.
- **DescTextId** (`FString`): Localization key for the appearance description. *(StringTableKey)*
- **GenderType** (`EB1GenderType`): Gender for which this eyebrow appearance is valid.
- **BodyAgeType** (`EB1BodyAgeType`): Body age group this appearance applies to.
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh for this eyebrow.
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden in the customization UI.
- **PartsId** (`FName`): ID of the facial part this appearance corresponds to.
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Texture mask used to apply the eyebrow shape and placement.
- **TextureParameterName** (`FName`): Material parameter name to which the mask texture is applied.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Map of alternative appearance IDs for each gender. *(Foreign = "AppearanceEyebrow.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Map of alternative appearance IDs for each body age. *(Foreign = "AppearanceEyebrow.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
