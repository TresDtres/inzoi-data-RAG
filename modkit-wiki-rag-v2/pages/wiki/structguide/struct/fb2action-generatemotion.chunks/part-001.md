---
document_id: "32bed5588d0889f7d46af04ae5ebf526781937e7cec0b4419290f95e0ed3bad1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-generatemotion"
title: "B2Action_GenerateMotion"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:37+00:00"
content_sha256: "ac1354dae87e7fad55b5d7503cfde613e586cd1d8cea614bf711ba9e383009c0"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-generatemotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Requests the client to play a generic motion via packet and waits for the client's completion notification before finishing. * =============== * Param: * S1: Motion identifier used for log/display purposes * S2: - * F1: - * F2: - * Note: * OnPlay(): Finishes immediately in test worlds; otherwise validates possession/self entity, subscribes to "OnFinishGenerateMotion", and sends a StartActionGenerateMotion packet to the client. * OnFinish(): Unsubscribes from the finish notification if a packet was sent. * OnTick(): Finishes immediately if no packet has been sent yet.
