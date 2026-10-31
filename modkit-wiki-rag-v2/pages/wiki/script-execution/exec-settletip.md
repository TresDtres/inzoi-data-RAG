---
document_id: "550f5afcbc1862007393f8967fdaae39a435091861f1f323a263348f399bf23d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-settletip"
title: "Execute_SettleTip"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:57+00:00"
content_sha256: "28c8addc5ca281e2fb6dbd7ca415eef42c77130b8f3cc8eb03c31ae257f54813"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-settletip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Settles tips from the tip bottle at the HouseholdBiz site where Self is located. If S1 is "ManagerTakeAll", the manager receives all tips and a negative buff (S2) is applied to employees. Otherwise, tips are distributed equally (1/N) among all working employees and the manager.

# Parameters

| ParameterDescriptionBaseObjectSelf is the employee or manager executing the tip settlementS1Distribution mode: "ManagerTakeAll" for manager-only collection; omit for equal distributionS2Negative buff ID to apply to employees when S1 is "ManagerTakeAll" (optional) |
| --- |
| BaseObjectSelf is the employee or manager executing the tip settlementS1Distribution mode: "ManagerTakeAll" for manager-only collection; omit for equal distributionS2Negative buff ID to apply to employees when S1 is "ManagerTakeAll" (optional) |
| S1Distribution mode: "ManagerTakeAll" for manager-only collection; omit for equal distributionS2Negative buff ID to apply to employees when S1 is "ManagerTakeAll" (optional) |
| S2Negative buff ID to apply to employees when S1 is "ManagerTakeAll" (optional) |

# Examples

| DescriptionBaseObjectCommandEmployee equally distributes tips among all staffSelfSettleTipManager takes all tips and applies a penalty buffSelfSettleTip |
| --- |
| Employee equally distributes tips among all staffSelfSettleTipManager takes all tips and applies a penalty buffSelfSettleTip |
| Manager takes all tips and applies a penalty buffSelfSettleTip |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
