---
document_id: "018e5ea3901fa687ff22561348a5eab2fcae2e340ba096ffba5f207b7a107692"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserestaurantcookingbatch"
title: "Execute_ReleaseRestaurantCookingBatch"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:43+00:00"
content_sha256: "f6c6ac8208aa3920183616e94ad2895c015893ac2ecf6b7df2ff5f662991c76c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-releaserestaurantcookingbatch"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Releases the Cooking claim owned by the BaseObject worker. The bound tray is destroyed and the chef is cleared, while the tickets remain Cooking so another eligible worker can resume them. Use this in terminal cooking cancel or failure scripts.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. The restaurant worker whose claim is released.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. The restaurant worker whose claim is released.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectCommandProbClean up Self after cooking is canceledSelfReleaseRestaurantCookingBatch1 |
| --- |
| Clean up Self after cooking is canceledSelfReleaseRestaurantCookingBatch1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
