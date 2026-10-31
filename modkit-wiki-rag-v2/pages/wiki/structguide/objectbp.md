---
document_id: "2d8c8df3101ac58d2fb2dad4494ba54cf3051a552ce7444c88de1ed979e1619a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp"
title: "📘 ObjectBp Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:54+00:00"
content_sha256: "7c430ffef762327111ea169f4cacd18ad5f0a9d5c33dfb74999f8f09999c0f99"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectbp"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectBpTableRow

Defines blueprint-based placement object data, including size, slots, and component setup.

> 🛈 This structure is marked `ModHidden`.

### Properties

- **Id** (`FName`): Unique ID for this blueprint entry.
- **ParentClass** (`FName`): Class name this object inherits from.
- **BoxOriginOffset** (`FVector`): Offset of the bounding box origin from world center.
- **Size** (`FVector`): Physical size of the object in world units.
- **SlotComponents** (`TArray<FB1ObjectBpSlotData>`): Object slot data (for snapping or mounting).
- **ComponentDatas** (`TArray<FB1ObjectBPComponentData>`): List of components used for rendering, logic, and interactivity.
- **DetailType** (`EB2GameObjectDetailType`): Level of detail classification for rendering optimizations.
- **EntranceTransform / ExitTransform** (`FTransform`): Positions used when entering or exiting the object.

## 📚 References

- [FB1ObjectBpSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1objectbpslotdata)
- [FB1ObjectBPComponentData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1objectbpcomponentdata)
- [FB1SlotComponentData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1slotcomponentdata)
- [FB1ObjectSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1objectslotdata)
- [FB1FxSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1fxslotdata)
- [FB1InteractionSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1interactionslotdata)
- [FB1ExtraRequireSpaceSlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1extrarequirespaceslotdata)
- [EB1SloFXEffectType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1slofxeffecttype)
- [EB1BodyAgeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1bodyagetype)
- [EB1ShowRequireSpaceType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1showrequirespacetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)[ObjectPartsParamUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartsparamusage)
