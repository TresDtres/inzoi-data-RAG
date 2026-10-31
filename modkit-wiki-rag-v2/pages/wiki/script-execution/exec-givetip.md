---
document_id: "996a7fabab39b648cccc1bb1d1f33bdcc9c17d5501df9ad05730ee8bed90c5e7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip"
title: "Execute_GiveTip"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:30+00:00"
content_sha256: "0a90972b231681b05a3cc09cf86db469a0e0815cb28eebfa45be349d587d1b71"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-givetip"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Processes a customer (Self) giving a tip to the tip bottle at their current HouseholdBiz site. The tip amount is calculated by the HouseholdBiz, deducted from the customer's currency, and added to the tip bottle (using Target as the specific bottle object if valid). A "already gave tip" buff is applied to the customer to enforce a cooldown. If adding to the bottle fails, the customer's currency is refunded.

# Note

Self and Target are resolved directly as EB1BaseObject::Self and EB1BaseObject::Target, not via BaseObject.

# Parameters

| ParameterDescriptionBaseObjectSelf is the customer giving the tip; Target is the tip bottle game object (optional) |
| --- |
| BaseObjectSelf is the customer giving the tip; Target is the tip bottle game object (optional) |

# Examples

| DescriptionBaseObjectCommandCustomer puts a tip into the tip bottle at the bizSelfGiveTipCustomer tips via interaction with a specific tip bottleSelfGiveTip |
| --- |
| Customer puts a tip into the tip bottle at the bizSelfGiveTipCustomer tips via interaction with a specific tip bottleSelfGiveTip |
| Customer tips via interaction with a specific tip bottleSelfGiveTip |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
