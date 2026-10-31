---
document_id: "ce85efb6fadecc3ebc1ea5cdc9b7e3a60fb9f764549494653bb19643f2ef322f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetipfromdialog"
title: "Execute_GiveTipFromDialog"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:30+00:00"
content_sha256: "fb21bb355c060bad73e10dc7585dcdf6b2d866a7566d50073d9150582885d0eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-givetipfromdialog"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Gives a tip directly to the Self employee character through a friendly dialog interaction with the Target customer. The tip amount is randomly selected within the range defined in the HouseholdBiz data asset TipConfig. A "tip success" buff is applied to the employee, and a wall notification is sent to the household monitoring component.

# Note

Self (employee) and Target (customer) are resolved as EB1BaseObject::Self and EB1BaseObject::Target, not via BaseObject. The probability of triggering this Execute is controlled by the calling script's Prob field, not by this function.

# Parameters

| ParameterDescriptionBaseObjectSelf is the employee receiving the tip; Target is the customer giving the tip |
| --- |
| BaseObjectSelf is the employee receiving the tip; Target is the customer giving the tip |

# Examples

| DescriptionBaseObjectCommandEmployee receives a tip from a satisfied customerSelfGiveTipFromDialogFriendly conversation results in a direct tip to staffSelfGiveTipFromDialog |
| --- |
| Employee receives a tip from a satisfied customerSelfGiveTipFromDialogFriendly conversation results in a direct tip to staffSelfGiveTipFromDialog |
| Friendly conversation results in a direct tip to staffSelfGiveTipFromDialog |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
