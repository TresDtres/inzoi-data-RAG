---
document_id: "919148f2d9c56368bd7db68e43127130f588777860cbd1c3f62da37a9515a4d3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem"
title: "Condition_HasRegisteredPocketMarketSellingItem"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:12+00:00"
content_sha256: "b790f160000b3a946bd56109fc1f3f5c266f37885b9776e62da2bc9c7fbbefcd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasregisteredpocketmarketsellingitem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character (the non-base entity) has registered a specific item (the base entity) for sale in the pocket market. If BaseObject is Target, the character is Self, and vice versa.

# Parameters

| ParameterDescriptionBaseObjectThe item entity to check (Self or Target); the character is the opposite BaseObject.CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |
| --- |
| BaseObjectThe item entity to check (Self or Target); the character is the opposite BaseObject.CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |
| CompareTypeEqual: the item is registered, NotEqual: the item is not registered. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has registered Target item for saleTargetHasRegisteredPocketMarketSellingItemEqualCheck if Self has NOT registered Target item for saleTargetHasRegisteredPocketMarketSellingItemNotEqualCheck if Target has registered Self item for saleSelfHasRegisteredPocketMarketSellingItemEqualCheck if Target has NOT registered Self item for saleSelfHasRegisteredPocketMarketSellingItemNotEqual |
| --- |
| Check if Self has registered Target item for saleTargetHasRegisteredPocketMarketSellingItemEqualCheck if Self has NOT registered Target item for saleTargetHasRegisteredPocketMarketSellingItemNotEqualCheck if Target has registered Self item for saleSelfHasRegisteredPocketMarketSellingItemEqualCheck if Target has NOT registered Self item for saleSelfHasRegisteredPocketMarketSellingItemNotEqual |
| Check if Self has NOT registered Target item for saleTargetHasRegisteredPocketMarketSellingItemNotEqualCheck if Target has registered Self item for saleSelfHasRegisteredPocketMarketSellingItemEqualCheck if Target has NOT registered Self item for saleSelfHasRegisteredPocketMarketSellingItemNotEqual |
| Check if Target has registered Self item for saleSelfHasRegisteredPocketMarketSellingItemEqualCheck if Target has NOT registered Self item for saleSelfHasRegisteredPocketMarketSellingItemNotEqual |
| Check if Target has NOT registered Self item for saleSelfHasRegisteredPocketMarketSellingItemNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
