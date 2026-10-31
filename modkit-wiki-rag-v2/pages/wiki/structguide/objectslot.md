---
document_id: "b863cc2eb1b105056ce06cf224ad3c9f04b15f5b45ce918c47f141dd97a44d2c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectslot"
title: "📘 ObjectSlot Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:56+00:00"
content_sha256: "ff15e21a6ec1cc3906c4f704bf463592495d18da2aec62678ef676a637ffaabf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/objectslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1ObjectSlotTableRow

Defines settings for object slots that accept attachments, such as sinks or windows.

### Properties

- **Id** (`FName`): Unique identifier for this slot.
- **EnableObjectCategories** (`TArray<FName>`): Object categories allowed in this slot. *(Foreign = "Object.ObjectCategory")*
- **DisableCondition** (`FB1DisableSlotCondition`): Conditions under which this slot becomes unusable.
- **StartOccupyScriptId / EndOccupyScriptId** (`FName`): Scripts triggered when slot becomes occupied or freed. *(Foreign = "Script_Slot.Id")*
- **AllowOverlap** (`bool`): If true, allows overlapping placement.
- **OccupiableOverlap** (`bool`): If true, slot can be considered occupied even when overlapped.

## 📚 References

- [FB1DisableSlotCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disableslotcondition)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoObject[EB1ObjectCustomizeType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1objectcustomizetype)[Object Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/object)[ObjectBp Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectbp)[ObjectCategory Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcategory)[ObjectChangeActorGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangeactorgroup)[ObjectChangeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangematerialgroup)[ObjectChangeMeshGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectchangemeshgroup)[ObjectCustomizeMaterialGroup Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialgroup)[ObjectCustomizeMaterialParts Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizematerialparts)[ObjectCustomizeShapeTemplates Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectcustomizeshapetemplates)[ObjectDataFilter Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectdatafilter)[ObjectPartsCustomUsage Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/objectpartscustomusage)
