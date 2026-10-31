---
document_id: "8fcdd4debbbf7185afd2bd8c4f9ddcfa6a13320cc2f0f12c511dfd0a198df1c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iselectricitycutoffsite"
title: "Condition_IsElectricityCutoffSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:26+00:00"
content_sha256: "faf4a6df31295ef06a21f47ad29a52e5afc753661bc3857036beeeda88c3c1e8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iselectricitycutoffsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether electricity has been cut off at the site where the BaseObject is currently located.

# Parameters

| ParameterDescriptionBaseObjectThe actor whose located site is checked for electricity cutoff (Self/Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe actor whose located site is checked for electricity cutoff (Self/Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self's located site has electricity cut offSelfIsElectricityCutoffSiteEqualChecks if Target's located site does NOT have electricity cut offTargetIsElectricityCutoffSiteNotEqualChecks if Self's current site has lost powerSelfIsElectricityCutoffSiteEqual |
| --- |
| Checks if Self's located site has electricity cut offSelfIsElectricityCutoffSiteEqualChecks if Target's located site does NOT have electricity cut offTargetIsElectricityCutoffSiteNotEqualChecks if Self's current site has lost powerSelfIsElectricityCutoffSiteEqual |
| Checks if Target's located site does NOT have electricity cut offTargetIsElectricityCutoffSiteNotEqualChecks if Self's current site has lost powerSelfIsElectricityCutoffSiteEqual |
| Checks if Self's current site has lost powerSelfIsElectricityCutoffSiteEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
