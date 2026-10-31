---
document_id: "449bc1a27c7c94bf9edd5666fd23e1ce4ae3beec6d42c937238f92dc3f5b76a9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray"
title: "Execute_BindRestaurantCookingTray"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "e5acb551b05073ba68214b0abab7c2650ad4682d721891741d79e3fdc5e14704"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-bindrestaurantcookingtray"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Spawns a WaiterTray01 into the BaseObject worker's PickUpContext hand and binds that exact entity to their Cooking batch. Use this only from the cooking-side RestaurantPickUp animation notify that creates the tray.

# Parameters

| ParameterDescriptionBaseObjectSelf or Target. Must resolve to the worker owning the batch.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| --- |
| BaseObjectSelf or Target. Must resolve to the worker owning the batch.S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| S1 / S2Not used.F1 / F2Not used. Must be 0.ProbMust be 1. |
| F1 / F2Not used. Must be 0.ProbMust be 1. |
| ProbMust be 1. |

# Examples

| DescriptionBaseObjectCommandProbCreate and bind Self's cooking tray at notifySelfBindRestaurantCookingTray1 |
| --- |
| Create and bind Self's cooking tray at notifySelfBindRestaurantCookingTray1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
