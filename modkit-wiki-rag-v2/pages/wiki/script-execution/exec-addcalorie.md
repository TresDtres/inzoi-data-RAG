---
document_id: "76e967f70d8e143a2812eee5ebe3b1956f104a7d54556ad5e561a54bb7b5fc1a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie"
title: "Execute_AddCalorie"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:04+00:00"
content_sha256: "1b3907ced684c1637502103e94106d010f5bd1e56d149115e852727a07e348c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addcalorie"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Adds a calorie value to the character specified by BaseObject. The amount added is determined by the calorie type name provided in S1, which maps to an EB1CalorieType value (e.g., Low, Medium, High, Zero).

# Parameters

| ParameterDescriptionBaseObjectThe character entity to apply the calorie change to (Self or Target).S1Calorie type name from EB1CalorieType (e.g., Low, Medium, High, Zero). |
| --- |
| BaseObjectThe character entity to apply the calorie change to (Self or Target).S1Calorie type name from EB1CalorieType (e.g., Low, Medium, High, Zero). |
| S1Calorie type name from EB1CalorieType (e.g., Low, Medium, High, Zero). |

# Examples

| DescriptionBaseObjectCommandS1Add a low calorie amount to selfSelfAddCalorieLowAdd a medium calorie amount to self after eating a mealSelfAddCalorieMediumAdd a high calorie amount to target after a feastTargetAddCalorieHighAdd zero calories to self (no change)SelfAddCalorieZero |
| --- |
| Add a low calorie amount to selfSelfAddCalorieLowAdd a medium calorie amount to self after eating a mealSelfAddCalorieMediumAdd a high calorie amount to target after a feastTargetAddCalorieHighAdd zero calories to self (no change)SelfAddCalorieZero |
| Add a medium calorie amount to self after eating a mealSelfAddCalorieMediumAdd a high calorie amount to target after a feastTargetAddCalorieHighAdd zero calories to self (no change)SelfAddCalorieZero |
| Add a high calorie amount to target after a feastTargetAddCalorieHighAdd zero calories to self (no change)SelfAddCalorieZero |
| Add zero calories to self (no change)SelfAddCalorieZero |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddRandomBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
