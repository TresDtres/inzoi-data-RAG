---
document_id: "47d2b7e8494f76a46283c861fa53e083106199e898b50e2504f85a5d1a1a928c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-numberofobject"
title: "Condition_NumberOfObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:53+00:00"
content_sha256: "18fa9ee40cac5e8413a145a93a8032fbb33e5b2ed34681ede1569dad43e47f3a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-numberofobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the number of game objects within the specified distance around the BaseObject against a reference count, applying an optional filter by tag, type, or state.

# Parameters

| ParameterDescriptionBaseObjectThe reference entity around which game objects are searched (Self or Target)CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| --- |
| BaseObjectThe reference entity around which game objects are searched (Self or Target)CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| CompareTypeSupported compare types: Equal, NotEqual, Less, Greater, LessOrEqual, GreaterOrEqualS1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| S1Filter type: {EntityTag}, {ObjectTags}, {GameObjectDetailType}, {StateGroup}, {StateName}S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| S2Comparison value for the S1 filter (tag name, object tag, detail type, state group ID, or state ID)F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| F1Search radius distance from BaseObjectF2Reference count to compare against the number of found objects |
| F2Reference count to compare against the number of found objects |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1F2Are there 2 or more objects tagged "Door" within 200 units?SelfNumberOfObjectGreaterOrEqual{EntityTag}Door2002Are there exactly 0 objects tagged "Furniture" within 300 units?TargetNumberOfObjectEqual{ObjectTags}Furniture3000Is there at least 1 object of type "Prop" within 500 units?SelfNumberOfObjectGreaterOrEqual{GameObjectDetailType}Prop5001Are there fewer than 3 objects in StateGroup "Open" within 400 units?TargetNumberOfObjectLess{StateGroup}Open4003 |
| --- |
| Are there 2 or more objects tagged "Door" within 200 units?SelfNumberOfObjectGreaterOrEqual{EntityTag}Door2002Are there exactly 0 objects tagged "Furniture" within 300 units?TargetNumberOfObjectEqual{ObjectTags}Furniture3000Is there at least 1 object of type "Prop" within 500 units?SelfNumberOfObjectGreaterOrEqual{GameObjectDetailType}Prop5001Are there fewer than 3 objects in StateGroup "Open" within 400 units?TargetNumberOfObjectLess{StateGroup}Open4003 |
| Are there exactly 0 objects tagged "Furniture" within 300 units?TargetNumberOfObjectEqual{ObjectTags}Furniture3000Is there at least 1 object of type "Prop" within 500 units?SelfNumberOfObjectGreaterOrEqual{GameObjectDetailType}Prop5001Are there fewer than 3 objects in StateGroup "Open" within 400 units?TargetNumberOfObjectLess{StateGroup}Open4003 |
| Is there at least 1 object of type "Prop" within 500 units?SelfNumberOfObjectGreaterOrEqual{GameObjectDetailType}Prop5001Are there fewer than 3 objects in StateGroup "Open" within 400 units?TargetNumberOfObjectLess{StateGroup}Open4003 |
| Are there fewer than 3 objects in StateGroup "Open" within 400 units?TargetNumberOfObjectLess{StateGroup}Open4003 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
