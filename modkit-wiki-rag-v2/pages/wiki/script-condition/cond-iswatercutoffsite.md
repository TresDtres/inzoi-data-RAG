---
document_id: "86401e41e1ef2b09ddf6b8bcd591dd07d88b73ec09071bcb3cfba275e27bd899"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iswatercutoffsite"
title: "Condition_IsWaterCutoffSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:50+00:00"
content_sha256: "d12ae4c340a68706ec26fd9af4675519eab05e8b9a41b48fbdac56d0a058f63f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iswatercutoffsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the water supply has been cut off at the site where the BaseObject is currently located.

# Parameters

| ParameterDescriptionBaseObjectThe actor whose located site is checked for water cutoff (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| --- |
| BaseObjectThe actor whose located site is checked for water cutoff (Self or Target).CompareTypeType of comparison operation (Equal or NotEqual). |
| CompareTypeType of comparison operation (Equal or NotEqual). |

# Examples

| DescriptionBaseObjectCommandCompareTypeChecks if Self's located site has water cut offSelfIsWaterCutoffSiteEqualChecks if Target's located site does NOT have water cut offTargetIsWaterCutoffSiteNotEqualChecks if Self's current site has lost water supplySelfIsWaterCutoffSiteEqual |
| --- |
| Checks if Self's located site has water cut offSelfIsWaterCutoffSiteEqualChecks if Target's located site does NOT have water cut offTargetIsWaterCutoffSiteNotEqualChecks if Self's current site has lost water supplySelfIsWaterCutoffSiteEqual |
| Checks if Target's located site does NOT have water cut offTargetIsWaterCutoffSiteNotEqualChecks if Self's current site has lost water supplySelfIsWaterCutoffSiteEqual |
| Checks if Self's current site has lost water supplySelfIsWaterCutoffSiteEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
