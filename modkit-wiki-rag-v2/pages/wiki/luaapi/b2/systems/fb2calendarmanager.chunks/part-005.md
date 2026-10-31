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
chunk: 5
chunk_count: 6
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2calendarmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

ed.`RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `IsWorldCalendarEventActive`InType: [`EB1CalendarEventType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1calendareventtype)`boolean`Returns whether World Calendar Event Active.`OnChangePossessHouseholdEntityId`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Entity Id.`OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed.`OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `OnChangePossessHouseholdEntityId`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Entity Id.`OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed.`OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `OnDayChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Day Changed.`OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `OnMinuteChanged`InPrevTime: `FDateTime`, InCurrentTime: `FDateTime``-`Callback invoked on Minute Changed.`RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `RefreshCalendarForSeasonChange``-``-``RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `RefreshHouseholdCalendarEvents``-``-``StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `StartRegionalFestival`InCalendarEventId: `string``-`Starts Regional Festival.`StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `StartWorldCalendarEvent`InCalendarEventId: `string``-`Starts World Calendar Event.`TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |
| `TryGetDaysUntilCalendarEvent`InCalendarEventId: `string`, OutDaysUntil: `integer``boolean` |

# Override points (11)

Implement these in Lua as `FB2CalendarManager.Override_Name = function(...) end`.
