---
document_id: "7b1f6a4853cb1e72a36b12a16d32913af06a27c767c53685ddd085a3b8dd1447"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/stat"
title: "📘 Stat Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:05+00:00"
content_sha256: "070cc39dc7eac80ef8a440b545f54904f65b0974a6776337168ea0a0ed4aff2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/stat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1StatTableRow

Defines a character stat and its behaviors, including decay, desire influence, and UI display.

### Properties

- **Id** (`FName`): Unique identifier for the stat.
- **StatBasicInfo** (`FB1StatBasicInfo`): Basic settings including type, range, and default value.
- **StatDisplayInfo** (`FB1StatDisplayInfo`): UI display settings such as name, icon, and tooltips.
- **StatDecayInfo** (`FB1StatDecayInfo`): Logic for automatic stat decay over time.
- **StatDesireInfo** (`FB1StatDesireInfo`): Applies priority weights to individual needs to guide decision-making in autonomous behavior.
- **AutoMotiveTimeOffset** (`float`): Time offset applied to desire influence.
- **AutoMotiveSet** (`TArray<FB1StatAutoMotiveSet>`): Defines desire stats based on time of day.
- **StatOnRangeChangedScripts** (`TArray<FB1StatOnRangeChangedScript>`): Scripts triggered when stat enters a specific range.

## 📚 References

- [FB1StatBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statbasicinfo)
- [EB1StatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1stattype)
- [FB1StatDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdisplayinfo)
- [FB1StatRangeDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statrangedisplayinfo)
- [FB1StatDecayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdecayinfo)
- [FB1StatDesireInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireinfo)
- [FB1StatToDesireGraph](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stattodesiregraph)
- [FB1StatDesireAgingVariationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireagingvariationinfo)
- [EB1StatServiceTier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1statservicetier)
- [FB1StatAutoMotiveSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statautomotiveset)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoStat[EB1StatServiceTier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1statservicetier)[EB1StatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1stattype)[StatEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statevent)[StatLocomotion Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statlocomotion)[FB1Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stat)[FB1StatAutoMotiveSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statautomotiveset)[FB1StatBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statbasicinfo)[FB1StatDecayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdecayinfo)[FB1StatDesireAgingVariationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireagingvariationinfo)[FB1StatDesireInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireinfo)[FB1StatDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdisplayinfo)[FB1StatEditorLog](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stateditorlog)
