---
document_id: "c35b5e353af34434aff722bc4a394e22382b301d92edf0964590abedba6315e2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite"
title: "Condition_HasStateObjectAtSite"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:15+00:00"
content_sha256: "1ef8cbdab8646311e80e18963775d748a4259a3e7faf00f135d0e38d2e5dc23d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasstateobjectatsite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any game object near BaseObject (within AOI range) has the state specified by S1 (StateGroupId) and S2 (StateId). Uses AOI-based proximity search for performance, avoiding a full site iteration.

# Parameters

| ParameterDescriptionBaseObjectThe character whose location is used as the AOI search originCompareTypeEqual: returns true if a matching state object is found; NotEqual: otherwiseS1StateGroupId of the state to look for on nearby game objectsS2StateId of the state to look for on nearby game objects |
| --- |
| BaseObjectThe character whose location is used as the AOI search originCompareTypeEqual: returns true if a matching state object is found; NotEqual: otherwiseS1StateGroupId of the state to look for on nearby game objectsS2StateId of the state to look for on nearby game objects |
| CompareTypeEqual: returns true if a matching state object is found; NotEqual: otherwiseS1StateGroupId of the state to look for on nearby game objectsS2StateId of the state to look for on nearby game objects |
| S1StateGroupId of the state to look for on nearby game objectsS2StateId of the state to look for on nearby game objects |
| S2StateId of the state to look for on nearby game objects |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if a specific state object exists near the actorSelfHasStateObjectAtSiteEqualCheck that no matching state object is nearbySelfHasStateObjectAtSiteNotEqual |
| --- |
| Check if a specific state object exists near the actorSelfHasStateObjectAtSiteEqualCheck that no matching state object is nearbySelfHasStateObjectAtSiteNotEqual |
| Check that no matching state object is nearbySelfHasStateObjectAtSiteNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
