---
document_id: "d794ef00837988e5fb6b3b08e77e3011d1c12988feb2fb49b44938644d397a40"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-site"
title: "Condition_Site"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:59+00:00"
content_sha256: "2e1062d977a8ef6f4ba5c32544b97bdda157659f5e2dec52fc20585d2d12427a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-site"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified BaseObject is currently located in a site. If S1 is specified, this condition checks whether the located site id matches S1.

# Parameters

| ParameterDescriptionBaseObjectThe actor to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Site id to compare (Site.Id). |
| --- |
| BaseObjectThe actor to validate (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Site id to compare (Site.Id). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) Site id to compare (Site.Id). |
| S1(Optional) Site id to compare (Site.Id). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether self is inside any site.SelfSiteEqualChecks whether target is NOT inside any site.TargetSiteNotEqualChecks whether self is currently in a specific site.SelfSiteEqualSite_001 |
| --- |
| Checks whether self is inside any site.SelfSiteEqualChecks whether target is NOT inside any site.TargetSiteNotEqualChecks whether self is currently in a specific site.SelfSiteEqualSite_001 |
| Checks whether target is NOT inside any site.TargetSiteNotEqualChecks whether self is currently in a specific site.SelfSiteEqualSite_001 |
| Checks whether self is currently in a specific site.SelfSiteEqualSite_001 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
