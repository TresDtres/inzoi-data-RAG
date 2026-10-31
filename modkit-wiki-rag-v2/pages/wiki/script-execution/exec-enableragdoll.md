---
document_id: "3dbb69e304b21e1e74fecc7c7d54261fa2052b857ebe9135d994be5fa7a9818e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-enableragdoll"
title: "Execute_EnableRagdoll"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:26+00:00"
content_sha256: "d0d8cdd659cb4f73547ec51d72d982fe00678b6744e58355b5d008b44c3901d2"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-enableragdoll"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Enables ragdoll on the BaseObject entity (default: Self) with a configurable impulse. The impulse is applied even if the entity is already in ragdoll. The non-base entity is used only as a direction reference (S1). Unspecified parameters fall back to UB1RagdollDataAsset defaults. WARNING: On initial ragdoll entry, clears non-essential buffs and interactions. place AddBuff Executes after EnableRagdoll to preserve them. Note: Essential buffs (IsEssential=true) survive regardless of order. Note: Animation commands (SubActionPlayAnim, etc.) are blocked both before (Montage_StopAll) and after (Ragdoll posture). Note: Direct value commands (AddStat, AddCurrency, AddSpeechBubble, PlayFx, etc.) are order-independent.

# Parameters

| ParameterDescriptionS1(Optional) EB1RagdollImpulseDirectionMode. Default: TargetToSelf.SelfForward / TargetForward / SelfToTarget / TargetToSelf.TargetForward falls back to BaseObject forward when the non-base entityis invalid. SelfToTarget / TargetToSelf use vertical-only impulse.S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| --- |
| S1(Optional) EB1RagdollImpulseDirectionMode. Default: TargetToSelf.SelfForward / TargetForward / SelfToTarget / TargetToSelf.TargetForward falls back to BaseObject forward when the non-base entityis invalid. SelfToTarget / TargetToSelf use vertical-only impulse.S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| SelfForward / TargetForward / SelfToTarget / TargetToSelf.TargetForward falls back to BaseObject forward when the non-base entityis invalid. SelfToTarget / TargetToSelf use vertical-only impulse.S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| TargetForward falls back to BaseObject forward when the non-base entityis invalid. SelfToTarget / TargetToSelf use vertical-only impulse.S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| is invalid. SelfToTarget / TargetToSelf use vertical-only impulse.S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| S2(Optional) Impulse bone name.F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| F1(Optional) Horizontal impulse magnitude. <=0 falls back to default.F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |
| F2(Optional) Vertical impulse magnitude. <=0 falls back to default. |

# Examples

| DescriptionCommandBaseObjectS1S2F1F2Default ragdoll on SelfEnableRagdollSelfStrong knockback Self away from targetEnableRagdollSelfTargetToSelf500004000Forward fall on SelfEnableRagdollSelfSelfForwardspine_03150001000 |
| --- |
| Default ragdoll on SelfEnableRagdollSelfStrong knockback Self away from targetEnableRagdollSelfTargetToSelf500004000Forward fall on SelfEnableRagdollSelfSelfForwardspine_03150001000 |
| Strong knockback Self away from targetEnableRagdollSelfTargetToSelf500004000Forward fall on SelfEnableRagdollSelfSelfForwardspine_03150001000 |
| Forward fall on SelfEnableRagdollSelfSelfForwardspine_03150001000 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoInput & Camera[EmitAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-emitaura)[EndBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-endbinocularview)[StartBinocularView](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startbinocularview)[StartDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startdualsense)[StartGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-startgyrosensor)[StartTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-starttouchpad)[StopDualSense](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopdualsense)[StopGyroSensor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stopgyrosensor)[StopTouchPad](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-stoptouchpad)[WithdrawAura](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-withdrawaura)
