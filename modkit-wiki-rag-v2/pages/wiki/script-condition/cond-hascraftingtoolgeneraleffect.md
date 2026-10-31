---
document_id: "3c74b924934b7a451e8d0465a0de671d3efcc2c1909cbdbb39395be917e4c95c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect"
title: "Condition_HasCraftingToolGeneralEffect"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:03+00:00"
content_sha256: "8fabf021421bbc025caba634443f27c369ca3f2759be485088280e4ffd82cf21"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hascraftingtoolgeneraleffect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the confirmed Performance grade of the tool actually used by the BaseObject's active crafting session. Unconfirmed grades fail closed; a confirmed tool without a grade matches empty S2 with NotEqual.

# Parameters

| ParameterDescriptionBaseObjectThe crafting character. Must be SelfCompareTypeEqual, NotEqual, or GreaterOrEqual when S2 is set; Equal or NotEqual when S2 is emptyS1General effect type. Only Performance is supportedS2Optional EB1ObjectPerformanceQuality value to compare against |
| --- |
| BaseObjectThe crafting character. Must be SelfCompareTypeEqual, NotEqual, or GreaterOrEqual when S2 is set; Equal or NotEqual when S2 is emptyS1General effect type. Only Performance is supportedS2Optional EB1ObjectPerformanceQuality value to compare against |
| CompareTypeEqual, NotEqual, or GreaterOrEqual when S2 is set; Equal or NotEqual when S2 is emptyS1General effect type. Only Performance is supportedS2Optional EB1ObjectPerformanceQuality value to compare against |
| S1General effect type. Only Performance is supportedS2Optional EB1ObjectPerformanceQuality value to compare against |
| S2Optional EB1ObjectPerformanceQuality value to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Was a tool with any Performance grade used?SelfHasCraftingToolGeneralEffectEqualPerformanceWas a Stat_Good or better tool used?SelfHasCraftingToolGeneralEffectGreaterOrEqualPerformanceStat_Good |
| --- |
| Was a tool with any Performance grade used?SelfHasCraftingToolGeneralEffectEqualPerformanceWas a Stat_Good or better tool used?SelfHasCraftingToolGeneralEffectGreaterOrEqualPerformanceStat_Good |
| Was a Stat_Good or better tool used?SelfHasCraftingToolGeneralEffectGreaterOrEqualPerformanceStat_Good |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
