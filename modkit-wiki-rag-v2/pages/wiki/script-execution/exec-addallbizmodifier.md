---
document_id: "7c4f8063fb332453a897f0714f6aace63fb8303e35947f3c18bfb766d85f89fd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier"
title: "Execute_AddAllBizModifier"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:03+00:00"
content_sha256: "2e95659e479ed3036ed1588fee5c83572233846c28808b70dc50621ba005a2cc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addallbizmodifier"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a modifier to all HouseholdBiz entities owned by the BaseObject's household. The modifier name is specified in S1 and must be defined in BizModifier.json. Does nothing if S1 is empty or the BaseObject is not a valid Character.

# Parameters

| ParameterDescriptionBaseObjectA household member Character whose household's HouseholdBiz entities receive the modifier.S1The modifier name defined in BizModifier.json to add to all owned HouseholdBiz entities. |
| --- |
| BaseObjectA household member Character whose household's HouseholdBiz entities receive the modifier.S1The modifier name defined in BizModifier.json to add to all owned HouseholdBiz entities. |
| S1The modifier name defined in BizModifier.json to add to all owned HouseholdBiz entities. |

# Examples

| DescriptionBaseObjectCommandAdd a boost modifier to all of Self's household biz entitiesSelfAddAllBizModifierAdd a penalty modifier to all of Target's household bizTargetAddAllBizModifier |
| --- |
| Add a boost modifier to all of Self's household biz entitiesSelfAddAllBizModifierAdd a penalty modifier to all of Target's household bizTargetAddAllBizModifier |
| Add a penalty modifier to all of Target's household bizTargetAddAllBizModifier |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
