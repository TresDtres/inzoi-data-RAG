---
document_id: "781b0942275947ba7ec2ecd025460c18c1fdac4ef5d0e136412ac22e6f18366b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint"
title: "Condition_HasFloorByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:05+00:00"
content_sha256: "47821d658ed9514c5ce3e68cae1cf8d003bc3c2f10bfa74ea6d72150416cf403"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasfloorbyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether there is a constructed floor beneath the impact point (target location). This condition uses the target location directly and does not depend on the BaseObject. Returns false immediately if the target location is the zero vector.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether the clicked impact point on the ground has a constructed floorSelfHasFloorByImpactPointEqualChecks whether the impact point does NOT have a floor beneath itSelfHasFloorByImpactPointNotEqualChecks whether an indoor impact point has a floor (e.g., inside a room)TargetHasFloorByImpactPointEqual |
| --- |
| Checks whether the clicked impact point on the ground has a constructed floorSelfHasFloorByImpactPointEqualChecks whether the impact point does NOT have a floor beneath itSelfHasFloorByImpactPointNotEqualChecks whether an indoor impact point has a floor (e.g., inside a room)TargetHasFloorByImpactPointEqual |
| Checks whether the impact point does NOT have a floor beneath itSelfHasFloorByImpactPointNotEqualChecks whether an indoor impact point has a floor (e.g., inside a room)TargetHasFloorByImpactPointEqual |
| Checks whether an indoor impact point has a floor (e.g., inside a room)TargetHasFloorByImpactPointEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
