---
document_id: "d78379aa9236af1d79daf0890de6061f5b952654d04d28c4afdffd64698abaa5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issiteonfire"
title: "Condition_IsSiteOnFire"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:46+00:00"
content_sha256: "5359c2e5f71b570e652f2362d9ed1bc5a5838fa4d541e0a557bb4e2717551b4e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issiteonfire"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a site is currently on fire based on the specified condition. By default, this command checks whether the site where the BaseObject is located is on fire. If S1 is set to CheckHomeSite, the condition checks whether the home site of the current playing character is on fire.

# Parameters

| ParameterDescriptionBaseObjectThe object whose located site is used for the fire check.CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) If set to "CheckHomeSite", checks the home site of the current character. |
| --- |
| BaseObjectThe object whose located site is used for the fire check.CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) If set to "CheckHomeSite", checks the home site of the current character. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1(Optional) If set to "CheckHomeSite", checks the home site of the current character. |
| S1(Optional) If set to "CheckHomeSite", checks the home site of the current character. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether the site where Self is located is on fireSelfIsSiteOnFireEqualChecks whether the home site of the current character is on fireSelfIsSiteOnFireEqualCheckHomeSite |
| --- |
| Checks whether the site where Self is located is on fireSelfIsSiteOnFireEqualChecks whether the home site of the current character is on fireSelfIsSiteOnFireEqualCheckHomeSite |
| Checks whether the home site of the current character is on fireSelfIsSiteOnFireEqualCheckHomeSite |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
