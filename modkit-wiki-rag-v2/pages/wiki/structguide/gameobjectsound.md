---
document_id: "6dc4b7fdc2eb2581eafeb8e7673865d9c19f27805fa5a61f79ed37a8c75612e5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/gameobjectsound"
title: "📘 GameObjectSound Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:45+00:00"
content_sha256: "9afc34c43ff83dc2d5f38ddaacdb00d4c95a6a1283294c23c16bb9445ffc4d64"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/gameobjectsound"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1GameObjectSoundTableRow

Defines sound resources associated with a game object, such as sound cues triggered by animation notifies or scripted events.

### Properties

- **Id** (`FName`): Unique identifier for this sound mapping entry, typically used as the row key in the data table.
- **SoundNotifyMap** (`TMap<FName, TSoftObjectPtr<UMetaSoundSource>>`): Map of notify event names (e.g., `Open`, `Close`) to their corresponding MetaSound assets. This allows context-sensitive sounds to play during gameplay events.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoGame[FB1GameActionInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameactioninfo)[FB1GameActionInfoArray](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameactioninfoarray)[FB1GameConfigBasicSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigbasicsetting)[FB1GameConfigDateTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigdatetime)[FB1GameConfigTime](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigtime)[FB1GameConfigWidgetCustomization](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameconfigwidgetcustomization)[FB1GameObjectAnimTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectanimtablerow)[FB1GameObjectChangeMaterialParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectchangematerialparam)[FB1GameObjectChangeMeshParam](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectchangemeshparam)[FB1GameObjectDataCache](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectdatacache)[FB1GameObjectDataCache_ObjectGrouping](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectdatacache-objectgrouping)[FB1GameObjectDataCache_Stat](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1gameobjectdatacache-stat)
