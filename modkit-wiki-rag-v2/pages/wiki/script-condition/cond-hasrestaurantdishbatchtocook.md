---
document_id: "357271258b730fdb0f55529848e3759bf07aad909309f8daed8188ecfead8eef"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook"
title: "Condition_HasRestaurantDishBatchToCook"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:14+00:00"
content_sha256: "246673ca5e3715bad6fc4d953f5de4dca9a4e9a706ef0606f6af77f17dc57ca2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasrestaurantdishbatchtocook"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether Self can cook for the operating restaurant and has restaurant work available. An eligible worker passes when they can resume an owned or unclaimed Cooking batch, or claim a valid Ordered table batch.

# Parameters

| ParameterDescriptionBaseObjectSelf. Must resolve to an eligible restaurant worker.CompareTypeEqual when cooking work must exist, NotEqual when it must not.S1 / S2Not used.F1 / F2Not used. Must be 0. |
| --- |
| BaseObjectSelf. Must resolve to an eligible restaurant worker.CompareTypeEqual when cooking work must exist, NotEqual when it must not.S1 / S2Not used.F1 / F2Not used. Must be 0. |
| CompareTypeEqual when cooking work must exist, NotEqual when it must not.S1 / S2Not used.F1 / F2Not used. Must be 0. |
| S1 / S2Not used.F1 / F2Not used. Must be 0. |
| F1 / F2Not used. Must be 0. |

# Examples

| DescriptionBaseObjectCommandCompareTypeLet an eligible Self start or resume cookingSelfHasRestaurantDishBatchToCookEqual |
| --- |
| Let an eligible Self start or resume cookingSelfHasRestaurantDishBatchToCookEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
