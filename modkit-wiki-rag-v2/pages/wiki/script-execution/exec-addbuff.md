---
document_id: "88790e201832f1efec2f83e2320fcf844a94ce03adebd4d1d5ee205f65910043"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff"
title: "Execute_AddBuff"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:04+00:00"
content_sha256: "48db0e2c6c963eb1db64907dd854b05ee052e8c33c8708cef670e1d3d15c3da4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addbuff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a buff to the BaseObject character, or transfers an existing buff from NonBaseObject to BaseObject. When S2 is None (Create Mode), a new buff with the specified BuffId is created and added to BaseObject's BuffComponent, with initiator and reason information populated from the script context. When S2 is set (Transfer Mode), the buff identified by S1 is moved from NonBaseObject to BaseObject.

# Note

In Transfer Mode, the buff is moved (not duplicated) from NonBaseObject to BaseObject. In Create Mode, if the script reason is Interaction, Talk, or Action, additional context such as InteractionBagId and CreateBuffReason is captured from the Self character's InteractionComponent.

# Parameters

| ParameterDescriptionBaseObjectThe character entity that will receive the buff (Self or Target)S1Buff ID to add or transfer (Buff.json Id)S2If set, triggers Transfer Mode: moves buff from NonBaseObject to BaseObject |
| --- |
| BaseObjectThe character entity that will receive the buff (Self or Target)S1Buff ID to add or transfer (Buff.json Id)S2If set, triggers Transfer Mode: moves buff from NonBaseObject to BaseObject |
| S1Buff ID to add or transfer (Buff.json Id)S2If set, triggers Transfer Mode: moves buff from NonBaseObject to BaseObject |
| S2If set, triggers Transfer Mode: moves buff from NonBaseObject to BaseObject |

# Examples

| DescriptionBaseObjectCommandS1S2Add "Happy" buff to self characterSelfAddBuffHappyAdd "Tired" buff to target characterTargetAddBuffTiredTransfer "Sick" buff from NonBaseObject to selfSelfAddBuffSickReserveDuration |
| --- |
| Add "Happy" buff to self characterSelfAddBuffHappyAdd "Tired" buff to target characterTargetAddBuffTiredTransfer "Sick" buff from NonBaseObject to selfSelfAddBuffSickReserveDuration |
| Add "Tired" buff to target characterTargetAddBuffTiredTransfer "Sick" buff from NonBaseObject to selfSelfAddBuffSickReserveDuration |
| Transfer "Sick" buff from NonBaseObject to selfSelfAddBuffSickReserveDuration |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
