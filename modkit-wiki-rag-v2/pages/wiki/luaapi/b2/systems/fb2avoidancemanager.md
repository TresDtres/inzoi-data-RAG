---
document_id: "f9d21c39feba0eed133751258a0435730a0f9f5a9c554875dd5b80932dbb1008"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2avoidancemanager"
title: "FB2AvoidanceManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "143befe0027ef8cb1c963e90c553c745b86db3beeba36f45f506b9de81049816"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2avoidancemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages character collision avoidance.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AvoidanceManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AvoidanceManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AvoidanceManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AvoidanceManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AvoidanceManager')` |
| Require`require('Systems.B2AvoidanceManager')` |

# Properties (4)

| NameTypeDescription`AvoidanceObjects``FB2AvoidanceData[]``DeltaTimeToPredict``number``LockTimeAfterAvoid``number``LockTimeAfterClean``number` |
| --- |
| `AvoidanceObjects``FB2AvoidanceData[]``DeltaTimeToPredict``number``LockTimeAfterAvoid``number``LockTimeAfterClean``number` |
| `DeltaTimeToPredict``number``LockTimeAfterAvoid``number``LockTimeAfterClean``number` |
| `LockTimeAfterAvoid``number``LockTimeAfterClean``number` |
| `LockTimeAfterClean``number` |

# Functions (4)

| FunctionParametersReturnsDescription`GetDeltaTimeToPredict``-``number`Returns Delta Time To Predict.`GetLockTimeAfterAvoid``-``number`Returns Lock Time After Avoid.`GetLockTimeAfterClean``-``number`Returns Lock Time After Clean.`UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
| --- |
| `GetDeltaTimeToPredict``-``number`Returns Delta Time To Predict.`GetLockTimeAfterAvoid``-``number`Returns Lock Time After Avoid.`GetLockTimeAfterClean``-``number`Returns Lock Time After Clean.`UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
| `GetLockTimeAfterAvoid``-``number`Returns Lock Time After Avoid.`GetLockTimeAfterClean``-``number`Returns Lock Time After Clean.`UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
| `GetLockTimeAfterClean``-``number`Returns Lock Time After Clean.`UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
| `UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |

# Override points (1)

Implement these in Lua as `FB2AvoidanceManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
| --- |
| `Override_UpdateAvoidnaceData`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Avoidnace Data. |
