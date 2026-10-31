---
document_id: "4667b92b8567ff1ca70d9dde43e504dd93e549409f369635f3db7ef341d3e832"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinetablerow"
title: "FB1TimelineTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:39+00:00"
content_sha256: "d019b2110b202ac0fd0b8059ab51ee812a903e2422602191b52e24ba22562b33"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1timelinetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a timeline with its available days, priority, company, and list of schedule details.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (9)

| NameTypeDescription`AvaliableDayOfWeeks``EB1DayOfWeek[]`Days of the week this timeline is active.`AvaliableDayOfWeeksBitFlags``integer`Bit flags representing available days; generated from AvaliableDayOfWeeks during load.`CityId``string`City (level name) this timeline is restricted to.`CompanyId``string`Company this timeline is associated with.`ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| --- |
| `AvaliableDayOfWeeks``EB1DayOfWeek[]`Days of the week this timeline is active.`AvaliableDayOfWeeksBitFlags``integer`Bit flags representing available days; generated from AvaliableDayOfWeeks during load.`CityId``string`City (level name) this timeline is restricted to.`CompanyId``string`Company this timeline is associated with.`ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `AvaliableDayOfWeeksBitFlags``integer`Bit flags representing available days; generated from AvaliableDayOfWeeks during load.`CityId``string`City (level name) this timeline is restricted to.`CompanyId``string`Company this timeline is associated with.`ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `CityId``string`City (level name) this timeline is restricted to.`CompanyId``string`Company this timeline is associated with.`ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `CompanyId``string`Company this timeline is associated with.`ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `ConditionId``string`Condition that must be met for this timeline to be selected.`IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `IsAutoBuildSchedule``boolean`If true, schedules within this timeline are built automatically from career data.`NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `NameTextId``string`Text ID for the timeline's display name.`Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `Priority``integer`Priority value for resolving conflicts when multiple timelines are applicable.`Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
| `Schedules``FB1ScheduleDetail[]`Ordered list of schedule segments that compose this timeline. |
