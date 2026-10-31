---
document_id: "4a35d1cef6eec380f278141b710d171e9b24d1185cd1658830b029fade8817e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-occupyfleamarketobject"
title: "Execute_OccupyFleaMarketObject"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:34+00:00"
content_sha256: "a29756b28448b701e9939cb8138b8d4184d97e762c95283157e0a2fa3157bfc8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-occupyfleamarketobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Requests or releases occupation of the BaseObject (sale prop) within the flea market event. If S1 is Request, the object is occupied by the seller; if S1 is Release, the occupation is released.

# Parameters

| ParameterDescriptionBaseObjectThe flea market object (stall prop) to occupy or release.S1Request: occupy the object for the seller; Release: release the occupied object. |
| --- |
| BaseObjectThe flea market object (stall prop) to occupy or release.S1Request: occupy the object for the seller; Release: release the occupied object. |
| S1Request: occupy the object for the seller; Release: release the occupied object. |

# Examples

| DescriptionBaseObjectCommandSeller claims a display table for their stallSelfOccupyFleaMarketObjectSeller releases the display table when doneSelfOccupyFleaMarketObjectTarget occupies a flea market prop objectTargetOccupyFleaMarketObjectTarget releases a previously occupied propTargetOccupyFleaMarketObject |
| --- |
| Seller claims a display table for their stallSelfOccupyFleaMarketObjectSeller releases the display table when doneSelfOccupyFleaMarketObjectTarget occupies a flea market prop objectTargetOccupyFleaMarketObjectTarget releases a previously occupied propTargetOccupyFleaMarketObject |
| Seller releases the display table when doneSelfOccupyFleaMarketObjectTarget occupies a flea market prop objectTargetOccupyFleaMarketObjectTarget releases a previously occupied propTargetOccupyFleaMarketObject |
| Target occupies a flea market prop objectTargetOccupyFleaMarketObjectTarget releases a previously occupied propTargetOccupyFleaMarketObject |
| Target releases a previously occupied propTargetOccupyFleaMarketObject |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
