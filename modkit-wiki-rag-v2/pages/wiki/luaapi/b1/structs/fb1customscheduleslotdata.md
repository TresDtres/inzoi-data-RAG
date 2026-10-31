---
document_id: "05df01806156bc6f0dce1dd836a72cfba025e3230d43abab766c045074e7f5d3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customscheduleslotdata"
title: "FB1CustomScheduleSlotData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:38+00:00"
content_sha256: "165bc6e2a660e5e618437a6d4094fac175a5e017d3cdae491551716c2d157dd3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1customscheduleslotdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a custom schedule slot for a specific time range with per-role action assignments.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`ActivityId``string`The Id of the SchoolActivity used when this slot was built. Copied from BuildClassScheduleData. May be NAME_None for non-school Careers. Used to identify the activity kind (e.g. an exam slot) on slot entry.`DisplayName``string`The display name for this slot shown in the UI (e.g., homeroom, class time).`EndHHMM``integer`The end time of this schedule slot in HHMM format.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)The school phase this slot represents (Class, LunchBreak, Exam, etc.).`RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| --- |
| `ActivityId``string`The Id of the SchoolActivity used when this slot was built. Copied from BuildClassScheduleData. May be NAME_None for non-school Careers. Used to identify the activity kind (e.g. an exam slot) on slot entry.`DisplayName``string`The display name for this slot shown in the UI (e.g., homeroom, class time).`EndHHMM``integer`The end time of this schedule slot in HHMM format.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)The school phase this slot represents (Class, LunchBreak, Exam, etc.).`RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `DisplayName``string`The display name for this slot shown in the UI (e.g., homeroom, class time).`EndHHMM``integer`The end time of this schedule slot in HHMM format.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)The school phase this slot represents (Class, LunchBreak, Exam, etc.).`RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `EndHHMM``integer`The end time of this schedule slot in HHMM format.`Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)The school phase this slot represents (Class, LunchBreak, Exam, etc.).`RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `Phase`[`EB1SchoolPhase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1schoolphase)The school phase this slot represents (Class, LunchBreak, Exam, etc.).`RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `RoleActions``FB1ScheduleSlotRoleActionData[]`Per-role actions for this time slot The list of role-specific actions to perform during this schedule slot.`SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `SlotId``string`Slot ID copied from the preset's CustomScheduleSlotPresetData::Id. Used to match against SchoolClassSchedule.`StartHHMM``integer`The start time of this schedule slot in HHMM format. |
| `StartHHMM``integer`The start time of this schedule slot in HHMM format. |
