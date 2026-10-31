---
document_id: "85000f06e7a8111ca15cf4303d4fdc91ad78b9973eda340fe561c03c7c661934"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removebuff"
title: "Execute_RemoveBuff"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:44+00:00"
content_sha256: "edc61093a89c89f47ec1bac8809fcfc1cc8d098ccd78528d8346fda3d680833a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removebuff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes a buff identified by S1 from the specified character. When S2 is set to "IsCancel", the buff is removed as a cancellation; otherwise it is removed normally.

# Parameters

| ParameterDescriptionBaseObjectThe character from which the buff will be removed (Self or Target)S1Buff Data Table ID identifying the buff to removeS2If set to "IsCancel", the buff is removed as a cancellation |
| --- |
| BaseObjectThe character from which the buff will be removed (Self or Target)S1Buff Data Table ID identifying the buff to removeS2If set to "IsCancel", the buff is removed as a cancellation |
| S1Buff Data Table ID identifying the buff to removeS2If set to "IsCancel", the buff is removed as a cancellation |
| S2If set to "IsCancel", the buff is removed as a cancellation |

# Examples

| DescriptionBaseObjectCommandS1S2Remove an existing buff from selfSelfRemoveBuffPianoBuffCancel an existing buff from selfSelfRemoveBuffPianoBuffIsCancelRemove a buff from target characterTargetRemoveBuffSleepBuff |
| --- |
| Remove an existing buff from selfSelfRemoveBuffPianoBuffCancel an existing buff from selfSelfRemoveBuffPianoBuffIsCancelRemove a buff from target characterTargetRemoveBuffSleepBuff |
| Cancel an existing buff from selfSelfRemoveBuffPianoBuffIsCancelRemove a buff from target characterTargetRemoveBuffSleepBuff |
| Remove a buff from target characterTargetRemoveBuffSleepBuff |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
