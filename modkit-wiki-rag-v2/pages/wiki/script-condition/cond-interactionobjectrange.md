---
document_id: "30c84fe188c03c8152f38027f03eea9b6aa805ae3349a23eaa46eed79afcae9f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange"
title: "Condition_InteractionObjectRange"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "45c0be99cf32623df0e0ae9414bf1c36dfff1e0b9251bcb33f4a6c05e651ebf5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-interactionobjectrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Searches for objects around Self that support the InteractionBag specified in S1, and checks whether any of them are within the distance defined by F1. The condition succeeds if at least one valid object is found within the given range.

# Parameters

| ParameterDescriptionBaseObjectThe object whose surrounding area will be checked (Self only).S1The InteractionBag ID to check for available objects.F1The maximum allowed distance. Objects at or below this distance from Self are considered valid. |
| --- |
| BaseObjectThe object whose surrounding area will be checked (Self only).S1The InteractionBag ID to check for available objects.F1The maximum allowed distance. Objects at or below this distance from Self are considered valid. |
| S1The InteractionBag ID to check for available objects.F1The maximum allowed distance. Objects at or below this distance from Self are considered valid. |
| F1The maximum allowed distance. Objects at or below this distance from Self are considered valid. |

# Examples

| DescriptionBaseObjectCommandS1F1Check if an object supporting SitTalk is within 1000 units of SelfSelfInteractionObjectRangeSitTalk1000Check if an object supporting Piano_Play is within 500 units of SelfSelfInteractionObjectRangePiano_Play500Check if an object supporting Cooking is within 300 units of SelfSelfInteractionObjectRangeCooking300 |
| --- |
| Check if an object supporting SitTalk is within 1000 units of SelfSelfInteractionObjectRangeSitTalk1000Check if an object supporting Piano_Play is within 500 units of SelfSelfInteractionObjectRangePiano_Play500Check if an object supporting Cooking is within 300 units of SelfSelfInteractionObjectRangeCooking300 |
| Check if an object supporting Piano_Play is within 500 units of SelfSelfInteractionObjectRangePiano_Play500Check if an object supporting Cooking is within 300 units of SelfSelfInteractionObjectRangeCooking300 |
| Check if an object supporting Cooking is within 300 units of SelfSelfInteractionObjectRangeCooking300 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactiontag)
