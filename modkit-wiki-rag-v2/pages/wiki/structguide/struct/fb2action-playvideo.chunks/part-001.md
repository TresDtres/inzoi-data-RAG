---
document_id: "482dabcb24393af6a5e42bcabf2a3b8ca7a626a08221b5c9204c3738bf1e8584"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playvideo"
title: "B2Action_PlayVideo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "c533e08128c6f49a98cb1e920e59c29c2f2ad9f42ad5cf16f3bda622685bb780"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-playvideo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a full-screen video via a UI packet and waits for the video player to report completion before finishing. * =============== * Param: * S1: Video player id name, resolved into VideoId * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves VideoId from Action.S1. * OnPlay(): Skips actual playback in test worlds, otherwise subscribes to the finish payload and sends the play-video packet. * OnFinish(): If a packet was sent, unsubscribes from the finish payload. * OnTick(): Finishes immediately if the play packet was never sent.
