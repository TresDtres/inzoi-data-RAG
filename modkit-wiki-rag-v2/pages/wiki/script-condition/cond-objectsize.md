---
document_id: "000e3914176416ecc9a8f05f79c2a13a4ad6aaacd70d2c56e0c3eae265a27999"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-objectsize"
title: "Condition_ObjectSize"
section: "wiki/script-condition"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:50:54+00:00"
content_sha256: "d2bca0e0f3b572f6c728c0db4c11898f1bb5c89073e7d8443bfd7a856f9cf120"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-condition/cond-objectsize"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Compares the size of the BaseObject against a threshold using either SumXYZ (X+Y+Z) or Volume (X*Y*Z) calculation mode.

# Parameters

| ParameterDescriptionBaseObjectThe game object to evaluate (Self or Target)CompareTypeComparison operator: Less, Greater, LessOrEqual, GreaterOrEqual, Equal, NotEqual, InRange, OutRangeS1Size calculation mode: "SumXYZ" (X+Y+Z) or "Volume" (X*Y*Z)F1Threshold value (or range minimum for InRange/OutRange)F2Range maximum used only for InRange/OutRange comparisons |
| --- |
| BaseObjectThe game object to evaluate (Self or Target)CompareTypeComparison operator: Less, Greater, LessOrEqual, GreaterOrEqual, Equal, NotEqual, InRange, OutRangeS1Size calculation mode: "SumXYZ" (X+Y+Z) or "Volume" (X*Y*Z)F1Threshold value (or range minimum for InRange/OutRange)F2Range maximum used only for InRange/OutRange comparisons |
| CompareTypeComparison operator: Less, Greater, LessOrEqual, GreaterOrEqual, Equal, NotEqual, InRange, OutRangeS1Size calculation mode: "SumXYZ" (X+Y+Z) or "Volume" (X*Y*Z)F1Threshold value (or range minimum for InRange/OutRange)F2Range maximum used only for InRange/OutRange comparisons |
| S1Size calculation mode: "SumXYZ" (X+Y+Z) or "Volume" (X*Y*Z)F1Threshold value (or range minimum for InRange/OutRange)F2Range maximum used only for InRange/OutRange comparisons |
| F1Threshold value (or range minimum for InRange/OutRange)F2Range maximum used only for InRange/OutRange comparisons |
| F2Range maximum used only for InRange/OutRange comparisons |

# Examples

| DescriptionBaseObjectCommandCompareTypeS1F1F2Check if Target's sum of dimensions is greater than 300TargetObjectSizeGreaterSumXYZ300Check if Target's volume is less than 100000TargetObjectSizeLessVolume100000Check if Self's sum of dimensions is between 200 and 500SelfObjectSizeInRangeSumXYZ200500 |
| --- |
| Check if Target's sum of dimensions is greater than 300TargetObjectSizeGreaterSumXYZ300Check if Target's volume is less than 100000TargetObjectSizeLessVolume100000Check if Self's sum of dimensions is between 200 and 500SelfObjectSizeInRangeSumXYZ200500 |
| Check if Target's volume is less than 100000TargetObjectSizeLessVolume100000Check if Self's sum of dimensions is between 200 and 500SelfObjectSizeInRangeSumXYZ200500 |
| Check if Self's sum of dimensions is between 200 and 500SelfObjectSizeInRangeSumXYZ200500 |

[←Back to Command FinderSearch and filter all 491 Script Condition documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/commands)See alsoObject & Entity[CheckEntityCountInAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-checkentitycountinaura)[HasAnyCleanObjectAroundTarget](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasanycleanobjectaroundtarget)[HasCleanObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hascleanobject)[HasDoorPermission](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasdoorpermission)[HasEntityTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasentitytag)[HasLinkedObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-haslinkedobject)[HasObjectGeneralEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectgeneraleffect)[HasObjectInTargetObjectSlot](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjectintargetobjectslot)[HasObjectTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttag)[HasObjectTagWithAvailableSlotRatio](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasobjecttagwithavailableslotratio)[HasRemainingFood](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasremainingfood)[HasSlotForHeldObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-condition/cond-hasslotforheldobject)
