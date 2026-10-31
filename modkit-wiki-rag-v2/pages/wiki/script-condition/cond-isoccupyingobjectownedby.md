---
document_id: "ff4850e8362d6db7c03af332028092e3595e510433d855c19e18b88b2f0836f0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isoccupyingobjectownedby"
title: "Condition_IsOccupyingObjectOwnedBy"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:38+00:00"
content_sha256: "075c144499e6a2144dbdc172bac8ce374aa89e91f68ba3e27b5fb9aa0f3e2780"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isoccupyingobjectownedby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the object currently occupied by the BaseObject character is owned by the non-base character (the counterpart resolved from the script context). Ownership includes household-level ownership and wallet-sharing across household members. If S1 is specified, the condition additionally requires that the BaseObject character's current action type matches S1.

# Parameters

| ParameterDescriptionBaseObjectThe character currently occupying an object (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional action type filter. If set, requires the current action to match S1. |
| --- |
| BaseObjectThe character currently occupying an object (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Optional action type filter. If set, requires the current action to match S1. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Optional action type filter. If set, requires the current action to match S1. |
| S1Optional action type filter. If set, requires the current action to match S1. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if the object Self occupies is owned by the non-base charSelfIsOccupyingObjectOwnedByEqualCheck if the object Self occupies is owned (while Sit action)SelfIsOccupyingObjectOwnedByEqualSitCheck if the object Target occupies is not owned by non-baseTargetIsOccupyingObjectOwnedByNotEqual |
| --- |
| Check if the object Self occupies is owned by the non-base charSelfIsOccupyingObjectOwnedByEqualCheck if the object Self occupies is owned (while Sit action)SelfIsOccupyingObjectOwnedByEqualSitCheck if the object Target occupies is not owned by non-baseTargetIsOccupyingObjectOwnedByNotEqual |
| Check if the object Self occupies is owned (while Sit action)SelfIsOccupyingObjectOwnedByEqualSitCheck if the object Target occupies is not owned by non-baseTargetIsOccupyingObjectOwnedByNotEqual |
| Check if the object Target occupies is not owned by non-baseTargetIsOccupyingObjectOwnedByNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
