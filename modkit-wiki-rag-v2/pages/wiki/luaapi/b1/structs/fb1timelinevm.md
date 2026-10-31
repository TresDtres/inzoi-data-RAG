---
document_id: "dc623ea65a0db40cef281d40bfdcd3d07a643b186de20bedb99cf30f091fbbc6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timelinevm"
title: "FB1TimelineVM"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:40+00:00"
content_sha256: "4c5efb68738e88c51b296768c2e8927fcb597e1895c4eabe39799b01c83f67de"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1timelinevm"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- B1-only timeline ViewModel - a read-only struct that value-copies FB1Timeline's TSharedPtr data. Used for packet transfer (B2->B1) and GameThread UI display. Prevents cross-thread TSharedPtr sharing.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (6)

| NameTypeDescription`AvaliableDayOfWeeksBitFlags``integer`Bit flags representing which days of the week this timeline is active.`CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| --- |
| `AvaliableDayOfWeeksBitFlags``integer`Bit flags representing which days of the week this timeline is active.`CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| `CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| `Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| `OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| `Priority``integer`Priority value used to resolve conflicts when multiple timelines apply.`Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
| `Schedules``FB1Schedule[]`Value-copied list of schedules belonging to this timeline. |
