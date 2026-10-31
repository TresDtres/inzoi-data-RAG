---
document_id: "e0ae85eccd3b9ebc94642b51680276d6fac1f735ec26187d390411a56a5500b1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-objectweathering"
title: "Condition_ObjectWeathering"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "9bfc6398a3a71e9765b7635e9eeaebbd0ff5beb7a5b582e0dfdfdfb050191341"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-objectweathering"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the weathering grade of the specified object against the given threshold values (F1, F2). Note: Grade is a non-negative integer. The meaning of each grade depends on the object's weathering group data defined in ObjectWeathering.json.

# Parameters

| ParameterDescriptionBaseObjectThe object to validate (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for weathering grade comparison.F2The second threshold value (used for Between comparison). |
| --- |
| BaseObjectThe object to validate (Self or Target).CompareTypeType of comparison operation.F1The first threshold value for weathering grade comparison.F2The second threshold value (used for Between comparison). |
| CompareTypeType of comparison operation.F1The first threshold value for weathering grade comparison.F2The second threshold value (used for Between comparison). |
| F1The first threshold value for weathering grade comparison.F2The second threshold value (used for Between comparison). |
| F2The second threshold value (used for Between comparison). |

# Examples

| DescriptionBaseObjectCommandCompareTypeF1F2Checks whether target object weathering grade is 0.TargetObjectWeatheringEqual0Checks whether self object weathering grade >= 1.SelfObjectWeatheringGreaterOrEqual1 |
| --- |
| Checks whether target object weathering grade is 0.TargetObjectWeatheringEqual0Checks whether self object weathering grade >= 1.SelfObjectWeatheringGreaterOrEqual1 |
| Checks whether self object weathering grade >= 1.SelfObjectWeatheringGreaterOrEqual1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
