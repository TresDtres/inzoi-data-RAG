---
document_id: "5cccef7658cb71c2586c7d28afe91acd2c2ec6a2aaf84b3974e9703a880dab17"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanimsleep"
title: "FB2Action_PlayAnimSleep"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:05+00:00"
content_sha256: "c5b24e7e60728e2f8f75a6531637c045063469ef941e7da383e8951c8cb33859"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-playanimsleep"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- PlayAnimSleep action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlayAnimSleep')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlayAnimSleep')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlayAnimSleep')` |
| Category`actions`Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlayAnimSleep')` |
| Extends[`FB2Action_PlayAnim`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim)Require`require('Actions.B2Action_PlayAnimSleep')` |
| Require`require('Actions.B2Action_PlayAnimSleep')` |

# Functions (3)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play. |
| `OnPlay``-``-`Callback invoked on Play. |

# Override points (3)

Implement these in Lua as `FB2Action_PlayAnimSleep.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior. |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior. |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior. |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior. |
