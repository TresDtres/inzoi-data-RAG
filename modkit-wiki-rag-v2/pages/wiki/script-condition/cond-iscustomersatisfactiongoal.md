---
document_id: "3ee422149684d5ec19aa6abf8e8736870314078abfd3789a0dfdede18336f16d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfactiongoal"
title: "Condition_IsCustomerSatisfactionGoal"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "d14c4f51befb77427617688491af1a6839583012c93802f106b83da69d0f4f65"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscustomersatisfactiongoal"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the total satisfaction score of the BaseObject customer meets the level-based goal score defined in FB1HouseholdBizConfigTableRow (CustomerSatisfactionGoalScore for the current biz level). The comparison is between the customer's total satisfaction score (CalculateTotalSatisfactionScore) and the goal score from the config table. Returns false if no HouseholdBiz is found at the customer's current Site, if there is no valid config or level info, or if the customer has not visited the Biz today. InRange, OutRange, and None CompareTypes are not supported.

# Parameters

| ParameterDescriptionBaseObjectA customer Character located at a HouseholdBiz site. Used to resolve both the Site and the biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against the goal score. |
| --- |
| BaseObjectA customer Character located at a HouseholdBiz site. Used to resolve both the Site and the biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against the goal score. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against the goal score. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's satisfaction score meets the level goalSelfIsCustomerSatisfactionGoalGreaterOrEqualCheck if Target's satisfaction score exceeds the level goalTargetIsCustomerSatisfactionGoalGreaterCheck if Self's satisfaction score is below the level goalSelfIsCustomerSatisfactionGoalLessCheck if Target's satisfaction score does not equal the goalTargetIsCustomerSatisfactionGoalNotEqual |
| --- |
| Check if Self's satisfaction score meets the level goalSelfIsCustomerSatisfactionGoalGreaterOrEqualCheck if Target's satisfaction score exceeds the level goalTargetIsCustomerSatisfactionGoalGreaterCheck if Self's satisfaction score is below the level goalSelfIsCustomerSatisfactionGoalLessCheck if Target's satisfaction score does not equal the goalTargetIsCustomerSatisfactionGoalNotEqual |
| Check if Target's satisfaction score exceeds the level goalTargetIsCustomerSatisfactionGoalGreaterCheck if Self's satisfaction score is below the level goalSelfIsCustomerSatisfactionGoalLessCheck if Target's satisfaction score does not equal the goalTargetIsCustomerSatisfactionGoalNotEqual |
| Check if Self's satisfaction score is below the level goalSelfIsCustomerSatisfactionGoalLessCheck if Target's satisfaction score does not equal the goalTargetIsCustomerSatisfactionGoalNotEqual |
| Check if Target's satisfaction score does not equal the goalTargetIsCustomerSatisfactionGoalNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)
