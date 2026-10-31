---
document_id: "767d2822beecef0c2d1842501366712a168fcd77a82ff95112287f5ce85784bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite"
title: "Condition_HasVisitedSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:16+00:00"
content_sha256: "42ee04eb6b7d79e04b1194c7cb781f3478301003e452c23b85c123ffc5021405"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasvisitedsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the character has a visit record for the specified site. The condition returns true if any access record exists for the given site ID on the character. CompareType is not used; the result is a direct boolean check.

# Parameters

| ParameterDescriptionBaseObjectThe character whose site visit history is checked (Self or Target).S1Site ID (Site.Id) to check for a visit record. |
| --- |
| BaseObjectThe character whose site visit history is checked (Self or Target).S1Site ID (Site.Id) to check for a visit record. |
| S1Site ID (Site.Id) to check for a visit record. |

# Examples

| DescriptionBaseObjectCommandS1Checks if Self has visited site "Park_001"SelfHasVisitedSitePark_001Checks if Target has visited site "Library_001"TargetHasVisitedSiteLibrary_001Checks if Self has visited site "Shop_A"SelfHasVisitedSiteShop_A |
| --- |
| Checks if Self has visited site "Park_001"SelfHasVisitedSitePark_001Checks if Target has visited site "Library_001"TargetHasVisitedSiteLibrary_001Checks if Self has visited site "Shop_A"SelfHasVisitedSiteShop_A |
| Checks if Target has visited site "Library_001"TargetHasVisitedSiteLibrary_001Checks if Self has visited site "Shop_A"SelfHasVisitedSiteShop_A |
| Checks if Self has visited site "Shop_A"SelfHasVisitedSiteShop_A |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
