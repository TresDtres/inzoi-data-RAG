---
document_id: "6faad54570002c221137c8592f3e301463dfba7f84967cac978c1009f55c3318"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-tryassignrestauranttable"
title: "Execute_TryAssignRestaurantTable"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "df5ab853dcf8f645eb9b9935e968a88dafe74c5d69bff4f43f5042674293f831"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-tryassignrestauranttable"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Registers Self's party at the connected seats of the Target restaurant table (BL-58468, R-06). The party is Self plus every customer-eligible member of Self's ZoiGroup. Assignment remains blocked until all of those members are present as customers at this restaurant; a customer with no ZoiGroup is a party of one. This only records the assignment - the seats remain Restricted for everyone, including the party, until Execute_ActivateAssignedRestaurantTable runs when an employee actually guides the group there. A wandering-in or manually-possessed customer can never sit down by themselves this way.

# Note

Delegates to FB2HouseholdBiz::TryAssignTableToParty, which gathers the complete party (via B2ZoiGroupHelper) and rejects parties larger than the max table capacity (no table sharing). No-op (logs a warning) if Self is not at a restaurant HouseholdBiz site, the party is oversized, the table is already assigned, or the table has no valid connected seat.

# Parameters

| ParameterDescriptionBaseObjectSelf is the customer requesting a seat; Target is the table object |
| --- |
| BaseObjectSelf is the customer requesting a seat; Target is the table object |

# Examples

| DescriptionBaseObjectCommandCustomer requests to be seated at a tableSelfTryAssignRestaurantTable |
| --- |
| Customer requests to be seated at a tableSelfTryAssignRestaurantTable |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
