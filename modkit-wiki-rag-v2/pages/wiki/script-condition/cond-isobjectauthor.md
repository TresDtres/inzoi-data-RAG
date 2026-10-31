---
document_id: "667967fdf4e041b2982439057fca5f3a10e1fb2fe1d07ac32ed799680f17b863"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-isobjectauthor"
title: "Condition_IsObjectAuthor"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:37+00:00"
content_sha256: "a387c42dab0020d37985d9e7aeddbbd5adabe191634148195da0cba40118408b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-isobjectauthor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether the Self character is the author (original crafter) of the Target object. Self's unique name is compared against the author name stored on the Target game object. BaseObject is not directly used; Self and Target are always resolved from the script context.

# Note

CompareType is not applied in the implementation; the function always compares Self's unique name to the object's author name and returns the boolean result directly.

# Parameters

| ParameterDescriptionBaseObjectNot directly used; Self is the character checked as author, Target is the craft objectCompareTypeEqual: Self is the author; NotEqual: Self is not the author |
| --- |
| BaseObjectNot directly used; Self is the character checked as author, Target is the craft objectCompareTypeEqual: Self is the author; NotEqual: Self is not the author |
| CompareTypeEqual: Self is the author; NotEqual: Self is not the author |

# Examples

| DescriptionBaseObjectCommandCompareTypeDid self craft the target object?SelfIsObjectAuthorEqualIs the target object NOT crafted by self?SelfIsObjectAuthorNotEqualConfirm self is the author of the crafted dishSelfIsObjectAuthorEqual |
| --- |
| Did self craft the target object?SelfIsObjectAuthorEqualIs the target object NOT crafted by self?SelfIsObjectAuthorNotEqualConfirm self is the author of the crafted dishSelfIsObjectAuthorEqual |
| Is the target object NOT crafted by self?SelfIsObjectAuthorNotEqualConfirm self is the author of the crafted dishSelfIsObjectAuthorEqual |
| Confirm self is the author of the crafted dishSelfIsObjectAuthorEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
