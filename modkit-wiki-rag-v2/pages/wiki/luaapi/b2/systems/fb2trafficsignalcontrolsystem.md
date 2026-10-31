---
document_id: "79848aaf7a93a660c8f7b705bd0c272b3587fe764f6916956a1b3a0824250223"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficsignalcontrolsystem"
title: "FB2TrafficSignalControlSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "6d24597d8af0989d01c48c7f7a27dfb3684393894202a6bc53b45112c4e81e78"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2trafficsignalcontrolsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Traffic signal control system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficSignalControlSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficSignalControlSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficSignalControlSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficSignalControlSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2TrafficSignalControlSystem')` |
| Require`require('Systems.FB2TrafficSignalControlSystem')` |

# Properties (2)

| NameTypeDescription`Intersections``FB2TrafficIntersectionRuntime[]``TrafficLightCache``table<integer, EB1CityGraphCategory>` |
| --- |
| `Intersections``FB2TrafficIntersectionRuntime[]``TrafficLightCache``table<integer, EB1CityGraphCategory>` |
| `TrafficLightCache``table<integer, EB1CityGraphCategory>` |

# Functions (2)

| FunctionParametersReturnsDescription`Instance` *(static)*`-`[`FB2TrafficSignalControlSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficsignalcontrolsystem)`Tick`DeltaTime: `number``-` |
| --- |
| `Instance` *(static)*`-`[`FB2TrafficSignalControlSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficsignalcontrolsystem)`Tick`DeltaTime: `number``-` |
| `Tick`DeltaTime: `number``-` |

# Override points (1)

Implement these in Lua as `FB2TrafficSignalControlSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Tick`DeltaTime: `number``-` |
| --- |
| `Override_Tick`DeltaTime: `number``-` |
