---
document_id: "eb93fb8413f9085fb48a90a14da6a18129ef792534ab8ec91214917460be47c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-objectcreatepurpose"
title: "Condition_ObjectCreatePurpose"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:53+00:00"
content_sha256: "8b0e498cfdab97272717d53b106a601d327dfbb200a2dfcae0a3efaecba7a3ed"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-objectcreatepurpose"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the creation purpose (EB1ObjectCreatePurpose) of the specified BaseObject. The creation purpose is compared against the value in S1 using CompareType.

# Parameters

| ParameterDescriptionBaseObjectThe game object whose creation purpose will be checkedCompareTypeSupported compare types: Equal, NotEqualS1EB1ObjectCreatePurpose value to compare against |
| --- |
| BaseObjectThe game object whose creation purpose will be checkedCompareTypeSupported compare types: Equal, NotEqualS1EB1ObjectCreatePurpose value to compare against |
| CompareTypeSupported compare types: Equal, NotEqualS1EB1ObjectCreatePurpose value to compare against |
| S1EB1ObjectCreatePurpose value to compare against |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1Check if object was created for craftingSelfObjectCreatePurposeEqualCraftedCheck if object was not created for purchaseTargetObjectCreatePurposeNotEqualBought |
| --- |
| Check if object was created for craftingSelfObjectCreatePurposeEqualCraftedCheck if object was not created for purchaseTargetObjectCreatePurposeNotEqualBought |
| Check if object was not created for purchaseTargetObjectCreatePurposeNotEqualBought |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
