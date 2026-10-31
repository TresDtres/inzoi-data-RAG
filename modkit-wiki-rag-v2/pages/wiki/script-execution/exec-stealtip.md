---
document_id: "d51552b46a755c479645465867ae091aae02b8437bf6c242e116800ce18c2910"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stealtip"
title: "Execute_StealTip"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:01+00:00"
content_sha256: "067e7b88ab9001c698f2195453e2ed750c6b20607fec7364eeaa5b9b962eca4c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-stealtip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Steals the entire contents of the tip bottle at the HouseholdBiz site where Self is located. The stolen amount is transferred directly to Self's currency with no record (NoRecord transaction reason). The HouseholdBiz manager is not allowed to steal. The tip bottle is cleared after the theft.

# Note

Self is resolved directly as EB1BaseObject::Self, not via BaseObject. Crime system integration for this action is handled by the existing steal interaction.

# Parameters

| ParameterDescriptionBaseObjectSelf is the character stealing the tips; must not be the HouseholdBiz manager |
| --- |
| BaseObjectSelf is the character stealing the tips; must not be the HouseholdBiz manager |

# Examples

| DescriptionBaseObjectCommandNon-manager character steals all tips from the bottleSelfStealTipEmployee secretly empties the tip bottleSelfStealTip |
| --- |
| Non-manager character steals all tips from the bottleSelfStealTipEmployee secretly empties the tip bottleSelfStealTip |
| Employee secretly empties the tip bottleSelfStealTip |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
