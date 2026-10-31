---
document_id: "f70fea8f9103e111c733eb62a674068d9fe10e59bc687dfd181855e0b366cd07"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-runaway"
title: "B2Action_RunAway"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "fcf4b7376cef0102ef010fd808194fbd353f1e721bbe1d23c3e8d51dae77e54d"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-runaway"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the self character away from its interaction target (or away from its current facing if there is no valid target), falling back to the nearest reachable site if a direct retreat path can't be found. * =============== * Param: * S1: - * S2: - * F1: Minimum distance to retreat, copied into MinDistance * F2: - * Note: * OnInit(): Resets OffsetDistance and copies MinDistance from Action.F1.
