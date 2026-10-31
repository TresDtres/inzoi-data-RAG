---
document_id: "d83c8ee5325c5ea9f64e83a3c4a44a63281c61d5708b8edf3b86c447879fc038"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-markhouseholdbizcustomerevicted"
title: "Execute_MarkHouseholdBizCustomerEvicted"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:32+00:00"
content_sha256: "42a61695a111e4a3372561fcbc84824fc42768a94172a5f8022a90fd1a9ab1b9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-markhouseholdbizcustomerevicted"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Marks the BaseObject customer as evicted from the HouseholdBiz at the customer's current Site. The customer is blocked from public entry for the configured number of in-game date changes, including non-business days. Self must be the manager or an employee of that business. Accommodation businesses are intentionally excluded.

# Parameters

| ParameterDescriptionBaseObjectTarget customer to block from public BusinessOperating entry |
| --- |
| BaseObjectTarget customer to block from public BusinessOperating entry |

# Examples

| DescriptionBaseObjectCommandManager evicts the current Target customerTargetMarkHouseholdBizCustomerEvictedEmployee evicts the current Target customerTargetMarkHouseholdBizCustomerEvicted |
| --- |
| Manager evicts the current Target customerTargetMarkHouseholdBizCustomerEvictedEmployee evicts the current Target customerTargetMarkHouseholdBizCustomerEvicted |
| Employee evicts the current Target customerTargetMarkHouseholdBizCustomerEvicted |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
