---
document_id: "0521e70bb64cf5999db23a9d6fc8f6ef2402c78f4efd246b60fea5b88fc086f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-posture"
title: "Condition_Posture"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "f45851db8c2d74ac8ab1c8c11ec377a75b6e011d0567d54655c087765d8daec3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-posture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the current posture of the BaseObject matches the specified posture type.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose posture state is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Target posture type to compare against (PostureCategory FName, default: Stand). |
| --- |
| BaseObjectThe entity whose posture state is checked (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Target posture type to compare against (PostureCategory FName, default: Stand). |
| CompareTypeSupported compare types: Equal, NotEqual.S1Target posture type to compare against (PostureCategory FName, default: Stand). |
| S1Target posture type to compare against (PostureCategory FName, default: Stand). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is in Sit postureSelfPostureEqualCheck if Self is not in Sit postureSelfPostureNotEqualCheck if Target is in Stand postureTargetPostureEqualCheck if Target is not in Stand postureTargetPostureNotEqual |
| --- |
| Check if Self is in Sit postureSelfPostureEqualCheck if Self is not in Sit postureSelfPostureNotEqualCheck if Target is in Stand postureTargetPostureEqualCheck if Target is not in Stand postureTargetPostureNotEqual |
| Check if Self is not in Sit postureSelfPostureNotEqualCheck if Target is in Stand postureTargetPostureEqualCheck if Target is not in Stand postureTargetPostureNotEqual |
| Check if Target is in Stand postureTargetPostureEqualCheck if Target is not in Stand postureTargetPostureNotEqual |
| Check if Target is not in Stand postureTargetPostureNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoInteraction, Action & Posture[ActionTimeId](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimeid)[ActionTimeTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-actiontimetag)[CanSpawnCraftingObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canspawncraftingobject)[CheckGhostInteractionReason](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkghostinteractionreason)[CraftingPlayIdleAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplayidleanimation)[CraftingPlaySuccessAnimation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingplaysuccessanimation)[CraftingQualityBoosted](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-craftingqualityboosted)[HasCraftingToolGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascraftingtoolgeneraleffect)[HasObjectInCraftingSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectincraftingslot)[InteractionBagTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionbagtag)[InteractionName](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionname)[InteractionObjectRange](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-interactionobjectrange)
