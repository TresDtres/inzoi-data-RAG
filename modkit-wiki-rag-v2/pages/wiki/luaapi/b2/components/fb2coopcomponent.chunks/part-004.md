---
document_id: "710b895dfd804d43ece83a46ba1c3a42094a075f1281071613ae688d4ace497b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2coopcomponent"
title: "FB2CoopComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:12+00:00"
content_sha256: "a2d801b7acadbe367106202ba2fe3f7000758c861283dd809a83057a4d4194cb"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/components/fb2coopcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

boolean``-`Sets Coop Proceed.`SetPlayingCoop`InValue: `boolean``-`Sets Playing Coop. |
| `SetPlayingCoop`InValue: `boolean``-`Sets Playing Coop. |

# Override points (7)

Implement these in Lua as `FB2CoopComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnAsyncLoadFinished`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Async Load Finished.`Override_OnEndCoop``-``-`Callback invoked on End Coop.`Override_OnFinishedActionContext``-``-`Callback invoked on Finished Action Context.`Override_OnLeaveZoiGroup``-``-`Callback invoked on Leave Zoi Group.`Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| --- |
| `Override_OnAsyncLoadFinished`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Async Load Finished.`Override_OnEndCoop``-``-`Callback invoked on End Coop.`Override_OnFinishedActionContext``-``-`Callback invoked on Finished Action Context.`Override_OnLeaveZoiGroup``-``-`Callback invoked on Leave Zoi Group.`Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_OnEndCoop``-``-`Callback invoked on End Coop.`Override_OnFinishedActionContext``-``-`Callback invoked on Finished Action Context.`Override_OnLeaveZoiGroup``-``-`Callback invoked on Leave Zoi Group.`Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_OnFinishedActionContext``-``-`Callback invoked on Finished Action Context.`Override_OnLeaveZoiGroup``-``-`Callback invoked on Leave Zoi Group.`Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_OnLeaveZoiGroup``-``-`Callback invoked on Leave Zoi Group.`Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_OnStartCoop`InSchedulerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Start Coop.`Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_RequestCancelCurrentCoop`InCoopResult: [`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)`-`Requests Cancel Current Coop.`Override_ResetActionContexts``-``-`Resets Action Contexts. |
| `Override_ResetActionContexts``-``-`Resets Action Contexts. |
