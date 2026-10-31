---
document_id: "bedba082775ae9c616168a8ce14cd1d63fa913ae9f3a18fcc29918784845ed02"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citytrafficpolicy"
title: "FB1CityTrafficPolicy"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:30+00:00"
content_sha256: "c529f0431cc2773eb797577aa785d1646b5e469437a9b64a8c6b27fe0cf2152b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citytrafficpolicy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines the overall traffic policy for a city, including pedestrian rules, vehicle quantity, and spawn ratios.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`PedestrianPolicy`[`FB1CityTrafficPedestrianPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citytrafficpedestrianpolicy)Pedestrian-specific traffic policy settings.`VehicleQuantity``integer`Total number of vehicles allowed in the city (-1 means no limit).`VehicleSpawnRatio``number[]`Spawn ratio per vehicle type, used to weight vehicle type selection during spawning. |
| --- |
| `PedestrianPolicy`[`FB1CityTrafficPedestrianPolicy`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citytrafficpedestrianpolicy)Pedestrian-specific traffic policy settings.`VehicleQuantity``integer`Total number of vehicles allowed in the city (-1 means no limit).`VehicleSpawnRatio``number[]`Spawn ratio per vehicle type, used to weight vehicle type selection during spawning. |
| `VehicleQuantity``integer`Total number of vehicles allowed in the city (-1 means no limit).`VehicleSpawnRatio``number[]`Spawn ratio per vehicle type, used to weight vehicle type selection during spawning. |
| `VehicleSpawnRatio``number[]`Spawn ratio per vehicle type, used to weight vehicle type selection during spawning. |
