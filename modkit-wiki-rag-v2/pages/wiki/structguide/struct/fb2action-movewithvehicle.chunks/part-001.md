---
document_id: "2a962821f9c79a10cd2cf367beec792549bb593294d740e9a5ad0e94b44e2feb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-movewithvehicle"
title: "B2Action_MoveWithVehicle"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "7c71cb59bfb06eac4062d54f3c3242a4f6598898e533d9f505e04041637195e5"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-movewithvehicle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Drives the currently ridden vehicle along a city-graph path to a destination and finishes when the vehicle arrives. * =============== * Note: * OnPlay(): Resolves a safe destination point (site vehicle point/water check), finds a city-graph path if the vehicle isn't already on a lane, and starts the vehicle's auto-navigation to the destination. * OnFinish(): Stops the vehicle and, unless the move failed, sends an arrival toast message to the possessed driver; on failure, sends a NavGuide-ended signal instead. * OnCanceled(): Stops the vehicle and quits its auto-driving navigation.
