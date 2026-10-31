---
document_id: "1d871fbf90f8a9133ee9dec55933a7918c1db88eb69144fc6dbba17758dcf8e5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-interactivecontent-fishing"
title: "B2Action_InteractiveContent_Fishing"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:38+00:00"
content_sha256: "76beae08c613a35f30ea1563771a11b838b009a7be3ac879954446f2d233365d"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-interactivecontent-fishing"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * B2 simulation orchestrator for the participatory fishing minigame. Real-time gameplay logic (input/tension/haptics) is handled by B1's AB1InteractiveContent_Fishing; * this action only drives montage playback (Idle -> Cast -> Loop -> Bite -> Reeling) and packet communication with B1. * Result presentation is not handled by this montage - it is handled by a dedicated result interaction branched via SuccessNextLabel/FailNextLabel of the interaction sequence (bag Click_Fishing_Interactive). * =============== * Note: * OnInit(): Resets bWaitingForResult and logs the start. * OnPlay(): Cancels the interaction if the character isn't currently possessed; otherwise determines the target fish for this cast, sends the start/difficulty packets to B1, pauses the grab slot layer, and awaits the result. * OnFinish(): Forces the montage to the End section (overriding the base's default re-jump behavior) before finishing. * OnCanceled(): Clears the cached fish, unpauses the grab slot layer, and sends the stop packet to B1 if a result was still pending.
