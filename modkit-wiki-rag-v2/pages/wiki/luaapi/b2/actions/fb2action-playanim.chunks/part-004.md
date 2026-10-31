---
document_id: "040bcb0fcc2094321ffe0037f248d5dc8031d6fcda4996de30477f2510d4f2c0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-playanim"
title: "FB2Action_PlayAnim"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:04+00:00"
content_sha256: "3960202dd5595d0a229c4e0550af122aa91f1bab9a07c593eaa8d0ce1da27b3f"
chunk: 4
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-playanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

length of the resolved montage, used in progress-time and one-loop-length calculations |
| `RequiredPostureId``string`For SafeMove. Need Not to Save`SectionName``string`Current montage section of MAIN ANIMATION (Default/Loop/End), tracked via montage delegates and used to drive finish/cancel decisions`StartLocation``FVector`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-vector default`StartRotation``FRotator`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-rotator default`TotalPlayLength``number`Total play length of the resolved montage, used in progress-time and one-loop-length calculations |
| `SectionName``string`Current montage section of MAIN ANIMATION (Default/Loop/End), tracked via montage delegates and used to drive finish/cancel decisions`StartLocation``FVector`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-vector default`StartRotation``FRotator`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-rotator default`TotalPlayLength``number`Total play length of the resolved montage, used in progress-time and one-loop-length calculations |
| `StartLocation``FVector`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-vector default`StartRotation``FRotator`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-rotator default`TotalPlayLength``number`Total play length of the resolved montage, used in progress-time and one-loop-length calculations |
| `StartRotation``FRotator`Referenced in GetLogString() for debug logging, but never assigned by this class or any subclass - the log always shows the zero-rotator default`TotalPlayLength``number`Total play length of the resolved montage, used in progress-time and one-loop-length calculations |
| `TotalPlayLength``number`Total play length of the resolved montage, used in progress-time and one-loop-length calculations |

# Functions (8)

| FunctionParametersReturnsDescription`GetActionOneLoopPlayLength``-``number`Returns Action One Loop Play Length.`GetPlayingComponentName``-``string`Returns Playing Component Name.`IsNeedAutoInsertWalkAction``-``boolean`Returns whether Need Auto Insert Walk Action.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `GetActionOneLoopPlayLength``-``number`Returns Action One Loop Play Length.`GetPlayingComponentName``-``string`Returns Playing Component Name.`IsNeedAutoInsertWalkAction``-``boolean`Returns whether Need Auto Insert Walk Action.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `GetPlayingComponentName``-``string`Returns Playing Component Name.`IsNeedAutoInsertWalkAction``-``boolean`Returns whether Need Auto Insert Walk Action.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `IsNeedAutoInsertWalkAction``-``boolean`Returns whether Need Auto Insert Walk Action.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_PlayAnim.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
