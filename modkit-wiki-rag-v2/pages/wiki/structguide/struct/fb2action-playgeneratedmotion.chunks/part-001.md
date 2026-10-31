---
document_id: "eed6f0855b087f44da0a45fe65a0daa5ac5cd4079e45f03da6bdeabff99f73f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playgeneratedmotion"
title: "B2Action_PlayGeneratedMotion"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:41+00:00"
content_sha256: "f5de9e2b998580a4c826f9924a11e6e686be367a4fee29dcc8c59050f18da935"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-playgeneratedmotion"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a procedural "generated motion" clip (identified by a slot index) by sending a play packet to B1 and finishing when B1 reports completion or the tracked play length elapses. * =============== * Param: * S1: - * S2: - * F1: Generated motion slot index (cast to int32 and stored as GeneratedMotionIndex) * F2: - * Note: * OnInit(): Reads the generated motion slot index from Action.F1. * OnPlay(): Skips actual playback in test worlds, otherwise sends the play-generated-motion packet. * OnFinish(): If not canceled and a packet was sent, unsubscribes from the finish payload and sends a finish packet. * OnCanceled(): If a packet was sent, unsubscribes from the finish payload and sends a finish packet. * OnTick(): Finishes immediately if canceled, resends the packet if needed, and finishes once CurrentAnimTime reaches TotalPlayLength.
