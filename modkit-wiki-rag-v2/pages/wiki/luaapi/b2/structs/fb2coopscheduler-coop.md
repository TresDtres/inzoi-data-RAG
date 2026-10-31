---
document_id: "579767b45ac1e51d33d2e61cea4839f6f4d140bfd2fb2827d5e7db42d88e5fa2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler-coop"
title: "FB2CoopScheduler_Coop"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:34+00:00"
content_sha256: "faeaed30d3806e864702f49a7ee8f1add476ef4b8723ee1c22b8682552d4f8b5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2coopscheduler-coop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- No description available.

# Metadata

| FieldValueKind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler) |
| --- |
| Kind`struct`EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler) |
| EnvironmentB2 - SimulationCategory`structs`Extends[`FB2CoopScheduler`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler) |
| Category`structs`Extends[`FB2CoopScheduler`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler) |
| Extends[`FB2CoopScheduler`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2coopscheduler) |

# Properties (9)

| NameTypeDescription`CoopType`[`EB1CoopType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cooptype)`CurrentTaskStep``integer``PendingAsyncLoadMap``table<FB1EntityId, EB1CoopAsyncLoadState>``PendingTasks``FB2CoopPendingTask[]``RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| --- |
| `CoopType`[`EB1CoopType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1cooptype)`CurrentTaskStep``integer``PendingAsyncLoadMap``table<FB1EntityId, EB1CoopAsyncLoadState>``PendingTasks``FB2CoopPendingTask[]``RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `CurrentTaskStep``integer``PendingAsyncLoadMap``table<FB1EntityId, EB1CoopAsyncLoadState>``PendingTasks``FB2CoopPendingTask[]``RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `PendingAsyncLoadMap``table<FB1EntityId, EB1CoopAsyncLoadState>``PendingTasks``FB2CoopPendingTask[]``RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `PendingTasks``FB2CoopPendingTask[]``RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `RoleCharacterMap``table<string, FB1EntityId>`Data that changes during co-op execution.`RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `RoleInfos``FB1RoleInfo[]``TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `TaskInfos``FB1TaskInfo[]`DT const data.`WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `WaitFinishTasks``FB2CoopWaitFinishData[]`Added on AddInteractionQueue success, removed on finish in OnCharacterFinishedTask.`ZoiGroupFlags``integer` |
| `ZoiGroupFlags``integer` |
