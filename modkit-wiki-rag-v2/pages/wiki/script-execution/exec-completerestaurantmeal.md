---
document_id: "d30721d3e37b69e16804c54f41bbf49c02a58108ef492b105843bbefcb4594ab"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal"
title: "Execute_CompleteRestaurantMeal"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:22+00:00"
content_sha256: "4b8bcee403a839098db682d498ef5b1b136a8ee594c5d4a0ddbb78993c6925d7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-completerestaurantmeal"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Validates the exact ticket-bound ServedFood without changing its remaining amount and transitions the BaseObject restaurant customer's current order ticket from Served to Eaten. The settlement group advances to PendingPayment after every ticket is terminal and at least one is Eaten; in the normal flow this means every member finished RestaurantEat, while Cancelled remains the no-charge departure exception. This is retained as a compatibility and debug entry point for scripted legacy flows. RestaurantEat performs the same transition directly on Finish, so its FinishScript must not invoke this Execute again.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. The restaurant customer who completed their meal.Non-BaseObjectThe exact ServedFood used by the Eat interaction; ticket binding is the fallback.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. The restaurant customer who completed their meal.Non-BaseObjectThe exact ServedFood used by the Eat interaction; ticket binding is the fallback.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| Non-BaseObjectThe exact ServedFood used by the Eat interaction; ticket binding is the fallback.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectCommandProbComplete a legacy scripted meal without RestaurantEatSelfCompleteRestaurantMeal1 |
| --- |
| Complete a legacy scripted meal without RestaurantEatSelfCompleteRestaurantMeal1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
