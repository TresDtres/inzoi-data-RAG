---
document_id: "9df4d044eb5ef7b22e066b903180bf2fac87486770e9347d6f405728d2e0fa46"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-gatheringtool"
title: "Condition_GatheringTool"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:59+00:00"
content_sha256: "6a9fe633aa6a53dda2a9ebc03ecc0842196c9d24b18fdbd0002b3cb2f0f46944"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-gatheringtool"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is currently holding a gathering tool of the type specified by S1 in their right hand.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check for holding a gathering tool.CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). |
| --- |
| BaseObjectThe entity to check for holding a gathering tool.CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). |
| CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). |
| S1The gathering type to match (e.g., Fishing, Mining). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self is holding a gathering toolSelfGatheringToolEqualCheck if Self is not holding a gathering toolSelfGatheringToolNotEqualCheck if Target is holding a gathering toolTargetGatheringToolEqualCheck if Target is not holding a gathering toolTargetGatheringToolNotEqual |
| --- |
| Check if Self is holding a gathering toolSelfGatheringToolEqualCheck if Self is not holding a gathering toolSelfGatheringToolNotEqualCheck if Target is holding a gathering toolTargetGatheringToolEqualCheck if Target is not holding a gathering toolTargetGatheringToolNotEqual |
| Check if Self is not holding a gathering toolSelfGatheringToolNotEqualCheck if Target is holding a gathering toolTargetGatheringToolEqualCheck if Target is not holding a gathering toolTargetGatheringToolNotEqual |
| Check if Target is holding a gathering toolTargetGatheringToolEqualCheck if Target is not holding a gathering toolTargetGatheringToolNotEqual |
| Check if Target is not holding a gathering toolTargetGatheringToolNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
