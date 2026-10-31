---
document_id: "408083cec5ea712920845665124fa4499ae2890821cc9047dbdb8af4f800a78f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectweathering"
title: "📘 ObjectWeathering Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:57+00:00"
content_sha256: "a64a0612a5a8ba00d8542ddc8bc652a7412e84023d338aab47674c8dd4d2a12a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectweathering"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectWeatheringTableRow

Defines weathering behavior for an object, including condition stages and effects.

### Properties

- **Id** (`FName`): Unique identifier for the weathering group.
- **DisplayNameTextId** (`FString`): Localized label shown in UI. *(StringTableKey = "Id")*
- **WeatheringInfos** (`TArray<FB1ObjectWeatheringInfo>`): Stages or effects applied as the object weathers over time.

## 📚 References

- [FB1ObjectWeatheringInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1objectweatheringinfo)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)
