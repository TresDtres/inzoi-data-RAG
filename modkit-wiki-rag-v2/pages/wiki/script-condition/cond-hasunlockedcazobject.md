---
document_id: "ff099840b92abf5504120f1ebbfecb807f4b8e794837e7b5fcad3e4df20327e3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasunlockedcazobject"
title: "Condition_HasUnlockedCAZObject"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:16+00:00"
content_sha256: "844df20cedc1a922ba81b8b8d889af0e0e031386df15eafe42157da7f1bed297"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-hasunlockedcazobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Checks if the BaseObject character has unlocked a specific CAZ (customization) object such as clothing, hair, or accessories.

# Note

Available table names: AppearanceHairMesh, AppearanceSkinType, AppearanceMole, AppearanceFreckles, AppearanceScar, AppearanceTattoo, AppearanceIrisPreset, AppearanceEyebrow, AppearanceEyelash, AppearanceMustache, AppearanceBeard, AppearanceMakeup, AppearanceBodyShape, GarmentTopMesh, GarmentBottomMesh, GarmentFullMesh, GarmentShoesMesh, GarmentJacketMesh, GarmentHatMesh, GarmentSocksMesh, GarmentInnerTopMesh, GarmentInnerUnderMesh, GarmentStockingsVariants, SkinnedAccessoryMesh, AttachedAccessoryMesh. Omit the _E0x suffix for DLC table names.

# Parameters

| ParameterDescriptionBaseObjectThe character whose unlocked CAZ objects are checked (Self or Target).CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Table ID of the CAZ object to check.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh). |
| --- |
| BaseObjectThe character whose unlocked CAZ objects are checked (Self or Target).CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Table ID of the CAZ object to check.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh). |
| CompareTypeSupported compare types: Equal (is unlocked), NotEqual (is not unlocked).S1The Table ID of the CAZ object to check.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh). |
| S1The Table ID of the CAZ object to check.S2The table name of the CAZ object (e.g., AttachedAccessoryMesh). |
| S2The table name of the CAZ object (e.g., AttachedAccessoryMesh). |

# Examples

| DescriptionBaseObjectCommandCompareTypeCheck if earring W_Earring009 is unlocked for SelfSelfHasUnlockedCAZObjectEqualCheck if a hair mesh is not unlocked for SelfSelfHasUnlockedCAZObjectNotEqualCheck if a top garment is unlocked for TargetTargetHasUnlockedCAZObjectEqual |
| --- |
| Check if earring W_Earring009 is unlocked for SelfSelfHasUnlockedCAZObjectEqualCheck if a hair mesh is not unlocked for SelfSelfHasUnlockedCAZObjectNotEqualCheck if a top garment is unlocked for TargetTargetHasUnlockedCAZObjectEqual |
| Check if a hair mesh is not unlocked for SelfSelfHasUnlockedCAZObjectNotEqualCheck if a top garment is unlocked for TargetTargetHasUnlockedCAZObjectEqual |
| Check if a top garment is unlocked for TargetTargetHasUnlockedCAZObjectEqual |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
