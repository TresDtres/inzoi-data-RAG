---
document_id: "341fbeb5b4b8420d365f36cb42bcce7cdbf4c4f85653289a5c03963db25a68d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-occupyingslotbyposture"
title: "Condition_OccupyingSlotByPosture"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "3dff027e31cb78c3fc2c700bf994984a11fa32d0caf94ad06c8183e31f7026e0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-occupyingslotbyposture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the Self entity is occupying a Posture-reason Interaction slot on the Target entity while in the specified posture. The Self entity's current posture must match S1, and Self must occupy an Interaction slot on Target with Posture as the occupying reason.

# Parameters

| ParameterDescriptionBaseObjectNot used to resolve the entity; Self is always the occupying entity, Target is the object.CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, default: Stand). |
| --- |
| BaseObjectNot used to resolve the entity; Self is always the occupying entity, Target is the object.CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, default: Stand). |
| CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, default: Stand). |
| S1Posture type to check for the Self entity (PostureCategory FName, default: Stand). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is occupying a Sit-posture slot on TargetSelfOccupyingSlotByPostureEqualCheck if Self is not occupying a Sit-posture slot on TargetSelfOccupyingSlotByPostureNotEqualCheck if Self is occupying a Stand-posture slot on TargetSelfOccupyingSlotByPostureEqual |
| --- |
| Check if Self is occupying a Sit-posture slot on TargetSelfOccupyingSlotByPostureEqualCheck if Self is not occupying a Sit-posture slot on TargetSelfOccupyingSlotByPostureNotEqualCheck if Self is occupying a Stand-posture slot on TargetSelfOccupyingSlotByPostureEqual |
| Check if Self is not occupying a Sit-posture slot on TargetSelfOccupyingSlotByPostureNotEqualCheck if Self is occupying a Stand-posture slot on TargetSelfOccupyingSlotByPostureEqual |
| Check if Self is occupying a Stand-posture slot on TargetSelfOccupyingSlotByPostureEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
