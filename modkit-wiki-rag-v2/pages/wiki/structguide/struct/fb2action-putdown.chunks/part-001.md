---
document_id: "3b62899583b74c25e6550b216133fa35cf76f80c6c93ad7347e6c81ec207a66f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-putdown"
title: "B2Action_PutDown"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "3203a2416c981033c5311dcad8a3588a2e07cc4dd3ab7bca234fd5657b06fb57"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-putdown"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Puts down a grabbed object or character, choosing where based on PutDownMethod (target object slot, inventory, floor, or destroy) and playing the corresponding animation. * =============== * Param: * S1: AnimId (optional specific put-down animation override) * S2: EB1PutDownMethod (put-down destination override) * F1: - * F2: - * Note: * OnInit(): Resolves PutDownMethod from Action.S2 if unset, validates GrabEntityId/PostureComponent, and caches the grab id and preloads put-down animations. * OnPlay(): Determines the put-down location/method via TryPutDown() (target object slot, inventory, floor, or destroy), resolves the anim montage, and plays it. * OnFinish(): Resets posture context and frees the interaction slot; on success, stops the arm animation for a grabbed character, or places/stores/destroys a grabbed object per PutDownMethod before stopping the arm animation. * OnCanceled(): Resets posture context and clears the grabbed character's pending slot name.
