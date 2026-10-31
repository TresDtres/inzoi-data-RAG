---
document_id: "b0b237d8f7c3248733c1013059fe30c8d2f77e15b7d691405d112603bccef476"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-compareascendingminutes"
title: "Condition_CompareAscendingMinutes"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:54+00:00"
content_sha256: "9225941083c1ca7f7f2c4690cc67925b6792882ed34f26e3e886af8feaf049af"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-compareascendingminutes"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the remaining time in minutes until the character ascends.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose ascending time remaining is checkedCompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeF1Time threshold in minutes (minimum value for range comparisons)F2Maximum time in minutes for range comparisons (InRange, OutRange only) |
| --- |
| BaseObjectCharacter whose ascending time remaining is checkedCompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeF1Time threshold in minutes (minimum value for range comparisons)F2Maximum time in minutes for range comparisons (InRange, OutRange only) |
| CompareTypeEqual, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqual, InRange, OutRangeF1Time threshold in minutes (minimum value for range comparisons)F2Maximum time in minutes for range comparisons (InRange, OutRange only) |
| F1Time threshold in minutes (minimum value for range comparisons)F2Maximum time in minutes for range comparisons (InRange, OutRange only) |
| F2Maximum time in minutes for range comparisons (InRange, OutRange only) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if ascending time remaining is less than 60 minutesSelfCompareAscendingMinutesLessCheck if ascending time remaining is 120 minutes or moreSelfCompareAscendingMinutesGreaterOrEqualCheck if ascending time remaining is between 30 and 90 minutesSelfCompareAscendingMinutesInRangeCheck if ascending time remaining is not exactly 60 minutesSelfCompareAscendingMinutesNotEqual |
| --- |
| Check if ascending time remaining is less than 60 minutesSelfCompareAscendingMinutesLessCheck if ascending time remaining is 120 minutes or moreSelfCompareAscendingMinutesGreaterOrEqualCheck if ascending time remaining is between 30 and 90 minutesSelfCompareAscendingMinutesInRangeCheck if ascending time remaining is not exactly 60 minutesSelfCompareAscendingMinutesNotEqual |
| Check if ascending time remaining is 120 minutes or moreSelfCompareAscendingMinutesGreaterOrEqualCheck if ascending time remaining is between 30 and 90 minutesSelfCompareAscendingMinutesInRangeCheck if ascending time remaining is not exactly 60 minutesSelfCompareAscendingMinutesNotEqual |
| Check if ascending time remaining is between 30 and 90 minutesSelfCompareAscendingMinutesInRangeCheck if ascending time remaining is not exactly 60 minutesSelfCompareAscendingMinutesNotEqual |
| Check if ascending time remaining is not exactly 60 minutesSelfCompareAscendingMinutesNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
