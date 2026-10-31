---
document_id: "3cdaf7d7a438ce4b6af6f34842adf53297a19b9bae1ba125f9d20614ad267bbc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tinyshoppricetablerow"
title: "FB1TinyShopPriceTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:40+00:00"
content_sha256: "bc01ebac5f819de6ed99dc50d3e7f2dea27309cce09306a6bc0d1399e515e4a9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1tinyshoppricetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining the pricing rules for objects sold at a tiny shop, including daily fluctuation and type selection count.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`CanBeSoldObjectTags``string[]`Object tags identifying items eligible to be sold via this price rule.`DailyFluctuationRange``number``PriceFluctuationWeights``EB1PriceFluctuationWeight[]`Ordered list of price fluctuation weight factors applied to sold objects.`TypeSelectionCount``integer` |
| --- |
| `CanBeSoldObjectTags``string[]`Object tags identifying items eligible to be sold via this price rule.`DailyFluctuationRange``number``PriceFluctuationWeights``EB1PriceFluctuationWeight[]`Ordered list of price fluctuation weight factors applied to sold objects.`TypeSelectionCount``integer` |
| `DailyFluctuationRange``number``PriceFluctuationWeights``EB1PriceFluctuationWeight[]`Ordered list of price fluctuation weight factors applied to sold objects.`TypeSelectionCount``integer` |
| `PriceFluctuationWeights``EB1PriceFluctuationWeight[]`Ordered list of price fluctuation weight factors applied to sold objects.`TypeSelectionCount``integer` |
| `TypeSelectionCount``integer` |
