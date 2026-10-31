---
document_id: "eb2e983dea26f542f2243f1c13627f8885cf71e40790a2c864c5cd05ad453b83"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addrandombuff"
title: "Execute_AddRandomBuff"
section: "wiki/script-execution"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:51:09+00:00"
content_sha256: "55c5caed392d318bbea0eda571448ca18b0e376e9311e7801f8ba52f55492fb6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/script-execution/exec-addrandombuff"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Description

Randomly selects one buff from the specified Random Buff Pool and adds it to the BaseObject character. The buff detail is populated with initiator and reason information from the script context. If the script reason is Interaction, Talk, or Action, additional context such as InteractionBagId and CreateBuffReason is also set.

# Parameters

| ParameterDescriptionBaseObjectThe character that will receive the randomly selected buff (Self or Target)S1Random Buff Pool Table ID from RandomBuffPool.json |
| --- |
| BaseObjectThe character that will receive the randomly selected buff (Self or Target)S1Random Buff Pool Table ID from RandomBuffPool.json |
| S1Random Buff Pool Table ID from RandomBuffPool.json |

# Examples

| DescriptionBaseObjectCommandS1Add a random buff from RandomBuffTest pool to selfSelfAddRandomBuffRandomBuffTestAdd a random buff from EventPool to target characterTargetAddRandomBuffEventBuffPoolAdd a random seasonal buff to selfSelfAddRandomBuffSeasonalBuffPool |
| --- |
| Add a random buff from RandomBuffTest pool to selfSelfAddRandomBuffRandomBuffTestAdd a random buff from EventPool to target characterTargetAddRandomBuffEventBuffPoolAdd a random seasonal buff to selfSelfAddRandomBuffSeasonalBuffPool |
| Add a random buff from EventPool to target characterTargetAddRandomBuffEventBuffPoolAdd a random seasonal buff to selfSelfAddRandomBuffSeasonalBuffPool |
| Add a random seasonal buff to selfSelfAddRandomBuffSeasonalBuffPool |

[←Back to Command FinderSearch and filter all 399 Script Execution documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/commands)See alsoStat, Buff & Desire[AddAllBizModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addallbizmodifier)[AddBuff](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addbuff)[AddCalorie](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addcalorie)[AddHowling](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addhowling)[AddModifier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifier)[AddModifierToChildrenWithTag](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmodifiertochildrenwithtag)[AddMuscleImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addmuscleimmediate)[AddObesityImmediate](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addobesityimmediate)[AddPerspective](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addperspective)[AddScaledStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addscaledstat)[AddStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addstat)[AddTransientDesireStat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/script-execution/exec-addtransientdesirestat)
