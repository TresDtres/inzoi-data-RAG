---
document_id: "5b164630e26631c7f924034af82512d8e92b47efc23cc8fdeffcdedb76bcffe8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditreport"
title: "📘 CityEditReport Data Guide"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:23+00:00"
content_sha256: "6622ff0bc7571bef73b0c4c542a3411fd38c0d6a78ea6869db7400b1cc0eddfc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/cityeditreport"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🧩 Struct: FB1CityEditReportTableRow

Defines a report entry that aggregates and displays city edit status with associated visuals.

### Properties

- **Id** (`FName`): Unique identifier for the report entry.
- **TitleTextId** (`FString`): Localization key for the title. *(StringTableKey = "Id")*
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon used for displaying this report in the UI.
- **SubList** (`TArray<FB1CityEditReportSubList>`): Sub-entries listed within the report.

## 📚 References

- [FB1CityEditReportSubList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditreportsublist)

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoCity[EB1CityAudioResourceType](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1cityaudioresourcetype)[CityAudioResources Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityaudioresources)[CityEdit Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityedit)[CityEditMenu Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditmenu)[CityEditStability Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityeditstability)[CitySeasonWeather Data Guide](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/cityseasonweather)[FB1CityAudioResourcesTableRow](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityaudioresourcestablerow)[FB1CityEditChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelist)[FB1CityEditChangeListInfo](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditchangelistinfo)[FB1CityEditLowQualityChangeList](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditlowqualitychangelist)[FB1CityEditMenu](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenu)[FB1CityEditMenuSubTab](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1cityeditmenusubtab)
