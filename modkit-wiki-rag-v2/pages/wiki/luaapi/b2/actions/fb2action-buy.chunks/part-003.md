---
document_id: "b0e139eef439b45668a038120038e3a5847a40028ab0d9dac2be467878d2791c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-buy"
title: "FB2Action_Buy"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "8925fccda81a3f5ff7b01984dc09f81d81fe560ccbd833d617426a636dfe2f98"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-buy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

tion id (hand-converted), used to find the pick-up montage and posture info`PostureComponent``any`Cached PostureComponent of the self character, used to manage pick-up context and grab id through the action's lifecycle`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to hold the purchased/carried object`bIsTargetOnSaleInFleaMarket``boolean`Whether the target was on sale via the flea market, used on finish to price it through B2FleaMarketHelper instead of the object's own sale price`bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |
| `PickUpAnimId``string`Resolved pick-up grab animation id (hand-converted), used to find the pick-up montage and posture info`PostureComponent``any`Cached PostureComponent of the self character, used to manage pick-up context and grab id through the action's lifecycle`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to hold the purchased/carried object`bIsTargetOnSaleInFleaMarket``boolean`Whether the target was on sale via the flea market, used on finish to price it through B2FleaMarketHelper instead of the object's own sale price`bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |
| `PostureComponent``any`Cached PostureComponent of the self character, used to manage pick-up context and grab id through the action's lifecycle`SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to hold the purchased/carried object`bIsTargetOnSaleInFleaMarket``boolean`Whether the target was on sale via the flea market, used on finish to price it through B2FleaMarketHelper instead of the object's own sale price`bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |
| `SelectedHand`[`EB1HandType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1handtype)Hand chosen to hold the purchased/carried object`bIsTargetOnSaleInFleaMarket``boolean`Whether the target was on sale via the flea market, used on finish to price it through B2FleaMarketHelper instead of the object's own sale price`bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |
| `bIsTargetOnSaleInFleaMarket``boolean`Whether the target was on sale via the flea market, used on finish to price it through B2FleaMarketHelper instead of the object's own sale price`bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |
| `bUseFakeObject``boolean`Set true whenever a child object is added to FakeObjectList (the actual data OnFinish uses to spawn fake objects); this flag itself is never read |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_Buy.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| --- |
| `Override_OnCanceled``-``-`Timing hook called when the action is canceled.`Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnFinish``-``-`Timing hook called when the action finishes.`Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPaused``-``-`Timing hook called when the action is paused.`Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnPlay``-``-`Timing hook called when the action starts (play). Override in Lua to replace the start behavior.`Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
| `Override_OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Timing hook called every tick while the action runs. (performance-sensitive) |
