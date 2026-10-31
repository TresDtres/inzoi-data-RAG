---
document_id: "6dfa599e35780a5f79f2d4dde14d472ffc6c18ebff730d184898207101078b21"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1simulationlodconfig"
title: "B1SimulationLODConfig"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:56:39+00:00"
content_sha256: "b7a39f3ed7d28d9490043f62af876db05e6e69e5e19080036c3f4055b3855755"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/struct/fb1simulationlodconfig"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Configuration for the simulation LOD system, defining the reference base, * tick interval, LOD distance tiers, and minimum distance difference thresholds.

| PropertyTypeDescriptionMetadataBaseTypeEB1SimulationLODBaseReference origin used to measure distances for LOD evaluation (camera or controlled player).Category: B1SimulationLODConfigTickIntervalfloatTime interval (seconds) between LOD evaluation ticks.Category: B1SimulationLODConfig ClampMin: 0SimulationLODArrayTArrayArray of load/unload distance pairs for each LOD tier.Category: B1SimulationLODConfigDistanceMinimumDifffloatMinimum distance change required to trigger a LOD tier transition.Category: B1SimulationLODConfig ClampMin: 100.0 |
| --- |
| BaseTypeEB1SimulationLODBaseReference origin used to measure distances for LOD evaluation (camera or controlled player).Category: B1SimulationLODConfigTickIntervalfloatTime interval (seconds) between LOD evaluation ticks.Category: B1SimulationLODConfig ClampMin: 0SimulationLODArrayTArrayArray of load/unload distance pairs for each LOD tier.Category: B1SimulationLODConfigDistanceMinimumDifffloatMinimum distance change required to trigger a LOD tier transition.Category: B1SimulationLODConfig ClampMin: 100.0 |
| TickIntervalfloatTime interval (seconds) between LOD evaluation ticks.Category: B1SimulationLODConfig ClampMin: 0SimulationLODArrayTArrayArray of load/unload distance pairs for each LOD tier.Category: B1SimulationLODConfigDistanceMinimumDifffloatMinimum distance change required to trigger a LOD tier transition.Category: B1SimulationLODConfig ClampMin: 100.0 |
| SimulationLODArrayTArrayArray of load/unload distance pairs for each LOD tier.Category: B1SimulationLODConfigDistanceMinimumDifffloatMinimum distance change required to trigger a LOD tier transition.Category: B1SimulationLODConfig ClampMin: 100.0 |
| DistanceMinimumDifffloatMinimum distance change required to trigger a LOD tier transition.Category: B1SimulationLODConfig ClampMin: 100.0 |

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoSimulation[FB1SimulationDriverData](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1simulationdriverdata)[FB1SimulationLODDistance](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1simulationloddistance)
