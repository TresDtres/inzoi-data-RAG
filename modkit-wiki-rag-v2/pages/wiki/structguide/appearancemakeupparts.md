---
document_id: "2f1c54ec0a5985be5f87f34a1efe546096634d971d3d04c096e7e9e0ef044e27"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeupparts"
title: "📘 AppearanceMakeupParts Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:19+00:00"
content_sha256: "c3c2fc6763a99e0970c32806835a3317e38fe5dff9377d7b51044a227625896b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/appearancemakeupparts"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1AppearanceMakeupPartsTableRow

Metadata for each makeup part, including the name of the texture parameter used for the makeup part, the number and names of color channels, and scalar parameters per channel.

### Properties

- **Id** (`FName`): Unique identifier for the makeup part.
- **DescTextId** (`FString`): Localized description for the makeup part. *(StringTableKey = "Id")* *(Category = UI)*
- **Thumbnail** (`TSoftObjectPtr<UTexture2D>`): Thumbnail texture displayed in the character customization makeup category list. *(Category = UI)*
- **TextureParameterName** (`FName`): Name of the material parameter that determines which texture is applied to the makeup area.
- **AppearanceParts** (`EB1AppearanceParts`): Parts Data Used to differentiate between appearance types like hair and faceHair when applying customization parameters.
- **DataTableName** (`FName`): Reference to the datatable used to load list items for this customization part in the character customization UI.
- **ChannelData** (`TArray<FB1MakeupChannelInfo>`): Defines customizable channels for this appearance part, including color and scalar material parameters used in the character customization UI.

## 📚 References

- [FB1MakeupChannelInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1makeupchannelinfo)
- [EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoAppearance[EB1AppearanceParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1appearanceparts)[AppearanceBeard Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebeard)[AppearanceBodyShape Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancebodyshape)[AppearanceEyebrow Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyebrow)[AppearanceEyelash Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceeyelash)[AppearanceFacePreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefacepreset)[AppearanceFreckles Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancefreckles)[AppearanceHair Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehair)[AppearanceHairMesh Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehairmesh)[AppearanceHead Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancehead)[AppearanceIrisPreset Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearanceirispreset)[AppearanceMakeup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/appearancemakeup)
