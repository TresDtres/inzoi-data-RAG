---
document_id: "aba49b9c48adc5fe8daaf32af9cf0d56f26dd5e5327f7ef74f7760a0b25a33f6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktocontext"
title: "B2Action_WalkToContext"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "74874bf398e5d0c4c84947ac5658368fc429c0c8397e2da9862b978aee946fe8"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktocontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Coop-driven WalkTo whose destination/rotation come from the walker's connected coop scheduler rather than a target entity or fixed location — either a per-entity slot from a GroupRotation scheduler, or a one-time action context supplied by the coop, and finishes early once a ZoiGroupMove scheduler says the walker can stop. * =============== * Note: * OnInit(): Resolves the walker's connected coop scheduler (and its ZoiGroupMove cast). * OnTick(): Finishes immediately once the ZoiGroupMove scheduler reports the walker can stop, otherwise defers to the parent's normal tick.
