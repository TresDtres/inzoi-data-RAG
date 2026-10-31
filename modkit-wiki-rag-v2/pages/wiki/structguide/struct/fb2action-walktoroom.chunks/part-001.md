---
document_id: "8949082b81af83f8bc5dabb1eb19b01753367cb63755ea97852e548e9227cfae"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktoroom"
title: "B2Action_WalkToRoom"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:52+00:00"
content_sha256: "f55a305dc0f86bc95232f070e4b3f559bcc29ab6ef1d4c52af50bc835f592180"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktoroom"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Moves the character to a specific Room location inside a Site identified by a RoomPurpose, rather than to the Site's entrance like WalkToSite; the pathfinding system automatically routes through elevators as needed. * =============== * Note: * OnTick(): Disables sprint and finishes the action once the path follower is no longer active. * OnFinish(): Disables sprint before finishing. * OnCanceled(): Disables sprint before canceling.
