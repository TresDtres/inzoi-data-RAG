---
document_id: "42e7df6ef4f753be01bc3206934c2ce156ba60a884bef37927998dc1fde5646c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-removeallbizmodifier"
title: "Execute_RemoveAllBizModifier"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:44+00:00"
content_sha256: "3bf5ae10d6cf5810de41bcb1d1784d3a00a5ea715c4ae31db168e62895539944"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-removeallbizmodifier"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Removes a modifier from all HouseholdBiz entities owned by the BaseObject's household. The modifier name is specified in S1 and must be defined in BizModifier.json. Does nothing if S1 is empty or the BaseObject is not a valid Character.

# Parameters

| ParameterDescriptionBaseObjectA household member Character whose household's HouseholdBiz entities have the modifier removed.S1The modifier name defined in BizModifier.json to remove from all owned HouseholdBiz entities. |
| --- |
| BaseObjectA household member Character whose household's HouseholdBiz entities have the modifier removed.S1The modifier name defined in BizModifier.json to remove from all owned HouseholdBiz entities. |
| S1The modifier name defined in BizModifier.json to remove from all owned HouseholdBiz entities. |

# Examples

| DescriptionBaseObjectCommandRemove a boost modifier from all of Self's household biz entitiesSelfRemoveAllBizModifierRemove a penalty modifier from all of Target's household bizTargetRemoveAllBizModifier |
| --- |
| Remove a boost modifier from all of Self's household biz entitiesSelfRemoveAllBizModifierRemove a penalty modifier from all of Target's household bizTargetRemoveAllBizModifier |
| Remove a penalty modifier from all of Target's household bizTargetRemoveAllBizModifier |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
