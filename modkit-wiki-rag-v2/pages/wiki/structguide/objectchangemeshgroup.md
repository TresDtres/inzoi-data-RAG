---
document_id: "91710f0c4743e3cab5c67dac5bfa2e49b4555a22d8aea99e7b903ad9c9252aae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup"
title: "📘 ObjectChangeMeshGroup Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:55+00:00"
content_sha256: "e723707308032d46466ce43eaa0f995af8999a2f18da6b21f6b52f7cc47da837"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectchangemeshgroup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectChangeMeshGroupRow

Defines a group of mesh variants for a customizable object, including preview image and UI display name.

### Properties

- **GroupName** (`FName`): Internal group name. *(StringTableKey = "Id")*
- **DisplayName** (`FName`): Display name shown in UI. *(StringTableKey = "Id")*
- **Icon** (`TSoftObjectPtr<UObject>`): Icon used for UI display. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*
- **OverrideParam** (`bool`): If true, this mesh overrides default material parameters.
- **ParamUsageId** (`FName`): Parameter usage identifier linked to object material logic. *(Foreign = "ObjectPartsParamUsage.Id")*
- **ChangeParam** (`TArray<FB1GameObjectChangeMeshParam>`): List of mesh variants in this group.

## 📚 References

- [FB1GameObjectChangeMeshParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectchangemeshparam)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)[ObjectPartsParamUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartsparamusage)
