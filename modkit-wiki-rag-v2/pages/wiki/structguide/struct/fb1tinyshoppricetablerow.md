---
document_id: "564b0d088d0ce00d3e93fa38a09fb46ec3f845dad66408ba8924407463ac4fb4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoppricetablerow"
title: "B1TinyShopPriceTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:08+00:00"
content_sha256: "50f68f666092f9f4bfaa2b4c428d726872c01c2d87f722303f18c2d37c3ababf"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1tinyshoppricetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Table row defining the pricing rules for objects sold at a tiny shop, including daily fluctuation and type selection count.

| PropertyTypeDescriptionMetadataCanBeSoldObjectTagsTArrayObject tags identifying items eligible to be sold via this price rule.Category: B1TinyShopPriceTableRow Foreign: Object.ObjectTagsDailyFluctuationRangefloatMaximum daily price fluctuation range as a fraction (e.g., 0.1 = 10%). // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 1 ClampMin: -1TypeSelectionCountint32Number of object types selected from the pool each day. // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 100 ClampMin: 1PriceFluctuationWeightsTArrayOrdered list of price fluctuation weight factors applied to sold objects.Category: B1TinyShopPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| --- |
| CanBeSoldObjectTagsTArrayObject tags identifying items eligible to be sold via this price rule.Category: B1TinyShopPriceTableRow Foreign: Object.ObjectTagsDailyFluctuationRangefloatMaximum daily price fluctuation range as a fraction (e.g., 0.1 = 10%). // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 1 ClampMin: -1TypeSelectionCountint32Number of object types selected from the pool each day. // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 100 ClampMin: 1PriceFluctuationWeightsTArrayOrdered list of price fluctuation weight factors applied to sold objects.Category: B1TinyShopPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| DailyFluctuationRangefloatMaximum daily price fluctuation range as a fraction (e.g., 0.1 = 10%). // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 1 ClampMin: -1TypeSelectionCountint32Number of object types selected from the pool each day. // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 100 ClampMin: 1PriceFluctuationWeightsTArrayOrdered list of price fluctuation weight factors applied to sold objects.Category: B1TinyShopPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| TypeSelectionCountint32Number of object types selected from the pool each day. // TODO: verify max valueCategory: B1TinyShopPriceTableRow ClampMax: 100 ClampMin: 1PriceFluctuationWeightsTArrayOrdered list of price fluctuation weight factors applied to sold objects.Category: B1TinyShopPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| PriceFluctuationWeightsTArrayOrdered list of price fluctuation weight factors applied to sold objects.Category: B1TinyShopPriceTableRowIdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| IdFNameUnique IdCategory: B1TableRowBaseCommentFStringDev CommentCategory: B1TableRowBase |
| CommentFStringDev CommentCategory: B1TableRowBase |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTiny[FB1TinyShopDeliveryPriceModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopdeliverypricemodifier)[FB1TinyShopLevel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoplevel)[FB1TinyShopPriceModifierTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoppricemodifiertablerow)[FB1TinyShopScoreModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopscoremodifier)[FB1TinyShopScoreTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopscoretablerow)[FB1TinyShopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoptablerow)
