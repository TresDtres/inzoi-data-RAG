---
document_id: "2e151846db0e95a3ba20292d019bfd6a2ea2abb712525e46cd3de4ab071b1364"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/weather"
title: "📘 Weather Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:59+00:00"
content_sha256: "7e810687c2c53b77a89274308b0076fa7afb63ef74778820fab4262cc01e2596"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/weather"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1WeatherTableRow

Defines weather settings and scripts triggered by weather state transitions.

### Properties

- **WeatherTextId** (`FString`): Localized text displayed for this weather. *(Foreign = "Text_Widget.Id")*
- **WeatherSteps** (`TArray<FB1WeatherDetail>`): List of steps this weather transitions through.
- **OnStartConditions** (`TArray<FB1Condition>`): Conditions checked when weather starts. If these conditions are met, OnStartScripts will be executed.
- **OnStartScripts** (`TArray<FB1Execute>`): Scripts executed when weather begins.
- **OnEndConditions** (`TArray<FB1Condition>`): Conditions checked when weather ends. If these conditions are met, OnEndScripts will be executed.
- **OnEndScripts** (`TArray<FB1Execute>`): Scripts executed when weather ends.

## 📚 References

- [FB1Condition](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1condition)
- [EB1BaseObject](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1baseobject)
- [EB1CompareType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1comparetype)
- [EB1ConditionType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1conditiontype)
- [FB1Execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1execute)
- [EB1ExecuteType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1executetype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoWeather[EB1WeatherTriggerType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertriggertype)[EB1WeatherType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertype)[WeatherTrigger Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/weathertrigger)[FB1WeatherConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherconfig)[FB1WeatherConfigByMap](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherconfigbymap)[FB1WeatherDetail](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherdetail)[FB1WeatherDetailSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherdetailsetting)[FB1WeatherInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherinfo)[FB1WeatherSetting](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathersetting)[FB1WeatherTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathertablerow)[FB1WeatherTriggerTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weathertriggertablerow)
