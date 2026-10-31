---
document_id: "a560c1585e92f1322923f7ef40e942e4ec6dd38c6d02ccf1cae1ffa87f34b618"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname"
title: "Condition_InteractionName"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "12838defc443ae925cf6228400a0ed73ae1748abf950daf724f62c3d637f5f8c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-interactionname"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the interaction currently being performed by the specified BaseObject and compares it against the given interaction ID.

# Parameters

| ParameterDescriptionBaseObjectThe object whose current interaction will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The interaction ID to compare against the BaseObject's current interaction. |
| --- |
| BaseObjectThe object whose current interaction will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The interaction ID to compare against the BaseObject's current interaction. |
| CompareTypeThe comparison operator (Equal, NotEqual).S1The interaction ID to compare against the BaseObject's current interaction. |
| S1The interaction ID to compare against the BaseObject's current interaction. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is performing the "Book_PickUp_Sit_Read" interactionSelfInteractionNameEqualBook_PickUp_Sit_ReadCheck if Self is NOT performing the "Book_PickUp_Sit_Read" interactionSelfInteractionNameNotEqualBook_PickUp_Sit_ReadCheck if Target is performing a specific interactionTargetInteractionNameEqualPiano_PlayCheck if Target is NOT performing a specific interactionTargetInteractionNameNotEqualPiano_Play |
| --- |
| Check if Self is performing the "Book_PickUp_Sit_Read" interactionSelfInteractionNameEqualBook_PickUp_Sit_ReadCheck if Self is NOT performing the "Book_PickUp_Sit_Read" interactionSelfInteractionNameNotEqualBook_PickUp_Sit_ReadCheck if Target is performing a specific interactionTargetInteractionNameEqualPiano_PlayCheck if Target is NOT performing a specific interactionTargetInteractionNameNotEqualPiano_Play |
| Check if Self is NOT performing the "Book_PickUp_Sit_Read" interactionSelfInteractionNameNotEqualBook_PickUp_Sit_ReadCheck if Target is performing a specific interactionTargetInteractionNameEqualPiano_PlayCheck if Target is NOT performing a specific interactionTargetInteractionNameNotEqualPiano_Play |
| Check if Target is performing a specific interactionTargetInteractionNameEqualPiano_PlayCheck if Target is NOT performing a specific interactionTargetInteractionNameNotEqualPiano_Play |
| Check if Target is NOT performing a specific interactionTargetInteractionNameNotEqualPiano_Play |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
