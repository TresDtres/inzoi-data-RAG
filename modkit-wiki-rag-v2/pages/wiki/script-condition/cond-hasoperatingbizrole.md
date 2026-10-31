---
document_id: "8dcc00d32a47123cf79cbbd81621191c6cbb9bcf56ef9819b6879bea9aa74d70"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole"
title: "Condition_HasOperatingBizRole"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "c7d88468b0f778240f25afc85f8b888928f80a2d64135ea8c2ef97abb56473c3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasoperatingbizrole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the BaseObject's global HouseholdBiz role matches the specified Role. Unlike Condition_HouseholdBizRole (site-based), this condition determines the role by inspecting the BaseObject's current schedule's TimelineDtId and comparing it against the role base timeline IDs defined in UB1HouseholdBizDataAsset. When there is no current schedule, NotEqual returns true.

# Parameters

| ParameterDescriptionBaseObjectAn Entity that has a TimelineComponent (typically a Character).CompareTypeEqual: true if the current schedule's TimelineDtId matches the role's base timeline ID. NotEqual: true if it does not.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| --- |
| BaseObjectAn Entity that has a TimelineComponent (typically a Character).CompareTypeEqual: true if the current schedule's TimelineDtId matches the role's base timeline ID. NotEqual: true if it does not.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| CompareTypeEqual: true if the current schedule's TimelineDtId matches the role's base timeline ID. NotEqual: true if it does not.S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |
| S1HouseholdBiz role to compare against: Customer, Employee, or Manager. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self currently has the Employee biz role in their scheduleSelfHasOperatingBizRoleEqualCheck if Target does not have the Manager biz role in scheduleTargetHasOperatingBizRoleNotEqualCheck if Self currently has the Customer biz role in their scheduleSelfHasOperatingBizRoleEqual |
| --- |
| Check if Self currently has the Employee biz role in their scheduleSelfHasOperatingBizRoleEqualCheck if Target does not have the Manager biz role in scheduleTargetHasOperatingBizRoleNotEqualCheck if Self currently has the Customer biz role in their scheduleSelfHasOperatingBizRoleEqual |
| Check if Target does not have the Manager biz role in scheduleTargetHasOperatingBizRoleNotEqualCheck if Self currently has the Customer biz role in their scheduleSelfHasOperatingBizRoleEqual |
| Check if Self currently has the Customer biz role in their scheduleSelfHasOperatingBizRoleEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
