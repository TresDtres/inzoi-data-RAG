---
document_id: "801062b1a1121f3af1fb6e1c50cae2eb5b7eb3cd725c4170bb0a2bbb84f0ebe8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-interactivecontent-candleblow"
title: "B2Action_InteractiveContent_CandleBlow"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:38+00:00"
content_sha256: "53cc5b326f356e2726006e3b40fe1668b8d13c919e7d93fd1aefd663e8779056"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-interactivecontent-candleblow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * B2 simulation orchestrator for the participatory candle-blow action. Real-time mic input and camera switching are handled by B1's AB1InteractiveContent_CandleBlow; * this action only drives montage playback (Default -> Loop -> End), packet communication with B1, and applying the birthday growth effect. * =============== * Note: * OnInit(): Resets bWaitingForResult and logs the start. * OnPlay(): Begins playing the Default (approach) montage section. * OnFinish(): Applies the birthday growth effect regardless of outcome, then finishes. * OnCanceled(): Sends the stop packet to B1 if a result was still pending.
