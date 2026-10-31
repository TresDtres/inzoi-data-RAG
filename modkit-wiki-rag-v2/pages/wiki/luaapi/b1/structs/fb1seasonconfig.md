---
document_id: "e7dc779da6c73a803e8971e7902a7980dab11ecb2fc295555a3550f11a64d3b6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1seasonconfig"
title: "FB1SeasonConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:21+00:00"
content_sha256: "dd1bdb8578a39fbb38fad3a0a864afe99d32d717445357ac0b369f598d1836ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1seasonconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a season's type, duration multiplier, daily temperature delta, temperature configs, and calendar background image.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`CalendarBackgroundImage``UObject`Background image displayed on the in-game calendar for this season.`DurationMultiplier``integer`Multiplier applied to the default season duration to determine how long this season lasts.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Enum identifying the season type (e.g., Spring, Summer, Fall, Winter).`TemperatureDayDelta``integer`Daily temperature delta applied during this season.`Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
| --- |
| `CalendarBackgroundImage``UObject`Background image displayed on the in-game calendar for this season.`DurationMultiplier``integer`Multiplier applied to the default season duration to determine how long this season lasts.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Enum identifying the season type (e.g., Spring, Summer, Fall, Winter).`TemperatureDayDelta``integer`Daily temperature delta applied during this season.`Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
| `DurationMultiplier``integer`Multiplier applied to the default season duration to determine how long this season lasts.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Enum identifying the season type (e.g., Spring, Summer, Fall, Winter).`TemperatureDayDelta``integer`Daily temperature delta applied during this season.`Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
| `Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Enum identifying the season type (e.g., Spring, Summer, Fall, Winter).`TemperatureDayDelta``integer`Daily temperature delta applied during this season.`Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
| `TemperatureDayDelta``integer`Daily temperature delta applied during this season.`Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
| `Temperatures``FB1TemperatureConfig[]`List of temperature band configurations defining weather probability distributions for this season. |
