---
document_id: "d53276785dc7240a4c5fd569c653a66a56e2e638b4f44cd5230a3d605c3c0a03"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changestate"
title: "Execute_ChangeState"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:20+00:00"
content_sha256: "8dad086ff0418d7920617cbbc986f87b868076f7abb7b7628f3419390cd059b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the state of the BaseObject to the specified state. The instigator (entity that caused the state change) is set to the non-BaseObject entity.

# Note

If S1 or S2 is None, they default to "Normal".

# Parameters

| ParameterDescriptionBaseObjectTarget GameObject whose state is changedS1State Group ID (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| --- |
| BaseObjectTarget GameObject whose state is changedS1State Group ID (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| S1State Group ID (defaults to "Normal" if None)S2State ID to change to (defaults to "Normal" if None) |
| S2State ID to change to (defaults to "Normal" if None) |

# Examples

| DescriptionBaseObjectCommandS1S2Set Target to the Broken stateTargetChangeStateNormalBrokenSet Target on fireTargetChangeStateFireOnFireReset Target to normal stateTargetChangeStateNormalNormalTurn on the lightTargetChangeStateLightOn |
| --- |
| Set Target to the Broken stateTargetChangeStateNormalBrokenSet Target on fireTargetChangeStateFireOnFireReset Target to normal stateTargetChangeStateNormalNormalTurn on the lightTargetChangeStateLightOn |
| Set Target on fireTargetChangeStateFireOnFireReset Target to normal stateTargetChangeStateNormalNormalTurn on the lightTargetChangeStateLightOn |
| Reset Target to normal stateTargetChangeStateNormalNormalTurn on the lightTargetChangeStateLightOn |
| Turn on the lightTargetChangeStateLightOn |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
