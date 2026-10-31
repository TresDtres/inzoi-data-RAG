---
document_id: "27f93d2b195c4920aad7410571a5d23f321526d7ba31fca2d8b1bafeda26208c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemole"
title: "📘 AppearanceMole Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:19+00:00"
content_sha256: "5182d007ea19a15dd062ee516224bc199ac160aad2d834bd011c720eb1a6563d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancemole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceMoleTableRow

Data for mole displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI.
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.
- **PartsNum** (`int32`): Number of colors used in the skin feature.
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.
- **DefaultMoleColor** (`FString`): Default mole color in hexadecimal RGB format.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)
