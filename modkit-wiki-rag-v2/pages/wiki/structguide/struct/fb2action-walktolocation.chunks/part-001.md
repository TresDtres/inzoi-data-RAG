---
document_id: "28b473fbcf6a91d51d15ec0adde73fef2137a79a62b10d129070d1a320310de7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktolocation"
title: "B2Action_WalkToLocation"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:51+00:00"
content_sha256: "dc9912aa6045abf2da4edcc5b6194de827e829383957080b557f870c2da3960f"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktolocation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to an explicit world location or a named map position, snapping to the nearest reachable point. * =============== * Param: * S1: Optional destination — either a serialized FVector string or a named key into UB1MapPositionDataAsset for the current city * S2: - * F1: - * F2: - * Note: * OnInit(): Resolve InitDestination from S1 (vector string or named map position), defaulting to the walker's current location.
