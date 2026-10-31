---
document_id: "e5608f8a3007e02a490bd8549d99c2873a3d5382e0897f6bc1317b4b58572da3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype"
title: "Condition_EnteredSiteType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:58+00:00"
content_sha256: "c97d45d95ad6777ffc59c09f8080ec1509364796cdc6aee28c2c04951297b691"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-enteredsitetype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the SiteType of the site at the entity's current location matches the specified value. When CompareType is Equal, the site type at the test location must match exactly. When CompareType is NotEqual, the condition passes if the entity is on a site of a different type, or if the entity is not on any site at all.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose location is used to find the entered site (Self or Target).CompareTypeEqual: site type must match; NotEqual: site type differs or not on any site.S1SiteType to compare (EB1SiteType enum name, e.g., Residence, Business). |
| --- |
| BaseObjectThe entity whose location is used to find the entered site (Self or Target).CompareTypeEqual: site type must match; NotEqual: site type differs or not on any site.S1SiteType to compare (EB1SiteType enum name, e.g., Residence, Business). |
| CompareTypeEqual: site type must match; NotEqual: site type differs or not on any site.S1SiteType to compare (EB1SiteType enum name, e.g., Residence, Business). |
| S1SiteType to compare (EB1SiteType enum name, e.g., Residence, Business). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if Self is currently standing on a Residence siteSelfEnteredSiteTypeEqualResidenceChecks if Target is currently standing on a Business siteTargetEnteredSiteTypeEqualBusinessChecks if Self is NOT on a Residence siteSelfEnteredSiteTypeNotEqualResidenceChecks if the target impact point is on a Park siteTargetEnteredSiteTypeEqualPark |
| --- |
| Checks if Self is currently standing on a Residence siteSelfEnteredSiteTypeEqualResidenceChecks if Target is currently standing on a Business siteTargetEnteredSiteTypeEqualBusinessChecks if Self is NOT on a Residence siteSelfEnteredSiteTypeNotEqualResidenceChecks if the target impact point is on a Park siteTargetEnteredSiteTypeEqualPark |
| Checks if Target is currently standing on a Business siteTargetEnteredSiteTypeEqualBusinessChecks if Self is NOT on a Residence siteSelfEnteredSiteTypeNotEqualResidenceChecks if the target impact point is on a Park siteTargetEnteredSiteTypeEqualPark |
| Checks if Self is NOT on a Residence siteSelfEnteredSiteTypeNotEqualResidenceChecks if the target impact point is on a Park siteTargetEnteredSiteTypeEqualPark |
| Checks if the target impact point is on a Park siteTargetEnteredSiteTypeEqualPark |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
