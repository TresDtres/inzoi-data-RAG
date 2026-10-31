---
document_id: "778dc84024d9af6040acd4763cf133f7ae662cbe63511e423226c75a42602f8d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-spawnvehicle"
title: "B2Action_SpawnVehicle"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:46+00:00"
content_sha256: "e5090b0d0a32e7b42bba6b230691287775625622eebada81862ad4f4f0554b70"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-spawnvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that spawns the character's owned vehicle near them, either via a NavMesh-based nearby search followed by a path-find to the driver seat, or via a city graph road point query. * =============== * Param: * S1: Spawn mode keyword ("AllowNavMesh" enables NavMesh-based nearby spawn; otherwise city graph point query is used) * S2: - * F1: - * F2: - * Note: * OnInit(): Determine bAllowSpawnOnNavMesh from whether Action.S1 equals "AllowNavMesh". * OnPlay(): Resolve owned vehicle and, depending on bAllowSpawnOnNavMesh, either find a nearby spawn location via NavMesh/site path-finding and async path-find to the driver seat before spawning, or query a city graph road point to spawn on directly.
