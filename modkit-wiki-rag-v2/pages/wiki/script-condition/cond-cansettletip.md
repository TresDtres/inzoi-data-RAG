---
document_id: "c1fa91953c6f1393727afc676114b8b5165a3ea439ee1101d3eaaaf8f653d19c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip"
title: "Condition_CanSettleTip"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:50+00:00"
content_sha256: "4d11dddbb85b47ea0c02065407e75d2670494074d3f76012683b1a5a87c58842"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-cansettletip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject employee or manager is eligible to settle tips at their current HouseholdBiz site. The character must be an employee or manager. For employees, the biz must be currently operating. The tip bottle must have at least one tip to settle.

# Parameters

| ParameterDescriptionBaseObjectThe employee or manager attempting to settle tipsCompareTypeEqual: returns true if tips can be settled; NotEqual: returns true otherwise |
| --- |
| BaseObjectThe employee or manager attempting to settle tipsCompareTypeEqual: returns true if tips can be settled; NotEqual: returns true otherwise |
| CompareTypeEqual: returns true if tips can be settled; NotEqual: returns true otherwise |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if employee can collect and settle tipsSelfCanSettleTipEqualCheck if the tip bottle is empty (cannot settle)SelfCanSettleTipNotEqual |
| --- |
| Check if employee can collect and settle tipsSelfCanSettleTipEqualCheck if the tip bottle is empty (cannot settle)SelfCanSettleTipNotEqual |
| Check if the tip bottle is empty (cannot settle)SelfCanSettleTipNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
