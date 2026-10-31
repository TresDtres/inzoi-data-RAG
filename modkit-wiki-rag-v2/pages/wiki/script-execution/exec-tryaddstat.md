---
document_id: "0b17187fc10241dc031f6c60e2000e36ad805ad3641c0f7767b6ea6d14bb3087"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-tryaddstat"
title: "Execute_TryAddStat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:03+00:00"
content_sha256: "1cbc6282ba9bc600eaed514b1de06795bc9817f4011afddb64d7b97e0788e6c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-tryaddstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a value to the specified stat only if the entity already has that stat; does nothing if the stat does not exist.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose stat is conditionally modifiedS1Stat ID to modify (only applied if the entity already has this stat)F1Amount to add (negative values are allowed) |
| --- |
| BaseObjectThe entity whose stat is conditionally modifiedS1Stat ID to modify (only applied if the entity already has this stat)F1Amount to add (negative values are allowed) |
| S1Stat ID to modify (only applied if the entity already has this stat)F1Amount to add (negative values are allowed) |
| F1Amount to add (negative values are allowed) |

# Examples

| DescriptionBaseObjectCommandS1F1Add 5 to Self's Hungry stat if it existsSelfTryAddStatHungry5Subtract 10 from Target's Bladder stat if it existsTargetTryAddStatBladder-10Add 20 to Self's Energy stat only if the entity has itSelfTryAddStatEnergy20 |
| --- |
| Add 5 to Self's Hungry stat if it existsSelfTryAddStatHungry5Subtract 10 from Target's Bladder stat if it existsTargetTryAddStatBladder-10Add 20 to Self's Energy stat only if the entity has itSelfTryAddStatEnergy20 |
| Subtract 10 from Target's Bladder stat if it existsTargetTryAddStatBladder-10Add 20 to Self's Energy stat only if the entity has itSelfTryAddStatEnergy20 |
| Add 20 to Self's Energy stat only if the entity has itSelfTryAddStatEnergy20 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
