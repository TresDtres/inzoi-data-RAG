---
document_id: "abe720d281f2ac3906e00aed53b924a4d03b98971bc05a28f0446be9c9746921"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage"
title: "📘 ObjectPartsCustomUsage Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:56+00:00"
content_sha256: "49e5cfcca27b547a19dec46f5de78e473af868315f1f4533a073eac9795cc160"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectpartscustomusage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectPartsCustomUsageRow

Defines customization rules for object parts, such as texture compatibility and material/mesh groupings.

### Properties

- **UsableAITexture** (`bool`): If true, AI-generated textures can be applied to this part.
- **UsableImportedTexture** (`bool`): If true, user-imported textures can be used.
- **MeshGroups** (`TArray<FName>`): Group IDs of mesh variants available for customization. *(Foreign = "ObjectChangeMeshGroup.Id")*
- **MaterialChangeGroups** (`TArray<FName>`): Material override groups used with this part. *(Foreign = "ObjectChangeMaterialGroup.Id")*
- **MaterialGroups** (`TArray<FName>`): Material customization layers applied to this part. *(Foreign = "ObjectCustomizeMaterialGroup.Id")*

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsParamUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartsparamusage)
