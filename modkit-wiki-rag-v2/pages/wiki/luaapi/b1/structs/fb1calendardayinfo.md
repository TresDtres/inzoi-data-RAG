---
document_id: "f8d326f436d78a0d651f2214daa5e0e5a653a2d8de3a9c7ed2db5b90571b99b1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1calendardayinfo"
title: "FB1CalendarDayInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:14+00:00"
content_sha256: "58f8ec9ebf4724d05a7f27a0d7f3ce7aa2bc35276bf327ec31ccc8637624a89f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1calendardayinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Contains all calendar information for a single game day, including the day of week, season, and grouped event data.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CalendarEventInfoMap``table<EB1CalendarEventGroupType, FB1CalendarEventGroupInfos>`Map from event group type to its grouped event infos.`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week for this calendar day.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season applicable to this calendar day. |
| --- |
| `CalendarEventInfoMap``table<EB1CalendarEventGroupType, FB1CalendarEventGroupInfos>`Map from event group type to its grouped event infos.`DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week for this calendar day.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season applicable to this calendar day. |
| `DayOfWeek`[`EB1DayOfWeek`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1dayofweek)Day of the week for this calendar day.`Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season applicable to this calendar day. |
| `Season`[`EB1SeasonType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1seasontype)Season applicable to this calendar day. |
