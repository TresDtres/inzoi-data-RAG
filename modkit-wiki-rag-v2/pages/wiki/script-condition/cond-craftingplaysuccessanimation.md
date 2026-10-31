---
document_id: "72220843e28d0aaef8891f6266eaf47eab5f0c7ed3a588f268459d82dff7afcc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation"
title: "Condition_CraftingPlaySuccessAnimation"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "5830f83feadd440925e43334cfaa0e3f8594fc11f821d56b019dc9d1ce059f38"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-craftingplaysuccessanimation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the crafting success animation should be played at this moment for the BaseObject actor. The result is determined by querying ShouldPlaySuccessAnimation on the actor's CraftingComponent.

# Parameters

| ParameterDescriptionBaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: success animation should play; NotEqual: success animation should not play |
| --- |
| BaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: success animation should play; NotEqual: success animation should not play |
| CompareTypeEqual: success animation should play; NotEqual: success animation should not play |

# Examples

| DescriptionBaseObjectCommandCompareTypeShould self play the crafting success animation now?SelfCraftingPlaySuccessAnimationEqualShould the workbench play a success animation?TargetCraftingPlaySuccessAnimationEqualIs self NOT in a success animation state?SelfCraftingPlaySuccessAnimationNotEqual |
| --- |
| Should self play the crafting success animation now?SelfCraftingPlaySuccessAnimationEqualShould the workbench play a success animation?TargetCraftingPlaySuccessAnimationEqualIs self NOT in a success animation state?SelfCraftingPlaySuccessAnimationNotEqual |
| Should the workbench play a success animation?TargetCraftingPlaySuccessAnimationEqualIs self NOT in a success animation state?SelfCraftingPlaySuccessAnimationNotEqual |
| Is self NOT in a success animation state?SelfCraftingPlaySuccessAnimationNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
