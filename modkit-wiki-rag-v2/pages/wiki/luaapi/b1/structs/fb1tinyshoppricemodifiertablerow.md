---
document_id: "83ab037110e7508d40d541c7880640e838e63888f69b1e12e7a2708e5f75659e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tinyshoppricemodifiertablerow"
title: "FB1TinyShopPriceModifierTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:40+00:00"
content_sha256: "4674824f66e40e8f9950dfa397da8d53321185e1681009630808e34c6711c09b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1tinyshoppricemodifiertablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a price modifier rule for tiny shop deliveries, including the modifier type and modifier list.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`Modifiers``FB1TinyShopDeliveryPriceModifier[]`List of delivery price modifiers applied for this modifier type.`TinyShopPriceModifierType`[`EB1TinyShopPriceModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1tinyshoppricemodifiertype)The category of price modifier event this row handles (e.g., daily fluctuation, weather bonus). |
| --- |
| `Modifiers``FB1TinyShopDeliveryPriceModifier[]`List of delivery price modifiers applied for this modifier type.`TinyShopPriceModifierType`[`EB1TinyShopPriceModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1tinyshoppricemodifiertype)The category of price modifier event this row handles (e.g., daily fluctuation, weather bonus). |
| `TinyShopPriceModifierType`[`EB1TinyShopPriceModifierType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1tinyshoppricemodifiertype)The category of price modifier event this row handles (e.g., daily fluctuation, weather bonus). |
