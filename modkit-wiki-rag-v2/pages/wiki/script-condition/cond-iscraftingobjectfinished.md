---
document_id: "a6980e5e0ecad3426597faf7128ec61bb6c47813058ddfa345cde77b9fd0402c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscraftingobjectfinished"
title: "Condition_IsCraftingObjectFinished"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:25+00:00"
content_sha256: "c4a9f1355b8ed86f5f0eab88b930582488dcaddcd5273816431f094518998905"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscraftingobjectfinished"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject craft object's crafting progress has reached 100% (finished). Uses B2CraftingHelper::TryGetCraftingProgress to retrieve the current progress value from the craft object's GameObjectStatComponent. Intended for use with inventory bag interactions where the picked craft object is passed as Target.

# Parameters

| ParameterDescriptionBaseObjectThe craft object entity to check progress on (typically Target)CompareTypeEqual: finished (progress >= 100%); NotEqual: not finished (progress < 100%) |
| --- |
| BaseObjectThe craft object entity to check progress on (typically Target)CompareTypeEqual: finished (progress >= 100%); NotEqual: not finished (progress < 100%) |
| CompareTypeEqual: finished (progress >= 100%); NotEqual: not finished (progress < 100%) |

# Examples

| DescriptionBaseObjectCommandCompareTypeIs the picked craft object finished?TargetIsCraftingObjectFinishedEqualIs the picked craft object still in progress?TargetIsCraftingObjectFinishedNotEqual |
| --- |
| Is the picked craft object finished?TargetIsCraftingObjectFinishedEqualIs the picked craft object still in progress?TargetIsCraftingObjectFinishedNotEqual |
| Is the picked craft object still in progress?TargetIsCraftingObjectFinishedNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
