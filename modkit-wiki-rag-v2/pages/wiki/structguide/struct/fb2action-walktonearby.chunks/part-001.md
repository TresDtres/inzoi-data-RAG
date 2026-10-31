---
document_id: "b52126db299f2dd2ef7fb1062a01d3560d6a12a438200579e91bc93474ca55bc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktonearby"
title: "B2Action_WalkToNearby"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:33+00:00"
content_sha256: "0c885fdb09bb554404c0f1e9eeff95470ac2b35a1ab5239224366a9e9d15e453"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktonearby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to a random reachable point within a distance band around its current location, preferring site objects along the way and falling back to a random in-range spot. * =============== * Param: * S1: - * S2: - * F1: Minimum distance from the walker to the target location; also disables the walk-to offset distance when non-zero * F2: Maximum distance from the walker to the target location * Note: * OnInit(): Cache the distance range from the action params and force stopping before swimming-pool nodes. * CanStartCondition(): Skips this step when a site-visit crowd already arrived inside the site, since WalkToSite placed it there.
