---
document_id: "6184f21201dec7e5849d5f8094115a44c7f2a66e342e481b56b081b58a824781"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-realtimedelay"
title: "B2Action_RealTimeDelay"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:43+00:00"
content_sha256: "e350eaa44e0da14786c72cb67cd8c0e8c0293d0416ff6f3950cc2a4f8348b1b6"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-realtimedelay"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Waits for a fixed real-world-time duration (unaffected by game time scale) before finishing, unlike FB2Action_Delay which waits in game time. * =============== * Param: * S1: - * S2: - * F1: delay duration in real-world seconds, converted to ExpireTimeTick * F2: - * Note: * OnPlay(): converts the F1 duration (seconds) into ExpireTimeTick ticks. * OnCanceled(): resets ExpireTimeTick to 0. * OnTick(): counts ExpireTimeTick down by real elapsed ticks (ignoring game time scale) and finishes at zero.
