---
document_id: "c12e57bde17ca69ee10f7adb84610c2c35bfdf926f684b248b49704d3dcb899f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot"
title: "Condition_HasObjectInCraftingSlot"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "2c3381812cf3854ea4d8252dc148492b44c76092858392f24267095006fb87c9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjectincraftingslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a craft object (carriable or non-carriable) currently occupies any crafting slot identified by S1 on the BaseObject game object.

S1 is first resolved as a SlotName (single-slot path used by KitchenRange, Sink, etc.); if no slot matches, it is reinterpreted as an ObjectSlotId and every slot with that id is evaluated (N-slot path used by auto-generated DiningSlot/HandCraftSlot groups — BL-49864).

When CompareType is Equal, returns true if at least one matched slot is occupied by a valid craft object. When CompareType is NotEqual, returns true if at least one matched slot is empty — allowing crafting to proceed on a 4-seat dining table even when some HandCraftSlots are already in use.

# Parameters

| ParameterDescriptionBaseObjectThe game object that owns the crafting slot(s) to check (Self or Target)CompareTypeEqual: any matched slot occupied; NotEqual: any matched slot emptyS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| --- |
| BaseObjectThe game object that owns the crafting slot(s) to check (Self or Target)CompareTypeEqual: any matched slot occupied; NotEqual: any matched slot emptyS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| CompareTypeEqual: any matched slot occupied; NotEqual: any matched slot emptyS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| S1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Is there a craft object in the Oven_Slot?TargetHasObjectInCraftingSlotEqualOven_SlotIs the Workbench_Input_Slot empty?TargetHasObjectInCraftingSlotNotEqualWorkbench_Input_SlotAny free HandCraftSlot on a 4-seat dining table?TargetHasObjectInCraftingSlotNotEqualHandCraftSlot |
| --- |
| Is there a craft object in the Oven_Slot?TargetHasObjectInCraftingSlotEqualOven_SlotIs the Workbench_Input_Slot empty?TargetHasObjectInCraftingSlotNotEqualWorkbench_Input_SlotAny free HandCraftSlot on a 4-seat dining table?TargetHasObjectInCraftingSlotNotEqualHandCraftSlot |
| Is the Workbench_Input_Slot empty?TargetHasObjectInCraftingSlotNotEqualWorkbench_Input_SlotAny free HandCraftSlot on a 4-seat dining table?TargetHasObjectInCraftingSlotNotEqualHandCraftSlot |
| Any free HandCraftSlot on a 4-seat dining table?TargetHasObjectInCraftingSlotNotEqualHandCraftSlot |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
