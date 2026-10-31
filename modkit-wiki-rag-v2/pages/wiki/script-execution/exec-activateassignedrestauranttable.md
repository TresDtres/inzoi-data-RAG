---
document_id: "0b08c426c68a5b88ea8575c70f4ac8b73ec06b43d3d84d392a1d077990c97cb3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable"
title: "Execute_ActivateAssignedRestaurantTable"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "293c0dfdff876b349acf054e1fedd91146cefdd7e08c9511eea78160a3beb6e5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-activateassignedrestauranttable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Opens (lifts Restricted on) an already-assigned restaurant table's seats for its group (BL-58467, R-04 primitive). This represents the moment an employee finishes guiding the group to their table - call it immediately before/as part of triggering the actual sit-down interaction, not speculatively ahead of time, to keep the window during which the seats are usable-but-not-yet-occupied as short as possible.

# Note

No-op (logs a warning) if the table has no seat assignment. Safe to call more than once - already activated assignments are ignored.

# Parameters

| ParameterDescriptionBaseObjectTarget is the assigned table object |
| --- |
| BaseObjectTarget is the assigned table object |

# Examples

| DescriptionBaseObjectCommandEmployee finishes guiding the group to their assigned tableTargetActivateAssignedRestaurantTable |
| --- |
| Employee finishes guiding the group to their assigned tableTargetActivateAssignedRestaurantTable |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
