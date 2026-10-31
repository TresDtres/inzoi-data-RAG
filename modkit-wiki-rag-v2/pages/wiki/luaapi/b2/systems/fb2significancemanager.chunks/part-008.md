---
document_id: "5a27283f7a30eedb20bc3e495c7b72643a891754a3c7d6b6b5bcf167e5bf0413"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2significancemanager"
title: "FB2SignificanceManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "dad3cd3676299a87abf7ca51750d5750d88f8403b0bc658e48348e1082d84e6f"
chunk: 8
chunk_count: 8
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2significancemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Unregisters Entity.`UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell.`UpdateEntityCellById` *(static)*EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell By Id. |
| `UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell.`UpdateEntityCellById` *(static)*EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell By Id. |
| `UpdateEntityCellById` *(static)*EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell By Id. |

# Override points (8)

Implement these in Lua as `FB2SignificanceManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_BindRegisterUnregisterCallback``-``-``Override_BuildBuckets_Parallel`TaskNum: `integer`, InPlayerFoci: `FVector`, InCameraFoci: `FVector``-``Override_FlushPendingRegisters``-``-``Override_OnLazyTask`DeltaTime: `number``-`Callback invoked on Lazy Task.`Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| --- |
| `Override_BindRegisterUnregisterCallback``-``-``Override_BuildBuckets_Parallel`TaskNum: `integer`, InPlayerFoci: `FVector`, InCameraFoci: `FVector``-``Override_FlushPendingRegisters``-``-``Override_OnLazyTask`DeltaTime: `number``-`Callback invoked on Lazy Task.`Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_BuildBuckets_Parallel`TaskNum: `integer`, InPlayerFoci: `FVector`, InCameraFoci: `FVector``-``Override_FlushPendingRegisters``-``-``Override_OnLazyTask`DeltaTime: `number``-`Callback invoked on Lazy Task.`Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_FlushPendingRegisters``-``-``Override_OnLazyTask`DeltaTime: `number``-`Callback invoked on Lazy Task.`Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_OnLazyTask`DeltaTime: `number``-`Callback invoked on Lazy Task.`Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_RebuildHierarchyImmediately``-``-``Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_RequestHierarchyRecenter`NewOrigin: `FVector``-`Requests Hierarchy Recenter.`Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_UnbindRegisterUnregisterCallback``-``-``Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
| `Override_UpdateEntityCell`EntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InNewLocation: `FVector``-`Updates Entity Cell. |
