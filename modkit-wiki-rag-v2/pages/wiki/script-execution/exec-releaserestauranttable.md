---
document_id: "0645657ecbf3b7525da773f51f397c00de56c729248dca269994302f6fbeb6e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-releaserestauranttable"
title: "Execute_ReleaseRestaurantTable"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:44+00:00"
content_sha256: "8016c8b8d72cb547a5193b056e363d172428eac6a6b30cbd18e1869379684b17"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-releaserestauranttable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Releases a restaurant table's seat assignment, if any, restoring Restricted on its seats (BL-58467, R-04 primitive). Also clears any occupying reasons the assigned group may have left behind if they had already physically sat down. Intended for group departure (payment complete, cancellation, or walkout).

# Note

No-op if the table has no seat assignment - safe to call defensively.

# Parameters

| ParameterDescriptionBaseObjectTarget is the table object |
| --- |
| BaseObjectTarget is the table object |

# Examples

| DescriptionBaseObjectCommandGroup finishes payment and leaves their tableTargetReleaseRestaurantTable |
| --- |
| Group finishes payment and leaves their tableTargetReleaseRestaurantTable |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
