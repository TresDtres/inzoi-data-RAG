---
document_id: "a997623724eb72ff1b966ee2bfad8e02dcefbaa87be1df8561e64994fc46b321"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isoccupyingparentslot"
title: "Condition_IsOccupyingParentSlot"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:38+00:00"
content_sha256: "29a8ddabcaa10103a11867f076cf981d44db841cbdb3cfd3f0aca7cd755b8ec0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isoccupyingparentslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether BaseObject(GameObject) is currently occupying any Object-type slot on its parent entity. Slot type/name agnostic — returns true if any Object slot on the parent reports this object as occupier.

Used by HandCraft_Continue and similar interactions to dim the menu when the craft object has been detached from a workbench (e.g., moved to the floor in build mode), since build mode only allows craft objects to sit on a workbench or directly on the floor (= attached to site, no slot occupancy).

# Parameters

| ParameterDescriptionBaseObjectThe GameObject whose parent slot occupancy is checked (Self or Target).CompareTypeEqual (occupying any parent slot), NotEqual (not occupying any parent slot). |
| --- |
| BaseObjectThe GameObject whose parent slot occupancy is checked (Self or Target).CompareTypeEqual (occupying any parent slot), NotEqual (not occupying any parent slot). |
| CompareTypeEqual (occupying any parent slot), NotEqual (not occupying any parent slot). |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
