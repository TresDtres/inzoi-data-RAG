---
document_id: "8f79bc7c5907acee62af11411226a1e420bf7f6bd8f5980c01b0eab983c0a505"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscrafting"
title: "Condition_IsCrafting"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:25+00:00"
content_sha256: "96fd0c0ffa30fa49b7e38bcd1b39c2281b8cac48248afa413ba82fb07a0b9d26"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscrafting"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a crafting operation is currently in progress for the BaseObject actor. The result is determined by querying IsCrafting on the actor's CraftingComponent.

# Parameters

| ParameterDescriptionBaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: crafting is in progress; NotEqual: crafting is not in progress |
| --- |
| BaseObjectThe actor with a CraftingComponent to check (Self or Target)CompareTypeEqual: crafting is in progress; NotEqual: crafting is not in progress |
| CompareTypeEqual: crafting is in progress; NotEqual: crafting is not in progress |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs self currently in the middle of crafting?SelfIsCraftingEqualHas the workbench finished or not started crafting?TargetIsCraftingNotEqualIs the target actor actively crafting?TargetIsCraftingEqual |
| --- |
| Is self currently in the middle of crafting?SelfIsCraftingEqualHas the workbench finished or not started crafting?TargetIsCraftingNotEqualIs the target actor actively crafting?TargetIsCraftingEqual |
| Has the workbench finished or not started crafting?TargetIsCraftingNotEqualIs the target actor actively crafting?TargetIsCraftingEqual |
| Is the target actor actively crafting?TargetIsCraftingEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
