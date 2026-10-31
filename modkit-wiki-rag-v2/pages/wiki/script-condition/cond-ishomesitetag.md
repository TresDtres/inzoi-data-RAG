---
document_id: "f0a83bd47828226707b0ba4b265724a6c9daa663285c188687a5ad2c000ecadb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-ishomesitetag"
title: "Condition_IsHomeSiteTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:31+00:00"
content_sha256: "778c61b971348d33c4025dbaade24e02ac4c0d1f4094a643579181dff61702f8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-ishomesitetag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject's home site has a specific tag defined in DefaultInfo. The home site's tag list is looked up from the site data table using the character's home site ID.

# Parameters

| ParameterDescriptionBaseObjectThe character whose home site is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Tag name to search for in the home site's DefaultInfo tag list. |
| --- |
| BaseObjectThe character whose home site is checked (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1Tag name to search for in the home site's DefaultInfo tag list. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1Tag name to search for in the home site's DefaultInfo tag list. |
| S1Tag name to search for in the home site's DefaultInfo tag list. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if Self's home site has the StartTag_Park tagSelfIsHomeSiteTagEqualStartTag_ParkChecks if Self's home site does NOT have StartTag_ParkSelfIsHomeSiteTagNotEqualStartTag_ParkChecks if Target's home site has the Beach tagTargetIsHomeSiteTagEqualBeach |
| --- |
| Checks if Self's home site has the StartTag_Park tagSelfIsHomeSiteTagEqualStartTag_ParkChecks if Self's home site does NOT have StartTag_ParkSelfIsHomeSiteTagNotEqualStartTag_ParkChecks if Target's home site has the Beach tagTargetIsHomeSiteTagEqualBeach |
| Checks if Self's home site does NOT have StartTag_ParkSelfIsHomeSiteTagNotEqualStartTag_ParkChecks if Target's home site has the Beach tagTargetIsHomeSiteTagEqualBeach |
| Checks if Target's home site has the Beach tagTargetIsHomeSiteTagEqualBeach |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
