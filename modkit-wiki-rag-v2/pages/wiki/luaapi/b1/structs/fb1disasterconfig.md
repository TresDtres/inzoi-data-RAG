---
document_id: "a3353a72c244d481ed2dfa121e0848da18e65837b17010169aeb922a991050f0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasterconfig"
title: "FB1DisasterConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:41+00:00"
content_sha256: "341845b89e23d6fbbe43cfa35dfc1312bfa1e80e35efe9a54efe8e99354948e1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1disasterconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a complete disaster entry including its trigger conditions, probability, duration, cooldown, and effects on Zois and objects.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AndConditions``FB1DisasterOccurCondition[]`List of conditions that must all be true (AND logic) for this disaster to be eligible to occur.`CoolTime``integer`Cooldown in game minutes before this disaster can trigger again.`DisasterId``string`ID referencing the weather entry that represents this disaster.`Duration``integer`Duration in game minutes for which this disaster remains active.`ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| --- |
| `AndConditions``FB1DisasterOccurCondition[]`List of conditions that must all be true (AND logic) for this disaster to be eligible to occur.`CoolTime``integer`Cooldown in game minutes before this disaster can trigger again.`DisasterId``string`ID referencing the weather entry that represents this disaster.`Duration``integer`Duration in game minutes for which this disaster remains active.`ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `CoolTime``integer`Cooldown in game minutes before this disaster can trigger again.`DisasterId``string`ID referencing the weather entry that represents this disaster.`Duration``integer`Duration in game minutes for which this disaster remains active.`ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `DisasterId``string`ID referencing the weather entry that represents this disaster.`Duration``integer`Duration in game minutes for which this disaster remains active.`ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `Duration``integer`Duration in game minutes for which this disaster remains active.`ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `ObjectEffects``FB1DisasterOccurObjectEffect[]`List of effects applied to world objects when this disaster occurs.`Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `Prob`[`FB1DisasterOccurProb`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disasteroccurprob)Probability configuration for this disaster's occurrence.`ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
| `ZoiEffects``FB1DisasterOccurZoiEffect[]`List of effects applied to Zoi characters when this disaster occurs. |
