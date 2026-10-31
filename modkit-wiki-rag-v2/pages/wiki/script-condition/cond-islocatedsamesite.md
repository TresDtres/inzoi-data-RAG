---
document_id: "b3623c0d0865635cf183f857ff805071941bb4ab5a47fd6882e21924f9166db1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-islocatedsamesite"
title: "Condition_IsLocatedSameSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:36+00:00"
content_sha256: "5ae90e6dea0a400e7d5b123cdebeefabf995e39d6d71e806a1c5c338f703f474"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-islocatedsamesite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the self object and the target object are located within the same site. This condition always evaluates the location of both the self and the target, regardless of which one is provided as the BaseObject. If either the self or the target is not located within a site, the condition returns false regardless of the CompareType.

# Parameters

| ParameterDescriptionBaseObjectEither Self or Target. This parameter is required but does not affectthe evaluation logic (always checks Self vs Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectEither Self or Target. This parameter is required but does not affectthe evaluation logic (always checks Self vs Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| the evaluation logic (always checks Self vs Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks whether Self and Target are in the same siteSelfIsLocatedSameSiteEqualChecks whether Self and Target are in different sitesTargetIsLocatedSameSiteNotEqual |
| --- |
| Checks whether Self and Target are in the same siteSelfIsLocatedSameSiteEqualChecks whether Self and Target are in different sitesTargetIsLocatedSameSiteNotEqual |
| Checks whether Self and Target are in different sitesTargetIsLocatedSameSiteNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
