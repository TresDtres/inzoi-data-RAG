---
document_id: "ede0f0a1747dbd6b7589028a75ceaf1c6fee6969a99ec883849538c59d8d4f3c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktowaterexit"
title: "B2Action_WalkToWaterExit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:53+00:00"
content_sha256: "cd4bbee30bf410a56e00611634fd46622a0f1f211a95b7d5e8b7cce564bb9e11"
chunk: 1
chunk_count: 15
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktowaterexit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks a swimming character out of the water: the nearest pool exit point inside a pool site, or the nearest Site in open water * among the distance-ordered candidates that pass the regular autonomy site rules. * =============== * Param: * S1: - * S2: - * F1: - * F2: - * Note: * OnRequestPathFail(): Falls through to the next site candidate, or from the pool exit point to site candidates, after the base retry states are exhausted.
