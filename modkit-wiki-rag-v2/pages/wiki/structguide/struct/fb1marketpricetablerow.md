---
document_id: "6b04d737b631320545fcf2de45fe93c3b81eb6315b3c856a0f977422f2350d3d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricetablerow"
title: "B1MarketPriceTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:31+00:00"
content_sha256: "169cce1e106f2be85e850b6b0714efe6ddd93cf2534dafc79e1c37ec6d7ca614"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1marketpricetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Structure that defines a market price data table row. * Specifies the daily price fluctuation rate, min/max price ratios, and disaster-driven change rates.

| PropertyTypeDescriptionMetadataPriceChangeRatefloatDaily price fluctuation rate applied to this market item's price.Category: B1MarketPriceTableRow ClampMin: 0.000000MinRatefloatMinimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).Category: B1MarketPriceTableRow ClampMin: 0.000000MaxRatefloatMaximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).Category: B1MarketPriceTableRow ClampMin: 1.000000DisasterChangeRateListTArrayList of disaster-driven price change rate entries for this market item.Category: B1MarketPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| PriceChangeRatefloatDaily price fluctuation rate applied to this market item's price.Category: B1MarketPriceTableRow ClampMin: 0.000000MinRatefloatMinimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).Category: B1MarketPriceTableRow ClampMin: 0.000000MaxRatefloatMaximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).Category: B1MarketPriceTableRow ClampMin: 1.000000DisasterChangeRateListTArrayList of disaster-driven price change rate entries for this market item.Category: B1MarketPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| MinRatefloatMinimum price ratio relative to base cost (e.g., 0.2 = 20% of base price).Category: B1MarketPriceTableRow ClampMin: 0.000000MaxRatefloatMaximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).Category: B1MarketPriceTableRow ClampMin: 1.000000DisasterChangeRateListTArrayList of disaster-driven price change rate entries for this market item.Category: B1MarketPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| MaxRatefloatMaximum price ratio relative to base cost (e.g., 10.0 = 1000% of base price).Category: B1MarketPriceTableRow ClampMin: 1.000000DisasterChangeRateListTArrayList of disaster-driven price change rate entries for this market item.Category: B1MarketPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| DisasterChangeRateListTArrayList of disaster-driven price change rate entries for this market item.Category: B1MarketPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoMarket[MarketSelling Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/marketselling)[FB1MarketPriceDisasterChangeRate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricedisasterchangerate)[FB1MarketPriceHistory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketpricehistory)[FB1MarketSellingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1marketsellingtablerow)
