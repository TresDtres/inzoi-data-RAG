---
document_id: "da72949910cf8bf2e243e06473b65369355bd39883ccc3f1cbfa43ffa93a4e3f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite"
title: "Condition_HasObjectTemplateTagInMyResidanceSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "3b0580336aa5b01f2df27b0e8a953a9eba7cebdd0ca819010a05b1ab2712575c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether an object with the specified ObjectTemplateTag exists in the character's home (residence) site.

# Parameters

| ParameterDescriptionBaseObjectThe character whose home site is searched (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag name to search for within the home site. |
| --- |
| BaseObjectThe character whose home site is searched (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag name to search for within the home site. |
| CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTemplateTag name to search for within the home site. |
| S1ObjectTemplateTag name to search for within the home site. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Checks if Self's home site has an object with tag "Bed"SelfHasObjectTemplateTagInMyResidanceSiteEqualBedChecks if Target's home site has an object with tag "Oven"TargetHasObjectTemplateTagInMyResidanceSiteEqualOvenChecks if Self's home site does NOT have an object with tag "Computer"SelfHasObjectTemplateTagInMyResidanceSiteNotEqualComputer |
| --- |
| Checks if Self's home site has an object with tag "Bed"SelfHasObjectTemplateTagInMyResidanceSiteEqualBedChecks if Target's home site has an object with tag "Oven"TargetHasObjectTemplateTagInMyResidanceSiteEqualOvenChecks if Self's home site does NOT have an object with tag "Computer"SelfHasObjectTemplateTagInMyResidanceSiteNotEqualComputer |
| Checks if Target's home site has an object with tag "Oven"TargetHasObjectTemplateTagInMyResidanceSiteEqualOvenChecks if Self's home site does NOT have an object with tag "Computer"SelfHasObjectTemplateTagInMyResidanceSiteNotEqualComputer |
| Checks if Self's home site does NOT have an object with tag "Computer"SelfHasObjectTemplateTagInMyResidanceSiteNotEqualComputer |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
