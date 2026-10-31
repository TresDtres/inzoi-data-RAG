---
document_id: "09d31a8727421cdd7ec8929d07a4765addf882ff32b7921f56ded8edf408893b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isregisteredpocketmarketsellingitem"
title: "Condition_IsRegisteredPocketMarketSellingItem"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:42+00:00"
content_sha256: "f0a33c86469fa073e2d49a9da59ee81ad6a20fc2c4d3b3f2b81d7ecb428a7b73"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isregisteredpocketmarketsellingitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the item entity (BaseObject) is currently registered in the pocket market selling list, regardless of which character registered it.

# Parameters

| ParameterDescriptionBaseObjectThe item entity to check (Self or Target).CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |
| --- |
| BaseObjectThe item entity to check (Self or Target).CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |
| CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target item is listed in the pocket marketTargetIsRegisteredPocketMarketSellingItemEqualCheck if Target item is NOT listed in the pocket marketTargetIsRegisteredPocketMarketSellingItemNotEqualCheck if Self item is listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemEqualCheck if Self item is NOT listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemNotEqual |
| --- |
| Check if Target item is listed in the pocket marketTargetIsRegisteredPocketMarketSellingItemEqualCheck if Target item is NOT listed in the pocket marketTargetIsRegisteredPocketMarketSellingItemNotEqualCheck if Self item is listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemEqualCheck if Self item is NOT listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemNotEqual |
| Check if Target item is NOT listed in the pocket marketTargetIsRegisteredPocketMarketSellingItemNotEqualCheck if Self item is listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemEqualCheck if Self item is NOT listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemNotEqual |
| Check if Self item is listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemEqualCheck if Self item is NOT listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemNotEqual |
| Check if Self item is NOT listed in the pocket marketSelfIsRegisteredPocketMarketSellingItemNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)
