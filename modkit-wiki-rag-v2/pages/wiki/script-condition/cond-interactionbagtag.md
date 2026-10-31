---
document_id: "b343fa5d7182ee57d26d81fe7a5871ee7779e14d408687a16290d6c6ce26505b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag"
title: "Condition_InteractionBagTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "27a51427e8c166b7a4f68819a691df3f2e09e7fdb2cea8b72c9a8bf22259a2cc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-interactionbagtag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the tag specified in S1 is included in the tag set of the interaction bag currently active on the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe object whose current interaction bag will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionBagTag to compare against the BaseObject's current interaction bag tags. |
| --- |
| BaseObjectThe object whose current interaction bag will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionBagTag to compare against the BaseObject's current interaction bag tags. |
| CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionBagTag to compare against the BaseObject's current interaction bag tags. |
| S1The InteractionBagTag to compare against the BaseObject's current interaction bag tags. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self's current interaction bag contains the tag IdleSelfInteractionBagTagEqualIdleCheck if Self's current interaction bag does NOT contain Positive_TalkSelfInteractionBagTagNotEqualPositive_TalkCheck if Target's current interaction bag contains the tag IdleTargetInteractionBagTagEqualIdleCheck if Target's current interaction bag does NOT contain PianoTargetInteractionBagTagNotEqualPiano |
| --- |
| Check if Self's current interaction bag contains the tag IdleSelfInteractionBagTagEqualIdleCheck if Self's current interaction bag does NOT contain Positive_TalkSelfInteractionBagTagNotEqualPositive_TalkCheck if Target's current interaction bag contains the tag IdleTargetInteractionBagTagEqualIdleCheck if Target's current interaction bag does NOT contain PianoTargetInteractionBagTagNotEqualPiano |
| Check if Self's current interaction bag does NOT contain Positive_TalkSelfInteractionBagTagNotEqualPositive_TalkCheck if Target's current interaction bag contains the tag IdleTargetInteractionBagTagEqualIdleCheck if Target's current interaction bag does NOT contain PianoTargetInteractionBagTagNotEqualPiano |
| Check if Target's current interaction bag contains the tag IdleTargetInteractionBagTagEqualIdleCheck if Target's current interaction bag does NOT contain PianoTargetInteractionBagTagNotEqualPiano |
| Check if Target's current interaction bag does NOT contain PianoTargetInteractionBagTagNotEqualPiano |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
