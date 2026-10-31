---
document_id: "0c6387f4e298d36d1c24629e99d1c52bb2b6ca13d64abb44e2f0c735911ba867"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason"
title: "Condition_CheckGhostInteractionReason"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:53+00:00"
content_sha256: "81d0c0b8f62b274e1afa1ead73e69b580a2a798607daee2d294a2e68f151a1bb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkghostinteractionreason"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character has a specific ghost interaction reason currently set. The reason to check is provided via S1.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The ghost interaction reason identifier to check. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1The ghost interaction reason identifier to check. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The ghost interaction reason identifier to check. |
| S1The ghost interaction reason identifier to check. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self has a specific ghost interaction reasonSelfCheckGhostInteractionReasonEqualReason_001Check if Self does not have a ghost interaction reasonSelfCheckGhostInteractionReasonNotEqualReason_001Check if Target has a specific ghost interaction reasonTargetCheckGhostInteractionReasonEqualReason_002 |
| --- |
| Check if Self has a specific ghost interaction reasonSelfCheckGhostInteractionReasonEqualReason_001Check if Self does not have a ghost interaction reasonSelfCheckGhostInteractionReasonNotEqualReason_001Check if Target has a specific ghost interaction reasonTargetCheckGhostInteractionReasonEqualReason_002 |
| Check if Self does not have a ghost interaction reasonSelfCheckGhostInteractionReasonNotEqualReason_001Check if Target has a specific ghost interaction reasonTargetCheckGhostInteractionReasonEqualReason_002 |
| Check if Target has a specific ghost interaction reasonTargetCheckGhostInteractionReasonEqualReason_002 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
