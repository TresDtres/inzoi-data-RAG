---
document_id: "cbf8b8d6db9f97b0f5844330968cfd75f746eded5436d1c33814ebab369a9260"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleaccidentdata"
title: "FB1VehicleAccidentData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:46+00:00"
content_sha256: "a1ac13a9f3e787d9d3d95906bdaf0041fad6d941278555852ea7b895a28307a9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehicleaccidentdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Associates a vehicle speed rate range with a set of accident probability data for dynamic accident selection.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`ProbData`[`FB1VehicleAccidentProbabilityData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleaccidentprobabilitydata)Probability data used to select an accident outcome within this speed range.`SpeedRateRange``FVector2D`Speed ratio range (0.0 to 1.0 relative to max speed) during which this accident data applies. E.g. for a vehicle with max speed 1500 set to 0.8-1.0, this set is used between 1200-1500. |
| --- |
| `ProbData`[`FB1VehicleAccidentProbabilityData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleaccidentprobabilitydata)Probability data used to select an accident outcome within this speed range.`SpeedRateRange``FVector2D`Speed ratio range (0.0 to 1.0 relative to max speed) during which this accident data applies. E.g. for a vehicle with max speed 1500 set to 0.8-1.0, this set is used between 1200-1500. |
| `SpeedRateRange``FVector2D`Speed ratio range (0.0 to 1.0 relative to max speed) during which this accident data applies. E.g. for a vehicle with max speed 1500 set to 0.8-1.0, this set is used between 1200-1500. |
