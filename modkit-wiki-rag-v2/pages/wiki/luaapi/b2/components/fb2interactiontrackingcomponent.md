---
document_id: "fd50740585da85e50042838124a17d8858fa0c45486a2020d89e80830f0a9b7e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2interactiontrackingcomponent"
title: "FB2InteractionTrackingComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:13+00:00"
content_sha256: "ade289d1fa6f1d3a53d15254e5bf48ee909ba9a032417dc62e9de49374a661f5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/components/fb2interactiontrackingcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that tracks interaction history.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InteractionTrackingComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InteractionTrackingComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InteractionTrackingComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InteractionTrackingComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2InteractionTrackingComponent')` |
| Require`require('Components.B2InteractionTrackingComponent')` |

# Properties (4)

| NameTypeDescription`IdActionTimeMap``table<string, FB1ActionTimeData>``InteractionHistory``string[]``ResetDelayTime``integer``TagActionTimeMap``table<string, FB1ActionTimeData>` |
| --- |
| `IdActionTimeMap``table<string, FB1ActionTimeData>``InteractionHistory``string[]``ResetDelayTime``integer``TagActionTimeMap``table<string, FB1ActionTimeData>` |
| `InteractionHistory``string[]``ResetDelayTime``integer``TagActionTimeMap``table<string, FB1ActionTimeData>` |
| `ResetDelayTime``integer``TagActionTimeMap``table<string, FB1ActionTimeData>` |
| `TagActionTimeMap``table<string, FB1ActionTimeData>` |

# Functions (6)

| FunctionParametersReturnsDescription`AddInteractionHistory`InInteractionBagId: `string``-`Adds Interaction History.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetExecuteTimeById`InActionId: `string``integer`Returns Execute Time By Id.`GetExecuteTimeByTag`InTag: `string``integer`Returns Execute Time By Tag.`OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| --- |
| `AddInteractionHistory`InInteractionBagId: `string``-`Adds Interaction History.`GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetExecuteTimeById`InActionId: `string``integer`Returns Execute Time By Id.`GetExecuteTimeByTag`InTag: `string``integer`Returns Execute Time By Tag.`OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| `GetDefaultCityMoveDataPolicy``-`[`EB1CityMoveDataPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citymovedatapolicy)Returns Default City Move Data Policy.`GetExecuteTimeById`InActionId: `string``integer`Returns Execute Time By Id.`GetExecuteTimeByTag`InTag: `string``integer`Returns Execute Time By Tag.`OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| `GetExecuteTimeById`InActionId: `string``integer`Returns Execute Time By Id.`GetExecuteTimeByTag`InTag: `string``integer`Returns Execute Time By Tag.`OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| `GetExecuteTimeByTag`InTag: `string``integer`Returns Execute Time By Tag.`OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| `OnFinishAction`InActionId: `string``-`Callback invoked on Finish Action.`OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |
| `OnStartAction`InActionId: `string``-`Callback invoked on Start Action. |

# Override points (1)

Implement these in Lua as `FB2InteractionTrackingComponent.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddInteractionHistory`InInteractionBagId: `string``-`Adds Interaction History. |
| --- |
| `Override_AddInteractionHistory`InInteractionBagId: `string``-`Adds Interaction History. |
