---
document_id: "18d8eb25de9ed6d606d7aae38dd16844cb43d48aa3ccd1afb89e2406aaedcd7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2instinctcomponent"
title: "FB2InstinctComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "4ac85aa24e33947f0a829d90ae0bf3de73395a95e86d2e6b1e8beb433593989e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2instinctcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- This component does not Snapshot/Restore, because there is nothing to save: all initially created characters use the same data.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InstinctComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InstinctComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InstinctComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InstinctComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InstinctComponent')` |
| Require`require('Components.B2InstinctComponent')` |

# Properties (1)

| NameTypeDescription`InstinctDataList``any[]` |
| --- |
| `InstinctDataList``any[]` |

# Functions (5)

| FunctionParametersReturnsDescription`AddInstinct``-``-`Adds Instinct.`ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| --- |
| `AddInstinct``-``-`Adds Instinct.`ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes.`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler. |

# Override points (4)

Implement these in Lua as `FB2InstinctComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddInstinct``-``-`Adds Instinct.`Override_ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``Override_OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`Override_PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes. |
| --- |
| `Override_AddInstinct``-``-`Adds Instinct.`Override_ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``Override_OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`Override_PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes. |
| `Override_ExecuteInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype)`-``Override_OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`Override_PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes. |
| `Override_OnInstinctEventTriggered`InTriggerData: [`FB1TraitEventData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1traiteventdata)`-`Callback invoked on Instinct Event Triggered.`Override_PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes. |
| `Override_PrecheckInstinctEntryTriggered`InCheckType: [`EB1TraitEntryType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1traitentrytype), InCompletedBagId: `string`, InCompletedInteractionId: `string``-`Pre-checks the TriggeredBuff condition before an interaction completes. |
