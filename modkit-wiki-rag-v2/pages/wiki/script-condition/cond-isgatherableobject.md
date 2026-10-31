---
document_id: "543a7d88e935857953c619e3547c5758e34a9d9e7ad4fde7cf59211fdcbf50bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isgatherableobject"
title: "Condition_IsGatherableObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:30+00:00"
content_sha256: "ae2ce4025cb86e61a699d4fab2b7b6aaac3ca987a5f325c354f9b5d1972fbfb2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isgatherableobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject entity is a gatherable object of the specified type. If S1 is empty, returns true for any gatherable object regardless of type.

# Parameters

| ParameterDescriptionBaseObjectThe entity to check.CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). If empty, any gatherable type matches. |
| --- |
| BaseObjectThe entity to check.CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). If empty, any gatherable type matches. |
| CompareTypeSupported compare types: Equal, NotEqual.S1The gathering type to match (e.g., Fishing, Mining). If empty, any gatherable type matches. |
| S1The gathering type to match (e.g., Fishing, Mining). If empty, any gatherable type matches. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Target is any gatherable objectTargetIsGatherableObjectEqualCheck if Target is a Mining gatherable objectTargetIsGatherableObjectEqualCheck if Target is NOT a Fishing gatherable objectTargetIsGatherableObjectNotEqual |
| --- |
| Check if Target is any gatherable objectTargetIsGatherableObjectEqualCheck if Target is a Mining gatherable objectTargetIsGatherableObjectEqualCheck if Target is NOT a Fishing gatherable objectTargetIsGatherableObjectNotEqual |
| Check if Target is a Mining gatherable objectTargetIsGatherableObjectEqualCheck if Target is NOT a Fishing gatherable objectTargetIsGatherableObjectNotEqual |
| Check if Target is NOT a Fishing gatherable objectTargetIsGatherableObjectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
