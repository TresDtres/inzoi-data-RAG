---
document_id: "77e1a766eafb0bc9a62ea153d9403ef18572a11544e8aa412ea9fc8ad710640e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1marketpricetablerow"
title: "FB1MarketPriceTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "961e9608553db1c80c61bc33431c3b0362d4f66d56b483144b6dfd77918c41b8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1marketpricetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a market price data table row. Specifies the daily price fluctuation rate, min/max price ratios, and disaster-driven change rates.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`DisasterChangeRateList``FB1MarketPriceDisasterChangeRate[]`List of disaster-driven price change rate entries for this market item.`MaxRate``number`Maximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).`MinRate``number`Minimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).`PriceChangeRate``number`Daily price fluctuation rate applied to this market item's price. |
| --- |
| `DisasterChangeRateList``FB1MarketPriceDisasterChangeRate[]`List of disaster-driven price change rate entries for this market item.`MaxRate``number`Maximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).`MinRate``number`Minimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).`PriceChangeRate``number`Daily price fluctuation rate applied to this market item's price. |
| `MaxRate``number`Maximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).`MinRate``number`Minimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).`PriceChangeRate``number`Daily price fluctuation rate applied to this market item's price. |
| `MinRate``number`Minimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).`PriceChangeRate``number`Daily price fluctuation rate applied to this market item's price. |
| `PriceChangeRate``number`Daily price fluctuation rate applied to this market item's price. |
