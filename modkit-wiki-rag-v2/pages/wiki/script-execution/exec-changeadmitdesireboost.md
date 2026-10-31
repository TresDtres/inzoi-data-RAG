---
document_id: "2acfa8a2333890801056c9390e4827fd0c329b7f34c1579ffc9c9c73ac5ee7b3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-changeadmitdesireboost"
title: "Execute_ChangeAdmitDesireBoost"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:18+00:00"
content_sha256: "9f1749df6417c4ce922d921e9a50fe9dafabb3938e762a0dd00f5c94232b08ae"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-changeadmitdesireboost"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Changes the admit desire boost buff on the character by applying the specified emotion tendency and boost level.

# Parameters

| ParameterDescriptionBaseObjectThe character whose admit desire boost is changedS1Emotion tendency ID (EB1EmotionTendency enum name, e.g., Positive, Negative)F1Boost level to apply (integer; 0 removes the boost) |
| --- |
| BaseObjectThe character whose admit desire boost is changedS1Emotion tendency ID (EB1EmotionTendency enum name, e.g., Positive, Negative)F1Boost level to apply (integer; 0 removes the boost) |
| S1Emotion tendency ID (EB1EmotionTendency enum name, e.g., Positive, Negative)F1Boost level to apply (integer; 0 removes the boost) |
| F1Boost level to apply (integer; 0 removes the boost) |

# Examples

| DescriptionBaseObjectCommandS1F1Set Positive admit desire boost to level 2 on SelfSelfChangeAdmitDesireBoostPositive2Set Negative admit desire boost to level 1 on TargetTargetChangeAdmitDesireBoostNegative1Remove admit desire boost by setting level to 0 on SelfSelfChangeAdmitDesireBoostPositive0 |
| --- |
| Set Positive admit desire boost to level 2 on SelfSelfChangeAdmitDesireBoostPositive2Set Negative admit desire boost to level 1 on TargetTargetChangeAdmitDesireBoostNegative1Remove admit desire boost by setting level to 0 on SelfSelfChangeAdmitDesireBoostPositive0 |
| Set Negative admit desire boost to level 1 on TargetTargetChangeAdmitDesireBoostNegative1Remove admit desire boost by setting level to 0 on SelfSelfChangeAdmitDesireBoostPositive0 |
| Remove admit desire boost by setting level to 0 on SelfSelfChangeAdmitDesireBoostPositive0 |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)
