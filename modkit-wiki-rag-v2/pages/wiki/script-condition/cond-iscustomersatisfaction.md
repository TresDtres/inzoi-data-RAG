---
document_id: "7c8111003a10420d213b74fdb16326b368b77d4538dc4302666b56fb512b15c9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction"
title: "Condition_IsCustomerSatisfaction"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "c0d1a802e8c9a3e281aba9a8bfd920702e4aff8097dec05815851f9c261ed300"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscustomersatisfaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Returns whether the total satisfaction score of the BaseObject customer satisfies the threshold value specified by F1. The comparison is between the customer's total satisfaction score (CalculateTotalSatisfactionScore) and the threshold in F1. Returns false if no HouseholdBiz is found at the customer's current Site, if there is no valid customer biz info, or if the customer has not actually visited the Biz today. InRange, OutRange, and None CompareTypes are not supported.

# Parameters

| ParameterDescriptionBaseObjectA customer Character located at a HouseholdBiz site. Used to resolve both the Site and the biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold satisfaction score to compare against the customer's total satisfaction score. Must be a non-negative value. |
| --- |
| BaseObjectA customer Character located at a HouseholdBiz site. Used to resolve both the Site and the biz.CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold satisfaction score to compare against the customer's total satisfaction score. Must be a non-negative value. |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, or LessOrEqual comparison against F1.F1Threshold satisfaction score to compare against the customer's total satisfaction score. Must be a non-negative value. |
| F1Threshold satisfaction score to compare against the customer's total satisfaction score. Must be a non-negative value. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self's satisfaction score equals 80SelfIsCustomerSatisfactionEqualCheck if Target's satisfaction score is greater than 50TargetIsCustomerSatisfactionGreaterCheck if Self's satisfaction score is at most 30SelfIsCustomerSatisfactionLessOrEqualCheck if Target's satisfaction score is not equal to 100TargetIsCustomerSatisfactionNotEqual |
| --- |
| Check if Self's satisfaction score equals 80SelfIsCustomerSatisfactionEqualCheck if Target's satisfaction score is greater than 50TargetIsCustomerSatisfactionGreaterCheck if Self's satisfaction score is at most 30SelfIsCustomerSatisfactionLessOrEqualCheck if Target's satisfaction score is not equal to 100TargetIsCustomerSatisfactionNotEqual |
| Check if Target's satisfaction score is greater than 50TargetIsCustomerSatisfactionGreaterCheck if Self's satisfaction score is at most 30SelfIsCustomerSatisfactionLessOrEqualCheck if Target's satisfaction score is not equal to 100TargetIsCustomerSatisfactionNotEqual |
| Check if Self's satisfaction score is at most 30SelfIsCustomerSatisfactionLessOrEqualCheck if Target's satisfaction score is not equal to 100TargetIsCustomerSatisfactionNotEqual |
| Check if Target's satisfaction score is not equal to 100TargetIsCustomerSatisfactionNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsAssignedRestaurantSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)
