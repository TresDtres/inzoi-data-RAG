---
document_id: "7a68b4719dcd435be6963b8b7ea0c135403f8bed2ec2136b211b8537cac78a18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizpartycustomer"
title: "Description"
section: "wiki/script-filter"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:47:49+00:00"
content_sha256: "8f4bb9c625b1c58bab5ebdfe0278335ff655ecc6ae574c5057ebb11205ea45c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-filter/filter-householdbizpartycustomer"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Finds restaurant party customers in the requested derived service state.

# Parameters

| ParameterDescriptionInContextSelf must be an employee or manager at the operating HouseholdBiz site. For PendingGuide and PendingPayment, a manually picked eligible party member remains the target; autonomy returns one member per party. PendingOrder includes both possessed-customer and NPC-only parties. Group-order UI versus server-side random order selection is decided by the subsequent order handling, not by this target filter.InFilterBaseObject=Self, S1=EB1RestaurantPartyServiceState FName, S2/ConditionId=None. |
| --- |
| InContextSelf must be an employee or manager at the operating HouseholdBiz site. For PendingGuide and PendingPayment, a manually picked eligible party member remains the target; autonomy returns one member per party. PendingOrder includes both possessed-customer and NPC-only parties. Group-order UI versus server-side random order selection is decided by the subsequent order handling, not by this target filter.InFilterBaseObject=Self, S1=EB1RestaurantPartyServiceState FName, S2/ConditionId=None. |
| InFilterBaseObject=Self, S1=EB1RestaurantPartyServiceState FName, S2/ConditionId=None. |

[←Back to Filter FinderSearch and filter all 66 Script Filter documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/commands)See alsoHousehold Biz & Restaurant[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-fleamarket)[FreelanceOrderClient](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-freelanceorderclient)[FreelanceOrderRecipient](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-freelanceorderrecipient)[HouseholdBizAssignedSeat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizassignedseat)[HouseholdBizAssignedTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizassignedtable)[HouseholdBizCustomer](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizcustomer)[HouseholdBizReadyRestaurantDishTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizreadyrestaurantdishtray)[HouseholdBizRestaurantCleanupFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizrestaurantcleanupfood)[HouseholdBizRestaurantDishTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizrestaurantdishtable)[HouseholdBizRestaurantMealFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizrestaurantmealfood)[HouseholdBizRestaurantOrderCounterpart](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizrestaurantordercounterpart)[HouseholdBizRestaurantTraySlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-filter/filter-householdbizrestauranttrayslot)
