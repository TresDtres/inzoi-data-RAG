---
document_id: "5c2958018d9c6816479d1ec904f720b7ed33543a48fdfed6f1c2c4cb7bc7d767"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop"
title: "Condition_IsBuyableAtTinyShop"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "c679e830bf6f8e494ec2dfbf48aac5a18234da6e4a30755be23301a2124cf569"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isbuyableattinyshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Script condition function to check if an object is buyable at a TinyShop.

This condition verifies whether a character (BaseObject) can purchase a specific game object (NonBaseObject) from a TinyShop. It checks the object's location site, validates the TinyShopComponent, and determines buyability based on shop rules.

# Parameters

| ParameterDescriptionBaseObjectCharacter entity attempting to buy (buyer)CompareTypeEqual / NotEqual |
| --- |
| BaseObjectCharacter entity attempting to buy (buyer)CompareTypeEqual / NotEqual |
| CompareTypeEqual / NotEqual |

# Notes

- The target object is resolved internally via ScriptContext (NonBaseObject).
- Returns false if the buyer character is invalid.
- Returns false if the buy object is invalid.
- Returns false if the object's located site does not have a TinyShopComponent.
- Buyability is determined by TinyShopComponent.IsBuyable() which checks shop inventory and buyer eligibility.

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if character can buy objectSelfIsBuyableAtTinyShopEqualCheck if character cannot buy objectSelfIsBuyableAtTinyShopNotEqual |
| --- |
| Check if character can buy objectSelfIsBuyableAtTinyShopEqualCheck if character cannot buy objectSelfIsBuyableAtTinyShopNotEqual |
| Check if character cannot buy objectSelfIsBuyableAtTinyShopNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
