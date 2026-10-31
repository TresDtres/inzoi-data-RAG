---
document_id: "74b5ddd52895c52a18bfa1f517b2bf4a9b31cd9032b9dab28f52555a74b7557a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-posturecategory"
title: "Condition_PostureCategory"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "683d7b7c58ad33c9e303621e7f1122518cfe16c2170c84c5bc54dd38bd1d28eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-posturecategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the current posture of the BaseObject belongs to the specified posture category. Looks up the PostureCategory table row by S1, then checks if the entity's current PostureId is contained in that category's PostureIdList.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose posture state is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1PostureCategory Id to check against (e.g., Stand, Sit, Sleep). |
| --- |
| BaseObjectThe entity whose posture state is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1PostureCategory Id to check against (e.g., Stand, Sit, Sleep). |
| CompareTypeSupported compare types: Equal, NotEqual.S1PostureCategory Id to check against (e.g., Stand, Sit, Sleep). |
| S1PostureCategory Id to check against (e.g., Stand, Sit, Sleep). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is in Sit categorySelfPostureCategoryEqualCheck if Self is not in Sit categorySelfPostureCategoryNotEqualCheck if Target is in Stand categoryTargetPostureCategoryEqual |
| --- |
| Check if Self is in Sit categorySelfPostureCategoryEqualCheck if Self is not in Sit categorySelfPostureCategoryNotEqualCheck if Target is in Stand categoryTargetPostureCategoryEqual |
| Check if Self is not in Sit categorySelfPostureCategoryNotEqualCheck if Target is in Stand categoryTargetPostureCategoryEqual |
| Check if Target is in Stand categoryTargetPostureCategoryEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
