---
document_id: "f58e1993f6ab87745404d3c6ff77b5038867e9cfcd5f4599fbf4f10ccd43fdc3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-iscontextobject"
title: "Condition_IsContextObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:25+00:00"
content_sha256: "01152b643da844561c111276e62d7b478d7a1b4d1c482d24dda24e837f9c47c5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-iscontextobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject is the context object of the currently playing coop for the NonBaseObject character. S1 specifies the coop type. Currently only "HandOver" is supported, which checks if the BaseObject's entity ID matches the HandOverObjectEntityId of the active FB2CoopScheduler_HandOver on the NonBaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe object entity to check; NonBaseObject is used as the character with the coopCompareTypeEqual: is the context object; NotEqual: is not the context objectS1Coop type to check (e.g., HandOver) |
| --- |
| BaseObjectThe object entity to check; NonBaseObject is used as the character with the coopCompareTypeEqual: is the context object; NotEqual: is not the context objectS1Coop type to check (e.g., HandOver) |
| CompareTypeEqual: is the context object; NotEqual: is not the context objectS1Coop type to check (e.g., HandOver) |
| S1Coop type to check (e.g., HandOver) |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Is self the hand-over context object?SelfIsContextObjectEqualHandOverIs target NOT the hand-over context object?TargetIsContextObjectNotEqualHandOver |
| --- |
| Is self the hand-over context object?SelfIsContextObjectEqualHandOverIs target NOT the hand-over context object?TargetIsContextObjectNotEqualHandOver |
| Is target NOT the hand-over context object?TargetIsContextObjectNotEqualHandOver |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
