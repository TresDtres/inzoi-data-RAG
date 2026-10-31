---
document_id: "baca57f10d57530c70f5b35e889d493681aa9d6c6949b194689b3fb1169603d2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isassignedrestaurantseat"
title: "Condition_IsAssignedRestaurantSeat"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:20+00:00"
content_sha256: "ae69f4d2fac8f8a7b8ff07206c342c76ae8b9075c58588ac66f1d0605a68a1dd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isassignedrestaurantseat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject is the specific customer assigned and guided (activated) to the NonBaseObject restaurant seat/chair (BL-58467, R-04). Returns true only once the assignment has been activated via Execute_ActivateAssignedRestaurantTable - a pending-but-not-yet-guided assignment does not pass. Intended to gate the actual sit-down interaction: once a table's seats are opened (Restricted lifted), only the specific guided customer - not another autonomous character or a manually-possessed customer who happens to click the same open chair - should be allowed to occupy it.

# Note

Resolves the seat's HouseholdBiz via NonBaseObject's located site, not BaseObject's - the seat (a game object) is always the authority for which restaurant it belongs to.

# Parameters

| ParameterDescriptionBaseObjectSelf is the character attempting to sit; NonBaseObject is the seat (chair) objectCompareTypeEqual: true if BaseObject is the seat's guided assignee. NotEqual: true otherwise. |
| --- |
| BaseObjectSelf is the character attempting to sit; NonBaseObject is the seat (chair) objectCompareTypeEqual: true if BaseObject is the seat's guided assignee. NotEqual: true otherwise. |
| CompareTypeEqual: true if BaseObject is the seat's guided assignee. NotEqual: true otherwise. |

# Examples

| DescriptionBaseObjectCommandCompareTypeOnly let the assigned, guided customer sit at their seatSelfIsAssignedRestaurantSeatEqual |
| --- |
| Only let the assigned, guided customer sit at their seatSelfIsAssignedRestaurantSeatEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoHousehold Biz & Restaurant[CanGiveTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangivetip)[CanSettleTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cansettletip)[CanStartFleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstartfleamarket)[CanStealTip](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canstealtip)[CheckMarketStallSeller](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkmarketstallseller)[HasOperatingBizRole](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasoperatingbizrole)[HasRegisteredPocketMarketSellingItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasregisteredpocketmarketsellingitem)[HasRestaurantDishBatchToCook](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasrestaurantdishbatchtocook)[IsBizCapacityAvailable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizcapacityavailable)[IsBizStall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbizstall)[IsBuyableAtTinyShop](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isbuyableattinyshop)[IsCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscustomersatisfaction)
