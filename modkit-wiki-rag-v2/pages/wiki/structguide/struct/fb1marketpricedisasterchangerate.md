---
document_id: "6e94028ae50da4b5dfcf2820bebcbbb3174b7a54c527e37a66dbb79786d23450"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricedisasterchangerate"
title: "B1MarketPriceDisasterChangeRate"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:31+00:00"
content_sha256: "5188bbeb91e678479a8e4aee14f034b9d7634ae510a288ab136e774fa6d1b044"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1marketpricedisasterchangerate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Structure that defines market price change rates caused by a disaster event. * Specifies the disaster ID, initial price change rate, and daily recovery change rate.

| PropertyTypeDescriptionMetadataDisasterIdFNameID of the disaster (Weather.Id) that triggers this price change.Category: B1MarketPriceDisasterChangeRate Foreign: Weather.IdInitChangeRatefloatInitial price change rate applied when the disaster occurs.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000DailyChangeRateBeforeRecoveryfloatDaily price change rate applied each day until the market recovers from the disaster.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000 |
| --- |
| DisasterIdFNameID of the disaster (Weather.Id) that triggers this price change.Category: B1MarketPriceDisasterChangeRate Foreign: Weather.IdInitChangeRatefloatInitial price change rate applied when the disaster occurs.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000DailyChangeRateBeforeRecoveryfloatDaily price change rate applied each day until the market recovers from the disaster.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000 |
| InitChangeRatefloatInitial price change rate applied when the disaster occurs.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000DailyChangeRateBeforeRecoveryfloatDaily price change rate applied each day until the market recovers from the disaster.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000 |
| DailyChangeRateBeforeRecoveryfloatDaily price change rate applied each day until the market recovers from the disaster.Category: B1MarketPriceDisasterChangeRate ClampMin: 0.000000 |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMarket[MarketSelling Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/marketselling)[FB1MarketPriceHistory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricehistory)[FB1MarketPriceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricetablerow)[FB1MarketSellingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketsellingtablerow)
