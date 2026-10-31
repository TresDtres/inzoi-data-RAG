---
document_id: "aa9e3ce86125c8b38502747c9765111e18186a9518806a52685856167b63b9d2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/preferencerelatedtrait"
title: "📘 PreferenceRelatedTrait Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:58+00:00"
content_sha256: "3c3810d63da1558ac669cb1ae744f5e02ce4942148976e452faceedca93f6643"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/preferencerelatedtrait"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1PreferenceRelatedTraitTableRow

Defines a list of preferences linked to specific traits and how many may be selected.

### Properties

- **Id** (`FName`): Unique identifier for the preference group.
- **MaxSelectCount** (`int32`): Maximum number of preferences allowed from this group. It is recommended to use a value that is less than or equal to the size of the PreferenceList. *(ClampMin = 0)*
- **PreferenceList** (`TArray<FB1PreferenceSelectData>`): A list of selectable preferences available when this trait is selected.

## 📚 References

- [FB1PreferenceSelectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferenceselectdata)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoPreference[Preference Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/preference)[FB1PreferenceBuffData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencebuffdata)[FB1PreferenceDisplayInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencedisplayinfo)[FB1PreferenceReaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereaction)[FB1PreferenceReactionTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereactiontablerow)[FB1PreferenceRelatedTraitTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencerelatedtraittablerow)[FB1PreferenceReward](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencereward)[FB1PreferenceSelectData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferenceselectdata)[FB1PreferenceSettingData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencesettingdata)[FB1PreferenceTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1preferencetablerow)
