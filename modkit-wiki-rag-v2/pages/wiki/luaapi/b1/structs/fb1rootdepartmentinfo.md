---
document_id: "05c4abf8c7148e0123179d089f6ae1be83351992773d955824c289aa3796c1f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1rootdepartmentinfo"
title: "FB1RootDepartmentInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:17+00:00"
content_sha256: "d5d3e32408c5cc36d63b429207ec80c9fbf492eff81b4111e19efeb801996b2c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1rootdepartmentinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Stores root department runtime state including seat pool, employee-seat assignments, and headcount.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (5)

| NameTypeDescription`EmployeeSeatMap``table<FB1EntityId, FB1EntityId>`<employee id, seat id> Map of employee entity IDs to their assigned seat entity IDs.`EmptyHeadcount``integer`Number of currently empty positions in this root department.`IsFixedDesk``boolean`Whether employees in this department use fixed desks.`SeatPool``table<FB1EntityId, boolean>` Map of seat object IDs to their availability status.`TotalHeadcount``integer`Total number of positions in this root department. |
| --- |
| `EmployeeSeatMap``table<FB1EntityId, FB1EntityId>`<employee id, seat id> Map of employee entity IDs to their assigned seat entity IDs.`EmptyHeadcount``integer`Number of currently empty positions in this root department.`IsFixedDesk``boolean`Whether employees in this department use fixed desks.`SeatPool``table<FB1EntityId, boolean>` Map of seat object IDs to their availability status.`TotalHeadcount``integer`Total number of positions in this root department. |
| `EmptyHeadcount``integer`Number of currently empty positions in this root department.`IsFixedDesk``boolean`Whether employees in this department use fixed desks.`SeatPool``table<FB1EntityId, boolean>` Map of seat object IDs to their availability status.`TotalHeadcount``integer`Total number of positions in this root department. |
| `IsFixedDesk``boolean`Whether employees in this department use fixed desks.`SeatPool``table<FB1EntityId, boolean>` Map of seat object IDs to their availability status.`TotalHeadcount``integer`Total number of positions in this root department. |
| `SeatPool``table<FB1EntityId, boolean>` Map of seat object IDs to their availability status.`TotalHeadcount``integer`Total number of positions in this root department. |
| `TotalHeadcount``integer`Total number of positions in this root department. |
