---
document_id: "6c61bdfe547ad3006aec537951c12e3135f9a862a72968796c80322aad0d811a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint"
title: "Condition_EnteredSiteHasTagByImpactPoint"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "4e9efff40d14d6ae733798c01cc2164aae36f98f2eb1dbbf91d8e2ef9edac43a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-enteredsitehastagbyimpactpoint"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the site containing the impact point (clicked / target location) has the specified site tag (S1). Unlike EnteredSiteHasTag, this condition ALWAYS uses the script context's target location (impact point), regardless of BaseObject or whether a target entity exists. Intended for ground/location click interactions (e.g. ClickMove) where discrimination must be based on the clicked spot, not where the actor is standing. By default, if the impact point is not on any site, the condition returns false. If S2 is set to "EvaluateOffSite", the condition is evaluated even when the impact point is not on a site.

# Parameters

| ParameterDescriptionCompareTypeType of comparison operation (Equal or NotEqual).S1Site tag to check for in the clicked site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when the impact point is off-site. |
| --- |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Site tag to check for in the clicked site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when the impact point is off-site. |
| S1Site tag to check for in the clicked site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when the impact point is off-site. |
| S2(Optional) Set to "EvaluateOffSite" to allow evaluation when the impact point is off-site. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if the clicked location's site has the "SiteTag_Beach" tagTargetEnteredSiteHasTagByImpactPointEqualSiteTag_BeachChecks if the clicked location's site does NOT have "SiteTag_Beach"TargetEnteredSiteHasTagByImpactPointNotEqualSiteTag_Beach |
| --- |
| Checks if the clicked location's site has the "SiteTag_Beach" tagTargetEnteredSiteHasTagByImpactPointEqualSiteTag_BeachChecks if the clicked location's site does NOT have "SiteTag_Beach"TargetEnteredSiteHasTagByImpactPointNotEqualSiteTag_Beach |
| Checks if the clicked location's site does NOT have "SiteTag_Beach"TargetEnteredSiteHasTagByImpactPointNotEqualSiteTag_Beach |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
