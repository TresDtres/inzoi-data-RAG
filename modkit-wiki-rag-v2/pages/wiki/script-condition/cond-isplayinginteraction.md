---
document_id: "722aff0d241e5d1b43c1c35c254073cb7e977193697432101e06a1f90bb7ea0a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isplayinginteraction"
title: "Condition_IsPlayingInteraction"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:40+00:00"
content_sha256: "39c8ceaa70993d4a2945e478f89d5000a3a1ca6fc6478b8e52dd091960cd0958"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isplayinginteraction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character has any interaction activity: one running, or one queued that has not started yet. Unlike InteractionName it does not care which interaction it is. NotEqual therefore means fully idle (nothing running and nothing queued), which is a narrow window for an autonomous character - do not read it as a loose 'not busy right now' check.

# Parameters

| ParameterDescriptionBaseObjectThe character to checkCompareTypeEqual (has activity), NotEqual (fully idle) |
| --- |
| BaseObjectThe character to checkCompareTypeEqual (has activity), NotEqual (fully idle) |
| CompareTypeEqual (has activity), NotEqual (fully idle) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target is fully idleTargetIsPlayingInteractionNotEqualCheck if Self has any interaction activitySelfIsPlayingInteractionEqual |
| --- |
| Check if Target is fully idleTargetIsPlayingInteractionNotEqualCheck if Self has any interaction activitySelfIsPlayingInteractionEqual |
| Check if Self has any interaction activitySelfIsPlayingInteractionEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
