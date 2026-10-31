---
document_id: "238b6b9fd2a11b775b3db7f67a12ca5aa9a875867fbef4f326d803bf9a160823"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-pickup"
title: "B2Action_PickUp"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "9d481fd71ae27258f8b584207a1e2c83681225055bc551a094fd980ff1d164a0"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/structguide/struct/fb2action-pickup"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Picks up a target/grabbed object (or one spawned/selected via the interaction's notify scripts) into the * character's hand, choosing the carrying hand/style and playing the matching pick-up animation. * Examples: taking a served food item, pulling food out of a fridge, or picking up a freely selected object. * =============== * Param: * S1: GrabId, the FB1GrabTableRow id describing how the object is grabbed/carried * S2: Optional override anim id for the pick-up montage; falls back to the grab table's animation when invalid * F1: - * F2: - * Note: * OnInit(): Resolves GrabId/PickUpAnimId from the target object, notify scripts, or picked inventory entity; determines the carrying hand/style and queues the required animations for async load. * OnPlay(): Plays the pick-up animation montage. * OnFinish(): Clears the pick-up context and records the grabbed entity on the interaction component. * OnCanceled(): Clears the pick-up context and, if an object was already attached, records the grabbed entity on the interaction component. * OnTick(): Accumulates elapsed animation time.
