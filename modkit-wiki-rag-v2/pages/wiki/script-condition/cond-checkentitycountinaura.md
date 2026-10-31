---
document_id: "96dcedee9238a978df72dd739806b23df9604eac96de50ebea50f8cfe85c0132"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura"
title: "Condition_CheckEntityCountInAura"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:52+00:00"
content_sha256: "d15a979de87ed946c54556e84064d403f1e88862e77f97889238babcc5364a42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-checkentitycountinaura"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks the number of entities within the aura range of the specified BaseObject. Retrieves the aura identified by S1 and counts entities of the type specified by S2 within that aura's range. The resulting count is compared against F1 (and optionally F2) using CompareType.

# Note

S2 accepts EB2EntityType values: Character (Zoi), GameObject, etc. F2 is only required when CompareType is InRange or OutRange.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose aura is evaluated (Self or Target).CompareTypeComparison operator (Equal, Greater, InRange, OutRange, etc.).S1Aura ID owned by the BaseObject (e.g., ProximityAura).S2Entity type to count within the aura (e.g., Character, GameObject).F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| --- |
| BaseObjectThe entity whose aura is evaluated (Self or Target).CompareTypeComparison operator (Equal, Greater, InRange, OutRange, etc.).S1Aura ID owned by the BaseObject (e.g., ProximityAura).S2Entity type to count within the aura (e.g., Character, GameObject).F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| CompareTypeComparison operator (Equal, Greater, InRange, OutRange, etc.).S1Aura ID owned by the BaseObject (e.g., ProximityAura).S2Entity type to count within the aura (e.g., Character, GameObject).F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| S1Aura ID owned by the BaseObject (e.g., ProximityAura).S2Entity type to count within the aura (e.g., Character, GameObject).F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| S2Entity type to count within the aura (e.g., Character, GameObject).F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| F1Count threshold for comparison.F2Upper bound for range comparisons (InRange or OutRange only). |
| F2Upper bound for range comparisons (InRange or OutRange only). |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1S2F1F2Check if any character exists in self's auraSelfCheckEntityCountInAuraGreaterAuraIdCharacter0Check if any GameObject exists in self's auraSelfCheckEntityCountInAuraGreaterAuraIdGameObject0Check if no GameObject exists in self's auraSelfCheckEntityCountInAuraEqualAuraIdGameObject0Check if 20 to 30 characters exist in self's auraSelfCheckEntityCountInAuraInRangeAuraIdCharacter2030 |
| --- |
| Check if any character exists in self's auraSelfCheckEntityCountInAuraGreaterAuraIdCharacter0Check if any GameObject exists in self's auraSelfCheckEntityCountInAuraGreaterAuraIdGameObject0Check if no GameObject exists in self's auraSelfCheckEntityCountInAuraEqualAuraIdGameObject0Check if 20 to 30 characters exist in self's auraSelfCheckEntityCountInAuraInRangeAuraIdCharacter2030 |
| Check if any GameObject exists in self's auraSelfCheckEntityCountInAuraGreaterAuraIdGameObject0Check if no GameObject exists in self's auraSelfCheckEntityCountInAuraEqualAuraIdGameObject0Check if 20 to 30 characters exist in self's auraSelfCheckEntityCountInAuraInRangeAuraIdCharacter2030 |
| Check if no GameObject exists in self's auraSelfCheckEntityCountInAuraEqualAuraIdGameObject0Check if 20 to 30 characters exist in self's auraSelfCheckEntityCountInAuraInRangeAuraIdCharacter2030 |
| Check if 20 to 30 characters exist in self's auraSelfCheckEntityCountInAuraInRangeAuraIdCharacter2030 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)[HasStolenObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasstolenobject)
