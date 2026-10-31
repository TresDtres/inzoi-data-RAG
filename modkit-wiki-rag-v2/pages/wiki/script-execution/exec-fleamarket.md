---
document_id: "499045077dfbe1fb79a4f38f272cdd8b8b3e06dffcf2bfe73fef3c35b6d6b448"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket"
title: "Execute_FleaMarket"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:29+00:00"
content_sha256: "ac22cfba709f14ad2b08f11c6603d4f5b27aeaeac5f3ed244250f77539ff7179"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-fleamarket"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Starts or finishes a flea market with the BaseObject as the seller. If S1 is Start, creates a flea market SiteEvent; if S1 is Finish, destroys the active flea market SiteEvent at the current location.

# Parameters

| ParameterDescriptionBaseObjectThe seller character who starts or finishes the flea market.S1Start: create a new flea market site event; Finish: destroy the active flea market site event. |
| --- |
| BaseObjectThe seller character who starts or finishes the flea market.S1Start: create a new flea market site event; Finish: destroy the active flea market site event. |
| S1Start: create a new flea market site event; Finish: destroy the active flea market site event. |

# Examples

| DescriptionBaseObjectCommandSelf opens a flea market stall at the current siteSelfFleaMarketSelf closes the flea market stallSelfFleaMarketTarget starts a flea market at their locationTargetFleaMarketTarget ends the flea market they are runningTargetFleaMarket |
| --- |
| Self opens a flea market stall at the current siteSelfFleaMarketSelf closes the flea market stallSelfFleaMarketTarget starts a flea market at their locationTargetFleaMarketTarget ends the flea market they are runningTargetFleaMarket |
| Self closes the flea market stallSelfFleaMarketTarget starts a flea market at their locationTargetFleaMarketTarget ends the flea market they are runningTargetFleaMarket |
| Target starts a flea market at their locationTargetFleaMarketTarget ends the flea market they are runningTargetFleaMarket |
| Target ends the flea market they are runningTargetFleaMarket |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
