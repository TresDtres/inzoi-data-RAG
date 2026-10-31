---
document_id: "e91425fc9771465a5d7b978d870f17e3e03e9ae7256987879bdc312a25864473"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isholdingobjecttag"
title: "Condition_IsHoldingObjectTag"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:31+00:00"
content_sha256: "fbf1978701daff2abe6149a0298e0cf91f53deed949479e8771e947895599fbc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isholdingobjecttag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the BaseObject character is holding an object with the specified object tag in hand. Unlike HandCarriedObjectTag, an empty hand is treated as a definite "not holding" result, so CompareType NotEqual returns true on an empty hand (usable as a "not holding" visibility/enable gate). By default (UseHand=Default), checks both hands (right first, then left).

# Parameters

| ParameterDescriptionBaseObjectThe character whose hand-held object will be checkedCompareTypeEqual (holding the tag) / NotEqual (not holding it; an empty hand counts as true)UseHandLeft / Right / Default (both hands)S1Object tag name to check (references Object.ObjectTags, e.g., Umbrella) |
| --- |
| BaseObjectThe character whose hand-held object will be checkedCompareTypeEqual (holding the tag) / NotEqual (not holding it; an empty hand counts as true)UseHandLeft / Right / Default (both hands)S1Object tag name to check (references Object.ObjectTags, e.g., Umbrella) |
| CompareTypeEqual (holding the tag) / NotEqual (not holding it; an empty hand counts as true)UseHandLeft / Right / Default (both hands)S1Object tag name to check (references Object.ObjectTags, e.g., Umbrella) |
| UseHandLeft / Right / Default (both hands)S1Object tag name to check (references Object.ObjectTags, e.g., Umbrella) |
| S1Object tag name to check (references Object.ObjectTags, e.g., Umbrella) |

# Examples

| DescriptionBaseObjectCommandCompareTypeUseHandS1Check if either hand holds an Umbrella-tagged objectSelfIsHoldingObjectTagEqualDefaultUmbrellaCheck if not holding any Umbrella (empty hands => true)SelfIsHoldingObjectTagNotEqualDefaultUmbrella |
| --- |
| Check if either hand holds an Umbrella-tagged objectSelfIsHoldingObjectTagEqualDefaultUmbrellaCheck if not holding any Umbrella (empty hands => true)SelfIsHoldingObjectTagNotEqualDefaultUmbrella |
| Check if not holding any Umbrella (empty hands => true)SelfIsHoldingObjectTagNotEqualDefaultUmbrella |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
