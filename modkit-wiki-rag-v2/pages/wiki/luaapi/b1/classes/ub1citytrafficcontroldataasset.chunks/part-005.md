---
document_id: "9ba6df193ac1cce0059d953ae5f23cb635dd6010ee96eef6ffb1047fcd3110c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1citytrafficcontroldataasset"
title: "UB1CityTrafficControlDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:37:12+00:00"
content_sha256: "0d3be12459081474dc3e25570cdb78af30a7c45feaf9b29c372a493a4b94abe1"
chunk: 5
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1citytrafficcontroldataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

as pedestrians and cars popping in at different distances in the same shot. Lowering it does NOT make spawning safer - it opens a wedge in front of the camera where cars may appear. Only lower it if the spawn ring sits beyond the distance vehicles are drawn at, where the cone stops mattering.`SpawnTrialCount``integer`Maximum number of spawn attempts per vehicle when trying to place it in the world.`VisibleDespawnRangeScale``number`Hard removal distance, as a multiple of MaximumSpawnRange, for a traffic vehicle that is still being rendered. Range-based removal is skipped while a vehicle is on screen, otherwise a car receding down a straight road is destroyed in plain sight - the same broken fact as a pop-in, played backwards. But "still rendered" can stay true indefinitely down a long straight, so this bounds it: past this distance the vehicle is removed no matter what. It has to be comfortably larger than 1.0, or the guard buys nothing. |
| `SpawnTrialCount``integer`Maximum number of spawn attempts per vehicle when trying to place it in the world.`VisibleDespawnRangeScale``number`Hard removal distance, as a multiple of MaximumSpawnRange, for a traffic vehicle that is still being rendered. Range-based removal is skipped while a vehicle is on screen, otherwise a car receding down a straight road is destroyed in plain sight - the same broken fact as a pop-in, played backwards. But "still rendered" can stay true indefinitely down a long straight, so this bounds it: past this distance the vehicle is removed no matter what. It has to be comfortably larger than 1.0, or the guard buys nothing. |
| `VisibleDespawnRangeScale``number`Hard removal distance, as a multiple of MaximumSpawnRange, for a traffic vehicle that is still being rendered. Range-based removal is skipped while a vehicle is on screen, otherwise a car receding down a straight road is destroyed in plain sight - the same broken fact as a pop-in, played backwards. But "still rendered" can stay true indefinitely down a long straight, so this bounds it: past this distance the vehicle is removed no matter what. It has to be comfortably larger than 1.0, or the guard buys nothing. |
