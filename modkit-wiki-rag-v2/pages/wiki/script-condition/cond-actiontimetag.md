---
document_id: "c789c7cdf8ae32b20d62ef239afccf4f26cb22e917df64bdc6640a5a88159ae8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag"
title: "Condition_ActionTimeTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:45+00:00"
content_sha256: "0dd55dd14e61d4cebb2cdcf5d3f54269ee985a4002e921338c865e109b197eeb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-actiontimetag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether actions with a specific ActionTag have been performed continuously for a certain amount of time by the specified BaseObject. The accumulated execution time of all actions sharing the given ActionTag is compared against the specified value. Accumulated time is preserved across different interactions as long as the gap does not exceed DA_GameConfig::ActionTimeResetDelay.

# Parameters

| ParameterDescriptionBaseObjectThe object whose action execution time will be checked (Self or Target).CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionTag name to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| --- |
| BaseObjectThe object whose action execution time will be checked (Self or Target).CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionTag name to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| CompareTypeThe comparison operator (Greater, Less, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange).S1The ActionTag name to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| S1The ActionTag name to check.F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| F1The time value in seconds to compare against. Used as the minimum value for InRange/OutRange.F2The maximum time value in seconds for InRange/OutRange comparisons. |
| F2The maximum time value in seconds for InRange/OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Self has performed Piano-tagged actions for 10s or moreSelfActionTimeTagGreaterPiano10Check if Self has performed Computer-tagged actions for 300s or moreSelfActionTimeTagGreaterComputer300Check if Self has performed Computer-tagged actions for 60 to 120sSelfActionTimeTagInRangeComputer60120Check if Target has performed Piano-tagged actions for 10s or moreTargetActionTimeTagGreaterPiano10 |
| --- |
| Check if Self has performed Piano-tagged actions for 10s or moreSelfActionTimeTagGreaterPiano10Check if Self has performed Computer-tagged actions for 300s or moreSelfActionTimeTagGreaterComputer300Check if Self has performed Computer-tagged actions for 60 to 120sSelfActionTimeTagInRangeComputer60120Check if Target has performed Piano-tagged actions for 10s or moreTargetActionTimeTagGreaterPiano10 |
| Check if Self has performed Computer-tagged actions for 300s or moreSelfActionTimeTagGreaterComputer300Check if Self has performed Computer-tagged actions for 60 to 120sSelfActionTimeTagInRangeComputer60120Check if Target has performed Piano-tagged actions for 10s or moreTargetActionTimeTagGreaterPiano10 |
| Check if Self has performed Computer-tagged actions for 60 to 120sSelfActionTimeTagInRangeComputer60120Check if Target has performed Piano-tagged actions for 10s or moreTargetActionTimeTagGreaterPiano10 |
| Check if Target has performed Piano-tagged actions for 10s or moreTargetActionTimeTagGreaterPiano10 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
