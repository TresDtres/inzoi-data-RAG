---
document_id: "b4eef53902d81926c210cbccae6773fa1293bd6db330c96d8fee06bf512b8c62"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1notifyactivityfeedschedules"
title: "B1NotifyActivityFeedSchedules"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:55:44+00:00"
content_sha256: "75419d2534f555870d78249649123bae3cf83edc23f573d36fab7387578416da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1notifyactivityfeedschedules"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Defines the notification schedule for holiday ActivityFeed alerts, * specifying the start time and the ActivityFeed IDs for the day before and the day of the event.

| PropertyTypeDescriptionMetadataStartTimeint32Start time of the notification window in HHMM format (0 to 2359). Notifications are sent within StartTime ~ StartTime+30min.Category: B1NotifyActivityFeedSchedules ClampMax: 2359 ClampMin: 0PredayActivityFeedIdFNameActivityFeed ID to send notification on the day before this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.IdTodayActivityFeedIdFNameActivityFeed ID to send notification on the day of this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.Id |
| --- |
| StartTimeint32Start time of the notification window in HHMM format (0 to 2359). Notifications are sent within StartTime ~ StartTime+30min.Category: B1NotifyActivityFeedSchedules ClampMax: 2359 ClampMin: 0PredayActivityFeedIdFNameActivityFeed ID to send notification on the day before this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.IdTodayActivityFeedIdFNameActivityFeed ID to send notification on the day of this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.Id |
| PredayActivityFeedIdFNameActivityFeed ID to send notification on the day before this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.IdTodayActivityFeedIdFNameActivityFeed ID to send notification on the day of this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.Id |
| TodayActivityFeedIdFNameActivityFeed ID to send notification on the day of this event.Category: B1NotifyActivityFeedSchedules Foreign: ActivityFeed.Id |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)
