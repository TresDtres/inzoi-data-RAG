---
document_id: "0c6e2a1efa53139161363575f97fe684808f457b9680b8d48ec06d294c208905"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence"
title: "Execute_AbortRestaurantCustomerSequence"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "53ef451f5b38d5fa188a765e8fa1af08112da1a9fc26c2c6a7f4fbc7ef9ff445"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-abortrestaurantcustomersequence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Discards the broken restaurant visit sequence containing the BaseObject customer. It clears the affected party's table assignment, order tickets, cooking or serving batch, and waiting records. Use it only to recover an already broken sequence; normal individual departure preserves the group order.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. The customer whose visit sequence must be aborted.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. The customer whose visit sequence must be aborted.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectCommandProbRecover Self's irrecoverably broken visit sequenceSelfAbortRestaurantCustomerSequence1 |
| --- |
| Recover Self's irrecoverably broken visit sequenceSelfAbortRestaurantCustomerSequence1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
