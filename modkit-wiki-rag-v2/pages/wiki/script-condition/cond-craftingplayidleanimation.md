---
document_id: "7a8f310a50e4f4347a716ae5460d38948e25450cd96dd7ba3572ecd605d21b00"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation"
title: "Condition_CraftingPlayIdleAnimation"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "144c78ad3d716461ba5bfe7f8fe55d323a1b7297be5d414afceed98dccaba92d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-craftingplayidleanimation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the crafting idle animation should be played at this moment for the BaseObject actor. The result is determined by querying ShouldPlayIdleAnimation on the actor's CraftingComponent.

# Parameters

| ParameterDescriptionBaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: idle animation should play; NotEqual: idle animation should not play |
| --- |
| BaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: idle animation should play; NotEqual: idle animation should not play |
| CompareTypeEqual: idle animation should play; NotEqual: idle animation should not play |

# Examples

| DescriptionBaseObjectCommandCompareTypeShould self play the crafting idle animation?SelfCraftingPlayIdleAnimationEqualShould the crafting machine play an idle loop?TargetCraftingPlayIdleAnimationEqualIs self NOT in an idle crafting state?SelfCraftingPlayIdleAnimationNotEqual |
| --- |
| Should self play the crafting idle animation?SelfCraftingPlayIdleAnimationEqualShould the crafting machine play an idle loop?TargetCraftingPlayIdleAnimationEqualIs self NOT in an idle crafting state?SelfCraftingPlayIdleAnimationNotEqual |
| Should the crafting machine play an idle loop?TargetCraftingPlayIdleAnimationEqualIs self NOT in an idle crafting state?SelfCraftingPlayIdleAnimationNotEqual |
| Is self NOT in an idle crafting state?SelfCraftingPlayIdleAnimationNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
