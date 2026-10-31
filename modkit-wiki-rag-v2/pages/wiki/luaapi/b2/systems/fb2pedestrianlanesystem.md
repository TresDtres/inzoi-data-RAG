---
document_id: "9f7964918c93bc2cde6e1444862b41479b5cbfea790054739d41fd3177eafd0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2pedestrianlanesystem"
title: "FB2PedestrianLaneSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "acc9902596f4364e621da688281d40278c6db1716a7e733749e142e8dce8d2a9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2pedestrianlanesystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Pedestrian lane system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PedestrianLaneSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PedestrianLaneSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PedestrianLaneSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2PedestrianLaneSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2PedestrianLaneSystem')` |
| Require`require('Systems.FB2PedestrianLaneSystem')` |

# Properties (1)

| NameTypeDescription`Crosswalks``table<FB1CityGraphLaneKey, FB2TrafficCrosswalk>` |
| --- |
| `Crosswalks``table<FB1CityGraphLaneKey, FB2TrafficCrosswalk>` |

# Functions (2)

| FunctionParametersReturnsDescription`GetCrosswalkRange`Key: [`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)`number`Returns Crosswalk Range.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `GetCrosswalkRange`Key: [`FB1CityGraphLaneKey`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphlanekey)`number`Returns Crosswalk Range.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |

# Override points (1)

Implement these in Lua as `FB2PedestrianLaneSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
