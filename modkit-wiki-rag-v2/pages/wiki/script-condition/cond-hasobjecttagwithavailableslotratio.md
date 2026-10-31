---
document_id: "327e00d79eb3f1820144b6ce0fa1fa5e2c4a17f829757b9ee1bcca17c3536a71"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio"
title: "Condition_HasObjectTagWithAvailableSlotRatio"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:10+00:00"
content_sha256: "3ce00e9c57ac25095ea6de4058a51b88f725d7349d16742a0e278eb3ef8dee72"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasobjecttagwithavailableslotratio"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks whether any object with the specified ObjectTag in the BaseObject's current site has an available slot ratio greater than or equal to the specified minimum threshold. If no objects with the tag exist, the result depends on CompareType (NotEqual returns true).

# Parameters

| ParameterDescriptionBaseObjectThe actor whose current site is searched for objects with the given tag.CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTag used to find relevant objects in the site.S2ObjectSlotId to check availability on each matching object.F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |
| --- |
| BaseObjectThe actor whose current site is searched for objects with the given tag.CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTag used to find relevant objects in the site.S2ObjectSlotId to check availability on each matching object.F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |
| CompareTypeType of comparison operation (Equal or NotEqual).S1ObjectTag used to find relevant objects in the site.S2ObjectSlotId to check availability on each matching object.F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |
| S1ObjectTag used to find relevant objects in the site.S2ObjectSlotId to check availability on each matching object.F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |
| S2ObjectSlotId to check availability on each matching object.F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |
| F1Minimum available slot ratio threshold (0.0 to 1.0; e.g., 0.5 means at least 50% available). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1Check if any "Bed" object in Self's site has at least 50% of its slots availableSelfHasObjectTagWithAvailableSlotRatioEqualBedSleepSlot0.5Check if no "Seat" object in Self's site has any slots at least 100% availableSelfHasObjectTagWithAvailableSlotRatioNotEqualSeatSitSlot1.0Check if any "Shower" in Target's site has at least 1 slot available (>=0.0 ratio)TargetHasObjectTagWithAvailableSlotRatioEqualShowerUseSlot0.0 |
| --- |
| Check if any "Bed" object in Self's site has at least 50% of its slots availableSelfHasObjectTagWithAvailableSlotRatioEqualBedSleepSlot0.5Check if no "Seat" object in Self's site has any slots at least 100% availableSelfHasObjectTagWithAvailableSlotRatioNotEqualSeatSitSlot1.0Check if any "Shower" in Target's site has at least 1 slot available (>=0.0 ratio)TargetHasObjectTagWithAvailableSlotRatioEqualShowerUseSlot0.0 |
| Check if no "Seat" object in Self's site has any slots at least 100% availableSelfHasObjectTagWithAvailableSlotRatioNotEqualSeatSitSlot1.0Check if any "Shower" in Target's site has at least 1 slot available (>=0.0 ratio)TargetHasObjectTagWithAvailableSlotRatioEqualShowerUseSlot0.0 |
| Check if any "Shower" in Target's site has at least 1 slot available (>=0.0 ratio)TargetHasObjectTagWithAvailableSlotRatioEqualShowerUseSlot0.0 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
