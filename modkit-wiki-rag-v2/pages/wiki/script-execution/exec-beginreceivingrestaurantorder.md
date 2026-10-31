---
document_id: "7780bd17aace5aa2c369bde5a062c15f372b3656da4ed6a04f6a3d42cbd35eb9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder"
title: "Execute_BeginReceivingRestaurantOrder"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:16+00:00"
content_sha256: "03803fb8148613f3ad9ea4fb5ad378019ddefec9f746bd172e9bd2d6670963fe"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-beginreceivingrestaurantorder"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the seated restaurant party from PendingOrder to ReceivingOrder for the current employee Coop (BL-58472). Run as the first restaurant Coop StepScript before WalkTo/Talk. The transition changes the party from PendingOrder to ReceivingOrder, so another employee's PendingOrder TargetFilter no longer selects the party.

# Parameters

| ParameterDescriptionBaseObjectEither participant. BaseObject and non-BaseObject must be customer/employee |
| --- |
| BaseObjectEither participant. BaseObject and non-BaseObject must be customer/employee |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
