---
document_id: "da0beb0ac2730e40e49d4003cd3c86c18208cc4830dbf44cde3484712ba57833"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-walkto"
title: "FB2Action_WalkTo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:08+00:00"
content_sha256: "8b2c0ae7a119d40ee79012c8af458eb5c1d2af87f17aa8ab1263179d28fcf19b"
chunk: 7
chunk_count: 7
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-walkto"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

| FunctionParametersReturnsDescription`GetActionOneLoopPlayLength``-``number`Returns Action One Loop Play Length.`GetVectorParameter`InType: [`EB2ActionVectorParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionvectorparamtype), OutValue: `FVector``boolean`Returns Vector Parameter.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| --- |
| `GetActionOneLoopPlayLength``-``number`Returns Action One Loop Play Length.`GetVectorParameter`InType: [`EB2ActionVectorParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionvectorparamtype), OutValue: `FVector``boolean`Returns Vector Parameter.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `GetVectorParameter`InType: [`EB2ActionVectorParamType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2actionvectorparamtype), OutValue: `FVector``boolean`Returns Vector Parameter.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `OnPaused``-``-`Callback invoked on Paused.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick.`SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `SetActiveScheduleWalkToTeleportExceptPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Except Possessed Zoi.`SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |
| `SetActiveScheduleWalkToTeleportPossessedZoi` *(static)*bActive: `boolean``-`Sets Active Schedule Walk To Teleport Possessed Zoi. |

# Override points (4)

Implement these in Lua as `FB2Action_WalkTo.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
