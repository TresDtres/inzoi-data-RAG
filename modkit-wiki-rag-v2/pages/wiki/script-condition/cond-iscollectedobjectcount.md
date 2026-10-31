---
document_id: "ff0a4e7a48764839b9f33063ccf3f08f297ee27af18a0e36904011cbb7cb8ef8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscollectedobjectcount"
title: "Condition_IsCollectedObjectCount"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:24+00:00"
content_sha256: "776f55c399dc73b4e146abe2f8604c374d2640355c31bc033872fc6082577efb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscollectedobjectcount"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the number of objects collected within a specified Family Collection category for the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check the collected count for.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Collection category ID as defined in Collection.json. Use "All" to check the total count.F1The value to compare against the collected count (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| --- |
| BaseObjectThe entity to check the collected count for.CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Collection category ID as defined in Collection.json. Use "All" to check the total count.F1The value to compare against the collected count (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| CompareTypeSupported compare types: Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual, InRange, OutRange.S1Collection category ID as defined in Collection.json. Use "All" to check the total count.F1The value to compare against the collected count (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| S1Collection category ID as defined in Collection.json. Use "All" to check the total count.F1The value to compare against the collected count (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| F1The value to compare against the collected count (lower bound for InRange/OutRange).F2Upper bound value for InRange/OutRange comparisons. |
| F2Upper bound value for InRange/OutRange comparisons. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if self has collected 10 or more Fish category itemsSelfIsCollectedObjectCountGreaterOrEqualCheck if self has collected 10 or more Crop category itemsSelfIsCollectedObjectCountGreaterOrEqualCheck if target has collected 100 or more items across all categoriesTargetIsCollectedObjectCountGreaterOrEqualCheck if self has collected between 5 and 20 Fish category itemsSelfIsCollectedObjectCountInRange |
| --- |
| Check if self has collected 10 or more Fish category itemsSelfIsCollectedObjectCountGreaterOrEqualCheck if self has collected 10 or more Crop category itemsSelfIsCollectedObjectCountGreaterOrEqualCheck if target has collected 100 or more items across all categoriesTargetIsCollectedObjectCountGreaterOrEqualCheck if self has collected between 5 and 20 Fish category itemsSelfIsCollectedObjectCountInRange |
| Check if self has collected 10 or more Crop category itemsSelfIsCollectedObjectCountGreaterOrEqualCheck if target has collected 100 or more items across all categoriesTargetIsCollectedObjectCountGreaterOrEqualCheck if self has collected between 5 and 20 Fish category itemsSelfIsCollectedObjectCountInRange |
| Check if target has collected 100 or more items across all categoriesTargetIsCollectedObjectCountGreaterOrEqualCheck if self has collected between 5 and 20 Fish category itemsSelfIsCollectedObjectCountInRange |
| Check if self has collected between 5 and 20 Fish category itemsSelfIsCollectedObjectCountInRange |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
