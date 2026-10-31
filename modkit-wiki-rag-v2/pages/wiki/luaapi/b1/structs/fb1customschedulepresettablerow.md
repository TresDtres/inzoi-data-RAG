---
document_id: "b5b55daa9f6aeb82ae56e788a278212cbd35bbf157ab480e7744706ae8b27d72"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customschedulepresettablerow"
title: "FB1CustomSchedulePresetTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:37+00:00"
content_sha256: "4beee02b5cbf0580a26056f30dc59844740fccfa4894349ebd4ce0078e6037fd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1customschedulepresettablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- DataTable row defining a complete custom schedule preset, including role assignments and slot definitions.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (4)

| NameTypeDescription`ActorRoleAssignments``FB1ScheduleActorRoleAssignment[]`Required role preset list (role + actor count) The list of actor role assignments required for this schedule preset.`DescTextId``string`The UI description text ID for this schedule preset.`DisplayTextId``string`The UI display text ID for this schedule preset.`ScheduleSlotPresetDatas``FB1CustomScheduleSlotPresetData[]`Timetable The list of schedule slot presets that make up this preset's timetable. |
| --- |
| `ActorRoleAssignments``FB1ScheduleActorRoleAssignment[]`Required role preset list (role + actor count) The list of actor role assignments required for this schedule preset.`DescTextId``string`The UI description text ID for this schedule preset.`DisplayTextId``string`The UI display text ID for this schedule preset.`ScheduleSlotPresetDatas``FB1CustomScheduleSlotPresetData[]`Timetable The list of schedule slot presets that make up this preset's timetable. |
| `DescTextId``string`The UI description text ID for this schedule preset.`DisplayTextId``string`The UI display text ID for this schedule preset.`ScheduleSlotPresetDatas``FB1CustomScheduleSlotPresetData[]`Timetable The list of schedule slot presets that make up this preset's timetable. |
| `DisplayTextId``string`The UI display text ID for this schedule preset.`ScheduleSlotPresetDatas``FB1CustomScheduleSlotPresetData[]`Timetable The list of schedule slot presets that make up this preset's timetable. |
| `ScheduleSlotPresetDatas``FB1CustomScheduleSlotPresetData[]`Timetable The list of schedule slot presets that make up this preset's timetable. |
