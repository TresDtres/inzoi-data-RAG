---
document_id: "fca72c1368f72078aba8d4a12e8b200139a811027298cea9963d69cb560efd45"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission"
title: "Condition_HasDoorPermission"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:03+00:00"
content_sha256: "a537fb7d74b9873b26bd7a197d3f7ec17ba2445a8221abe73b5f67766ae05932"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasdoorpermission"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject has permission to access the Target door object. Returns false if Target is not a valid DoorObject.

# Parameters

| ParameterDescriptionBaseObjectThe character or entity to check permission forCompareTypeComparison operator: Equal (has permission), NotEqual (no permission) |
| --- |
| BaseObjectThe character or entity to check permission forCompareTypeComparison operator: Equal (has permission), NotEqual (no permission) |
| CompareTypeComparison operator: Equal (has permission), NotEqual (no permission) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if Self has permission to open the Target doorSelfHasDoorPermissionEqualCheck if Self does not have permission to open the doorSelfHasDoorPermissionNotEqual |
| --- |
| Check if Self has permission to open the Target doorSelfHasDoorPermissionEqualCheck if Self does not have permission to open the doorSelfHasDoorPermissionNotEqual |
| Check if Self does not have permission to open the doorSelfHasDoorPermissionNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
