---
document_id: "b6c53cdfb7db2fe9968491c138c3cd38df9705760dfbd3bda4a1c4606de901c6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphintersectionschedule"
title: "FB1CityGraphIntersectionSchedule"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:27+00:00"
content_sha256: "8806233a2b041a2c98f6b731daf0d4458bab9a25854ef0a2ecd1e2affbd136ed"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphintersectionschedule"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a single phase of an intersection traffic signal schedule, specifying the green-light duration, yellow-light duration, and the lanes that are open.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`Duration``number`Duration in seconds of the green signal phase for this schedule entry.`LaneIndices``integer[]`List of lane indices that are open during this signal phase.`SoftCloseDuration``number`Duration in seconds of the yellow signal phase for this schedule entry. |
| --- |
| `Duration``number`Duration in seconds of the green signal phase for this schedule entry.`LaneIndices``integer[]`List of lane indices that are open during this signal phase.`SoftCloseDuration``number`Duration in seconds of the yellow signal phase for this schedule entry. |
| `LaneIndices``integer[]`List of lane indices that are open during this signal phase.`SoftCloseDuration``number`Duration in seconds of the yellow signal phase for this schedule entry. |
| `SoftCloseDuration``number`Duration in seconds of the yellow signal phase for this schedule entry. |
