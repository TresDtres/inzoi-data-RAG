---
document_id: "167119d7b4dae3482fc3b870883d72b44d6cda158e73e2a0f6812feb698097ec"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-changeposture"
title: "FB2Action_ChangePosture"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "523b488d8dda91772e74db30974c80947caecfee1164ae2fa11bdbd305ca4361"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-changeposture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

aracter to when exiting a vehicle`TargetEntity``any`Cached reference to the interaction target actor for the posture change`TransitionAnimId``string`Animation id for transitioning between the current and target posture, if any`TransitionAnimName``string`Montage row name resolved for the transition animation`bIsCancelCondition``boolean`Whether this action currently allows cancellation (set when a blocking vehicle-exit condition occurs)`bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `TargetEntity``any`Cached reference to the interaction target actor for the posture change`TransitionAnimId``string`Animation id for transitioning between the current and target posture, if any`TransitionAnimName``string`Montage row name resolved for the transition animation`bIsCancelCondition``boolean`Whether this action currently allows cancellation (set when a blocking vehicle-exit condition occurs)`bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `TransitionAnimId``string`Animation id for transitioning between the current and target posture, if any`TransitionAnimName``string`Montage row name resolved for the transition animation`bIsCancelCondition``boolean`Whether this action currently allows cancellation (set when a blocking vehicle-exit condition occurs)`bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `TransitionAnimName``string`Montage row name resolved for the transition animation`bIsCancelCondition``boolean`Whether this action currently allows cancellation (set when a blocking vehicle-exit condition occurs)`bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `bIsCancelCondition``boolean`Whether this action currently allows cancellation (set when a blocking vehicle-exit condition occurs)`bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `bIsDriverExit``boolean`Whether this posture change corresponds to the vehicle driver exiting`bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `bIsOverrideAnim``boolean`Whether a one-time posture override animation is being used instead of the normally resolved one`bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `bIsPassengerExit``boolean`Whether this posture change corresponds to a vehicle passenger exiting`bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |
| `bUseSafeExitLocation``boolean`Whether to teleport the character to SafeExitLocation on finish |

# Functions (5)

| FunctionParametersReturnsDescription`GetPostureId``-``string`Returns Posture Id.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `GetPostureId``-``string`Returns Posture Id.`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (4)

Implement these in Lua as `FB2Action_ChangePosture.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
