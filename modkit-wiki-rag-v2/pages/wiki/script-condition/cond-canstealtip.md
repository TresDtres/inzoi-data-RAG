---
document_id: "df653aecfcd9fc40eacb271320db81246d44b0c21c8717afb6d2a2d5075fef69"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip"
title: "Condition_CanStealTip"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:51+00:00"
content_sha256: "650ff7dbb82cb74c51dd6b5fbc0195eac0dfd8f7d8848717d7bad53c45109b71"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canstealtip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character can steal tips from the tip bottle at their current HouseholdBiz site. The HouseholdBiz manager is never allowed to steal. The tip bottle must be at HalfFull state or above.

# Parameters

| ParameterDescriptionBaseObjectThe character attempting to steal tips (must not be the HouseholdBiz manager)CompareTypeEqual: returns true if tips can be stolen; NotEqual: returns true otherwise |
| --- |
| BaseObjectThe character attempting to steal tips (must not be the HouseholdBiz manager)CompareTypeEqual: returns true if tips can be stolen; NotEqual: returns true otherwise |
| CompareTypeEqual: returns true if tips can be stolen; NotEqual: returns true otherwise |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if a non-manager character can steal tipsSelfCanStealTipEqualCheck if the tip bottle is too empty to steal fromSelfCanStealTipNotEqual |
| --- |
| Check if a non-manager character can steal tipsSelfCanStealTipEqualCheck if the tip bottle is too empty to steal fromSelfCanStealTipNotEqual |
| Check if the tip bottle is too empty to steal fromSelfCanStealTipNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
