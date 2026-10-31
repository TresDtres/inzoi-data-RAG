---
document_id: "c174c995bec6779c5780030d55856fce40ca84c370de78aac2e98d1c43a44aea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-comparegrowthstep"
title: "Condition_CompareGrowthStep"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:54+00:00"
content_sha256: "622bce3b1b8f4a211e4aa815822051b0cb998017ffd34da47191b93fa00d7111"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-comparegrowthstep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the age group difference between Self and Target. The difference is calculated as (Target's GrowthStep) minus (Self's GrowthStep). A positive value means Target is older; a negative value means Target is younger. When S1 is "Abs", the absolute value of the difference is used for comparison.

# Parameters

| ParameterDescriptionBaseObjectNot used in this command. The comparison always uses Self and Target.CompareTypeComparison operator (Equal, GreaterOrEqual, Less, InRange, OutRange, etc.).S1Set to "Abs" to compare the absolute difference; leave empty for signed.F1Expected difference value to compare against.F2Upper bound for range comparisons (InRange or OutRange only). |
| --- |
| BaseObjectNot used in this command. The comparison always uses Self and Target.CompareTypeComparison operator (Equal, GreaterOrEqual, Less, InRange, OutRange, etc.).S1Set to "Abs" to compare the absolute difference; leave empty for signed.F1Expected difference value to compare against.F2Upper bound for range comparisons (InRange or OutRange only). |
| CompareTypeComparison operator (Equal, GreaterOrEqual, Less, InRange, OutRange, etc.).S1Set to "Abs" to compare the absolute difference; leave empty for signed.F1Expected difference value to compare against.F2Upper bound for range comparisons (InRange or OutRange only). |
| S1Set to "Abs" to compare the absolute difference; leave empty for signed.F1Expected difference value to compare against.F2Upper bound for range comparisons (InRange or OutRange only). |
| F1Expected difference value to compare against.F2Upper bound for range comparisons (InRange or OutRange only). |
| F2Upper bound for range comparisons (InRange or OutRange only). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if target's age group equals self'sSelfCompareGrowthStepEqual0Check if target is one or more steps older than selfSelfCompareGrowthStepGreaterOrEqual1Check if the absolute age group difference is 1 or moreSelfCompareGrowthStepGreaterAbs0Check if the absolute age group difference is 2 to 3SelfCompareGrowthStepInRangeAbs23 |
| --- |
| Check if target's age group equals self'sSelfCompareGrowthStepEqual0Check if target is one or more steps older than selfSelfCompareGrowthStepGreaterOrEqual1Check if the absolute age group difference is 1 or moreSelfCompareGrowthStepGreaterAbs0Check if the absolute age group difference is 2 to 3SelfCompareGrowthStepInRangeAbs23 |
| Check if target is one or more steps older than selfSelfCompareGrowthStepGreaterOrEqual1Check if the absolute age group difference is 1 or moreSelfCompareGrowthStepGreaterAbs0Check if the absolute age group difference is 2 to 3SelfCompareGrowthStepInRangeAbs23 |
| Check if the absolute age group difference is 1 or moreSelfCompareGrowthStepGreaterAbs0Check if the absolute age group difference is 2 to 3SelfCompareGrowthStepInRangeAbs23 |
| Check if the absolute age group difference is 2 to 3SelfCompareGrowthStepInRangeAbs23 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoCharacter[AvailableSlotCount](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-availableslotcount)[BargainResult](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-bargainresult)[CanApologize](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canapologize)[CanAutonomyFishing](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canautonomyfishing)[CanBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canblowcandle)[CanCoopBlowCandle](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancoopblowcandle)[CanCustomizeBrightness](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cancustomizebrightness)[CanDivorce](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-candivorce)[CanFishingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canfishingbyimpactpoint)[CanGatherFromSeafloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-cangatherfromseafloor)[CanHostStayover](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-canhoststayover)[CanInteractWithGhost](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-caninteractwithghost)
