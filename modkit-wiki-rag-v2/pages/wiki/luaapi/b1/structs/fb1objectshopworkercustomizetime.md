---
document_id: "ff643115a1a354119b68ab94ac303a96c31188fb9089585770ba37462d0f2db9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectshopworkercustomizetime"
title: "FB1ObjectShopWorkerCustomizeTime"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:36+00:00"
content_sha256: "71e2637115a111c723cbdef85c9ba310b7ace0beae20ec58acc2a6863b711b85"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectshopworkercustomizetime"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores the customized operating hours and days for a shop worker's schedule.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CloseHour``integer`The hour of day (1-24) when the shop closes.`OpenHour``integer`The hour of day (0-23) when the shop opens.`OpenWeekDayList``table<EB1DayOfWeek, boolean>`The set of weekdays on which the shop is open. |
| --- |
| `CloseHour``integer`The hour of day (1-24) when the shop closes.`OpenHour``integer`The hour of day (0-23) when the shop opens.`OpenWeekDayList``table<EB1DayOfWeek, boolean>`The set of weekdays on which the shop is open. |
| `OpenHour``integer`The hour of day (0-23) when the shop opens.`OpenWeekDayList``table<EB1DayOfWeek, boolean>`The set of weekdays on which the shop is open. |
| `OpenWeekDayList``table<EB1DayOfWeek, boolean>`The set of weekdays on which the shop is open. |
