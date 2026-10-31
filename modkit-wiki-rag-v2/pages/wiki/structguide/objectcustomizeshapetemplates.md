---
document_id: "69f9d51eae757ea2a2687e480f1c348e6bb8fa4728c52ef296fc13005850b5e2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates"
title: "📘 ObjectCustomizeShapeTemplates Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:55+00:00"
content_sha256: "a23d6d55ec2e88d52509dedf91eebfaf96e7ea55de3fdcac7fa5caabf2409f2a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectcustomizeshapetemplates"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectCustomizeShapeTemplatesRow

Defines a customizable shape template for assembling multi-part objects, including preview, offsets, and named parts.

### Properties

- **TemplateName** (`FName`): Unique identifier for the shape template. *(StringTableKey = "Id")*
- **Icon** (`TSoftObjectPtr<UObject>`): Preview image for the template. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **OffsetX / OffsetY / OffsetZ** (`float`): Positional offsets for UI preview or placement.
- **RotationZ** (`float`): Yaw rotation applied to the template (default -45°).
- **CamDistance** (`float`): Camera distance for UI or editor preview framing.
- **Template** (`TSoftObjectPtr<UBlueprint>`): Blueprint asset used as the base object for this template.
- **PartsName00 ~ PartsName02** (`FName`): Localized part labels for each part group. *(StringTableKey)*
- **PartsTag00 ~ PartsTag02** (`FName`): Logical tags associated with each part group.
- **Parts00 ~ Parts02** (`TArray<FB1ObjectCustomizeShapeParts>`): Arrays of shape parts belonging to each section (e.g., base, detail, accessory).

## 📚 References

- [FB1ObjectCustomizeShapeParts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1objectcustomizeshapeparts)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)[ObjectPartsParamUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartsparamusage)
