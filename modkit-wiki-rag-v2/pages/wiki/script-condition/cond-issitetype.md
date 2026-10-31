---
document_id: "ed1fcf4b5c77086a8fd0ee8a33cb4d0bc14807ad05b9842656c2113ff13f0eaf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-issitetype"
title: "Condition_IsSiteType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:47+00:00"
content_sha256: "4c6a86b2d331fa3da01b08b64f953d86f3c2039de8d7afb3a3209f296c317175"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-issitetype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified BaseObject is currently located in a site of the given site type (S1). Note: This condition requires BOTH Self and Target to be valid actors and to be located in the SAME site. If either is not set/valid or they are in different sites, this condition cannot be evaluated and returns false.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the reference (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Site type to compare (EB1SiteType). |
| --- |
| BaseObjectThe object used as the reference (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Site type to compare (EB1SiteType). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Site type to compare (EB1SiteType). |
| S1Site type to compare (EB1SiteType). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks whether self is currently in a Residence site.SelfIsSiteTypeEqualResidenceChecks whether target is NOT in a Business site.TargetIsSiteTypeNotEqualBusiness |
| --- |
| Checks whether self is currently in a Residence site.SelfIsSiteTypeEqualResidenceChecks whether target is NOT in a Business site.TargetIsSiteTypeNotEqualBusiness |
| Checks whether target is NOT in a Business site.TargetIsSiteTypeNotEqualBusiness |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
