---
document_id: "c292451ff2997dfb47a2f6d0f90f85235b977c2c43304197b862e56f39168cbd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore"
title: "Execute_AddTinyShopScore"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "ab5e133d54a293c3d7bf51c5a24e678dce0c325dab0c85c19724d81c6908ee9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addtinyshopscore"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds the specified score value to the TinyShop site identified by the given TinyShop table ID. The score is added using the Script score type. If the TinyShop site or its component cannot be found, the action is skipped.

# Parameters

| ParameterDescriptionS1TinyShop table ID (TinyShop.Id) identifying the target shop.F1Score value to add to the TinyShop. |
| --- |
| S1TinyShop table ID (TinyShop.Id) identifying the target shop.F1Score value to add to the TinyShop. |
| F1Score value to add to the TinyShop. |

# Examples

| DescriptionBaseObjectCommandS1F1Add 10 score to a specific TinyShop siteSelfAddTinyShopScoreTinyShop_Bakery10Add 5 score to a TinyShop after a successful transactionSelfAddTinyShopScoreTinyShop_Cafe5Add 1 score to a TinyShop upon customer interactionTargetAddTinyShopScoreTinyShop_Store1 |
| --- |
| Add 10 score to a specific TinyShop siteSelfAddTinyShopScoreTinyShop_Bakery10Add 5 score to a TinyShop after a successful transactionSelfAddTinyShopScoreTinyShop_Cafe5Add 1 score to a TinyShop upon customer interactionTargetAddTinyShopScoreTinyShop_Store1 |
| Add 5 score to a TinyShop after a successful transactionSelfAddTinyShopScoreTinyShop_Cafe5Add 1 score to a TinyShop upon customer interactionTargetAddTinyShopScoreTinyShop_Store1 |
| Add 1 score to a TinyShop upon customer interactionTargetAddTinyShopScoreTinyShop_Store1 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
