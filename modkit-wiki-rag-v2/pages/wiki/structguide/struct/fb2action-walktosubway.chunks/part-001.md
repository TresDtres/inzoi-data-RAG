---
document_id: "4b690dd6ed9dff97997c49ea47436bc60bb16b06e1866df5d0d6f47303cbf068"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktosubway"
title: "B2Action_WalkToSubway"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:53+00:00"
content_sha256: "cbd1e446587be9156f3603e60b7f591d6f5ab17a5f934e05d8fc88b8465faef4"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktosubway"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to the nearest subway (transportation) entry point in the current city and injects transport enter/exit navigation nodes into the resulting path. * =============== * Param: * S1: - * S2: - * F1: Enables despawn-on-finish mode when greater than zero * F2: - * Note: * OnInit(): Sets bDespawnAfterActionFinish from Action.F1. * OnFinish(): Removes the walker's GameSpawned entity state when despawn-on-finish is enabled.
