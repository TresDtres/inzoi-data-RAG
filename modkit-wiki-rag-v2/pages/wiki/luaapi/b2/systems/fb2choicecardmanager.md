---
document_id: "839b2f921e91fb18bf44390463ae7a43aef64dd4aebaffb805496b35de15d355"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2choicecardmanager"
title: "FB2ChoiceCardManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "243eb9a288674712865ed7fd5bfcc4c2cccac0551187f6c681536e7c2af892c4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2choicecardmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages choice cards (event choices).

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ChoiceCardManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ChoiceCardManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ChoiceCardManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ChoiceCardManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ChoiceCardManager')` |
| Require`require('Systems.B2ChoiceCardManager')` |

# Properties (3)

| NameTypeDescription`ChoiceCardEventQueue``FB2ChoiceCardEvent[]``CurrentEvent`[`FB2ChoiceCardEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2choicecardevent)`TryStartNextChoiceCardTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid) |
| --- |
| `ChoiceCardEventQueue``FB2ChoiceCardEvent[]``CurrentEvent`[`FB2ChoiceCardEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2choicecardevent)`TryStartNextChoiceCardTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid) |
| `CurrentEvent`[`FB2ChoiceCardEvent`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2choicecardevent)`TryStartNextChoiceCardTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid) |
| `TryStartNextChoiceCardTimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid) |

# Functions (6)

| FunctionParametersReturnsDescription`AddChoiceCardEvent`InChoiceCardGroupId: `string`, InBase: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTarget: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event.`AddChoiceCardEventByChoiceCardId`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Choice Card Id.`GetType``-`[`EB2ManagerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2managertype)Returns Type.`OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| --- |
| `AddChoiceCardEvent`InChoiceCardGroupId: `string`, InBase: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTarget: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event.`AddChoiceCardEventByChoiceCardId`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Choice Card Id.`GetType``-`[`EB2ManagerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2managertype)Returns Type.`OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| `AddChoiceCardEventByChoiceCardId`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Choice Card Id.`GetType``-`[`EB2ManagerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2managertype)Returns Type.`OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| `GetType``-`[`EB2ManagerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2managertype)Returns Type.`OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| `OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| `OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`TryStartNextChoiceCard``-``-` |
| `TryStartNextChoiceCard``-``-` |

# Override points (5)

Implement these in Lua as `FB2ChoiceCardManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddChoiceCardEvent`InChoiceCardGroupId: `string`, InBase: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTarget: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event.`Override_AddChoiceCardEventById`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Id.`Override_OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`Override_OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`Override_TryStartNextChoiceCard``-``-` |
| --- |
| `Override_AddChoiceCardEvent`InChoiceCardGroupId: `string`, InBase: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InTarget: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event.`Override_AddChoiceCardEventById`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Id.`Override_OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`Override_OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`Override_TryStartNextChoiceCard``-``-` |
| `Override_AddChoiceCardEventById`InChoiceCardId: `string`, InSender: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InReceiver: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Adds Choice Card Event By Id.`Override_OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`Override_OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`Override_TryStartNextChoiceCard``-``-` |
| `Override_OnFinishChoiceCardEvent``-``-`Callback invoked on Finish Choice Card Event.`Override_OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`Override_TryStartNextChoiceCard``-``-` |
| `Override_OnSelectedAnswer`bIsPositive: `boolean``-`Callback invoked on Selected Answer.`Override_TryStartNextChoiceCard``-``-` |
| `Override_TryStartNextChoiceCard``-``-` |
