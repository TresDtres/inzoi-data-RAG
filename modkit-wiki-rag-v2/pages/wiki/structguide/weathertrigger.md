---
document_id: "dc0c97f4bdf937f17c860e3cfc4b297daa1d814222cbd46d6e85bc3b923a32c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/weathertrigger"
title: "📘 WeatherTrigger Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:59+00:00"
content_sha256: "b17d58e381f05c1dac56c6ab954e5ac457fc56ed3eb0f0235988c9b4c98a5366"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/weathertrigger"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1WeatherTriggerTableRow

Defines logic to trigger weather events based on map, script, or simulation data.

### Properties

- **Id** (`FName`): Unique identifier for the weather trigger.
- **MapId** (`FName`): Map where the weather trigger applies. *(Foreign = "Map.Id", ModTip = "LevelName")*
- **TriggerType** (`EB1WeatherTriggerType`): Type of trigger used (e.g., SeasonChanged, WeatherChanged).
- **SubId** (`FName`): Sub-key used to differentiate triggers. (e.g., Summer, Fall) *(SearchLink = TriggerType)*
- **ScriptIds** (`TArray<FName>`): Scripts executed when the weather is triggered. *(Foreign = "Script_Weather.Id")*

## 📚 References

- [EB1WeatherTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertriggertype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoWeather[EB1WeatherTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertriggertype)[EB1WeatherType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertype)[Weather Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/weather)[FB1WeatherConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherconfig)[FB1WeatherConfigByMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherconfigbymap)[FB1WeatherDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherdetail)[FB1WeatherDetailSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherdetailsetting)[FB1WeatherInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherinfo)[FB1WeatherSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathersetting)[FB1WeatherTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathertablerow)[FB1WeatherTriggerTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathertriggertablerow)
