---
document_id: "aa6377df79423fd9be73ab23148236a2bcaa838f7abadf01b3978f77452da4e5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject"
title: "Condition_HasCleanObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:03+00:00"
content_sha256: "c9d0c53f8d2bade36b8c419651ee5b836ac66794c8aa938eb32e0b0e5eaca6c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hascleanobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether a clean object exists at the target location, distinguishing between indoor and outdoor. The indoor/outdoor status is determined by the target location's spatial attributes. WarpZone locations are treated as outdoor even if they have ceiling and floor.

# Note

Uses TargetLocation from ScriptContext to determine the position. Indoor checks for CleanObjectInDoor; outdoor checks for CleanObjectOutDoor.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; target location is used from contextCompareTypeType of comparison operation (Equal / NotEqual) |
| --- |
| BaseObjectNot directly used; target location is used from contextCompareTypeType of comparison operation (Equal / NotEqual) |
| CompareTypeType of comparison operation (Equal / NotEqual) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if a clean object exists at target locationSelfHasCleanObjectEqualCheck if no clean object exists at target locationSelfHasCleanObjectNotEqual |
| --- |
| Check if a clean object exists at target locationSelfHasCleanObjectEqualCheck if no clean object exists at target locationSelfHasCleanObjectNotEqual |
| Check if no clean object exists at target locationSelfHasCleanObjectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
