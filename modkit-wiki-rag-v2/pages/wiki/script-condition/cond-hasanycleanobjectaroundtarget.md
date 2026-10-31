---
document_id: "f3702a71ab52ed1e2b6f88521daa16ead7988b56a6d3b7b5e87b260db38bbd04"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget"
title: "Condition_HasAnyCleanObjectAroundTarget"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:01+00:00"
content_sha256: "a976aa62708ed6a5a36998dc6b269f6d80482dfff437ad70e04fb0d259c84f42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasanycleanobjectaroundtarget"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any clean object (indoor or outdoor) exists at the site where BaseObject is located. Unlike HasCleanObject, this checks both indoor and outdoor clean objects regardless of the character's exact position.

# Note

Returns true if the site has CleanObjectInDoor OR CleanObjectOutDoor. Uses the character's current location to find the site.

# Parameters

| ParameterDescriptionBaseObjectCharacter whose location is used to find the siteCompareTypeType of comparison operation (Equal / NotEqual) |
| --- |
| BaseObjectCharacter whose location is used to find the siteCompareTypeType of comparison operation (Equal / NotEqual) |
| CompareTypeType of comparison operation (Equal / NotEqual) |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if any clean object exists at Self's siteSelfHasAnyCleanObjectAroundTargetEqualCheck if no clean object exists at Self's siteSelfHasAnyCleanObjectAroundTargetNotEqual |
| --- |
| Check if any clean object exists at Self's siteSelfHasAnyCleanObjectAroundTargetEqualCheck if no clean object exists at Self's siteSelfHasAnyCleanObjectAroundTargetNotEqual |
| Check if no clean object exists at Self's siteSelfHasAnyCleanObjectAroundTargetNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
