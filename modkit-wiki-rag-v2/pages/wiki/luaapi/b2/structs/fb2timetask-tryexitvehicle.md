---
document_id: "48393536a45fff8a6b4707995a838925fbca3e160acc84e02c94cf4e6cc4fb5a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-tryexitvehicle"
title: "FB2TimeTask_TryExitVehicle"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:55+00:00"
content_sha256: "2dbab62e61792bcdba746a4b305455c97d61d4740cc028491b6c7d388d433db4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2timetask-tryexitvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- TimeTask that checks for vehicle exit every 3 seconds while a non-owner NPC drives manually. Registered on GetIn (ExecuteCount=-1, IntervalTicks=3s) and released on GetOut. IsTransient=true: the boarding state is serialized in VehicleContext and re-registered in GetIn on Restore.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Category`structs`Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |
| Extends[`FB2TimeTask_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timetask-base) |

# Properties (1)

| NameTypeDescription`PassengerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
| --- |
| `PassengerEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid) |
