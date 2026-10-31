---
document_id: "e2d9988ef2f1d39083c5c301d7e336efe18948a13ff61a5a869f3c5877435dda"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid"
title: "Condition_ActionTimeId"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "6227b523294fed8329627e9e2a53bda07063e33a4f39bef4cf90735303aed34d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-actiontimeid"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a specific ActionId has been performed continuously for a certain amount of time by the specified BaseObject. Accumulated time is preserved across different interactions as long as the gap between actions does not exceed DA_GameConfig::ActionTimeResetDelay.

# Parameters

| ParameterDescriptionBaseObjectThe object whose action execution time will be checked (Self or Target).CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionId to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| --- |
| BaseObjectThe object whose action execution time will be checked (Self or Target).CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionId to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionId to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| S1The ActionId to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| F2The maximum time value in seconds for InRange/OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self has performed Piano_Play continuously for 10s or moreSelfActionTimeIdGreaterPiano_Play10Check if Self has performed Computer_Use continuously for 300s or moreSelfActionTimeIdGreaterComputer_Use300Check if Self has performed Computer_Use for between 30 and 60 secondsSelfActionTimeIdInRangeComputer_Use3060Check if Target has performed Piano_Play for 10s or moreTargetActionTimeIdGreaterPiano_Play10 |
| --- |
| Check if Self has performed Piano_Play continuously for 10s or moreSelfActionTimeIdGreaterPiano_Play10Check if Self has performed Computer_Use continuously for 300s or moreSelfActionTimeIdGreaterComputer_Use300Check if Self has performed Computer_Use for between 30 and 60 secondsSelfActionTimeIdInRangeComputer_Use3060Check if Target has performed Piano_Play for 10s or moreTargetActionTimeIdGreaterPiano_Play10 |
| Check if Self has performed Computer_Use continuously for 300s or moreSelfActionTimeIdGreaterComputer_Use300Check if Self has performed Computer_Use for between 30 and 60 secondsSelfActionTimeIdInRangeComputer_Use3060Check if Target has performed Piano_Play for 10s or moreTargetActionTimeIdGreaterPiano_Play10 |
| Check if Self has performed Computer_Use for between 30 and 60 secondsSelfActionTimeIdInRangeComputer_Use3060Check if Target has performed Piano_Play for 10s or moreTargetActionTimeIdGreaterPiano_Play10 |
| Check if Target has performed Piano_Play for 10s or moreTargetActionTimeIdGreaterPiano_Play10 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
