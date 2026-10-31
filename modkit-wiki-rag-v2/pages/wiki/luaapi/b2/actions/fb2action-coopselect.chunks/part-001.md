---
document_id: "5cd20d856113e78a17a7af5e7a989607503c1d41c769d4fcb39d5e980655dc6b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-coopselect"
title: "FB2Action_CoopSelect"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:01+00:00"
content_sha256: "918e75f09f0e6e2f38b50d4b3f0c2aec162194eb9543d676b09dd9dcb458223d"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-coopselect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- CoopSelect action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_CoopSelect')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_CoopSelect')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_CoopSelect')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_CoopSelect')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_CoopSelect')` |
| Require`require('Actions.B2Action_CoopSelect')` |

# Properties (7)

| NameTypeDescription`CoopId``string`coop table row id to select participants for, from InAction.S1 or the current interaction's coop-start info`InteractionBagId``string`current interaction bag id, cached for coop request params and the selection UI packet`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop start attempt, used to build the result toast message`ZoiGroupFlags``integer`zoi-group flag bitmask copied from the interaction bag row, forwarded to the coop request`bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| --- |
| `CoopId``string`coop table row id to select participants for, from InAction.S1 or the current interaction's coop-start info`InteractionBagId``string`current interaction bag id, cached for coop request params and the selection UI packet`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop start attempt, used to build the result toast message`ZoiGroupFlags``integer`zoi-group flag bitmask copied from the interaction bag row, forwarded to the coop request`bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `InteractionBagId``string`current interaction bag id, cached for coop request params and the selection UI packet`LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop start attempt, used to build the result toast message`ZoiGroupFlags``integer`zoi-group flag bitmask copied from the interaction bag row, forwarded to the coop request`bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `LastCoopResult`[`EB1CoopResult`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1coopresult)result of the last coop start attempt, used to build the result toast message`ZoiGroupFlags``integer`zoi-group flag bitmask copied from the interaction bag row, forwarded to the coop request`bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `ZoiGroupFlags``integer`zoi-group flag bitmask copied from the interaction bag row, forwarded to the coop request`bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `bIsZoiGroupInteraction``boolean`whether the current interaction was triggered as a user-selected zoi-group coop, used to pick the coop request reason`bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `bRestore``boolean`whether this action is being resumed mid-play from a save/restore, so redundant toast/UI cleanup and result reporting are skipped`bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |
| `bSendPacket``boolean`whether a coop-select UI packet was sent, gating whether OnFinish/OnCanceled must unsubscribe/hide UI and whether OnTick auto-finishes |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_CoopSelect.Override_Name = function(...) end`.
