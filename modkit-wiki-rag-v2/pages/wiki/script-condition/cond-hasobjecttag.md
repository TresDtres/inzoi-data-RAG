---
document_id: "cb2ae469cad7f37f83edc7547dab64e9bc9828d1d76587b3e31dcb8a93aae416"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag"
title: "Condition_HasObjectTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:09+00:00"
content_sha256: "0643eda1fba1b4c01bc68fc1d92bd7ae96fc6ea08f8b940a2e2a9a2adc5c15b9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether an object has the specified object tag based on the given condition. By default, this command checks the object tag on the BaseObject. If S2 is set to CheckParent, the condition checks the object tag on the parent of the BaseObject.

# Parameters

| ParameterDescriptionBaseObjectThe object used as the base for the object tag checkCompareTypeType of comparison operation (Equal / NotEqual)S1Object tag to checkS2Optional check mode. If set to CheckParent, checks the parentobject of the BaseObject |
| --- |
| BaseObjectThe object used as the base for the object tag checkCompareTypeType of comparison operation (Equal / NotEqual)S1Object tag to checkS2Optional check mode. If set to CheckParent, checks the parentobject of the BaseObject |
| CompareTypeType of comparison operation (Equal / NotEqual)S1Object tag to checkS2Optional check mode. If set to CheckParent, checks the parentobject of the BaseObject |
| S1Object tag to checkS2Optional check mode. If set to CheckParent, checks the parentobject of the BaseObject |
| S2Optional check mode. If set to CheckParent, checks the parentobject of the BaseObject |
| object of the BaseObject |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Checks whether the base object is a computerSelfHasObjectTagEqualCreate_ComputerChecks whether the parent of the self object is a FleaMarketStallSelfHasObjectTagEqualFleaMarketStallCheckParent |
| --- |
| Checks whether the base object is a computerSelfHasObjectTagEqualCreate_ComputerChecks whether the parent of the self object is a FleaMarketStallSelfHasObjectTagEqualFleaMarketStallCheckParent |
| Checks whether the parent of the self object is a FleaMarketStallSelfHasObjectTagEqualFleaMarketStallCheckParent |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
