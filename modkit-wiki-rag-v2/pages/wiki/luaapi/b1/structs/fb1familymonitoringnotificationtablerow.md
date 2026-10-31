---
document_id: "31173c0bfd5b89e25ab158bbd7636bfe3dd36c1810a69e31895a0254e791de29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1familymonitoringnotificationtablerow"
title: "FB1FamilyMonitoringNotificationTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:49+00:00"
content_sha256: "f351ef7e699e1e72d97c53b9f68e1c571b1296f84136dfc7745820e1325d62ef"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1familymonitoringnotificationtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a family/household monitoring notification entry, specifying notification type, display text, icon, and behavior flags for alerts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`DescTextId``string`Localized text ID for the notification description body.`Icon``UObject`Icon asset (Texture2D or SlateTextureAtlasInterface) shown for this notification.`TitleTextId``string`Localized text ID for the notification title.`Type`[`EB1HouseholdMonitoringNotificationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdmonitoringnotificationtype)Notification category, affects how text formatting is applied.`bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| --- |
| `DescTextId``string`Localized text ID for the notification description body.`Icon``UObject`Icon asset (Texture2D or SlateTextureAtlasInterface) shown for this notification.`TitleTextId``string`Localized text ID for the notification title.`Type`[`EB1HouseholdMonitoringNotificationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdmonitoringnotificationtype)Notification category, affects how text formatting is applied.`bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| `Icon``UObject`Icon asset (Texture2D or SlateTextureAtlasInterface) shown for this notification.`TitleTextId``string`Localized text ID for the notification title.`Type`[`EB1HouseholdMonitoringNotificationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdmonitoringnotificationtype)Notification category, affects how text formatting is applied.`bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| `TitleTextId``string`Localized text ID for the notification title.`Type`[`EB1HouseholdMonitoringNotificationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdmonitoringnotificationtype)Notification category, affects how text formatting is applied.`bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| `Type`[`EB1HouseholdMonitoringNotificationType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1householdmonitoringnotificationtype)Notification category, affects how text formatting is applied.`bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| `bIsImportantAlert``boolean`If true, this notification is highlighted and overrides any currently displayed notification.`bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
| `bOpenHouseholdMonitoringUI``boolean`If true, the Household Monitoring UI is automatically opened when this notification is received. |
