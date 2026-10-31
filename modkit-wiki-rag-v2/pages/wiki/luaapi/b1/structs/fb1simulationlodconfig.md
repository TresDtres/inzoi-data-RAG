---
document_id: "ff74ddc91f27bd73765eb86532a8b20f02c21a0c2f46f4fa117729a7f7b53861"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1simulationlodconfig"
title: "FB1SimulationLODConfig"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:23+00:00"
content_sha256: "0a979933f0b635c92189768909f02b1895cecf355520974ab3b0f37a3f1ac8eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1simulationlodconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Configuration for the simulation LOD system, defining the reference base, tick interval, LOD distance tiers, and minimum distance difference thresholds.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`BaseType`[`EB1SimulationLODBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlodbase)Reference origin used to measure distances for LOD evaluation (camera or controlled player).`DistanceMinimumDiff``number`Minimum distance change required to trigger a LOD tier transition.`SimulationLODArray``FB1SimulationLODDistance[]`Array of load/unload distance pairs for each LOD tier.`TickInterval``number`Time interval (seconds) between LOD evaluation ticks. |
| --- |
| `BaseType`[`EB1SimulationLODBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlodbase)Reference origin used to measure distances for LOD evaluation (camera or controlled player).`DistanceMinimumDiff``number`Minimum distance change required to trigger a LOD tier transition.`SimulationLODArray``FB1SimulationLODDistance[]`Array of load/unload distance pairs for each LOD tier.`TickInterval``number`Time interval (seconds) between LOD evaluation ticks. |
| `DistanceMinimumDiff``number`Minimum distance change required to trigger a LOD tier transition.`SimulationLODArray``FB1SimulationLODDistance[]`Array of load/unload distance pairs for each LOD tier.`TickInterval``number`Time interval (seconds) between LOD evaluation ticks. |
| `SimulationLODArray``FB1SimulationLODDistance[]`Array of load/unload distance pairs for each LOD tier.`TickInterval``number`Time interval (seconds) between LOD evaluation ticks. |
| `TickInterval``number`Time interval (seconds) between LOD evaluation ticks. |
