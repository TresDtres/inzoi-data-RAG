---
document_id: "0e40e5949c9a1528773dd91eaabdb521f33424459868a2ccd57b66c2183e550b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-openseatchangeui"
title: "B2Action_OpenSeatChangeUI"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "705d5bdf3890c8b00a462e8b575ec1fa0f270bf5fd0c4307043a84e809e640c5"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-openseatchangeui"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the seat-change UI on the client for a ship, resolving the ship from the targeted actor (or its parent game object). * =============== * Note: * OnInit(): Finishes with InvalidSelfEntity if the self character can't be resolved, otherwise forwards to base. * OnPlay(): Resolves the target actor (or its owning ship if the target is a game object) and sends a packet to open the seat-change UI for that ship.
