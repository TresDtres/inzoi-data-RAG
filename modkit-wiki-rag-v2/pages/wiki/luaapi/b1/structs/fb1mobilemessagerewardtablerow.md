---
document_id: "faa8f83b4f803136178eeca9653a95f5fae7e6c214b1554c554f49ad7548398d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1mobilemessagerewardtablerow"
title: "FB1MobileMessageRewardTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:30+00:00"
content_sha256: "ff06fb4802cdb927676410190169ab0415c488f1237da4451f1b7528ce615ce6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1mobilemessagerewardtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining the relationship stat points awarded for each type of mobile message response. Specifies how much the relationship stat changes for positive, neutral, and negative responses.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`NegativePoint``number`Amount added to the relationship stat when the negative response is chosen.`NormalPoint``number`Amount added to the relationship stat when the neutral response is chosen.`PositivePoint``number`Amount added to the relationship stat when the positive response is chosen.`RelationshipStatId``string`ID of the relationship stat that is modified when a response is received. |
| --- |
| `NegativePoint``number`Amount added to the relationship stat when the negative response is chosen.`NormalPoint``number`Amount added to the relationship stat when the neutral response is chosen.`PositivePoint``number`Amount added to the relationship stat when the positive response is chosen.`RelationshipStatId``string`ID of the relationship stat that is modified when a response is received. |
| `NormalPoint``number`Amount added to the relationship stat when the neutral response is chosen.`PositivePoint``number`Amount added to the relationship stat when the positive response is chosen.`RelationshipStatId``string`ID of the relationship stat that is modified when a response is received. |
| `PositivePoint``number`Amount added to the relationship stat when the positive response is chosen.`RelationshipStatId``string`ID of the relationship stat that is modified when a response is received. |
| `RelationshipStatId``string`ID of the relationship stat that is modified when a response is received. |
