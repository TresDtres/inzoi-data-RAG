---
document_id: "c8e23021a5b3abf2b821b3ffb0181948b33906ad9ca87f84fd1b4584924bc03b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash"
title: "📘 AppearanceEyelash Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:17+00:00"
content_sha256: "093fd8e735729431d96af969056a0b9b613da0d7d774278aa8178e11320ede22"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearanceeyelash"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceEyelashTableRow

Defines an eyelash appearance entry with mesh, customization metadata, and gender/age-based remapping support.

### Properties

- **Id** (`FName`): Unique identifier for the appearance entry.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image shown in the UI for this eyelash option.
- **DescTextId** (`FString`): Localization key for the description. *(StringTableKey)*
- **GenderType** (`EB1GenderType`): Gender that this eyelash appearance is valid for.
- **BodyAgeType** (`EB1BodyAgeType`): Age group that this eyelash appearance is valid for.
- **Mesh** (`TSoftObjectPtr<USkeletalMesh>`): Skeletal mesh used for this eyelash appearance.
- **bHiddenFromUI** (`bool`): If true, this appearance is hidden in UI.
- **PartsId** (`FName`): Part ID used to identify or group this eyelash entry.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Alternate appearance IDs to use when gender changes. *(Foreign = "AppearanceEyelash.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Alternate appearance IDs to use when body age changes. *(Foreign = "AppearanceEyelash.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
