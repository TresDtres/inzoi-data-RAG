---
document_id: "cd4581c8e36cd92dd625d21af4d0574f628103a89a02e9fc1ca17f0d8c1b6a66"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-buyobjectattinyshop"
title: "FB2Action_BuyObjectAtTinyShop"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "83c3270e6b73d257c8cc1b685203581caa292961201b29cb0d87e9efcc09c8b3"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-buyobjectattinyshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- BuyObjectAtTinyShop action. Override the OnPlay/OnFinish/OnPaused/OnCanceled/OnTick timing hooks in Lua.

# Metadata

| FieldValueKind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |
| --- |
| Kind`action`EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |
| EnvironmentB2 - SimulationCategory`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |
| Category`actions`Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |
| Extends[`FB2Action_Base`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base)Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |
| Require`require('Actions.B2Action_BuyObjectAtTinyShop')` |

# Properties (7)

| NameTypeDescription`AnimMontageName``string`Resolved montage row name used to play the pick-up animation`FakeObjectList``FB1EntityId[]`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class`GrabId``string`Grab table id for the carriable object being picked up`GrabLoopAnimId``string`Loop animation id for holding the grabbed object, requested for async preload`PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| --- |
| `AnimMontageName``string`Resolved montage row name used to play the pick-up animation`FakeObjectList``FB1EntityId[]`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class`GrabId``string`Grab table id for the carriable object being picked up`GrabLoopAnimId``string`Loop animation id for holding the grabbed object, requested for async preload`PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `FakeObjectList``FB1EntityId[]`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class`GrabId``string`Grab table id for the carriable object being picked up`GrabLoopAnimId``string`Loop animation id for holding the grabbed object, requested for async preload`PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `GrabId``string`Grab table id for the carriable object being picked up`GrabLoopAnimId``string`Loop animation id for holding the grabbed object, requested for async preload`PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `GrabLoopAnimId``string`Loop animation id for holding the grabbed object, requested for async preload`PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `PickUpAnimId``string`Resolved animation id for the pick-up motion`PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `PostureComponent``any`Cached posture component of the self character, used to set the grab id`bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |
| `bUseFakeObject``boolean`Same field as B2Action_Buy's fake-object-substitution feature, but unlike Buy.h, never assigned or read here - appears unimplemented in this class |

# Functions (5)

| FunctionParametersReturnsDescription`OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| --- |
| `OnCanceled``-``-`Callback invoked on Canceled.`OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnFinish``-``-`Callback invoked on Finish.`OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPaused``-``-`Callback invoked on Paused.`OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnPlay``-``-`Callback invoked on Play.`OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |
| `OnTick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Callback invoked on Tick. |

# Override points (5)

Implement these in Lua as `FB2Action_BuyObjectAtTinyShop.Override_Name = function(...) end`.
