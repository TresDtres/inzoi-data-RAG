---
document_id: "ef18ddc34494f5b102a9909995b9e9f3489484f1debaf0a48bb0c9f9c4b68a13"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite"
title: "Condition_ForTimeSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:59+00:00"
content_sha256: "9be13aab09053cfae5c3bed622aa4720162097e5de8cd3c1eb6129724d561707"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-fortimesite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has spent at least the specified time at the given site (Equal), or whether the specified time has elapsed since the character last left that site (NotEqual). Use "Home" for S1 to refer to the character's residential site.

# Parameters

| ParameterDescriptionBaseObjectThe character whose site time is checked (Self or Target).CompareTypeEqual: checks time spent at S1 site; NotEqual: checks time elapsed since leaving S1.S1Site ID to compare (Site.Id). Use "Home" to refer to the character's home site.F1Time threshold in hours (integer). |
| --- |
| BaseObjectThe character whose site time is checked (Self or Target).CompareTypeEqual: checks time spent at S1 site; NotEqual: checks time elapsed since leaving S1.S1Site ID to compare (Site.Id). Use "Home" to refer to the character's home site.F1Time threshold in hours (integer). |
| CompareTypeEqual: checks time spent at S1 site; NotEqual: checks time elapsed since leaving S1.S1Site ID to compare (Site.Id). Use "Home" to refer to the character's home site.F1Time threshold in hours (integer). |
| S1Site ID to compare (Site.Id). Use "Home" to refer to the character's home site.F1Time threshold in hours (integer). |
| F1Time threshold in hours (integer). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1Checks if Self has been at Home site for at least 2 hoursSelfForTimeSiteEqualHome2Checks if Self has been away from Home for at least 5 hoursSelfForTimeSiteNotEqualHome5Checks if Target has stayed at "Shop_A" for at least 1 hourTargetForTimeSiteEqualShop_A1 |
| --- |
| Checks if Self has been at Home site for at least 2 hoursSelfForTimeSiteEqualHome2Checks if Self has been away from Home for at least 5 hoursSelfForTimeSiteNotEqualHome5Checks if Target has stayed at "Shop_A" for at least 1 hourTargetForTimeSiteEqualShop_A1 |
| Checks if Self has been away from Home for at least 5 hoursSelfForTimeSiteNotEqualHome5Checks if Target has stayed at "Shop_A" for at least 1 hourTargetForTimeSiteEqualShop_A1 |
| Checks if Target has stayed at "Shop_A" for at least 1 hourTargetForTimeSiteEqualShop_A1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
