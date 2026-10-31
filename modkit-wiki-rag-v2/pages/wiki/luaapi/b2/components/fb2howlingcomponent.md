---
document_id: "cc6abaf40fb92ba4218543a68cc2f21c9ef7c1cc6c213687cb5730df27f77a40"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2howlingcomponent"
title: "FB2HowlingComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "3fd560f0b86377c284b342107c17e27faee4db4a797308a792e91118786d3004"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2howlingcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages howling (barking, etc.).

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2HowlingComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2HowlingComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2HowlingComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2HowlingComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2HowlingComponent')` |
| Require`require('Components.B2HowlingComponent')` |

# Properties (3)

| NameTypeDescription`CooltimeMap``table<string, integer>``FailCooltimeMap``table<string, integer>`Howling interaction failure cooldown (prevents immediate retry after a move failure).`PendingInteractionBagToEffectMap``table<string, string>`Mapping of running Howling interactions (for reverse-tracing the HowlingEffectId on failure). |
| --- |
| `CooltimeMap``table<string, integer>``FailCooltimeMap``table<string, integer>`Howling interaction failure cooldown (prevents immediate retry after a move failure).`PendingInteractionBagToEffectMap``table<string, string>`Mapping of running Howling interactions (for reverse-tracing the HowlingEffectId on failure). |
| `FailCooltimeMap``table<string, integer>`Howling interaction failure cooldown (prevents immediate retry after a move failure).`PendingInteractionBagToEffectMap``table<string, string>`Mapping of running Howling interactions (for reverse-tracing the HowlingEffectId on failure). |
| `PendingInteractionBagToEffectMap``table<string, string>`Mapping of running Howling interactions (for reverse-tracing the HowlingEffectId on failure). |

# Functions (4)

| FunctionParametersReturnsDescription`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`OnHowlingInteractionFailed`InInteractionBagId: `string``-`Called when a Howling interaction ends due to a move failure; applies the failure cooldown.`OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| --- |
| `GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`OnHowlingInteractionFailed`InInteractionBagId: `string``-`Called when a Howling interaction ends due to a move failure; applies the failure cooldown.`OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| `OnHowlingInteractionFailed`InInteractionBagId: `string``-`Called when a Howling interaction ends due to a move failure; applies the failure cooldown.`OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| `OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| `OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |

# Override points (3)

Implement these in Lua as `FB2HowlingComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_OnHowlingInteractionFailed`InInteractionBagId: `string``-`Called when a Howling interaction ends due to a move failure; applies the failure cooldown.`Override_OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`Override_OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| --- |
| `Override_OnHowlingInteractionFailed`InInteractionBagId: `string``-`Called when a Howling interaction ends due to a move failure; applies the failure cooldown.`Override_OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`Override_OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| `Override_OnHowlingInteractionFinished`InInteractionBagId: `string``-`Called when a Howling interaction ends normally; cleans up the PendingMap.`Override_OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
| `Override_OnReceiveHowling`InHowlingId: `string`, InSenderId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Callback invoked on Receive Howling. |
