---
document_id: "af0b8c5a97d6af547efe4139eaa62ecfd830a178b51e3d9712338da5620ddda6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag"
title: "Condition_InteractionTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:19+00:00"
content_sha256: "eb9c3cc8476ec84b3ef7223760492aa20bea741a022e9eb141d80ed2ce02889f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-interactiontag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the InteractionTag specified in S1 is included in the tag set of the interaction currently being performed by the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe object whose current interaction will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionTag to compare against the BaseObject’s current interaction tags. |
| --- |
| BaseObjectThe object whose current interaction will be checked (Self or Target).CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionTag to compare against the BaseObject’s current interaction tags. |
| CompareTypeThe comparison operator (Equal, NotEqual).S1The InteractionTag to compare against the BaseObject’s current interaction tags. |
| S1The InteractionTag to compare against the BaseObject’s current interaction tags. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self’s current interaction includes the tag Trait_Free_NapSelfInteractionTagEqualTrait_Free_NapCheck if Self’s current interaction does NOT include the tag PianoSelfInteractionTagNotEqualPianoCheck if Target’s current interaction includes the tag PianoTargetInteractionTagEqualPianoCheck if Target’s current interaction does NOT include Trait_Free_NapTargetInteractionTagNotEqualTrait_Free_Nap |
| --- |
| Check if Self’s current interaction includes the tag Trait_Free_NapSelfInteractionTagEqualTrait_Free_NapCheck if Self’s current interaction does NOT include the tag PianoSelfInteractionTagNotEqualPianoCheck if Target’s current interaction includes the tag PianoTargetInteractionTagEqualPianoCheck if Target’s current interaction does NOT include Trait_Free_NapTargetInteractionTagNotEqualTrait_Free_Nap |
| Check if Self’s current interaction does NOT include the tag PianoSelfInteractionTagNotEqualPianoCheck if Target’s current interaction includes the tag PianoTargetInteractionTagEqualPianoCheck if Target’s current interaction does NOT include Trait_Free_NapTargetInteractionTagNotEqualTrait_Free_Nap |
| Check if Target’s current interaction includes the tag PianoTargetInteractionTagEqualPianoCheck if Target’s current interaction does NOT include Trait_Free_NapTargetInteractionTagNotEqualTrait_Free_Nap |
| Check if Target’s current interaction does NOT include Trait_Free_NapTargetInteractionTagNotEqualTrait_Free_Nap |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
