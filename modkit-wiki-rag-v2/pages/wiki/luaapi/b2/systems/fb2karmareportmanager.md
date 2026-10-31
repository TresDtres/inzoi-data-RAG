---
document_id: "2becdec06a4b97034a4648ce66385fa367ead82c71182a9ab318198c58f52d6f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2karmareportmanager"
title: "FB2KarmaReportManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "cc350ac17a077194b9e8ff91367b3210dc874a9024d6fd3743fa2a6627e4dc2f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2karmareportmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages karma reports.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2KarmaReportManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2KarmaReportManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2KarmaReportManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2KarmaReportManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2KarmaReportManager')` |
| Require`require('Systems.B2KarmaReportManager')` |

# Properties (3)

| NameTypeDescription`AliveCount``integer``GhostCount``integer``KarmaReportCoolTimeList``table<FB1EntityId, integer>` |
| --- |
| `AliveCount``integer``GhostCount``integer``KarmaReportCoolTimeList``table<FB1EntityId, integer>` |
| `GhostCount``integer``KarmaReportCoolTimeList``table<FB1EntityId, integer>` |
| `KarmaReportCoolTimeList``table<FB1EntityId, integer>` |

# Functions (6)

| FunctionParametersReturnsDescription`GatherZoIList``-``-``GetCoolTimeList``-``table<FB1EntityId, integer>`Returns Cool Time List.`OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| --- |
| `GatherZoIList``-``-``GetCoolTimeList``-``table<FB1EntityId, integer>`Returns Cool Time List.`OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `GetCoolTimeList``-``table<FB1EntityId, integer>`Returns Cool Time List.`OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |

# Override points (5)

Implement these in Lua as `FB2KarmaReportManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_GatherZoIList``-``-``Override_OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`Override_OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`Override_OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| --- |
| `Override_GatherZoIList``-``-``Override_OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`Override_OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`Override_OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `Override_OnHourChanged`Before: `FDateTime`, After: `FDateTime``-`Callback invoked on Hour Changed.`Override_OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`Override_OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `Override_OnKarmaAction`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action.`Override_OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `Override_OnKarmaActionEnd`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Karma Action End.`Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
| `Override_UpdateGhostEntityInfo`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Updates Ghost Entity Info. |
