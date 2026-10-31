---
document_id: "bfa0fb9a00721523239bb741f199fbdedb4cc04eb70159872c74510e64548056"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statevent"
title: "📘 StatEvent Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:05+00:00"
content_sha256: "cdb4b7b716bf18c0633484f4f9f14c52016a0e9bc608d797a8a4e1574ff82a55"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/statevent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1StatEventTableRow

Defines an event triggered by stat changes, including conditions and resulting effects.

### Properties

- **Id** (`FName`): Unique identifier for the stat event.
- **TriggerData** (`FB1StatEventTriggerData`): Stat range and probability that trigger the event.
- **EventConditions** (`TArray<FB1Condition>`): Additional conditions required to trigger the event.
- **EventExecutes** (`TArray<FB1Execute>`): List of executions performed when the event is triggered.

## 📚 References

- [FB1StatEventTriggerData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stateventtriggerdata)
- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)
- [FB1Execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1execute)
- [EB1ExecuteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1executetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoStat[EB1StatServiceTier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1statservicetier)[EB1StatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1stattype)[Stat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/stat)[StatLocomotion Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statlocomotion)[FB1Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stat)[FB1StatAutoMotiveSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statautomotiveset)[FB1StatBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statbasicinfo)[FB1StatDecayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdecayinfo)[FB1StatDesireAgingVariationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireagingvariationinfo)[FB1StatDesireInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireinfo)[FB1StatDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdisplayinfo)[FB1StatEditorLog](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stateditorlog)
