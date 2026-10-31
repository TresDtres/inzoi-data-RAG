---
document_id: "b146374282bb77965c391b176979ef68cc006e06ef3cadefe28b728cfa9faf16"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/howling"
title: "📘 Howling Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "441acd0e959a149f954ee7e531cb39b8eba8fa539206abcd9976786cfdde792b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/howling"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1HowlingTableRow

Defines a howling trigger configuration. Howlings are area-based effects triggered by characters or objects.

### Properties

- **Id** (`FName`): Unique identifier for this howling entry.
- **bAllowObject** (`bool`): If true, game objects are included as part of the target set.
- **bAllowCharacter** (`bool`): If true, characters are included as part of the target set.
- **bImmediate** (`bool`): If true, the effect is applied immediately.
- **bFilterSameSite** (`bool`): If true, Filters only targets located within the same lot as the Howling Generator. All additional range conditions are disregarded.
- **FiltersInfo** (`FB1TargetFilters`): Targeting filters to determine valid receivers.
- **EffectsInfo** (`FB1EffectsInfo`): Effects applied to targets.
- **FrequencyInfo** (`FB1FrequencyInfo`): Sets the frequency and trigger method of the howling effect.
- **bCheckLineTrace** (`bool`): Whether line trace is required for the effect to reach targets.

## 📚 References

- [FB1TargetFilters](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1targetfilters)
- [EB1HowlingEmitterType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingemittertype)
- [EB1HowlingFrequencyType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingfrequencytype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoHowling[EB1HowlingEmitterType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingemittertype)[EB1HowlingFrequencyType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingfrequencytype)[HowlingEffect Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/howlingeffect)[FB1HowlingEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect)[FB1HowlingEffect_Interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-interaction)[FB1HowlingEffect_Script](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-script)[FB1HowlingEffectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffecttablerow)[FB1HowlingInteractionBagItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlinginteractionbagitem)[FB1HowlingModifierSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingmodifiersetting)[FB1HowlingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingtablerow)[FB1HowlingTriggerInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingtriggerinfo)[FB1HowlingWeightInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingweightinfo)
