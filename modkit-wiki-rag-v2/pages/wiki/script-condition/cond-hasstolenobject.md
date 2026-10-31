---
document_id: "a973db65c275cdbf2c71f84c843e9bf15b6af38a1b84a8019171654b96c0d03d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject"
title: "Condition_HasStolenObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:15+00:00"
content_sha256: "f4afe7a1ce977aa333c59b3d1d216855e03ff3e2fe3d27facabeef0d7b3b5309"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasstolenobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the specified character possesses any stolen objects. The search scope can be controlled via S1: if set to Inventory, only stolen objects in the inventory are checked; if set to Grab, only currently grabbed objects are checked; otherwise both are checked. S2 controls whether system-owned objects are included in the search.

# Parameters

| ParameterDescriptionBaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| --- |
| BaseObjectThe character to check (Self or Target).CompareTypeSupported compare types: Equal, NotEqual.S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| CompareTypeSupported compare types: Equal, NotEqual.S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| S1Scope filter: Inventory (inventory only), Grab (grabbed only), or empty (both).S2Set to IncludeSystem to include system-owned objects in the search. |
| S2Set to IncludeSystem to include system-owned objects in the search. |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2Check if Self has any stolen objectSelfHasStolenObjectEqualCheck if Self has stolen objects in inventorySelfHasStolenObjectEqualInventoryCheck if Target is holding a stolen objectTargetHasStolenObjectEqualGrabCheck including system objectsSelfHasStolenObjectEqualIncludeSystem |
| --- |
| Check if Self has any stolen objectSelfHasStolenObjectEqualCheck if Self has stolen objects in inventorySelfHasStolenObjectEqualInventoryCheck if Target is holding a stolen objectTargetHasStolenObjectEqualGrabCheck including system objectsSelfHasStolenObjectEqualIncludeSystem |
| Check if Self has stolen objects in inventorySelfHasStolenObjectEqualInventoryCheck if Target is holding a stolen objectTargetHasStolenObjectEqualGrabCheck including system objectsSelfHasStolenObjectEqualIncludeSystem |
| Check if Target is holding a stolen objectTargetHasStolenObjectEqualGrabCheck including system objectsSelfHasStolenObjectEqualIncludeSystem |
| Check including system objectsSelfHasStolenObjectEqualIncludeSystem |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
