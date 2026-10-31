---
document_id: "2e7128e93fbe74b5e0baa58d50fb1328032a0d3a92e465ebb97437cca5fab187"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling"
title: "Execute_AddHowling"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:07+00:00"
content_sha256: "ba27ff828643962b3e55a5ef471d02b22fe980aaf5288492a075dd81d113d938"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addhowling"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Activates a howling effect on the entity specified by BaseObject. The howling can optionally target a specific emitter type; if none is given, the default emitter is used.

# Note

If S2 contains an invalid HowlingEmitterType value, the script logs an error and returns without activating.

# Parameters

| ParameterDescriptionBaseObjectThe entity to activate the howling effect on (Self or Target).S1Howling DtId to activate.S2(Optional) HowlingEmitterType to target a specific emitter. Uses default if None.F1(Optional) Duration or intensity parameter for the howling effect. |
| --- |
| BaseObjectThe entity to activate the howling effect on (Self or Target).S1Howling DtId to activate.S2(Optional) HowlingEmitterType to target a specific emitter. Uses default if None.F1(Optional) Duration or intensity parameter for the howling effect. |
| S1Howling DtId to activate.S2(Optional) HowlingEmitterType to target a specific emitter. Uses default if None.F1(Optional) Duration or intensity parameter for the howling effect. |
| S2(Optional) HowlingEmitterType to target a specific emitter. Uses default if None.F1(Optional) Duration or intensity parameter for the howling effect. |
| F1(Optional) Duration or intensity parameter for the howling effect. |

# Examples

| DescriptionBaseObjectCommandS1S2F1Activate howling on Self with default emitterSelfAddHowlingHowling_Wolf5.0Activate howling on Target with default emitterTargetAddHowlingHowling_Wolf5.0Activate howling on Self with custom emitterSelfAddHowlingHowling_GhostEmitterType_A10.0Activate howling on Target with custom emitterTargetAddHowlingHowling_GhostEmitterType_A10.0 |
| --- |
| Activate howling on Self with default emitterSelfAddHowlingHowling_Wolf5.0Activate howling on Target with default emitterTargetAddHowlingHowling_Wolf5.0Activate howling on Self with custom emitterSelfAddHowlingHowling_GhostEmitterType_A10.0Activate howling on Target with custom emitterTargetAddHowlingHowling_GhostEmitterType_A10.0 |
| Activate howling on Target with default emitterTargetAddHowlingHowling_Wolf5.0Activate howling on Self with custom emitterSelfAddHowlingHowling_GhostEmitterType_A10.0Activate howling on Target with custom emitterTargetAddHowlingHowling_GhostEmitterType_A10.0 |
| Activate howling on Self with custom emitterSelfAddHowlingHowling_GhostEmitterType_A10.0Activate howling on Target with custom emitterTargetAddHowlingHowling_GhostEmitterType_A10.0 |
| Activate howling on Target with custom emitterTargetAddHowlingHowling_GhostEmitterType_A10.0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
