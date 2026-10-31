---
document_id: "035460b6fe9d3112388a0312593e8e82cbe2a74c7254fad35bce0231c62a5df1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/howlingeffect"
title: "📘 HowlingEffect Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:50+00:00"
content_sha256: "a2d6907e335d8fe062938cef98969e2957f8ee6b51c4b69d4629e70a452bbad4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/howlingeffect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1HowlingEffectTableRow

Defines the actual howling effects that get applied when a howling event is triggered.

### Properties

- **Id** (`FName`): Unique identifier for the howling effect set.
- **Cooltime** (`float`): Minimum time between effect triggers. *(ClampMin = 10)*
- **Effects** (`TArray<FB1HowlingEffect>`): List of effects applied during the howling.
- **bOnlyForGhost** (`bool`): If true, this howling effect only applies to ghost characters.

## 📚 References

- [FB1HowlingEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect)
- [FB1HowlingWeightInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingweightinfo)
- [FB1HowlingModifierSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingmodifiersetting)
- [FB1HowlingEffect_Interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-interaction)
- [FB1HowlingEffect_Script](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-script)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1ModifierType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1modifiertype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoHowling[EB1HowlingEmitterType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingemittertype)[EB1HowlingFrequencyType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1howlingfrequencytype)[Howling Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/howling)[FB1HowlingEffect](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect)[FB1HowlingEffect_Interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-interaction)[FB1HowlingEffect_Script](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffect-script)[FB1HowlingEffectTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingeffecttablerow)[FB1HowlingInteractionBagItem](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlinginteractionbagitem)[FB1HowlingModifierSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingmodifiersetting)[FB1HowlingTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingtablerow)[FB1HowlingTriggerInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingtriggerinfo)[FB1HowlingWeightInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1howlingweightinfo)
