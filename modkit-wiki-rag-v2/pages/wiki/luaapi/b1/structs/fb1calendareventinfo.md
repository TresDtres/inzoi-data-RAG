---
document_id: "58511108707207a09bbe8917132b166d087fd3a428e266dc4e18ce1e6aee7320"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1calendareventinfo"
title: "FB1CalendarEventInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:14+00:00"
content_sha256: "025f589cdd94e0e86abd485000395564507436a378fd3ec828a05a4e71ad5808"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1calendareventinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Holds runtime information about a single calendar event instance, including its ID, type, owner entity, time window, and site location.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (8)

| NameTypeDescription`CalendarEventEndTime``FDateTime`End date and time of this calendar event.`CalendarEventId``string`Identifier of this calendar event.`CalendarEventStartTime``FDateTime`Start date and time of this calendar event.`CalendarEventType`[`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)Type classification of this calendar event.`CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| --- |
| `CalendarEventEndTime``FDateTime`End date and time of this calendar event.`CalendarEventId``string`Identifier of this calendar event.`CalendarEventStartTime``FDateTime`Start date and time of this calendar event.`CalendarEventType`[`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)Type classification of this calendar event.`CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `CalendarEventId``string`Identifier of this calendar event.`CalendarEventStartTime``FDateTime`Start date and time of this calendar event.`CalendarEventType`[`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)Type classification of this calendar event.`CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `CalendarEventStartTime``FDateTime`Start date and time of this calendar event.`CalendarEventType`[`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)Type classification of this calendar event.`CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `CalendarEventType`[`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)Type classification of this calendar event.`CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `CustomEventName``string`Custom event name set by the user (used for SocialEvent). Empty means use default name from TableRow.`OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `OwnerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the owner associated with this event.`ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `ParticipantEntityIds``FB1EntityId[]`Entity IDs of household members participating in this event (sorted by age, used for SocialEvent).`SiteId``string`Identifier of the site where this event occurs. |
| `SiteId``string`Identifier of the site where this event occurs. |
