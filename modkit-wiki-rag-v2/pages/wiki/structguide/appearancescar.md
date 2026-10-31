---
document_id: "46b7fc807ade1d72e02af1e149a4550583320be85d65bc79c92d69bf1189d283"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancescar"
title: "📘 AppearanceScar Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:19+00:00"
content_sha256: "353bd2e4c74c5dc00d745e6fea2cdea1616c24b2b394aa5db2b101672affea62"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancescar"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceScarTableRow

Data for the scar displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI.
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.
- **PartsNum** (`int32`): Number of colors used in the skin feature.
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.
- **ColorTexture** (`TSoftObjectPtr<UTexture>`): Texture used to color the scar.
- **DefaultScarRoughness** (`float`): Default roughness value applied to the scar material.
- **DefaultScarMetalRoughness** (`float`): Default metal roughness value applied to the scar material.
- **IsTopmostScar** (`float`): Whether this scar is unaffected by skin color changes.
- **GenderType** (`EB1GenderType`): Specifies the gender in which this scar appears in the character customization skin feature list.
- **BodyAgeType** (`EB1BodyAgeType`): Specifies the body age in which this scar appears in the character customization skin feature list.
- **MatchingGenderId** (`TMap<EB1GenderType, FName>`): Matching ID based on gender for the scar. *(Foreign = "AppearanceScar.Id")*
- **MatchingBodyAgeId** (`TMap<EB1BodyAgeType, FName>`): Matching ID based on body age for the scar. *(Foreign = "AppearanceScar.Id")*

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)
