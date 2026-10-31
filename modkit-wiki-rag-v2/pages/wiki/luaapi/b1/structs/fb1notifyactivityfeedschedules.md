---
document_id: "b4befd8fbb4d4d99cba9353063574e3a88c0e24a33668d5ffb00d79d580aed65"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1notifyactivityfeedschedules"
title: "FB1NotifyActivityFeedSchedules"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:34+00:00"
content_sha256: "064c695ec94f49ff1950193df6b3ee455e62c667d7e89aa2e6a521c916ea5012"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1notifyactivityfeedschedules"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the notification schedule for holiday ActivityFeed alerts, specifying the start time and the ActivityFeed IDs for the day before and the day of the event.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`PredayActivityFeedId``string`ActivityFeed ID to send notification on the day before this event.`StartTime``integer`Start time of the notification window in HHMM format (0 to 2359). Notifications are sent within StartTime ~ StartTime+30min.`TodayActivityFeedId``string`ActivityFeed ID to send notification on the day of this event. |
| --- |
| `PredayActivityFeedId``string`ActivityFeed ID to send notification on the day before this event.`StartTime``integer`Start time of the notification window in HHMM format (0 to 2359). Notifications are sent within StartTime ~ StartTime+30min.`TodayActivityFeedId``string`ActivityFeed ID to send notification on the day of this event. |
| `StartTime``integer`Start time of the notification window in HHMM format (0 to 2359). Notifications are sent within StartTime ~ StartTime+30min.`TodayActivityFeedId``string`ActivityFeed ID to send notification on the day of this event. |
| `TodayActivityFeedId``string`ActivityFeed ID to send notification on the day of this event. |
