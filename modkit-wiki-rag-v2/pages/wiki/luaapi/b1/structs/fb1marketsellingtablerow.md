---
document_id: "3594e157825480b124ff1a3338873158df474ed4919b425bf3e1dd3de758a916"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1marketsellingtablerow"
title: "FB1MarketSellingTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "a1a4353f471a32e57a7ba0105eb4640f11d84dcfb95d4410e0e2760902b8f0b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1marketsellingtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the selling window configuration for the pocket market, including time range and sell percentage data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`EndSellTime``integer`The in-game hour at which the selling window ends.`InitialSellPercentage``number`The initial sell success percentage at the start of the window.`SellPercentageToAdd``number`The amount added to the sell percentage after each time slot passes.`SellTimeCount``integer`The number of sell time slots available in this window.`StartSellTime``integer`The in-game hour at which the selling window starts. |
| --- |
| `EndSellTime``integer`The in-game hour at which the selling window ends.`InitialSellPercentage``number`The initial sell success percentage at the start of the window.`SellPercentageToAdd``number`The amount added to the sell percentage after each time slot passes.`SellTimeCount``integer`The number of sell time slots available in this window.`StartSellTime``integer`The in-game hour at which the selling window starts. |
| `InitialSellPercentage``number`The initial sell success percentage at the start of the window.`SellPercentageToAdd``number`The amount added to the sell percentage after each time slot passes.`SellTimeCount``integer`The number of sell time slots available in this window.`StartSellTime``integer`The in-game hour at which the selling window starts. |
| `SellPercentageToAdd``number`The amount added to the sell percentage after each time slot passes.`SellTimeCount``integer`The number of sell time slots available in this window.`StartSellTime``integer`The in-game hour at which the selling window starts. |
| `SellTimeCount``integer`The number of sell time slots available in this window.`StartSellTime``integer`The in-game hour at which the selling window starts. |
| `StartSellTime``integer`The in-game hour at which the selling window starts. |
