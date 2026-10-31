---
document_id: "cfaf227d7361e1502acbb62d901a1b0e76d854e157f673d1375cad27ddfe37e6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-die"
title: "B2Action_Die"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "0ad3c4b227d67c5ccf3a03ceb378aec7104edae5ee40dcdd73609c23ff0a8a30"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-die"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Handles the character death sequence: triggers the death confirmation popup or requests death immediately, then finishes without playing any animation of its own. * =============== * Note: * OnPlay(): Sends a life popup packet, or requests the character's death immediately if no popup is needed, then finishes the action.
