---
document_id: "12cd46d6b7dd3689cb3b5f7162d950f6378e0db1554a406708b3db157c0ee257"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1aggrotablerow"
title: "B1AggroTableRow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:53:12+00:00"
content_sha256: "ee202639d00a42e029d5bc51a85e3ba535deb76dd1af39ada3af7e6be8a8e6ae"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/structguide/struct/fb1aggrotablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

Aggro Reason data — the TableRow Id itself is used as the Reason. - Chase vs immediate (`bAutoChase`) - Per-row arrival distance override (`OffsetDistanceOverride`) - Arrival fire: Interaction / Script list / Howling (at least one of the three must be defined) - Emotion applied on AddAggro (`OnTriggeredEmotionId`) Aggro → Emotion is one-way (apply only). The reverse direction (emotion expression → aggro decrement) is not handled here; Script-side code adjusts aggro directly via `B2AggroHelper::DecreaseAggroByReason(...)`.
