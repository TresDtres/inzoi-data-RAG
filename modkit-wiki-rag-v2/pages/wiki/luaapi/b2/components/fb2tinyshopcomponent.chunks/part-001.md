---
document_id: "5aa60a7a704081df072c63748a75e708b1f48e253ae3947da8e179d91b2e18da"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2tinyshopcomponent"
title: "FB2TinyShopComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:16+00:00"
content_sha256: "29857e2935d616d4e86462d4b64f7029b6e5e2bfd76e811de60a6c458438d305"
chunk: 1
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/components/fb2tinyshopcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages small shops.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TinyShopComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TinyShopComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TinyShopComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TinyShopComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2TinyShopComponent')` |
| Require`require('Components.B2TinyShopComponent')` |

# Properties (12)

| NameTypeDescription`BargainRecords``table<FB1EntityId, FB2TradeRecordArray>``CachedDeliveryObjectIds``table<string, boolean>``DeliverRecords``table<FB1EntityId, FB2TradeRecordArray>``DeliveryListSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| --- |
| `BargainRecords``table<FB1EntityId, FB2TradeRecordArray>``CachedDeliveryObjectIds``table<string, boolean>``DeliverRecords``table<FB1EntityId, FB2TradeRecordArray>``DeliveryListSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `CachedDeliveryObjectIds``table<string, boolean>``DeliverRecords``table<FB1EntityId, FB2TradeRecordArray>``DeliveryListSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `DeliverRecords``table<FB1EntityId, FB2TradeRecordArray>``DeliveryListSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `DeliveryListSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `LimitedSellStandEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `OwnerSiteId``string`UPROPERTY`SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `SelectedObjects``table<string, FB2SelectedObjectInfo>``SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `SellRecords``table<FB1EntityId, FB2TradeRecordArray>``ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `ShopLevel``integer`UPROPERTY X`ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `ShopScore``number``TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `TinyShopId``string``TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| `TinyShopOwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |

# Functions (17)
