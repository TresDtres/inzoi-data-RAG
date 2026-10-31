---
document_id: "042699edd5922c02dd2bf523946116e457606a8afb7d023acc476546fcd5b56a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat"
title: "Execute_AddScaledStat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:10+00:00"
content_sha256: "88e390ef3e5863d741eb36e1d1d5327994f7bff0fb0ca2ae8e92710f525630e6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addscaledstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a value to the specified stat scaled by the TimeManager's relative time factor.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose stat is modifiedS1Stat ID to modify (e.g., Hungry, Energy, Bladder)F1Base amount to add before scaling by the relative time factor |
| --- |
| BaseObjectThe entity whose stat is modifiedS1Stat ID to modify (e.g., Hungry, Energy, Bladder)F1Base amount to add before scaling by the relative time factor |
| S1Stat ID to modify (e.g., Hungry, Energy, Bladder)F1Base amount to add before scaling by the relative time factor |
| F1Base amount to add before scaling by the relative time factor |

# Examples

| DescriptionBaseObjectCommandS1F1Add time-scaled 1.0 to Self's Hungry statSelfAddScaledStatHungry1.0Subtract time-scaled 0.5 from Target's Energy statTargetAddScaledStatEnergy-0.5Add time-scaled amount to Self's Bladder statSelfAddScaledStatBladder2.0 |
| --- |
| Add time-scaled 1.0 to Self's Hungry statSelfAddScaledStatHungry1.0Subtract time-scaled 0.5 from Target's Energy statTargetAddScaledStatEnergy-0.5Add time-scaled amount to Self's Bladder statSelfAddScaledStatBladder2.0 |
| Subtract time-scaled 0.5 from Target's Energy statTargetAddScaledStatEnergy-0.5Add time-scaled amount to Self's Bladder statSelfAddScaledStatBladder2.0 |
| Add time-scaled amount to Self's Bladder statSelfAddScaledStatBladder2.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
