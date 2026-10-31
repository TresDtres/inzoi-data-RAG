---
document_id: "005b7abea98fdbee06a105a560de7190bb8d3a7c56df682f9f32718fcce209e6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changestateinrange"
title: "Execute_ChangeStateInRange"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:20+00:00"
content_sha256: "c2b0a1a980d4a1068357425077a735b80c50a097f247c444e62bb57f016d44f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changestateinrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the state of all GameObjects within a specified 2D distance from the BaseObject's location.

# Parameters

| ParameterDescriptionBaseObjectThe entity used as the origin point for the range checkS1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None)F1Maximum 2D distance (radius) from the BaseObject; all objects within range are affected |
| --- |
| BaseObjectThe entity used as the origin point for the range checkS1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None)F1Maximum 2D distance (radius) from the BaseObject; all objects within range are affected |
| S1State Group ID to change to (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None)F1Maximum 2D distance (radius) from the BaseObject; all objects within range are affected |
| S2State ID to change to (defaults to "Normal" if None)F1Maximum 2D distance (radius) from the BaseObject; all objects within range are affected |
| F1Maximum 2D distance (radius) from the BaseObject; all objects within range are affected |

# Examples

| DescriptionBaseObjectCommandS1S2F1Change all objects within 500 of Target to Fire stateTargetChangeStateInRangeNoneFire500Reset all objects within 500 of Self from Fire to NormalSelfChangeStateInRangeFireNone500Change all objects within 200 of Target to Wet stateTargetChangeStateInRangeWeatherWet200 |
| --- |
| Change all objects within 500 of Target to Fire stateTargetChangeStateInRangeNoneFire500Reset all objects within 500 of Self from Fire to NormalSelfChangeStateInRangeFireNone500Change all objects within 200 of Target to Wet stateTargetChangeStateInRangeWeatherWet200 |
| Reset all objects within 500 of Self from Fire to NormalSelfChangeStateInRangeFireNone500Change all objects within 200 of Target to Wet stateTargetChangeStateInRangeWeatherWet200 |
| Change all objects within 200 of Target to Wet stateTargetChangeStateInRangeWeatherWet200 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
