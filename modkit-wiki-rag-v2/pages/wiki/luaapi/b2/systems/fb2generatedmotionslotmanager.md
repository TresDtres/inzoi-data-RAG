---
document_id: "025e1034065f6d836753b6e46e181929bc0a1c9dc285afa38a61de90e955a725"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2generatedmotionslotmanager"
title: "FB2GeneratedMotionSlotManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "b2398b9e9d81049ed805ad6641c8c7912b21b5a93363101b66c72e04060136f5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2generatedmotionslotmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages generated-motion slots.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2GeneratedMotionSlotManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2GeneratedMotionSlotManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2GeneratedMotionSlotManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2GeneratedMotionSlotManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2GeneratedMotionSlotManager')` |
| Require`require('Systems.B2GeneratedMotionSlotManager')` |

# Properties (2)

| NameTypeDescription`DefaultTotalPlayLength``number``GeneratedMotionSlotDataList``FB1GeneratedMotionSlotData[]` |
| --- |
| `DefaultTotalPlayLength``number``GeneratedMotionSlotDataList``FB1GeneratedMotionSlotData[]` |
| `GeneratedMotionSlotDataList``FB1GeneratedMotionSlotData[]` |

# Functions (6)

| FunctionParametersReturnsDescription`AddGeneratedMotionSlotData`InData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`-`Adds Generated Motion Slot Data.`DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`GetDefaultTotalPlayLength``-``number`Returns Default Total Play Length.`GetGeneratedMotionSlotData`InIndex: `integer`, OutData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`boolean`Returns Generated Motion Slot Data.`HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| --- |
| `AddGeneratedMotionSlotData`InData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`-`Adds Generated Motion Slot Data.`DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`GetDefaultTotalPlayLength``-``number`Returns Default Total Play Length.`GetGeneratedMotionSlotData`InIndex: `integer`, OutData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`boolean`Returns Generated Motion Slot Data.`HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`GetDefaultTotalPlayLength``-``number`Returns Default Total Play Length.`GetGeneratedMotionSlotData`InIndex: `integer`, OutData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`boolean`Returns Generated Motion Slot Data.`HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `GetDefaultTotalPlayLength``-``number`Returns Default Total Play Length.`GetGeneratedMotionSlotData`InIndex: `integer`, OutData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`boolean`Returns Generated Motion Slot Data.`HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `GetGeneratedMotionSlotData`InIndex: `integer`, OutData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`boolean`Returns Generated Motion Slot Data.`HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |

# Override points (4)

Implement these in Lua as `FB2GeneratedMotionSlotManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AddGeneratedMotionSlotData`InData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`-`Adds Generated Motion Slot Data.`Override_DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`Override_HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`Override_UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| --- |
| `Override_AddGeneratedMotionSlotData`InData: [`FB1GeneratedMotionSlotData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1generatedmotionslotdata)`-`Adds Generated Motion Slot Data.`Override_DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`Override_HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`Override_UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `Override_DeleteGeneratedMotionSlotData`InFileKey: `string``-`Deletes Generated Motion Slot Data.`Override_HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`Override_UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `Override_HasGeneratedMotionIndex`InIndex: `integer``boolean`Returns whether it has Generated Motion Index.`Override_UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
| `Override_UpdateAllGeneratedMotionSlotData`InDataList: `FB1GeneratedMotionSlotData[]``-`Updates All Generated Motion Slot Data. |
