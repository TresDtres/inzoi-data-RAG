---
document_id: "cd118504ef81ddf0cb46a149a4c1aef2a82e3331d2956a31a3de60daadb78bab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape"
title: "📘 AppearanceBodyShape Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:17+00:00"
content_sha256: "29c4f1720abd612e8962b2bf5f39e465439d620bc724db707fc2693028093110"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancebodyshape"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceBodyShapeTableRow

Defines a body shape preset for character appearance, including visual modifiers, gender/age filters, and hair configuration.

### Properties

- **Id** (`FName`): Unique identifier for this body shape preset.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Image used to preview the body shape in UI.
- **DescTextId** (`FString`): Localization key for the description text. *(StringTableKey)*
- **HiddenFromUI** (`bool`): If true, this option is hidden from the customization interface.
- **MuscleDefinition** (`float`): Intensity of muscle definition for the character's mesh.
- **BodyMassRatio** (`float`): Body mass scaling factor. Affects overall size or bulk.
- **BodyModifierParameters** (`FString`): Custom modifier parameters serialized as a string (e.g., JSON).
- **GenderType** (`EB1GenderType`): Gender this body shape applies to.
- **BodyAgeType** (`EB1BodyAgeType`): Age group this body shape supports.
- **ChestHairIntensity** (`float`): Amount of chest hair to apply.
- **ArmHairIntensity** (`float`): Amount of arm hair to apply.
- **LegHairIntensity** (`float`): Amount of leg hair to apply.
- **BodyHairColor** (`FString`): Hex color code for body hair (e.g., `#000000FF`).

## 📚 References

- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
