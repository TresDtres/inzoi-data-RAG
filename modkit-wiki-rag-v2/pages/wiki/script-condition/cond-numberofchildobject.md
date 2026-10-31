---
document_id: "ab87bc29db6405fed677392a5cf95961029493d61b8b6d5de5d07dfc7d0307a8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-numberofchildobject"
title: "Condition_NumberOfChildObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:52+00:00"
content_sha256: "3052b3e76d8ea03af890ba6a40d43abb9d96282a7bd0c9299bf3a3553bd505e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-numberofchildobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the number of hierarchy child objects of the BaseObject against a reference count, applying an optional filter by tag, type, or state.

# Parameters

| ParameterDescriptionBaseObjectThe parent entity whose hierarchy children are countedCompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Reference count to compare against the number of found children |
| --- |
| BaseObjectThe parent entity whose hierarchy children are countedCompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Reference count to compare against the number of found children |
| CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Reference count to compare against the number of found children |
| S1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Reference count to compare against the number of found children |
| S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Reference count to compare against the number of found children |
| F1Reference count to compare against the number of found children |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1Does Target have 2 or more children tagged "Door"?TargetNumberOfChildObjectGreaterOrEqual{EntityTag}Door2Does Self have exactly 0 children with ObjectTag "Furniture"?SelfNumberOfChildObjectEqual{ObjectTags}Furniture0Does Target have at least 1 child in StateGroup "Garbage"?TargetNumberOfChildObjectGreaterOrEqual{StateGroup}Garbage1 |
| --- |
| Does Target have 2 or more children tagged "Door"?TargetNumberOfChildObjectGreaterOrEqual{EntityTag}Door2Does Self have exactly 0 children with ObjectTag "Furniture"?SelfNumberOfChildObjectEqual{ObjectTags}Furniture0Does Target have at least 1 child in StateGroup "Garbage"?TargetNumberOfChildObjectGreaterOrEqual{StateGroup}Garbage1 |
| Does Self have exactly 0 children with ObjectTag "Furniture"?SelfNumberOfChildObjectEqual{ObjectTags}Furniture0Does Target have at least 1 child in StateGroup "Garbage"?TargetNumberOfChildObjectGreaterOrEqual{StateGroup}Garbage1 |
| Does Target have at least 1 child in StateGroup "Garbage"?TargetNumberOfChildObjectGreaterOrEqual{StateGroup}Garbage1 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
