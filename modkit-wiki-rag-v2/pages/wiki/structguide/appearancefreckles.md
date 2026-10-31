---
document_id: "e86610b2cdcffa70d0715aae557af0e3b681307e5d146d6c447ba8af551f3a35"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles"
title: "📘 AppearanceFreckles Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "c8d9fc96be342b15a3097b511493c39dff27b10399004ac91e2a8c4d2fa010b6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancefreckles"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceFrecklesTableRow

Data for freckles displayed in the character customization skin feature list.

### Properties

- **Id** (`FName`): Unique identifier for the skin feature.
- **DescTextId** (`FString`): Localized description for the skin feature, displayed in the character customization UI. *(StringTableKey = "Id")*
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image representing the skin feature, displayed in the customization UI.
- **MaskTexture** (`TSoftObjectPtr<UTexture>`): Mask texture used to define the area affected by the skin feature.
- **PartsNum** (`int32`): Number of colors used in the skin feature.
- **HiddenFromUI** (`bool`): Whether the skin feature should be hidden from the character customization UI.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
