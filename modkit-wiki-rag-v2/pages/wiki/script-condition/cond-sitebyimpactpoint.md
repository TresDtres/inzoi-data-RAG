---
document_id: "1209a99647fb1a110fc4e80d59ecd40b59fc15886361799b9150259866c72388"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-sitebyimpactpoint"
title: "Condition_SiteByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "46e98d6b3480be8936c069f683d6804820759f3bfd896ca50380277491b70616"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-sitebyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the target location (impact point) is inside a site. If S1 is specified, this condition checks whether the entered site id matches S1.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Site id to compare (Site.Id). |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Site id to compare (Site.Id). |
| S1(Optional) Site id to compare (Site.Id). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether target location is inside any site.TargetSiteByImpactPointEqualChecks whether target location is NOT inside any site.TargetSiteByImpactPointNotEqualChecks whether target location is inside a specific site.TargetSiteByImpactPointEqualSite_001 |
| --- |
| Checks whether target location is inside any site.TargetSiteByImpactPointEqualChecks whether target location is NOT inside any site.TargetSiteByImpactPointNotEqualChecks whether target location is inside a specific site.TargetSiteByImpactPointEqualSite_001 |
| Checks whether target location is NOT inside any site.TargetSiteByImpactPointNotEqualChecks whether target location is inside a specific site.TargetSiteByImpactPointEqualSite_001 |
| Checks whether target location is inside a specific site.TargetSiteByImpactPointEqualSite_001 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
