---
document_id: "a2c9619b08265b72025c708b428d7dcb4988be1723de8af5c6cd9e26e9e702b6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isincareersite"
title: "Condition_IsInCareerSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:33+00:00"
content_sha256: "0ff98ddec33a57ed0995a5f18d10d72851a8437e9fd3eb5faba2a855511fc131"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isincareersite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is currently inside their Career's site area. S1 specifies the EB1CareerType to check (defaults to Business if omitted).

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeEqual (is in career site) or NotEqual (is not in career site).S1EB1CareerType to check (defaults to Business if omitted). |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeEqual (is in career site) or NotEqual (is not in career site).S1EB1CareerType to check (defaults to Business if omitted). |
| CompareTypeEqual (is in career site) or NotEqual (is not in career site).S1EB1CareerType to check (defaults to Business if omitted). |
| S1EB1CareerType to check (defaults to Business if omitted). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if Self is inside their Business career siteSelfIsInCareerSiteEqualBusinessCheck if Self is outside their career siteSelfIsInCareerSiteNotEqualBusiness |
| --- |
| Check if Self is inside their Business career siteSelfIsInCareerSiteEqualBusinessCheck if Self is outside their career siteSelfIsInCareerSiteNotEqualBusiness |
| Check if Self is outside their career siteSelfIsInCareerSiteNotEqualBusiness |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
