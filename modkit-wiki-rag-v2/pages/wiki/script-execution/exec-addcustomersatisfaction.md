---
document_id: "951d7ca5caf2e8be48c574beeb1e3352e7d4af1da69863ef68a62a860d893218"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction"
title: "Execute_AddCustomerSatisfaction"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:05+00:00"
content_sha256: "50c8c575d5318a53d1a73a6ed544757a80c6a7d2089d297542b3062cae22a860"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcustomersatisfaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds or subtracts a satisfaction score for the BaseObject customer at their current HouseholdBiz site. The satisfaction factor type is specified by S1 and the delta amount by F1. An inner thought icon is shown to the customer based on the factor type and delta direction. Only customer characters are valid targets; managers and employees are ignored.

# Parameters

| ParameterDescriptionBaseObjectThe customer character whose satisfaction score will be modified; must be at a HouseholdBiz siteS1Satisfaction factor type name (e.g., "Friendliness", "ServiceAvailability", "FurnitureQuality")F1Delta satisfaction score; positive values increase satisfaction, negative values decrease it |
| --- |
| BaseObjectThe customer character whose satisfaction score will be modified; must be at a HouseholdBiz siteS1Satisfaction factor type name (e.g., "Friendliness", "ServiceAvailability", "FurnitureQuality")F1Delta satisfaction score; positive values increase satisfaction, negative values decrease it |
| S1Satisfaction factor type name (e.g., "Friendliness", "ServiceAvailability", "FurnitureQuality")F1Delta satisfaction score; positive values increase satisfaction, negative values decrease it |
| F1Delta satisfaction score; positive values increase satisfaction, negative values decrease it |

# Examples

| DescriptionBaseObjectCommandIncrease customer satisfaction for friendly serviceSelfAddCustomerSatisfactionDecrease customer satisfaction due to poor furnitureSelfAddCustomerSatisfactionBoost satisfaction for service availabilityTargetAddCustomerSatisfaction |
| --- |
| Increase customer satisfaction for friendly serviceSelfAddCustomerSatisfactionDecrease customer satisfaction due to poor furnitureSelfAddCustomerSatisfactionBoost satisfaction for service availabilityTargetAddCustomerSatisfaction |
| Decrease customer satisfaction due to poor furnitureSelfAddCustomerSatisfactionBoost satisfaction for service availabilityTargetAddCustomerSatisfaction |
| Boost satisfaction for service availabilityTargetAddCustomerSatisfaction |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)[GiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-givetip)
