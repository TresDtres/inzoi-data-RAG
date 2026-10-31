---
document_id: "e810f8b1596dc3330b4f148d9d5feb5f381d81d692162b463ebc87bd3edbfcc0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdbizrecordentry"
title: "FB1HouseholdBizRecordEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:08+00:00"
content_sha256: "a4e7380bce24a4a85968dab076ede653afe269311b346ee39ee02125e40763e9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1householdbizrecordentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores a single business record entry containing a notification data snapshot and a flag indicating whether it is newly received.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`NotificationData`[`FB1HouseholdMonitoringNotificationData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdmonitoringnotificationdata)Notification data ready for direct UI display (includes TextId and name backups).`bIsNew``boolean`Whether this record entry is new (used to show a blue-dot indicator in the UI). |
| --- |
| `NotificationData`[`FB1HouseholdMonitoringNotificationData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1householdmonitoringnotificationdata)Notification data ready for direct UI display (includes TextId and name backups).`bIsNew``boolean`Whether this record entry is new (used to show a blue-dot indicator in the UI). |
| `bIsNew``boolean`Whether this record entry is new (used to show a blue-dot indicator in the UI). |
