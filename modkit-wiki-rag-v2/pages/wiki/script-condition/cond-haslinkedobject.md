---
document_id: "25633b7ad0eac44627e77439cdbee89943bac2be4cb58b9d758467399943d81a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject"
title: "Condition_HasLinkedObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:08+00:00"
content_sha256: "dfa43d8507561de6199fda2a2dee40f203e0d16d5111298456ae4a7226f61c15"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-haslinkedobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character has any object linked to it. Checks are performed in priority order: ShopWorkerBehaviorComponent, then JobComponent, then HouseholdBiz recipe/activity.

# Parameters

| ParameterDescriptionBaseObjectThe character entity to check (Self or Target).CompareTypeEqual (a linked object exists), NotEqual (no linked object exists). |
| --- |
| BaseObjectThe character entity to check (Self or Target).CompareTypeEqual (a linked object exists), NotEqual (no linked object exists). |
| CompareTypeEqual (a linked object exists), NotEqual (no linked object exists). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has a linked objectSelfHasLinkedObjectEqualCheck if Self has no linked objectSelfHasLinkedObjectNotEqualCheck if Target has a linked objectTargetHasLinkedObjectEqualCheck if Target has no linked objectTargetHasLinkedObjectNotEqual |
| --- |
| Check if Self has a linked objectSelfHasLinkedObjectEqualCheck if Self has no linked objectSelfHasLinkedObjectNotEqualCheck if Target has a linked objectTargetHasLinkedObjectEqualCheck if Target has no linked objectTargetHasLinkedObjectNotEqual |
| Check if Self has no linked objectSelfHasLinkedObjectNotEqualCheck if Target has a linked objectTargetHasLinkedObjectEqualCheck if Target has no linked objectTargetHasLinkedObjectNotEqual |
| Check if Target has a linked objectTargetHasLinkedObjectEqualCheck if Target has no linked objectTargetHasLinkedObjectNotEqual |
| Check if Target has no linked objectTargetHasLinkedObjectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
