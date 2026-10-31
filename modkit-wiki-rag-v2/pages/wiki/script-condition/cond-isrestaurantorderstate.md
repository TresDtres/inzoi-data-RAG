---
document_id: "d5bbe5d8425fe91e2796fee0882075fdb6d9cb0ccf3faaa011fd0d0b9ff220bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrestaurantorderstate"
title: "Condition_IsRestaurantOrderState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:42+00:00"
content_sha256: "283481445df56de513f0cb58fc80b2013fba9eb274cfc42eaf42126ad632fbeb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isrestaurantorderstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject customer has a restaurant order ticket in the EB1OrderState specified by S1. All real ticket states are supported through enum-name conversion rather than a state-specific branch.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target customer whose order ticket state is checkedS1EB1OrderState FName: Ordered, Cooking, Ready, Served, Eaten, or CancelledCompareTypeEqual: the ticket is in S1. NotEqual: no ticket for the customer is in S1 |
| --- |
| BaseObjectSelf or Target customer whose order ticket state is checkedS1EB1OrderState FName: Ordered, Cooking, Ready, Served, Eaten, or CancelledCompareTypeEqual: the ticket is in S1. NotEqual: no ticket for the customer is in S1 |
| S1EB1OrderState FName: Ordered, Cooking, Ready, Served, Eaten, or CancelledCompareTypeEqual: the ticket is in S1. NotEqual: no ticket for the customer is in S1 |
| CompareTypeEqual: the ticket is in S1. NotEqual: no ticket for the customer is in S1 |

# Examples

IsRestaurantOrderState(BaseObject=Target, S1=Served, CompareType=Equal)

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)
