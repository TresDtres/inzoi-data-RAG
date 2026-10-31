---
document_id: "811dc83200266a030f03ca0b220b1768e12b396bb0375565858bcadcdd5307b8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot"
title: "Condition_HasObjectInTargetObjectSlot"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "f1c3ba5ff3305a03c048db17ab25d3ba06dc65546084e52b6cea0b0448af9906"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjectintargetobjectslot"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Script condition function to check if a specific object slot contains an object. Verifies whether the target game object (BaseObject) has an object occupying the specified slot (S1). Optionally filters by object tag (S2) to check if the occupying object has a specific tag.

# Parameters

| ParameterDescriptionBaseObjectTarget game object to check for slot occupancyCompareTypeEqual / NotEqualS1ObjectSlotId to checkS2(Optional) ObjectTagId to filter occupying object.If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| --- |
| BaseObjectTarget game object to check for slot occupancyCompareTypeEqual / NotEqualS1ObjectSlotId to checkS2(Optional) ObjectTagId to filter occupying object.If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| CompareTypeEqual / NotEqualS1ObjectSlotId to checkS2(Optional) ObjectTagId to filter occupying object.If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| S1ObjectSlotId to checkS2(Optional) ObjectTagId to filter occupying object.If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| S2(Optional) ObjectTagId to filter occupying object.If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| If None, checks only for slot occupancy.If specified, checks if occupying object has this tag. |
| If specified, checks if occupying object has this tag. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if slot has any objectSelfHasObjectInTargetObjectSlotEqualSlot_001NoneCheck if slot has object with tagSelfHasObjectInTargetObjectSlotEqualSlot_001Tag_FoodCheck if slot is emptySelfHasObjectInTargetObjectSlotNotEqualSlot_001None |
| --- |
| Check if slot has any objectSelfHasObjectInTargetObjectSlotEqualSlot_001NoneCheck if slot has object with tagSelfHasObjectInTargetObjectSlotEqualSlot_001Tag_FoodCheck if slot is emptySelfHasObjectInTargetObjectSlotNotEqualSlot_001None |
| Check if slot has object with tagSelfHasObjectInTargetObjectSlotEqualSlot_001Tag_FoodCheck if slot is emptySelfHasObjectInTargetObjectSlotNotEqualSlot_001None |
| Check if slot is emptySelfHasObjectInTargetObjectSlotNotEqualSlot_001None |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
