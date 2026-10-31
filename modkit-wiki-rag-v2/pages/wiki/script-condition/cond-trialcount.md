---
document_id: "c83488aefe05fb7c793e1f80e0c022f20ee42256a47eef2d7e3521d888204659"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-trialcount"
title: "Condition_TrialCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:01+00:00"
content_sha256: "8c1523f57ab1545148c5ad0982961e2e08e65192a4aeb30908133c17039579d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-trialcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the number of times the BaseObject character has been on trial.

# Parameters

| ParameterDescriptionBaseObjectThe character whose trial count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Trial count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| --- |
| BaseObjectThe character whose trial count will be checkedCompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Trial count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| CompareTypeEqual, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, InRange, OutRangeF1Trial count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F1Trial count to compare againstF2Upper bound for range comparisons (InRange, OutRange) |
| F2Upper bound for range comparisons (InRange, OutRange) |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Check if Self has been on trial at least onceSelfTrialCountGreaterOrEqual1Check if Self has never been on trialSelfTrialCountEqual0Check if Self has been on trial between 1 and 3 timesSelfTrialCountInRange13 |
| --- |
| Check if Self has been on trial at least onceSelfTrialCountGreaterOrEqual1Check if Self has never been on trialSelfTrialCountEqual0Check if Self has been on trial between 1 and 3 timesSelfTrialCountInRange13 |
| Check if Self has never been on trialSelfTrialCountEqual0Check if Self has been on trial between 1 and 3 timesSelfTrialCountInRange13 |
| Check if Self has been on trial between 1 and 3 timesSelfTrialCountInRange13 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
