---
document_id: "17bd74d4bb34b1a794b4416449f2fde1e23e7c62afe9f2d9549b0e2b3c65a5a1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityseasonweather"
title: "📘 CitySeasonWeather Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:23+00:00"
content_sha256: "89992b8776ccef4b7948ecf7eee54fdf7d5f3b5d391e77601f3d7882211870a8"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/cityseasonweather"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CitySeasonWeatherTableRow

Defines seasonal weather configuration per city, including initial temperature and season progression.

### Properties

- **Id** (`FName`): Unique identifier for this city's seasonal weather config.
- **StartFirstTemperature** (`int32`): Starting temperature value when simulation begins.
- **Seasons** (`TArray<FB1SeasonConfig>`): List of seasonal configurations including duration and temperature curves.

## 📚 References

- [FB1SeasonConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1seasonconfig)
- [FB1TemperatureConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1temperatureconfig)
- [FB1WeatherConfig](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1weatherconfig)
- [EB1WeatherType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1weathertype)
- [EB1SeasonType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1seasontype)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCity[EB1CityAudioResourceType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1cityaudioresourcetype)[CityAudioResources Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityaudioresources)[CityEdit Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityedit)[CityEditMenu Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditmenu)[CityEditReport Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditreport)[CityEditStability Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditstability)[FB1CityAudioResourcesTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityaudioresourcestablerow)[FB1CityEditChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelist)[FB1CityEditChangeListInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelistinfo)[FB1CityEditLowQualityChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditlowqualitychangelist)[FB1CityEditMenu](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenu)[FB1CityEditMenuSubTab](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenusubtab)
