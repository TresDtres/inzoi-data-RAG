---
document_id: "44f26c5933dc8579670819097e274e5afbee63169e06bdac6bea6b702082cb29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2pseudosimulationmanager"
title: "FB2PseudoSimulationManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "cd9955fdc9ff80e83c8f73c1deb23f4d147a1fd6f4e018a30059437b9f3db046"
chunk: 4
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2pseudosimulationmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

ng map is kept; the same set is turned off again via ReapplyB2TickForTrackedAfterSave after the save completes. |
| `RestoreB2TickForDisabledEntities`OutTotalElapsedTicks: `integer`, OutMaxElapsedTicks: `integer``integer`Debug-only (UB2CheatManager::B2DebugDisableTickForSLOD2(false)). Re-enables only the entities still in the tracking map and clears it, then turns off the feature flag. Entities already re-enabled by other code are excluded from counts. Returns the number of entities actually re-enabled.`StaticRegisterTimelineSimulateOnlyTask` *(static)*InRequestContext: [`FB2TimelineSimulateOnlyRequestContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timelinesimulateonlyrequestcontext)`-``StaticUnregisterTimelineSimulateOnlyTask` *(static)*InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``TemporarilyRestoreB2TickForSave``-``-`Called on save entry. Prevents bTickEnabled=false from being permanently serialized while the cheat is active. The tracking map is kept; the same set is turned off again via ReapplyB2TickForTrackedAfterSave after the save completes. |
| `StaticRegisterTimelineSimulateOnlyTask` *(static)*InRequestContext: [`FB2TimelineSimulateOnlyRequestContext`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2timelinesimulateonlyrequestcontext)`-``StaticUnregisterTimelineSimulateOnlyTask` *(static)*InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``TemporarilyRestoreB2TickForSave``-``-`Called on save entry. Prevents bTickEnabled=false from being permanently serialized while the cheat is active. The tracking map is kept; the same set is turned off again via ReapplyB2TickForTrackedAfterSave after the save completes. |
| `StaticUnregisterTimelineSimulateOnlyTask` *(static)*InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``TemporarilyRestoreB2TickForSave``-``-`Called on save entry. Prevents bTickEnabled=false from being permanently serialized while the cheat is active. The tracking map is kept; the same set is turned off again via ReapplyB2TickForTrackedAfterSave after the save completes. |
| `TemporarilyRestoreB2TickForSave``-``-`Called on save entry. Prevents bTickEnabled=false from being permanently serialized while the cheat is active. The tracking map is kept; the same set is turned off again via ReapplyB2TickForTrackedAfterSave after the save completes. |

# Override points (6)

Implement these in Lua as `FB2PseudoSimulationManager.Override_Name = function(...) end`.
