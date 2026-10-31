---
document_id: "62cafee639e7b30e147bbaf87de55baf2141762d439ee070b2633930f61cee56"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasunlockedgameobject"
title: "Condition_HasUnlockedGameObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:16+00:00"
content_sha256: "d2c98a2db78bdd58d5a7cf4ccbdcb8b302d5e821c4f4f1d9516e073648517267"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasunlockedgameobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if a game object is owned and unlocked by the household of the Self character. If S1 is not specified, the Object ID is taken from the GameObject currently selected as Target.

# Parameters

| ParameterDescriptionBaseObjectTarget Only — the context object; Self's household is always used for the unlock check.CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Object ID to check (from Object.json). If omitted, the Target GameObject's ID is used. |
| --- |
| BaseObjectTarget Only — the context object; Self's household is always used for the unlock check.CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Object ID to check (from Object.json). If omitted, the Target GameObject's ID is used. |
| CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Object ID to check (from Object.json). If omitted, the Target GameObject's ID is used. |
| S1The Object ID to check (from Object.json). If omitted, the Target GameObject's ID is used. |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if grandfather clock is unlocked by Self's householdTargetHasUnlockedGameObjectEqualCheck if selected Target object is unlockedTargetHasUnlockedGameObjectEqualCheck if a skill reward object is not yet unlockedTargetHasUnlockedGameObjectNotEqual |
| --- |
| Check if grandfather clock is unlocked by Self's householdTargetHasUnlockedGameObjectEqualCheck if selected Target object is unlockedTargetHasUnlockedGameObjectEqualCheck if a skill reward object is not yet unlockedTargetHasUnlockedGameObjectNotEqual |
| Check if selected Target object is unlockedTargetHasUnlockedGameObjectEqualCheck if a skill reward object is not yet unlockedTargetHasUnlockedGameObjectNotEqual |
| Check if a skill reward object is not yet unlockedTargetHasUnlockedGameObjectNotEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
