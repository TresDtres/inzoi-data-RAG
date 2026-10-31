---
document_id: "8f8fc70b8dff60569ee76a35ea9db01aa98edae98bad79ab278ad5eba7850fc2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoplevel"
title: "B1TinyShopLevel"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:08+00:00"
content_sha256: "ed97477cb4261bcd18ff8c13e5488fa2c5d8a57beb2c97058efc70cd9d0faa1c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1tinyshoplevel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines the settings for a single level of a tiny shop, including score threshold, owner costume, state, and sell pool.

| PropertyTypeDescriptionMetadataLevelint32The shop level number. // TODO: verify max valueCategory: B1TinyShopLevel ClampMax: 10 ClampMin: 0NextScoreint32Score required to advance to the next level. // TODO: verify max valueCategory: B1TinyShopLevel ClampMax: 10000 ClampMin: 1OwnerCostumeIdFNameCostume ID applied to the shop owner at this level.Category: B1TinyShopLevel Foreign: Costume.IdApplyObjectStateFNameObject state variation applied to shop display objects at this level. // StateCategory: B1TinyShopLevel Foreign: StateVariation.IdSellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |
| --- |
| Levelint32The shop level number. // TODO: verify max valueCategory: B1TinyShopLevel ClampMax: 10 ClampMin: 0NextScoreint32Score required to advance to the next level. // TODO: verify max valueCategory: B1TinyShopLevel ClampMax: 10000 ClampMin: 1OwnerCostumeIdFNameCostume ID applied to the shop owner at this level.Category: B1TinyShopLevel Foreign: Costume.IdApplyObjectStateFNameObject state variation applied to shop display objects at this level. // StateCategory: B1TinyShopLevel Foreign: StateVariation.IdSellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |
| NextScoreint32Score required to advance to the next level. // TODO: verify max valueCategory: B1TinyShopLevel ClampMax: 10000 ClampMin: 1OwnerCostumeIdFNameCostume ID applied to the shop owner at this level.Category: B1TinyShopLevel Foreign: Costume.IdApplyObjectStateFNameObject state variation applied to shop display objects at this level. // StateCategory: B1TinyShopLevel Foreign: StateVariation.IdSellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |
| OwnerCostumeIdFNameCostume ID applied to the shop owner at this level.Category: B1TinyShopLevel Foreign: Costume.IdApplyObjectStateFNameObject state variation applied to shop display objects at this level. // StateCategory: B1TinyShopLevel Foreign: StateVariation.IdSellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |
| ApplyObjectStateFNameObject state variation applied to shop display objects at this level. // StateCategory: B1TinyShopLevel Foreign: StateVariation.IdSellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |
| SellObjectPoolTArrayList of object pools available for purchase at this shop level.Category: B1TinyShopLevel |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoTiny[FB1TinyShopDeliveryPriceModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopdeliverypricemodifier)[FB1TinyShopPriceModifierTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoppricemodifiertablerow)[FB1TinyShopPriceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoppricetablerow)[FB1TinyShopScoreModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopscoremodifier)[FB1TinyShopScoreTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshopscoretablerow)[FB1TinyShopTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1tinyshoptablerow)
