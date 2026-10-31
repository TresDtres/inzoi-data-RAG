---
document_id: "712dbb23df65451f24deb768b2b0e1f5018e989df717c1f6a3100f0b0fc04aac"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject"
title: "Condition_CanSpawnCraftingObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:51+00:00"
content_sha256: "b0294777239c8dd905548a421c3da2e589ffd178e46eb0f6b63b4e06ad56ff67"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-canspawncraftingobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject desk can spawn a crafting object at the slot(s) identified by S1.

S1 is first resolved as a SlotName (single-slot path); if no slot matches, it is reinterpreted as an ObjectSlotId and every slot with that id is considered (N-slot path for auto-generated HandCraftSlot groups on multi-seat dining tables — BL-49864).

Each candidate slot is validated by B2CraftingHelper::CanSpawnObjectAtDeskSlot, which requires the connected chair to be occupied and the surrounding box to be free of other object slots. CompareType Equal passes when at least one candidate slot can spawn; NotEqual passes when none of them can.

# Parameters

| ParameterDescriptionBaseObjectThe desk game object that owns the slot(s) to check (Self or Target)CompareTypeEqual: pass when any candidate can spawn; NotEqual: pass when none can spawnS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| --- |
| BaseObjectThe desk game object that owns the slot(s) to check (Self or Target)CompareTypeEqual: pass when any candidate can spawn; NotEqual: pass when none can spawnS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| CompareTypeEqual: pass when any candidate can spawn; NotEqual: pass when none can spawnS1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |
| S1SlotName for a specific slot, or ObjectSlotId to match every slot of that class |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Can we spawn a crafting object at the desk slot?TargetCanSpawnCraftingObjectEqualWorkbench_SlotIs the desk slot blocked (cannot spawn)?TargetCanSpawnCraftingObjectNotEqualWorkbench_SlotAny seat on this dining table able to host a craft?TargetCanSpawnCraftingObjectEqualHandCraftSlot |
| --- |
| Can we spawn a crafting object at the desk slot?TargetCanSpawnCraftingObjectEqualWorkbench_SlotIs the desk slot blocked (cannot spawn)?TargetCanSpawnCraftingObjectNotEqualWorkbench_SlotAny seat on this dining table able to host a craft?TargetCanSpawnCraftingObjectEqualHandCraftSlot |
| Is the desk slot blocked (cannot spawn)?TargetCanSpawnCraftingObjectNotEqualWorkbench_SlotAny seat on this dining table able to host a craft?TargetCanSpawnCraftingObjectEqualHandCraftSlot |
| Any seat on this dining table able to host a craft?TargetCanSpawnCraftingObjectEqualHandCraftSlot |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
