---
document_id: "4720cea7ba995789fffd38eb7ff9dcab1cc4ac3f78a256909953953d7e75ec1f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-disembark"
title: "B2Action_Disembark"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "cb8fecccbef400ff0cc23f25db8e8a3e642cfbbb645f790ad428db1339e5aa8e"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-disembark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Handles a character disembarking from a ship, validating the current vehicle state and teleporting the character to a valid disembark location. * =============== * Note: * OnInit(): Fails the action if the self character isn't currently riding a ship. * OnPlay(): Resolves the disembark location and target ship, then attempts the disembark, finishing or canceling based on the outcome.
