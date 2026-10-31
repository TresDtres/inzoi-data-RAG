---
document_id: "97241ce7acfc9811ee5881cbeb7af50b577293749a6febbc62340ac20af89c49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-withdrawaura"
title: "Execute_WithdrawAura"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:04+00:00"
content_sha256: "82f5f4e7c7ea27163f52feffe3c66fabb9943181ed4c6a35f138d47233f6cb99"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-withdrawaura"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Deactivates (withdraws) the specified aura from the entity identified by BaseObject. The aura is identified by its table ID provided in S1.

# Parameters

| ParameterDescriptionBaseObjectThe entity from which to deactivate the aura (Self or Target).S1Aura table ID to withdraw (e.g., ProximityAura, WarmthZone). |
| --- |
| BaseObjectThe entity from which to deactivate the aura (Self or Target).S1Aura table ID to withdraw (e.g., ProximityAura, WarmthZone). |
| S1Aura table ID to withdraw (e.g., ProximityAura, WarmthZone). |

# Examples

| DescriptionBaseObjectCommandS1Withdraw the proximity detection aura from selfSelfWithdrawAuraProximityAuraWithdraw the warmth zone aura from the target entityTargetWithdrawAuraWarmthZoneWithdraw the danger zone aura from selfSelfWithdrawAuraDangerZoneWithdraw the interaction trigger aura from selfSelfWithdrawAuraInteractionTrigger |
| --- |
| Withdraw the proximity detection aura from selfSelfWithdrawAuraProximityAuraWithdraw the warmth zone aura from the target entityTargetWithdrawAuraWarmthZoneWithdraw the danger zone aura from selfSelfWithdrawAuraDangerZoneWithdraw the interaction trigger aura from selfSelfWithdrawAuraInteractionTrigger |
| Withdraw the warmth zone aura from the target entityTargetWithdrawAuraWarmthZoneWithdraw the danger zone aura from selfSelfWithdrawAuraDangerZoneWithdraw the interaction trigger aura from selfSelfWithdrawAuraInteractionTrigger |
| Withdraw the danger zone aura from selfSelfWithdrawAuraDangerZoneWithdraw the interaction trigger aura from selfSelfWithdrawAuraInteractionTrigger |
| Withdraw the interaction trigger aura from selfSelfWithdrawAuraInteractionTrigger |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInput & Camera[EmitAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-emitaura)[EnableRagdoll](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enableragdoll)[EndBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endbinocularview)[StartBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startbinocularview)[StartDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdualsense)[StartGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startgyrosensor)[StartTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-starttouchpad)[StopDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopdualsense)[StopGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopgyrosensor)[StopTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stoptouchpad)
