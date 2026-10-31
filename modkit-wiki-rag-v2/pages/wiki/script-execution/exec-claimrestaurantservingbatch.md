---
document_id: "8af84952e9026df3db3788f2e8bdc606f9f09ab2da0ef9d02ea376ed67fcafdc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch"
title: "Execute_ClaimRestaurantServingBatch"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:21+00:00"
content_sha256: "ab66d054e7e29274a24d47454ef8e0d5ae2d5a714b831c7b5d79869cee8edd3c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-claimrestaurantservingbatch"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Claims a Ready batch the BaseObject restaurant worker can serve, regardless of the order it was cooked in. NonBaseObject normally resolves to the batch's canonical WaiterTray01. When the worker already holds a Ready canonical tray, that held tray is accepted as a fallback and the claim decision is made by TryClaimRestaurantServingBatch. A worker can own only one serving claim at a time.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. Must resolve to an eligible restaurant worker.NonBaseObjectThe opposite participant, normally the canonical Ready tray.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. Must resolve to an eligible restaurant worker.NonBaseObjectThe opposite participant, normally the canonical Ready tray.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| NonBaseObjectThe opposite participant, normally the canonical Ready tray.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectNonBaseObjectCommandProbClaim Target Ready tray for Self waiterSelfTargetClaimRestaurantServingBatch1 |
| --- |
| Claim Target Ready tray for Self waiterSelfTargetClaimRestaurantServingBatch1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
