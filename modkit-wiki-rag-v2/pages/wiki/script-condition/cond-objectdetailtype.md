---
document_id: "9d2c923adbe3f9bdfcc04c26b1a3cec8304e6c58c00c69f46bfc04ac9145b6e0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-objectdetailtype"
title: "Condition_ObjectDetailType"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:53+00:00"
content_sha256: "00d002dcd44ef803afc1538a73183f557c317fcfc491107a669bca02a9b43991"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-objectdetailtype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the ObjectDetailType (EB2GameObjectDetailType) of the specified BaseObject against a given type name.

# Parameters

| ParameterDescriptionBaseObjectThe object to evaluate (resolved to a FB2GameObject)CompareTypeComparison operator: Equal, NotEqualS1EB2GameObjectDetailType enum name to compare against (e.g., Food, Book, CraftObject) |
| --- |
| BaseObjectThe object to evaluate (resolved to a FB2GameObject)CompareTypeComparison operator: Equal, NotEqualS1EB2GameObjectDetailType enum name to compare against (e.g., Food, Book, CraftObject) |
| CompareTypeComparison operator: Equal, NotEqualS1EB2GameObjectDetailType enum name to compare against (e.g., Food, Book, CraftObject) |
| S1EB2GameObjectDetailType enum name to compare against (e.g., Food, Book, CraftObject) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if target object detail type is FoodTargetObjectDetailTypeEqualFoodCheck if self object detail type is not BookSelfObjectDetailTypeNotEqualBook |
| --- |
| Check if target object detail type is FoodTargetObjectDetailTypeEqualFoodCheck if self object detail type is not BookSelfObjectDetailTypeNotEqualBook |
| Check if self object detail type is not BookSelfObjectDetailTypeNotEqualBook |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
