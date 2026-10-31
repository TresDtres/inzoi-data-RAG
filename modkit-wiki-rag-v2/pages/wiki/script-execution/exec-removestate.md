---
document_id: "c28e01090d128b860135b0220c8133da8d4d683248db11b7b22a71627dacae16"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removestate"
title: "Execute_RemoveState"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:47+00:00"
content_sha256: "4bb549a2206778b409820a82a52c95c8bc24ba43372546e19b99a99e3cab874f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removestate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes a specific state from the BaseObject's state group. Both S1 and S2 must be specified; if either is None, no action is taken.

# Parameters

| ParameterDescriptionBaseObjectTarget GameObject to remove the state fromS1State Group ID to remove fromS2State ID to remove |
| --- |
| BaseObjectTarget GameObject to remove the state fromS1State Group ID to remove fromS2State ID to remove |
| S1State Group ID to remove fromS2State ID to remove |
| S2State ID to remove |

# Examples

| DescriptionBaseObjectCommandS1S2Remove Broken state from TargetTargetRemoveStateNormalBrokenRemove fire state from TargetTargetRemoveStateFireOnFireRemove Wet state from SelfSelfRemoveStateWeatherWet |
| --- |
| Remove Broken state from TargetTargetRemoveStateNormalBrokenRemove fire state from TargetTargetRemoveStateFireOnFireRemove Wet state from SelfSelfRemoveStateWeatherWet |
| Remove fire state from TargetTargetRemoveStateFireOnFireRemove Wet state from SelfSelfRemoveStateWeatherWet |
| Remove Wet state from SelfSelfRemoveStateWeatherWet |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
