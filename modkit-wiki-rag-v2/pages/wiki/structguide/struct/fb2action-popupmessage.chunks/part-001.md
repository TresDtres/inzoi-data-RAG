---
document_id: "91acd4f0d3e09c9e1db258ad3c3f814480dbc00c199c2b20a6fa43cd1318ad0b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-popupmessage"
title: "B2Action_PopupMessage"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "f2e0e93184d0e82ead05db1c8aa9bb15163ff95a6b49427dfc756ef95bc33924"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-popupmessage"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens a UI popup message for self and waits for the popup to be closed before finishing. * =============== * Param: * S1: Popup table id, resolved into PopupId * S2: Popup category, resolved into PopupCategory * F1: - * F2: - * Note: * OnInit(): Reads PopupId/PopupCategory from Action.S1/S2. * OnPlay(): Skips actual playback in test worlds, otherwise subscribes to the close-popup payload and opens the popup. * OnFinish()/OnCanceled(): If a packet was sent, unsubscribe from the close-popup payload. * OnTick(): Finishes immediately if the open-popup packet was never sent.
