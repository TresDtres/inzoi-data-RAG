---
document_id: "94a2184f7738f8e792f4f3069343a8f43d23b46bbc2ca3dcc9466b9cb39870c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset"
title: "📘 AppearanceIrisPreset Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:18+00:00"
content_sha256: "3d47eca1f5f8bda14ab60c450d5b71cf19cbb9f3f2aecc47311a4bf238b0daa4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearanceirispreset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceIrisPresetTableRow

Data for iris displayed in the character customization iris list.

### Properties

- **Id** (`FName`): Unique identifier for the iris.
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail image displayed in the character customization iris list. *(Category = UI)*
- **DescTextId** (`FString`): Localized description for the iris preset, displayed in the character customization UI. *(StringTableKey = "Id")* *(Category = UI)*
- **PartsId** (`FName`): Identifier used to group iris customization options. Determines which scalar parameters appear as sliders in the customization UI. *(Foreign = "AppearanceParts.Id")*
- **IrisMasks** (`TSoftObjectPtr<UMaterialInterface>`): Material instance of iris which provides default values for parameters such as iris mask texture, pupil scale, iris UV radius, eye Color 1, eye color2, iris color balance, and iris color balance smoothness.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)[AppearanceMakeupParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts)
