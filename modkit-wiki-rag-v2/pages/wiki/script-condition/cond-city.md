---
document_id: "a4577d6bf561f046f9211c3dfe1317c7d8dff32e945cd4942137cc037c1d396a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city"
title: "Condition_City"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:54+00:00"
content_sha256: "1f3ffd49903c851ac13fff620af479d50f8665f1e325b71bb1058810271c5838"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-city"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the current city's ID matches the specified city map ID (S1). The city is obtained from the current simulation state, not from the BaseObject directly.

# Parameters

| ParameterDescriptionBaseObjectThe character entity used to look up the context (Self or Target)CompareTypeEqual: city ID must match S1; NotEqual: city ID must not match S1S1City map ID to compare against (e.g., Gangnam_Map, RedCity_Map, Cahaya_Map) |
| --- |
| BaseObjectThe character entity used to look up the context (Self or Target)CompareTypeEqual: city ID must match S1; NotEqual: city ID must not match S1S1City map ID to compare against (e.g., Gangnam_Map, RedCity_Map, Cahaya_Map) |
| CompareTypeEqual: city ID must match S1; NotEqual: city ID must not match S1S1City map ID to compare against (e.g., Gangnam_Map, RedCity_Map, Cahaya_Map) |
| S1City map ID to compare against (e.g., Gangnam_Map, RedCity_Map, Cahaya_Map) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check that the current city is Dowon (Gangnam)SelfCityEqualGangnam_MapCheck that the current city is NOT RedCitySelfCityNotEqualRedCity_MapCheck that the current city is CahayaSelfCityEqualCahaya_Map |
| --- |
| Check that the current city is Dowon (Gangnam)SelfCityEqualGangnam_MapCheck that the current city is NOT RedCitySelfCityNotEqualRedCity_MapCheck that the current city is CahayaSelfCityEqualCahaya_Map |
| Check that the current city is NOT RedCitySelfCityNotEqualRedCity_MapCheck that the current city is CahayaSelfCityEqualCahaya_Map |
| Check that the current city is CahayaSelfCityEqualCahaya_Map |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)[HasVisitedSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasvisitedsite)
