---
document_id: "0186dadd0be8736b0d0ae934d07082093671064999b50f0431a2dd72e848e2e4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontargetisowner"
title: "Condition_InteractionTargetIsOwner"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "8dd5cab74c21ec94c7171d8d567ef117c93e22f5a54621d09d6e17b6523a50ea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-interactiontargetisowner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current interaction target of the BaseObject matches the BaseObject itself, and evaluates the result based on the boolean value provided in S1.

# Parameters

| ParameterDescriptionBaseObjectThe object whose current interaction target will be checked (Self or Target).S1True: succeeds if the interaction target is Self. False: succeeds if the interaction target is not Self. |
| --- |
| BaseObjectThe object whose current interaction target will be checked (Self or Target).S1True: succeeds if the interaction target is Self. False: succeeds if the interaction target is not Self. |
| S1True: succeeds if the interaction target is Self. False: succeeds if the interaction target is not Self. |

# Examples

| DescriptionBaseObjectCommandS1Check if Self's current interaction target is SelfSelfInteractionTargetIsOwnerTrueCheck if Self's current interaction target is NOT SelfSelfInteractionTargetIsOwnerFalseCheck if Target's current interaction target is SelfTargetInteractionTargetIsOwnerTrueCheck if Target's current interaction target is NOT SelfTargetInteractionTargetIsOwnerFalse |
| --- |
| Check if Self's current interaction target is SelfSelfInteractionTargetIsOwnerTrueCheck if Self's current interaction target is NOT SelfSelfInteractionTargetIsOwnerFalseCheck if Target's current interaction target is SelfTargetInteractionTargetIsOwnerTrueCheck if Target's current interaction target is NOT SelfTargetInteractionTargetIsOwnerFalse |
| Check if Self's current interaction target is NOT SelfSelfInteractionTargetIsOwnerFalseCheck if Target's current interaction target is SelfTargetInteractionTargetIsOwnerTrueCheck if Target's current interaction target is NOT SelfTargetInteractionTargetIsOwnerFalse |
| Check if Target's current interaction target is SelfTargetInteractionTargetIsOwnerTrueCheck if Target's current interaction target is NOT SelfTargetInteractionTargetIsOwnerFalse |
| Check if Target's current interaction target is NOT SelfTargetInteractionTargetIsOwnerFalse |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
