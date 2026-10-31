---
document_id: "62684f1894c03f050256f03660664015a4b4d2e815bd6a38d282fc5f432af789"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-pickedobjectindiningslot"
title: "Condition_PickedObjectInDiningSlot"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:56+00:00"
content_sha256: "27c1ea91800edafacbe153e46be12ba6b50055851d4856782e94797b5247f1fc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-pickedobjectindiningslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is currently placed in a slot of type Object whose slot data is connected to a chair component (i.e., a dining slot).

# Parameters

| ParameterDescriptionBaseObjectThe object whose slot occupancy state will be checked (Self or Target).CompareTypeEqual (object is in a dining slot), NotEqual (object is not). |
| --- |
| BaseObjectThe object whose slot occupancy state will be checked (Self or Target).CompareTypeEqual (object is in a dining slot), NotEqual (object is not). |
| CompareTypeEqual (object is in a dining slot), NotEqual (object is not). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if the picked object is in a dining slotSelfPickedObjectInDiningSlotEqualCheck if the picked object is NOT in a dining slotSelfPickedObjectInDiningSlotNotEqualCheck if Target object is placed in a dining slotTargetPickedObjectInDiningSlotEqualCheck if Target object is NOT in a dining slotTargetPickedObjectInDiningSlotNotEqual |
| --- |
| Check if the picked object is in a dining slotSelfPickedObjectInDiningSlotEqualCheck if the picked object is NOT in a dining slotSelfPickedObjectInDiningSlotNotEqualCheck if Target object is placed in a dining slotTargetPickedObjectInDiningSlotEqualCheck if Target object is NOT in a dining slotTargetPickedObjectInDiningSlotNotEqual |
| Check if the picked object is NOT in a dining slotSelfPickedObjectInDiningSlotNotEqualCheck if Target object is placed in a dining slotTargetPickedObjectInDiningSlotEqualCheck if Target object is NOT in a dining slotTargetPickedObjectInDiningSlotNotEqual |
| Check if Target object is placed in a dining slotTargetPickedObjectInDiningSlotEqualCheck if Target object is NOT in a dining slotTargetPickedObjectInDiningSlotNotEqual |
| Check if Target object is NOT in a dining slotTargetPickedObjectInDiningSlotNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
