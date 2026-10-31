---
document_id: "a4e92aa13db27d0db639f3bd9c5a98e5bdd84c5e5660f092d2fc0ebf1770eb89"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-emitaura"
title: "Execute_EmitAura"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:26+00:00"
content_sha256: "a72cf8244ae7dd6b99b6818472e3f13a7a8ba4edc6441b2ea2f6fc414f2c7fd6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-emitaura"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Activates (emits) the specified aura on the entity identified by BaseObject. The aura is identified by its table ID provided in S1.

# Parameters

| ParameterDescriptionBaseObjectThe entity on which to activate the aura (Self or Target).S1Aura table ID to activate (e.g., ProximityAura, WarmthZone). |
| --- |
| BaseObjectThe entity on which to activate the aura (Self or Target).S1Aura table ID to activate (e.g., ProximityAura, WarmthZone). |
| S1Aura table ID to activate (e.g., ProximityAura, WarmthZone). |

# Examples

| DescriptionBaseObjectCommandS1Activate the proximity detection aura on selfSelfEmitAuraProximityAuraActivate the warmth zone aura on the target entityTargetEmitAuraWarmthZone |
| --- |
| Activate the proximity detection aura on selfSelfEmitAuraProximityAuraActivate the warmth zone aura on the target entityTargetEmitAuraWarmthZone |
| Activate the warmth zone aura on the target entityTargetEmitAuraWarmthZone |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInput & Camera[EnableRagdoll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enableragdoll)[EndBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endbinocularview)[StartBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startbinocularview)[StartDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdualsense)[StartGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startgyrosensor)[StartTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-starttouchpad)[StopDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopdualsense)[StopGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopgyrosensor)[StopTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stoptouchpad)[WithdrawAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-withdrawaura)
