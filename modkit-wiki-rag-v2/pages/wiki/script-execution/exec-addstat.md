---
document_id: "1125c4e06b354a894057473c26b45161af4961c71d8b87aa160c25c000ccdf32"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat"
title: "Execute_AddStat"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:11+00:00"
content_sha256: "d2d85eb105d3af0556460465115353df5f544e390c0ebb11ceb26a92aab2c1f6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a value to the specified stat of an entity, applying the object quality performance multiplier and any ModifierComponent modifiers.

# Parameters

| ParameterDescriptionBaseObjectThe entity whose stat is modifiedS1Stat ID to modify (e.g., Hungry, Energy, Cleanliness)S2Optional: "{Except}" skips execution entirely; or "min,max" restricts the change to when the current value is within that rangeF1Amount to add (negative values are allowed) |
| --- |
| BaseObjectThe entity whose stat is modifiedS1Stat ID to modify (e.g., Hungry, Energy, Cleanliness)S2Optional: "{Except}" skips execution entirely; or "min,max" restricts the change to when the current value is within that rangeF1Amount to add (negative values are allowed) |
| S1Stat ID to modify (e.g., Hungry, Energy, Cleanliness)S2Optional: "{Except}" skips execution entirely; or "min,max" restricts the change to when the current value is within that rangeF1Amount to add (negative values are allowed) |
| S2Optional: "{Except}" skips execution entirely; or "min,max" restricts the change to when the current value is within that rangeF1Amount to add (negative values are allowed) |
| F1Amount to add (negative values are allowed) |

# Examples

| DescriptionBaseObjectCommandS1S2F1Add 10 to Self's Hungry statSelfAddStatHungry10Subtract 5 from Target's Energy statTargetAddStatEnergy-5Add 20 to Self's Cleanliness stat only if current value is 0 to 80SelfAddStatCleanliness0,8020Skip execution (no-op)SelfAddStatHungry{Except}10 |
| --- |
| Add 10 to Self's Hungry statSelfAddStatHungry10Subtract 5 from Target's Energy statTargetAddStatEnergy-5Add 20 to Self's Cleanliness stat only if current value is 0 to 80SelfAddStatCleanliness0,8020Skip execution (no-op)SelfAddStatHungry{Except}10 |
| Subtract 5 from Target's Energy statTargetAddStatEnergy-5Add 20 to Self's Cleanliness stat only if current value is 0 to 80SelfAddStatCleanliness0,8020Skip execution (no-op)SelfAddStatHungry{Except}10 |
| Add 20 to Self's Cleanliness stat only if current value is 0 to 80SelfAddStatCleanliness0,8020Skip execution (no-op)SelfAddStatHungry{Except}10 |
| Skip execution (no-op)SelfAddStatHungry{Except}10 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
