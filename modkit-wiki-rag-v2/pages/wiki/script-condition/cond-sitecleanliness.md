---
document_id: "84b965e99ac35b35c2abf27199cd2d46d8a1b4ce07cac57b33efe22f44c50f3d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-sitecleanliness"
title: "Condition_SiteCleanliness"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "851a0ee12ca2a2e249d56454ab81882ac560686864ecacfc600a6ff00a37c36e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-sitecleanliness"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the cleanliness (dust) value of the site where the character is currently located against the specified threshold using the given comparison type.

# Parameters

| ParameterDescriptionBaseObjectThe character whose located site's cleanliness is checked (Self or Target).CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| --- |
| BaseObjectThe character whose located site's cleanliness is checked (Self or Target).CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| CompareTypeComparison type: Less, Greater, Equal, GreaterOrEqual, LessOrEqual, InRange, OutRange.F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| F1Threshold value (or minimum value for InRange/OutRange).F2Maximum value for InRange/OutRange comparison. |
| F2Maximum value for InRange/OutRange comparison. |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks if Self's located site cleanliness is less than 30SelfSiteCleanlinessLess30Checks if Target's located site cleanliness equals 0TargetSiteCleanlinessEqual0Checks if Self's located site cleanliness is between 20 and 80SelfSiteCleanlinessInRange2080 |
| --- |
| Checks if Self's located site cleanliness is less than 30SelfSiteCleanlinessLess30Checks if Target's located site cleanliness equals 0TargetSiteCleanlinessEqual0Checks if Self's located site cleanliness is between 20 and 80SelfSiteCleanlinessInRange2080 |
| Checks if Target's located site cleanliness equals 0TargetSiteCleanlinessEqual0Checks if Self's located site cleanliness is between 20 and 80SelfSiteCleanlinessInRange2080 |
| Checks if Self's located site cleanliness is between 20 and 80SelfSiteCleanlinessInRange2080 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
