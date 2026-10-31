---
document_id: "bce6f562cfce480df272645da52507fc1683456cbd1eb896d44447ca0379c60f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-spawnvehicleatgarage"
title: "B2Action_SpawnVehicleAtGarage"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:46+00:00"
content_sha256: "47033d57e20add734de495c969210202a240b641ceab1a36eccc84b9e8d4f604"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-spawnvehicleatgarage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that spawns the character's owned vehicle onto a target garage pad, validating vehicle passenger state and the garage pad's occupancy/authorization before spawning. * =============== * Note: * OnPlay(): Validate the owned vehicle has no passenger/waiting driver and the target garage pad is unoccupied and authorized for the character, then set the vehicle's transform to the pad's spawn transform and mark it spawned.
