---
document_id: "7823ab32e7e5d4c53f4c752d56fc425352fbae9bab79a0521e2810a078615162"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-dustyvalue"
title: "Condition_DustyValue"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:57+00:00"
content_sha256: "cb0776a6b873e4825170e6236547e51b88e406217fca4764892c6aa7d09aa2b9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-dustyvalue"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the dusty value of the BaseObject's DustyComponent against the given threshold values.

# Parameters

| ParameterDescriptionBaseObjectThe object whose dusty value will be checkedCompareTypeComparison operator: GreaterOrEqual, LessOrEqual, Equal, NotEqual, InRange, OutRangeF1First threshold value to compare againstF2Second threshold value used only for InRange/OutRange comparisons |
| --- |
| BaseObjectThe object whose dusty value will be checkedCompareTypeComparison operator: GreaterOrEqual, LessOrEqual, Equal, NotEqual, InRange, OutRangeF1First threshold value to compare againstF2Second threshold value used only for InRange/OutRange comparisons |
| CompareTypeComparison operator: GreaterOrEqual, LessOrEqual, Equal, NotEqual, InRange, OutRangeF1First threshold value to compare againstF2Second threshold value used only for InRange/OutRange comparisons |
| F1First threshold value to compare againstF2Second threshold value used only for InRange/OutRange comparisons |
| F2Second threshold value used only for InRange/OutRange comparisons |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if target's dusty value is greater than or equal to 0.5TargetDustyValueGreaterOrEqual0.5Check if self's dusty value is less than 0.3SelfDustyValueLess0.3Check if target's dusty value is between 0.2 and 0.8TargetDustyValueInRange0.20.8 |
| --- |
| Check if target's dusty value is greater than or equal to 0.5TargetDustyValueGreaterOrEqual0.5Check if self's dusty value is less than 0.3SelfDustyValueLess0.3Check if target's dusty value is between 0.2 and 0.8TargetDustyValueInRange0.20.8 |
| Check if self's dusty value is less than 0.3SelfDustyValueLess0.3Check if target's dusty value is between 0.2 and 0.8TargetDustyValueInRange0.20.8 |
| Check if target's dusty value is between 0.2 and 0.8TargetDustyValueInRange0.20.8 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
