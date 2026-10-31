---
document_id: "80ffb7fa618dd5f9c995cb5d1d351be99502b918109e07a34d4f8d674f8c37dd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag"
title: "Condition_EnteredSiteHasTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "a724fadc5ab7886475b8df68920584531d0cf630138083937cdc63b50ec24508"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-enteredsitehastag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the site at the entity's current location has the specified site tag (S1). By default, if the entity is not on any site, the condition returns false. If S2 is set to "EvaluateOffSite", the condition is evaluated even when the actor is not on a site (in which case hasTag will be false and the result depends on CompareType).

# Parameters

| ParameterDescriptionBaseObjectThe entity whose current location is used to find the entered site (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Site tag to check for in the site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when not on any site. |
| --- |
| BaseObjectThe entity whose current location is used to find the entered site (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Site tag to check for in the site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when not on any site. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Site tag to check for in the site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when not on any site. |
| S1Site tag to check for in the site's tag list.S2(Optional) Set to "EvaluateOffSite" to allow evaluation when not on any site. |
| S2(Optional) Set to "EvaluateOffSite" to allow evaluation when not on any site. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks if Self's current site has the "Commercial" tagSelfEnteredSiteHasTagEqualCommercialChecks if Target's current site does NOT have the "Restricted" tagTargetEnteredSiteHasTagNotEqualRestrictedChecks if Self's site has "Residential" tag, even if not on a siteSelfEnteredSiteHasTagEqualResidentialEvaluateOffSite |
| --- |
| Checks if Self's current site has the "Commercial" tagSelfEnteredSiteHasTagEqualCommercialChecks if Target's current site does NOT have the "Restricted" tagTargetEnteredSiteHasTagNotEqualRestrictedChecks if Self's site has "Residential" tag, even if not on a siteSelfEnteredSiteHasTagEqualResidentialEvaluateOffSite |
| Checks if Target's current site does NOT have the "Restricted" tagTargetEnteredSiteHasTagNotEqualRestrictedChecks if Self's site has "Residential" tag, even if not on a siteSelfEnteredSiteHasTagEqualResidentialEvaluateOffSite |
| Checks if Self's site has "Residential" tag, even if not on a siteSelfEnteredSiteHasTagEqualResidentialEvaluateOffSite |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
