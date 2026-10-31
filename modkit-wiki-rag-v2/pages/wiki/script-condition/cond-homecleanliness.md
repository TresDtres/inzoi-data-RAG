---
document_id: "83c10d0bca079f6c913f282f0898d5f97420b7fa49ff4ad340e194255feb6d27"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-homecleanliness"
title: "Condition_HomeCleanliness"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:18+00:00"
content_sha256: "f09bfcd71f88e89f10da74a449df61b5d0047f9ed8a9289aaba43c2eda065eff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-homecleanliness"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the cleanliness (dust) value of the character's home site against the specified threshold using the given comparison type.

# Parameters

| ParameterDescriptionBaseObjectThe character whose home site cleanliness is checked (Self or Target).CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| --- |
| BaseObjectThe character whose home site cleanliness is checked (Self or Target).CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| F2Maximum value for InRange/OutRange comparison. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks if Self's home site cleanliness is less than 40SelfHomeCleanlinessLess40Checks if Target's home site cleanliness equals 0TargetHomeCleanlinessEqual0Checks if Self's home site cleanliness is between 10 and 50SelfHomeCleanlinessInRange1050Checks if Self's home site cleanliness is 80 or greaterSelfHomeCleanlinessGreaterOrEqual80 |
| --- |
| Checks if Self's home site cleanliness is less than 40SelfHomeCleanlinessLess40Checks if Target's home site cleanliness equals 0TargetHomeCleanlinessEqual0Checks if Self's home site cleanliness is between 10 and 50SelfHomeCleanlinessInRange1050Checks if Self's home site cleanliness is 80 or greaterSelfHomeCleanlinessGreaterOrEqual80 |
| Checks if Target's home site cleanliness equals 0TargetHomeCleanlinessEqual0Checks if Self's home site cleanliness is between 10 and 50SelfHomeCleanlinessInRange1050Checks if Self's home site cleanliness is 80 or greaterSelfHomeCleanlinessGreaterOrEqual80 |
| Checks if Self's home site cleanliness is between 10 and 50SelfHomeCleanlinessInRange1050Checks if Self's home site cleanliness is 80 or greaterSelfHomeCleanlinessGreaterOrEqual80 |
| Checks if Self's home site cleanliness is 80 or greaterSelfHomeCleanlinessGreaterOrEqual80 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
