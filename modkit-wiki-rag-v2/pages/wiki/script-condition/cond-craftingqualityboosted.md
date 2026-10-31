---
document_id: "d059bcea6e4ce3aca55fbfd8e918b3870988b8a5368c0f1b1e4d37dffd7570b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted"
title: "Condition_CraftingQualityBoosted"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:55+00:00"
content_sha256: "cd18357894e89eda6010272413b9b9ab6642d11a1d35d33e779b2763457331fb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-craftingqualityboosted"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the crafted object selected by BaseObject received the tool-driven quality boost. Use it to gate the completion presentation so that only boosted dishes play it. Crafting finish scripts provide the completed dish as Target, so BaseObject must be Target.

# Parameters

| ParameterDescriptionBaseObjectThe completed crafted object. Must be Target.CompareTypeEqual: the dish was boosted; NotEqual: it was not. |
| --- |
| BaseObjectThe completed crafted object. Must be Target.CompareTypeEqual: the dish was boosted; NotEqual: it was not. |
| CompareTypeEqual: the dish was boosted; NotEqual: it was not. |

# Examples

| DescriptionBaseObjectCommandCompareTypeDid a good appliance raise this dish's quality?TargetCraftingQualityBoostedEqualPlay the plain completion line insteadTargetCraftingQualityBoostedNotEqual |
| --- |
| Did a good appliance raise this dish's quality?TargetCraftingQualityBoostedEqualPlay the plain completion line insteadTargetCraftingQualityBoostedNotEqual |
| Play the plain completion line insteadTargetCraftingQualityBoostedNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
