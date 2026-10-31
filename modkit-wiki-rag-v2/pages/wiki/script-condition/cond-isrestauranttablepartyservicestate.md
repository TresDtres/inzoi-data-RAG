---
document_id: "402dd1afe5bb41f6154743237448bdc8492940202e13590a19a23761147d72a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isrestauranttablepartyservicestate"
title: "Condition_IsRestaurantTablePartyServiceState"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:43+00:00"
content_sha256: "c3e5bf62d6989effe6355b7d02ebf26bb4a19ab6d0a2569e067b2b5538c534b7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isrestauranttablepartyservicestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the restaurant party assigned to the BaseObject table is in the service state specified by S1. A table without an assigned party fails for both CompareTypes, so NotEqual only passes for an assigned party that is in another state. Use it to gate table-side service interactions such as handing out the menu.

# Parameters

| ParameterDescriptionBaseObjectThe restaurant table object whose assigned party is checkedS1EB1RestaurantPartyServiceState FName, excluding WaitingTable (pre-assignment; never matches a table)CompareTypeEqual: the assigned party is in S1. NotEqual: it is in another state |
| --- |
| BaseObjectThe restaurant table object whose assigned party is checkedS1EB1RestaurantPartyServiceState FName, excluding WaitingTable (pre-assignment; never matches a table)CompareTypeEqual: the assigned party is in S1. NotEqual: it is in another state |
| S1EB1RestaurantPartyServiceState FName, excluding WaitingTable (pre-assignment; never matches a table)CompareTypeEqual: the assigned party is in S1. NotEqual: it is in another state |
| CompareTypeEqual: the assigned party is in S1. NotEqual: it is in another state |

# Examples

IsRestaurantTablePartyServiceState(BaseObject=Target, S1=PendingOrder, CompareType=Equal)

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)
