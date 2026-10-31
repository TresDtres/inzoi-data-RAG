---
document_id: "81ceca99e7474be814bdc85c0ca3df56800e9fbe8420a426c6d6540cdcdcc555"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-placeheldobjecttobizslot"
title: "Execute_PlaceHeldObjectToBizSlot"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:38+00:00"
content_sha256: "0d0dc88459a6ece92c560046fe2921d4dc9c700dcccd5ae15f0a5354cf134b52"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-placeheldobjecttobizslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Moves the game object currently held by the NonBaseObject character into a slot on the BaseObject without spawning a new object. Intended for HouseholdBiz usage (e.g., placing prepared food onto tables or counters inside a HouseholdBiz site).

# Note

If S2 is "Saleable_HHB", the placed object is marked as saleable for HouseholdBiz with the appropriate household ownership. S2 also specifies the state group to transition to after placement (state name is always "Normal").

# Parameters

| ParameterDescriptionBaseObjectThe target game object that owns the slots (e.g., a table or counter in a HouseholdBiz site)S1Optional SlotId (ObjectSlotTableRow.Id). If None, finds an empty slot based on ObjectCategoryS2Optional StateGroupId to apply after placement (state is always Normal); "Saleable_HHB" for biz |
| --- |
| BaseObjectThe target game object that owns the slots (e.g., a table or counter in a HouseholdBiz site)S1Optional SlotId (ObjectSlotTableRow.Id). If None, finds an empty slot based on ObjectCategoryS2Optional StateGroupId to apply after placement (state is always Normal); "Saleable_HHB" for biz |
| S1Optional SlotId (ObjectSlotTableRow.Id). If None, finds an empty slot based on ObjectCategoryS2Optional StateGroupId to apply after placement (state is always Normal); "Saleable_HHB" for biz |
| S2Optional StateGroupId to apply after placement (state is always Normal); "Saleable_HHB" for biz |

# Examples

| DescriptionBaseObjectCommandS1S2Place held object into first available slot on TargetTargetPlaceHeldObjectToBizSlotPlace held object into specific slot and mark as saleableTargetPlaceHeldObjectToBizSlotSlotId01Saleable_HHBPlace held food into biz slot and change stateTargetPlaceHeldObjectToBizSlotSlotId01Cooking |
| --- |
| Place held object into first available slot on TargetTargetPlaceHeldObjectToBizSlotPlace held object into specific slot and mark as saleableTargetPlaceHeldObjectToBizSlotSlotId01Saleable_HHBPlace held food into biz slot and change stateTargetPlaceHeldObjectToBizSlotSlotId01Cooking |
| Place held object into specific slot and mark as saleableTargetPlaceHeldObjectToBizSlotSlotId01Saleable_HHBPlace held food into biz slot and change stateTargetPlaceHeldObjectToBizSlotSlotId01Cooking |
| Place held food into biz slot and change stateTargetPlaceHeldObjectToBizSlotSlotId01Cooking |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoHousehold Biz & Restaurant[AbortRestaurantCustomerSequence](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-abortrestaurantcustomersequence)[ActivateAssignedRestaurantTable](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-activateassignedrestauranttable)[AddCustomerSatisfaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcustomersatisfaction)[AddTinyShopScore](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtinyshopscore)[BeginReceivingRestaurantOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-beginreceivingrestaurantorder)[BindRestaurantCookingTray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-bindrestaurantcookingtray)[ClaimRestaurantCookingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantcookingbatch)[ClaimRestaurantServingBatch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-claimrestaurantservingbatch)[CommitPendingRestaurantGroupOrder](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-commitpendingrestaurantgrouporder)[CompleteRestaurantMeal](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestaurantmeal)[CompleteRestaurantTableCleanup](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-completerestauranttablecleanup)[FleaMarket](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-fleamarket)
