---
document_id: "be172cfd3e5af93c5c3d099f4e58a99daf8d9e1c291ac74f523e87d29d60bbfc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficjammanagementsystem"
title: "FB2TrafficJamManagementSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "a31cd5a04ccf5877fa48532ad45bdff6bfe93aa42c5dce66721ab44f8352a45d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2trafficjammanagementsystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Traffic jam management system.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficJamManagementSystem')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficJamManagementSystem')` |
| EnvironmentB2 - SimulationCategory`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficJamManagementSystem')` |
| Category`systems`Extends`FB2Subsystem`Require`require('Systems.FB2TrafficJamManagementSystem')` |
| Extends`FB2Subsystem`Require`require('Systems.FB2TrafficJamManagementSystem')` |
| Require`require('Systems.FB2TrafficJamManagementSystem')` |

# Properties (3)

| NameTypeDescription`Entities``any[]``Proxies``table<FB1EntityId, FB1TrafficJamProxy>``TimeElasped``number` |
| --- |
| `Entities``any[]``Proxies``table<FB1EntityId, FB1TrafficJamProxy>``TimeElasped``number` |
| `Proxies``table<FB1EntityId, FB1TrafficJamProxy>``TimeElasped``number` |
| `TimeElasped``number` |

# Functions (2)

| FunctionParametersReturnsDescription`Instance` *(static)*`-`[`FB2TrafficJamManagementSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficjammanagementsystem)`Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `Instance` *(static)*`-`[`FB2TrafficJamManagementSystem`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2trafficjammanagementsystem)`Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| `Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |

# Override points (1)

Implement these in Lua as `FB2TrafficJamManagementSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
| --- |
| `Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime``-` |
