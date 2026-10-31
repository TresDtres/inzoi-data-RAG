---
document_id: "62e44b61ac529fb96c2aec10c9623063593dd510e35e5147ae51b262631e225b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base"
title: "FB2Action_Base"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "18b8e4824b47b20fa05140b62d5591ed910e14ab1769937b97496318e00254c1"
chunk: 20
chunk_count: 20
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-base"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

nmergetype)`-`Sets Merge Type.`ShouldCancelInteraction``-``boolean`Returns whether it should Cancel Interaction.`TryFinish`InFailReason: [`EB2InteractionFailReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2interactionfailreason)`-``TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SetAutoInsertActionType`InType: [`EB2ActionAutoInsertType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionautoinserttype)`-`Sets Auto Insert Action Type.`SetMergeType`InMergeType: [`EB2ActionMergeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionmergetype)`-`Sets Merge Type.`ShouldCancelInteraction``-``boolean`Returns whether it should Cancel Interaction.`TryFinish`InFailReason: [`EB2InteractionFailReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2interactionfailreason)`-``TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `SetMergeType`InMergeType: [`EB2ActionMergeType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionmergetype)`-`Sets Merge Type.`ShouldCancelInteraction``-``boolean`Returns whether it should Cancel Interaction.`TryFinish`InFailReason: [`EB2InteractionFailReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2interactionfailreason)`-``TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `ShouldCancelInteraction``-``boolean`Returns whether it should Cancel Interaction.`TryFinish`InFailReason: [`EB2InteractionFailReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2interactionfailreason)`-``TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `TryFinish`InFailReason: [`EB2InteractionFailReason`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2interactionfailreason)`-``TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |
| `TryRunNotifyScript`InSelfEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTargetEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-` |

# Override points (5)

Implement these in Lua as `FB2Action_Base.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
