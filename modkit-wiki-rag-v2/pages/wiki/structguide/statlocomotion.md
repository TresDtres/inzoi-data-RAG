---
document_id: "d72b477c26ff7ef14e298e57d7603b769be5b599fad44b0f265d46b4b947b3b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statlocomotion"
title: "📘 StatLocomotion Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:06+00:00"
content_sha256: "4655c52ca9cd4668526d418eb4b1fc6ea1cf03575cbd65fc0dd07c84999a421b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/statlocomotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1StatLocomotionTableRow

Defines locomotion animations driven by stat values such as energy or mood.

### Properties

- **Id** (`FName`): Unique identifier for the locomotion entry.
- **Gender** (`EB1GenderType`): Gender that this locomotion set applies to.
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth stage this animation is valid for.
- **StatLocomotions** (`TArray<FB1StatLocomotionAnimInfo>`): List of locomotion variations based on stat thresholds.

## 📚 References

- [FB1StatLocomotionAnimInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statlocomotionaniminfo)
- [FB1RandomAnimationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1randomanimationinfo)
- [EB1AnimGrowthStep](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1animgrowthstep)
- [EB1GenderType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1gendertype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoStat[EB1StatServiceTier](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1statservicetier)[EB1StatType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1stattype)[Stat Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/stat)[StatEvent Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/statevent)[FB1Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stat)[FB1StatAutoMotiveSet](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statautomotiveset)[FB1StatBasicInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statbasicinfo)[FB1StatDecayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdecayinfo)[FB1StatDesireAgingVariationInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireagingvariationinfo)[FB1StatDesireInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdesireinfo)[FB1StatDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1statdisplayinfo)[FB1StatEditorLog](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1stateditorlog)
