---
document_id: "b91e66b70af059beda14507345dbbdc39edca1b46900d2ee31583f903b88a361"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2calendarmanager"
title: "FB2CalendarManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "ce90a1dc8e9fadc6421c1a96417800f8d37d98a45ab9615e502b163b28c642f1"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2calendarmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages the calendar and world-event schedule.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CalendarManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CalendarManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CalendarManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CalendarManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CalendarManager')` |
| Require`require('Systems.B2CalendarManager')` |

# Properties (6)

| NameTypeDescription`ActiveRegionalFestivals``table<string, FB1ActiveWorldCalendarEvent>``ActiveWorldEvent`[`FB1ActiveWorldCalendarEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activeworldcalendarevent)`CalendarDayInfos``FB1CalendarDayInfo[]``LastCalendarSeason`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)The season at the last calendar reset (used to detect season changes).`LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| --- |
| `ActiveRegionalFestivals``table<string, FB1ActiveWorldCalendarEvent>``ActiveWorldEvent`[`FB1ActiveWorldCalendarEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activeworldcalendarevent)`CalendarDayInfos``FB1CalendarDayInfo[]``LastCalendarSeason`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)The season at the last calendar reset (used to detect season changes).`LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| `ActiveWorldEvent`[`FB1ActiveWorldCalendarEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1activeworldcalendarevent)`CalendarDayInfos``FB1CalendarDayInfo[]``LastCalendarSeason`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)The season at the last calendar reset (used to detect season changes).`LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| `CalendarDayInfos``FB1CalendarDayInfo[]``LastCalendarSeason`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)The season at the last calendar reset (used to detect season changes).`LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| `LastCalendarSeason`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)The season at the last calendar reset (used to detect season changes).`LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| `LastPredayNotificationDate``integer`In-game date used to prevent duplicate holiday notifications.`LastTodayNotificationDate``integer` |
| `LastTodayNotificationDate``integer` |

# Functions (21)
