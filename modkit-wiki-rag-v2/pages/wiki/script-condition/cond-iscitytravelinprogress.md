---
document_id: "950b84db989fd2bfb0f73aa03f54b6f60af0f70ac6a85409b564d23687a783f8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscitytravelinprogress"
title: "Condition_IsCityTravelInProgress"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:23+00:00"
content_sha256: "7f1655c52298b96929596681b83a656506e461cdd14d7dc6930f4c8e9393ca2e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscitytravelinprogress"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is on a city travel: a travel is in progress and the character is on its companion list (which includes the traveling representative). Characters outside the list, such as residents of the destination city, are false even while a travel is running. Same-city travel counts as traveling, and the result stays true until the homecoming completes.

# Parameters

| ParameterDescriptionBaseObjectThe character to test (Self or Target)CompareTypeEqual: true while the character is traveling. NotEqual: true otherwise. |
| --- |
| BaseObjectThe character to test (Self or Target)CompareTypeEqual: true while the character is traveling. NotEqual: true otherwise. |
| CompareTypeEqual: true while the character is traveling. NotEqual: true otherwise. |

# Examples

| DescriptionBaseObjectCommandCompareTypeAllow only while the acting character is travelingSelfIsCityTravelInProgressEqualBlock adoption while the acting character travelsSelfIsCityTravelInProgressNotEqualIs the conversation partner a tourist?TargetIsCityTravelInProgressEqual |
| --- |
| Allow only while the acting character is travelingSelfIsCityTravelInProgressEqualBlock adoption while the acting character travelsSelfIsCityTravelInProgressNotEqualIs the conversation partner a tourist?TargetIsCityTravelInProgressEqual |
| Block adoption while the acting character travelsSelfIsCityTravelInProgressNotEqualIs the conversation partner a tourist?TargetIsCityTravelInProgressEqual |
| Is the conversation partner a tourist?TargetIsCityTravelInProgressEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoSite, Lot & Position[City](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-city)[EnteredSiteHasTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastag)[EnteredSiteHasTagByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitehastagbyimpactpoint)[EnteredSiteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-enteredsitetype)[FinishHomework](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-finishhomework)[ForTimeSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-fortimesite)[HasCeiling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceiling)[HasCeilingByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasceilingbyimpactpoint)[HasFloor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloor)[HasFloorByImpactPoint](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasfloorbyimpactpoint)[HasObjectTemplateTagInMyResidanceSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttemplatetaginmyresidancesite)[HasStateObjectAtSite](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstateobjectatsite)
