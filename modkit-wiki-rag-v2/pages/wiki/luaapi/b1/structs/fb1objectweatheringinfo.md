---
document_id: "44aecbfb4cd6b44c2f1a10d5a8b6d08c57f761be13a7ef51e5548d0e8eb9934a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectweatheringinfo"
title: "FB1ObjectWeatheringInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:37+00:00"
content_sha256: "ff57a90249e01c2d387f6ade6c7cbf97b05e457f80fa6d1ec330bda8c207da51"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectweatheringinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single weathering grade level, including visual intensity, progression timing, price depreciation, and a modifier reference.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`Grade``integer`Grade level index for this weathering state.`ModifierObjectWeatheringId``string`ID of the object weathering modifier applied when the object is at this grade.`NextGradeDay``integer`Number of in-game days before the object advances to the next weathering grade.`NextGradeDayRandomOffset``integer`Random offset in days added to NextGradeDay to vary the grade progression timing.`PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| --- |
| `Grade``integer`Grade level index for this weathering state.`ModifierObjectWeatheringId``string`ID of the object weathering modifier applied when the object is at this grade.`NextGradeDay``integer`Number of in-game days before the object advances to the next weathering grade.`NextGradeDayRandomOffset``integer`Random offset in days added to NextGradeDay to vary the grade progression timing.`PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| `ModifierObjectWeatheringId``string`ID of the object weathering modifier applied when the object is at this grade.`NextGradeDay``integer`Number of in-game days before the object advances to the next weathering grade.`NextGradeDayRandomOffset``integer`Random offset in days added to NextGradeDay to vary the grade progression timing.`PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| `NextGradeDay``integer`Number of in-game days before the object advances to the next weathering grade.`NextGradeDayRandomOffset``integer`Random offset in days added to NextGradeDay to vary the grade progression timing.`PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| `NextGradeDayRandomOffset``integer`Random offset in days added to NextGradeDay to vary the grade progression timing.`PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| `PriceDepreciation``number`Price depreciation factor applied to the object's value at this weathering grade.`WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
| `WeatheringIntensity``number`Visual weathering intensity value applied to the object's material at this grade. |
