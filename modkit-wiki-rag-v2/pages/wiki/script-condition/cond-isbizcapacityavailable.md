---
document_id: "b4e75f431a8bca4592151f09710cc4daa7f449c053ef0aff71bc708d31fbc319"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable"
title: "Condition_IsBizCapacityAvailable"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:21+00:00"
content_sha256: "7896f7b00ff378a563d0390aa5c88f3c8b5b92d42e558099c471e6338032d234"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isbizcapacityavailable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the HouseholdBiz at the BaseObject's current Site has at least one vacant employee slot. The BaseObject must be the manager of that HouseholdBiz; if not, the condition returns false. Returns false if no HouseholdBiz is found at the site.

# Parameters

| ParameterDescriptionBaseObjectA Character who must be the manager of the HouseholdBiz at their current site.CompareTypeEqual: true if the biz can hire additional employees. NotEqual: true if the biz cannot hire additional employees. |
| --- |
| BaseObjectA Character who must be the manager of the HouseholdBiz at their current site.CompareTypeEqual: true if the biz can hire additional employees. NotEqual: true if the biz cannot hire additional employees. |
| CompareTypeEqual: true if the biz can hire additional employees. NotEqual: true if the biz cannot hire additional employees. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the biz at Self's site has a vacant employee slotSelfIsBizCapacityAvailableEqualCheck if the biz at Self's site has no more employee slotsSelfIsBizCapacityAvailableNotEqualCheck if the biz at Target's site has available hiring capacityTargetIsBizCapacityAvailableEqual |
| --- |
| Check if the biz at Self's site has a vacant employee slotSelfIsBizCapacityAvailableEqualCheck if the biz at Self's site has no more employee slotsSelfIsBizCapacityAvailableNotEqualCheck if the biz at Target's site has available hiring capacityTargetIsBizCapacityAvailableEqual |
| Check if the biz at Self's site has no more employee slotsSelfIsBizCapacityAvailableNotEqualCheck if the biz at Target's site has available hiring capacityTargetIsBizCapacityAvailableEqual |
| Check if the biz at Target's site has available hiring capacityTargetIsBizCapacityAvailableEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
