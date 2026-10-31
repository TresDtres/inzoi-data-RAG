---
document_id: "e412a48f06dfb33ca1092fd2eb035cbf5720f958431942c563b6a59aab58f788"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1scheduledstat"
title: "FB1ScheduledStat"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:19+00:00"
content_sha256: "766fa0ca52fe1da59a43b3f5f674e18b1f29b5a19a36646669910a8fbc12f766"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1scheduledstat"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines a scheduled stat restriction, specifying the stat and its active time window on weekdays and weekends.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`From``integer`The starting hour (0-23) of the scheduled window.`StatId``string`The ID of the stat this schedule applies to.`To``integer`The ending hour (1-24) of the scheduled window.`Weekdays``boolean`Whether this schedule is active on weekdays.`Weekend``boolean`Whether this schedule is active on weekends. |
| --- |
| `From``integer`The starting hour (0-23) of the scheduled window.`StatId``string`The ID of the stat this schedule applies to.`To``integer`The ending hour (1-24) of the scheduled window.`Weekdays``boolean`Whether this schedule is active on weekdays.`Weekend``boolean`Whether this schedule is active on weekends. |
| `StatId``string`The ID of the stat this schedule applies to.`To``integer`The ending hour (1-24) of the scheduled window.`Weekdays``boolean`Whether this schedule is active on weekdays.`Weekend``boolean`Whether this schedule is active on weekends. |
| `To``integer`The ending hour (1-24) of the scheduled window.`Weekdays``boolean`Whether this schedule is active on weekdays.`Weekend``boolean`Whether this schedule is active on weekends. |
| `Weekdays``boolean`Whether this schedule is active on weekdays.`Weekend``boolean`Whether this schedule is active on weekends. |
| `Weekend``boolean`Whether this schedule is active on weekends. |
