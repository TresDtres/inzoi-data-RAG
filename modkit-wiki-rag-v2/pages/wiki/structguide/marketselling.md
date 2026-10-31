---
document_id: "0c97b8ecf5ab3525d56ea639ac97fa4b978aca39aeb83d1b964befb137481ea7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/marketselling"
title: "📘 MarketSelling Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:52+00:00"
content_sha256: "58d0ba0f455b4e87acfbb376ca7847a063f5b839f5347c809ee63349b25dd8e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/marketselling"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1MarketSellingTableRow

Defines the selling window and pricing progression for market items.

### Properties

- **Id** (`FName`): Unique identifier for the market selling entry.
- **StartSellTime** (`int32`): Game time when selling begins.
- **EndSellTime** (`int32`): Game time when selling ends.
- **SellTimeCount** (`int32`): Number of intervals within the sell duration.
- **InitialSellPercentage** (`float`): Starting probability or ratio of the item being sold.
- **SellPercentageToAdd** (`float`): Amount by which the sell probability increases each day.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMarket[FB1MarketPriceDisasterChangeRate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricedisasterchangerate)[FB1MarketPriceHistory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricehistory)[FB1MarketPriceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricetablerow)[FB1MarketSellingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketsellingtablerow)
