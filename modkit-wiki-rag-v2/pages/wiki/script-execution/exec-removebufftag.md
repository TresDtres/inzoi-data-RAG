---
document_id: "8ffdfea7b3a083896811623355ac0c9e4124fddef76a8ec2aee0b21a6476ca5d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removebufftag"
title: "Execute_RemoveBuffTag"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:44+00:00"
content_sha256: "30ada4e1ecaa72aaf9eeb43c762fd3d525a3b5be6596f21ee6ccee45722aa94a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removebufftag"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes all buffs that carry the specified BuffTag from the character. When S2 is set to "IsCancel", all matched buffs are removed as cancellations; otherwise they are removed normally.

# Parameters

| ParameterDescriptionBaseObjectThe character from which tagged buffs will be removed (Self or Target)S1BuffTag name — all buffs carrying this tag will be removedS2If set to "IsCancel", removal is treated as a cancellation |
| --- |
| BaseObjectThe character from which tagged buffs will be removed (Self or Target)S1BuffTag name — all buffs carrying this tag will be removedS2If set to "IsCancel", removal is treated as a cancellation |
| S1BuffTag name — all buffs carrying this tag will be removedS2If set to "IsCancel", removal is treated as a cancellation |
| S2If set to "IsCancel", removal is treated as a cancellation |

# Examples

| DescriptionBaseObjectCommandS1S2Remove all prison-tagged buffs from selfSelfRemoveBuffTagBuffTag_PrisonCancel all prison-tagged buffs on selfSelfRemoveBuffTagBuffTag_PrisonIsCancelRemove all sleep-tagged buffs from targetTargetRemoveBuffTagBuffTag_SleepCancel all work-tagged buffs on selfSelfRemoveBuffTagBuffTag_WorkIsCancel |
| --- |
| Remove all prison-tagged buffs from selfSelfRemoveBuffTagBuffTag_PrisonCancel all prison-tagged buffs on selfSelfRemoveBuffTagBuffTag_PrisonIsCancelRemove all sleep-tagged buffs from targetTargetRemoveBuffTagBuffTag_SleepCancel all work-tagged buffs on selfSelfRemoveBuffTagBuffTag_WorkIsCancel |
| Cancel all prison-tagged buffs on selfSelfRemoveBuffTagBuffTag_PrisonIsCancelRemove all sleep-tagged buffs from targetTargetRemoveBuffTagBuffTag_SleepCancel all work-tagged buffs on selfSelfRemoveBuffTagBuffTag_WorkIsCancel |
| Remove all sleep-tagged buffs from targetTargetRemoveBuffTagBuffTag_SleepCancel all work-tagged buffs on selfSelfRemoveBuffTagBuffTag_WorkIsCancel |
| Cancel all work-tagged buffs on selfSelfRemoveBuffTagBuffTag_WorkIsCancel |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
