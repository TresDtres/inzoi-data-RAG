---
document_id: "6e79430238c1380b4171416e6443cd0f32b86c1a3da420041afbc82fc657a4c4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-targetdistance"
title: "Condition_TargetDistance"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:00+00:00"
content_sha256: "776eabbf91fdebd5a8ff607d12bb246ced3aecb447cd5a3e6bdc4b8efda1b984"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-targetdistance"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

A condition command that evaluates the distance between Self and the Target. By default the distance is measured center-to-center against the Target entity's location. If S1 is set to Sphere, both actors' horizontal bounding radii (GetBoundRadius, an XY broad-phase approximation that ignores height and pivot offset) are subtracted, giving an approximate surface-to-surface gap (clamped to a minimum of 0). If S1 is set to Box, the distance is computed between the two actors' oriented boxes (B2CollisionHelper::Distance): 0 when overlapping, otherwise a symmetric approximate box-to-box gap that is an upper bound (never underestimates the true shortest distance).

# Parameters

| ParameterDescriptionCompareTypeComparison operator: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Distance basis. Empty: center-to-center. Sphere: subtracts both horizontal bounding radii. Box: oriented box-to-box gap.F1Distance threshold in centimeters. For InRange/OutRange, this is the lower bound.F2Upper bound in centimeters for InRange/OutRange comparisons. |
| --- |
| CompareTypeComparison operator: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Distance basis. Empty: center-to-center. Sphere: subtracts both horizontal bounding radii. Box: oriented box-to-box gap.F1Distance threshold in centimeters. For InRange/OutRange, this is the lower bound.F2Upper bound in centimeters for InRange/OutRange comparisons. |
| S1Distance basis. Empty: center-to-center. Sphere: subtracts both horizontal bounding radii. Box: oriented box-to-box gap.F1Distance threshold in centimeters. For InRange/OutRange, this is the lower bound.F2Upper bound in centimeters for InRange/OutRange comparisons. |
| F1Distance threshold in centimeters. For InRange/OutRange, this is the lower bound.F2Upper bound in centimeters for InRange/OutRange comparisons. |
| F2Upper bound in centimeters for InRange/OutRange comparisons. |

# Examples

| DescriptionCommandCompareTypeS1F1F2Check if the distance between Self and Target is within 5000 cmTargetDistanceLessOrEqual5000Check if the distance between Self and Target is between 30 and 50 cmTargetDistanceInRange3050Check if Self and Target are more than 1000 cm apartTargetDistanceGreater1000Check if Self and Target bounds are within ~100 cmTargetDistanceLessOrEqualSphere100Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |
| --- |
| Check if the distance between Self and Target is within 5000 cmTargetDistanceLessOrEqual5000Check if the distance between Self and Target is between 30 and 50 cmTargetDistanceInRange3050Check if Self and Target are more than 1000 cm apartTargetDistanceGreater1000Check if Self and Target bounds are within ~100 cmTargetDistanceLessOrEqualSphere100Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |
| Check if the distance between Self and Target is between 30 and 50 cmTargetDistanceInRange3050Check if Self and Target are more than 1000 cm apartTargetDistanceGreater1000Check if Self and Target bounds are within ~100 cmTargetDistanceLessOrEqualSphere100Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |
| Check if Self and Target are more than 1000 cm apartTargetDistanceGreater1000Check if Self and Target bounds are within ~100 cmTargetDistanceLessOrEqualSphere100Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |
| Check if Self and Target bounds are within ~100 cmTargetDistanceLessOrEqualSphere100Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |
| Check if Self and Target boxes are within ~100 cmTargetDistanceLessOrEqualBox100 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
