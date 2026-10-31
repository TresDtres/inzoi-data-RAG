---
document_id: "dec6c8058088d1939b9ecbf9a728152ba865f27b210939d4755a3c67a25daec9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timeline"
title: "FB1Timeline"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:39+00:00"
content_sha256: "fd875482b3bae9834084341f1ff5a5f60ed53949a5b39503866263fa7a83f859"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1timeline"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a full timeline containing multiple schedules, associated with a company and available days.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`AvaliableDayOfWeeksBitFlags``integer`Bit flags representing which days of the week this timeline is active.`CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
| --- |
| `AvaliableDayOfWeeksBitFlags``integer`Bit flags representing which days of the week this timeline is active.`CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
| `CompanyId``string`Company ID this timeline is associated with.`Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
| `Name``string`Name identifier for this timeline.`OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
| `OverrideTimelinePriority`[`EB1OverrideTimelinePriorityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1overridetimelineprioritytype)Priority type for override timelines (e.g., social events, fire events).`Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
| `Priority``integer`Priority value used to resolve conflicts when multiple timelines apply. |
