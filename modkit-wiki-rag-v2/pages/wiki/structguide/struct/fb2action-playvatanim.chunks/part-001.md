---
document_id: "94035ef75d8598e4d8e197b69748fbe31a426ff8e0978564df5fc0ecdcce972f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playvatanim"
title: "B2Action_PlayVATAnim"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "01b46d68d4cfca13a44eee28eeab9f28e6eb2a116b798605367d8855c2bcfc62"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-playvatanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a Vertex Animation Texture (VAT) anim sequence on a game object entity by sending play/stop packets to B1, timed by the montage's total play length. * =============== * Param: * S1: Anim id used to look up the montage table row (resolves AnimSequenceId and TotalPlayLength) * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves the entity, looks up the montage row from Action.S1, and requests async anim load. * OnPlay(): Sends the play-VAT-anim packet. * OnFinish()/OnCanceled(): Stop the component anim via a stop packet. * OnTick(): Finishes once CurrentAnimTime reaches TotalPlayLength, otherwise accumulates CurrentAnimTime.
