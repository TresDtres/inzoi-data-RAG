---
document_id: "b9c3c608be2c4ee2c916740fc7fc89318cc1e6c38fa65d68843f78109b25321a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-pickupcharacter"
title: "B2Action_PickUpCharacter"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "f6fbf5c0330d86d3d9d3769d2420c6691882efda4fd5326ff4723bb860eaf2e7"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-pickupcharacter"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Picks up a target character (e.g. an infant) into the self character's arms by resolving and playing a * carry pick-up animation sized to the height difference between the two characters. * =============== * Param: * S1: GrabId, the FB1GrabTableRow id describing how the target character is carried * S2: Optional override anim id for the pick-up montage; falls back to a height-based lookup when invalid * F1: - * F2: - * Note: * OnInit(): Resolves GrabId/PickUpAnimId (using target/self height difference when no override anim is given) and queues the required animations for async load. * OnPlay(): Plays the pick-up animation montage. * OnTick(): Accumulates elapsed animation time.
