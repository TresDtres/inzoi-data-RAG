---
document_id: "1c647b3a196556111002734adc5ff416cc89b7ca7dc610e368e9dade652c46d9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject"
title: "Condition_HasSlotForHeldObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:15+00:00"
content_sha256: "a8ac863a020b571d21ca613ddceec89d5f7ffa876b7648eb51dd22cb5b45ece1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasslotforheldobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Script condition function to check if a target object has an available slot for the held object.

This condition verifies whether the target game object (NonBaseObject) has an empty slot that can accommodate the object currently held in the character's (BaseObject) right hand. It checks slot availability based on object category and validates that the slot can be occupied.

# Parameters

| ParameterDescriptionBaseObjectCharacter entity holding an object in right handCompareTypeEqual / NotEqual |
| --- |
| BaseObjectCharacter entity holding an object in right handCompareTypeEqual / NotEqual |
| CompareTypeEqual / NotEqual |

# Notes

- The target game object is resolved internally via ScriptContext (NonBaseObject).
- Returns false if the character does not have a valid PostureComponent.
- Returns false if the target game object is invalid.
- Returns false if the target object does not have a SlotComponent.
- Returns false if the character is not holding an object in right hand.
- Returns false if the held object's data table row is not found.
- Searches for empty slots matching the held object's category.
- Validates slot occupancy using SlotComponent.CanOccupySlot().

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if target has slot for held objectSelfHasSlotForHeldObjectEqualCheck if target has no slot availableSelfHasSlotForHeldObjectNotEqual |
| --- |
| Check if target has slot for held objectSelfHasSlotForHeldObjectEqualCheck if target has no slot availableSelfHasSlotForHeldObjectNotEqual |
| Check if target has no slot availableSelfHasSlotForHeldObjectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
