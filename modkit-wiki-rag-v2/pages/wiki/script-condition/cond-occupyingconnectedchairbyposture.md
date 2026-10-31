---
document_id: "e9d2bef1ec74df53726292dc67b6204410ced4a3fb0a5d7a42ec035c44040e1a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-occupyingconnectedchairbyposture"
title: "Condition_OccupyingConnectedChairByPosture"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "520050ed0b2a9217fe9046d3de36ae482a1ce54449c2cdc8ee21f06a1d4afed8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-occupyingconnectedchairbyposture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if Self is occupying a chair slot connected to the parent object of Target while in the specified posture. This traverses from the Target entity up to its parent object and checks the connected chair slot for Self's occupancy with a Posture reason.

# Parameters

| ParameterDescriptionBaseObjectSelf is the character to check occupancy for; Target is the child object whose parent holds the chair slot.CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, e.g., Sit). |
| --- |
| BaseObjectSelf is the character to check occupancy for; Target is the child object whose parent holds the chair slot.CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, e.g., Sit). |
| CompareTypeSupported compare types: Equal (is occupying), NotEqual (is not occupying).S1Posture type to check for the Self entity (PostureCategory FName, e.g., Sit). |
| S1Posture type to check for the Self entity (PostureCategory FName, e.g., Sit). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is sitting in the chair connected to Target's parent objectSelfOccupyingConnectedChairByPostureEqualCheck if Self is not sitting in the chair connected to Target's parent objectSelfOccupyingConnectedChairByPostureNotEqualCheck if Self occupies the connected chair slot with Stand postureSelfOccupyingConnectedChairByPostureEqual |
| --- |
| Check if Self is sitting in the chair connected to Target's parent objectSelfOccupyingConnectedChairByPostureEqualCheck if Self is not sitting in the chair connected to Target's parent objectSelfOccupyingConnectedChairByPostureNotEqualCheck if Self occupies the connected chair slot with Stand postureSelfOccupyingConnectedChairByPostureEqual |
| Check if Self is not sitting in the chair connected to Target's parent objectSelfOccupyingConnectedChairByPostureNotEqualCheck if Self occupies the connected chair slot with Stand postureSelfOccupyingConnectedChairByPostureEqual |
| Check if Self occupies the connected chair slot with Stand postureSelfOccupyingConnectedChairByPostureEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
