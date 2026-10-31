---
document_id: "47d991ca9c91d838adba070b097dc7b6fdbd4993e1998e7a4db2ab272e40bfd4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/inventory"
title: "📘 Inventory Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:51+00:00"
content_sha256: "3a63354ec1c682cfbd6e625bc823e0cc9c074f874350c1c7e3656646e2d5ced6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/inventory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1InventoryTableRow

Defines the configuration of a type of inventory, including capacity limits, visibility conditions, and inventory type classification.

### Properties

- **Id** (`FName`): Unique identifier for the inventory definition.
- **InventoryType** (`EB1InventoryType`): Type classification of this inventory (e.g., character, site, etc.).
- **MaxCount** (`int32`): Maximum number of objects allowed in this inventory. Use -1 for unlimited.
- **DisplayName** (`FString`): Localized UI label text ID.
- **ObjectConditions** (`TArray<FB1Condition>`): Conditions controlling what can be stored.

## 📚 References

- [EB1InventoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1inventorytype)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoInventory[EB1InventoryType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1inventorytype)[FB1InventoryDisposeCommand](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventorydisposecommand)[FB1InventoryEntityInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventoryentityinfo)[FB1InventoryInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventoryinfo)[FB1InventorySlotData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventoryslotdata)[FB1InventorySlotKey](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventoryslotkey)[FB1InventoryTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1inventorytablerow)
