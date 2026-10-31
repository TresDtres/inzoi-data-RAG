---
document_id: "d4adeb1c1b5ef9f86a2b6d77f92c1a70dad2ec50e4c4123c1bb0358152b20bb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasgeneratedmotionindex"
title: "Condition_HasGeneratedMotionIndex"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:05+00:00"
content_sha256: "5394de1d1a394b38bb934fc2493adee70ef73c65df90a79951b0e89b506cb2ea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasgeneratedmotionindex"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the GeneratedMotionSlotManager has a slot registered at the specified motion index.

# Parameters

| ParameterDescriptionBaseObjectNot used; the check is performed against the global GeneratedMotionSlotManager.CompareTypeEqual (slot at index exists), NotEqual (slot at index does not exist).F1The integer index to query in the GeneratedMotionSlotManager. |
| --- |
| BaseObjectNot used; the check is performed against the global GeneratedMotionSlotManager.CompareTypeEqual (slot at index exists), NotEqual (slot at index does not exist).F1The integer index to query in the GeneratedMotionSlotManager. |
| CompareTypeEqual (slot at index exists), NotEqual (slot at index does not exist).F1The integer index to query in the GeneratedMotionSlotManager. |
| F1The integer index to query in the GeneratedMotionSlotManager. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1Check if motion slot 0 is registeredSelfHasGeneratedMotionIndexEqual0Check if motion slot 1 is registeredSelfHasGeneratedMotionIndexEqual1Check if motion slot 2 is absentSelfHasGeneratedMotionIndexNotEqual2Check if motion slot 3 is absentTargetHasGeneratedMotionIndexNotEqual3 |
| --- |
| Check if motion slot 0 is registeredSelfHasGeneratedMotionIndexEqual0Check if motion slot 1 is registeredSelfHasGeneratedMotionIndexEqual1Check if motion slot 2 is absentSelfHasGeneratedMotionIndexNotEqual2Check if motion slot 3 is absentTargetHasGeneratedMotionIndexNotEqual3 |
| Check if motion slot 1 is registeredSelfHasGeneratedMotionIndexEqual1Check if motion slot 2 is absentSelfHasGeneratedMotionIndexNotEqual2Check if motion slot 3 is absentTargetHasGeneratedMotionIndexNotEqual3 |
| Check if motion slot 2 is absentSelfHasGeneratedMotionIndexNotEqual2Check if motion slot 3 is absentTargetHasGeneratedMotionIndexNotEqual3 |
| Check if motion slot 3 is absentTargetHasGeneratedMotionIndexNotEqual3 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
