---
document_id: "82a58677f1f24669f101602ed1c379759499d4aa0785c31f3c8dc815ad639eb4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careertimelineparam"
title: "FB1CareerTimelineParam"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:18+00:00"
content_sha256: "e303b7ec772fd277546078be4904e7778a5de0b9433d5abadaa16b42223673d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1careertimelineparam"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Parameters used to construct a career timeline, combining work-time data with timeline and destination-site info.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata) |
| Category`structs`Extends[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata) |
| Extends[`FB1CareerWorkTimeData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1careerworktimedata) |

# Properties (7)

| NameTypeDescription`CareerType`[`EB1CareerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careertype)The career type (e.g., HouseholdBiz) associated with this timeline param.`DestSiteName``string`Name of the destination site where this career takes place.`RabbitholeInteractionBagId``string`Interaction bag ID for the rabbit-hole (off-screen) work order added on non-remote work days; skipped on remote work days.`RemoteWorkDayFlags``integer`Bitmask of days with remote work. Bit 0=Mon, 1=Tue, ..., 6=Sun.`TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| --- |
| `CareerType`[`EB1CareerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1careertype)The career type (e.g., HouseholdBiz) associated with this timeline param.`DestSiteName``string`Name of the destination site where this career takes place.`RabbitholeInteractionBagId``string`Interaction bag ID for the rabbit-hole (off-screen) work order added on non-remote work days; skipped on remote work days.`RemoteWorkDayFlags``integer`Bitmask of days with remote work. Bit 0=Mon, 1=Tue, ..., 6=Sun.`TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `DestSiteName``string`Name of the destination site where this career takes place.`RabbitholeInteractionBagId``string`Interaction bag ID for the rabbit-hole (off-screen) work order added on non-remote work days; skipped on remote work days.`RemoteWorkDayFlags``integer`Bitmask of days with remote work. Bit 0=Mon, 1=Tue, ..., 6=Sun.`TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `RabbitholeInteractionBagId``string`Interaction bag ID for the rabbit-hole (off-screen) work order added on non-remote work days; skipped on remote work days.`RemoteWorkDayFlags``integer`Bitmask of days with remote work. Bit 0=Mon, 1=Tue, ..., 6=Sun.`TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `RemoteWorkDayFlags``integer`Bitmask of days with remote work. Bit 0=Mon, 1=Tue, ..., 6=Sun.`TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `TimelineId``string`ID of the timeline data table row to use for this career.`VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `VacationDayFlags``integer`Bitflag of vacation days. Bit index = (uint8)EB1DayOfWeek. Set bits are excluded from scheduling.`bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
| `bHolidayOff``boolean`Whether subject to holiday time-off (regular jobs or school). If true, the Career schedule is excluded on holidays. |
