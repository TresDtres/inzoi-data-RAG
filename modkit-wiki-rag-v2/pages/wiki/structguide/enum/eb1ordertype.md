---
document_id: "a5550f73327e0a40288f8ac26953e9cdbd70511e56f1329fb66b8cb3600c2161"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/enum/eb1ordertype"
title: "EB1OrderType"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:52:36+00:00"
content_sha256: "581f6ae2db2a06236a68d8e892ae7e1a45b71c18be029c1fce8247d4456074da"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/structguide/enum/eb1ordertype"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

## 🎛️ Enum: EB1OrderType

Specifies how an interaction or order is executed.

- **Invalid**: Invalid order.
- **ONCE**: The order is executed only once.
- **ESSENTIAL**: The order must be attempted and will continue to retry until it succeeds, as long as the schedule has not ended.
- **PERSISTENT**: The order is repeatedly executed throughout its designated time period.
- **RANDOMPERSISTENT**: If the InteractionBag is defined as a pool, a random interaction is selected from the pool each time the order is executed.
- **ONCEDURING**: Attempts to execute the order once. If it fails, it is abandoned—but it is always attempted at least once.

[←Back to Type FinderSearch and filter all 2203 StructGuide documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/types)See alsoOrder[FB1Order](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1order)
