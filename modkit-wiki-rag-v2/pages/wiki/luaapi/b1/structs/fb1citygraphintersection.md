---
document_id: "e2a6734dc34e88c37f509efbca6b2fd83455a5e3ccbb6e6358623de2042400ca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphintersection"
title: "FB1CityGraphIntersection"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:27+00:00"
content_sha256: "ca80e4d283eb0984aa4323ec7f04f4ffb6e913196e48ef3c4a93a0df214335b4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphintersection"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Represents a traffic intersection in the city graph, storing its index, the junction lane indices, and the list of signal schedule phases.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`Index``integer`Global index of this intersection in the city graph intersection array.`Junctions``integer[]`List of lane indices that form the junction area of this intersection.`Schedules``FB1CityGraphIntersectionSchedule[]`List of signal schedule phases controlling traffic flow at this intersection.`UnscheduledJunctions``integer[]`List of lane indices that belong to the intersection but are not part of any signal schedule (e.g. U-turn lanes). |
| --- |
| `Index``integer`Global index of this intersection in the city graph intersection array.`Junctions``integer[]`List of lane indices that form the junction area of this intersection.`Schedules``FB1CityGraphIntersectionSchedule[]`List of signal schedule phases controlling traffic flow at this intersection.`UnscheduledJunctions``integer[]`List of lane indices that belong to the intersection but are not part of any signal schedule (e.g. U-turn lanes). |
| `Junctions``integer[]`List of lane indices that form the junction area of this intersection.`Schedules``FB1CityGraphIntersectionSchedule[]`List of signal schedule phases controlling traffic flow at this intersection.`UnscheduledJunctions``integer[]`List of lane indices that belong to the intersection but are not part of any signal schedule (e.g. U-turn lanes). |
| `Schedules``FB1CityGraphIntersectionSchedule[]`List of signal schedule phases controlling traffic flow at this intersection.`UnscheduledJunctions``integer[]`List of lane indices that belong to the intersection but are not part of any signal schedule (e.g. U-turn lanes). |
| `UnscheduledJunctions``integer[]`List of lane indices that belong to the intersection but are not part of any signal schedule (e.g. U-turn lanes). |
