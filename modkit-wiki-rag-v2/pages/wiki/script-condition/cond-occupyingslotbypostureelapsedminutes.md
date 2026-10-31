---
document_id: "df9fd1dcdc81deafbf0dc63594fa1f793dea2a2bf04cd5ef6a019123bfdef880"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-occupyingslotbypostureelapsedminutes"
title: "Condition_OccupyingSlotByPostureElapsedMinutes"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "8c9c918dfb56b130cc5fdd07c5e99d20567766c85676c01f77faf1a76c2024c2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-occupyingslotbypostureelapsedminutes"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks how many game-minutes have elapsed since BaseObject started occupying its current Posture-reason slot, compared against F1. The anchor is the (posture target entity, occupying slot) pair, so it keeps counting while only the animation/posture changes on the same slot (e.g. a toddler dozing while still in a high chair).

# Parameters

| ParameterDescriptionBaseObjectThe entity whose slot-occupancy duration is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Threshold in game minutes. |
| --- |
| BaseObjectThe entity whose slot-occupancy duration is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Threshold in game minutes. |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual.F1Threshold in game minutes. |
| F1Threshold in game minutes. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1Check if Self has been attached to a baby bath for 30+ minutesSelfOccupyingSlotByPostureElapsedMinutesGreaterOrEqual30.0 |
| --- |
| Check if Self has been attached to a baby bath for 30+ minutesSelfOccupyingSlotByPostureElapsedMinutesGreaterOrEqual30.0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
