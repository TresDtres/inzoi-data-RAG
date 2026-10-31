---
document_id: "9e51f16470a0a9b45bf1a803093f6f5e2732a858db1eebc3478e2c59f0428a61"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-grabinventoryobject"
title: "B2Action_GrabInventoryObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:37+00:00"
content_sha256: "06a78f27ab97a5de05751832fb4da01309c0918fdbaf8cf52fa29915b2785f81"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-grabinventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Picks up an object from self's inventory and holds it in hand, resolving the grab/pick-up animation and target hand before playing. * =============== * Param: * S1: Optional preferred pick-up animation id (used if a matching montage exists, otherwise a suitable one is looked up) * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves anim/hand setup via SetupAnim and queues async loads for the pick-up and grab-loop animations. * OnPlay(): Finishes immediately if the object is already held; otherwise plays the pick-up montage. * OnFinish(): Syncs the grab-loop animation and records the grabbed entity id as the last grab on the interaction component.
