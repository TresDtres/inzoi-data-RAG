---
document_id: "1c9d24f6c3199c897fdd27713231e370b0f6c7bd649e2fb6684b300256562b06"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disasterconfig"
title: "B1DisasterConfig"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:23+00:00"
content_sha256: "8cf75b1d095134f13cfc33b7aa48651f28b5f37cc9570e78598ffc5dbbdac533"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1disasterconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines a complete disaster entry including its trigger conditions, probability, duration, cooldown, and effects on Zois and objects.

| PropertyTypeDescriptionMetadataDisasterIdFNameID referencing the weather entry that represents this disaster.Category: B1DisasterConfig Foreign: Weather.IdAndConditionsTArrayList of conditions that must all be true (AND logic) for this disaster to be eligible to occur.Category: B1DisasterConfigProbFB1DisasterOccurProbProbability configuration for this disaster's occurrence.Category: B1DisasterConfigDurationint32Duration in game minutes for which this disaster remains active.Category: B1DisasterConfig ClampMin: 0CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| --- |
| DisasterIdFNameID referencing the weather entry that represents this disaster.Category: B1DisasterConfig Foreign: Weather.IdAndConditionsTArrayList of conditions that must all be true (AND logic) for this disaster to be eligible to occur.Category: B1DisasterConfigProbFB1DisasterOccurProbProbability configuration for this disaster's occurrence.Category: B1DisasterConfigDurationint32Duration in game minutes for which this disaster remains active.Category: B1DisasterConfig ClampMin: 0CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| AndConditionsTArrayList of conditions that must all be true (AND logic) for this disaster to be eligible to occur.Category: B1DisasterConfigProbFB1DisasterOccurProbProbability configuration for this disaster's occurrence.Category: B1DisasterConfigDurationint32Duration in game minutes for which this disaster remains active.Category: B1DisasterConfig ClampMin: 0CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| ProbFB1DisasterOccurProbProbability configuration for this disaster's occurrence.Category: B1DisasterConfigDurationint32Duration in game minutes for which this disaster remains active.Category: B1DisasterConfig ClampMin: 0CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| Durationint32Duration in game minutes for which this disaster remains active.Category: B1DisasterConfig ClampMin: 0CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| CoolTimeint32Cooldown in game minutes before this disaster can trigger again.Category: B1DisasterConfig ClampMin: 0ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| ZoiEffectsTArrayList of effects applied to Zoi characters when this disaster occurs.Category: B1DisasterConfigObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |
| ObjectEffectsTArrayList of effects applied to world objects when this disaster occurs.Category: B1DisasterConfig |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoDisaster[FB1DisasterOccurCondition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disasteroccurcondition)[FB1DisasterOccurObjectEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disasteroccurobjecteffect)[FB1DisasterOccurProb](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disasteroccurprob)[FB1DisasterOccurZoiEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disasteroccurzoieffect)[FB1DisasterTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1disastertablerow)
