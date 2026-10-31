---
document_id: "6436af092214acd2e13bdd8bf94581b4f60c69001e201049409153cf7a5757ca"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-deliverobjecttotinyshop"
title: "B2Action_DeliverObjectToTinyShop"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:32+00:00"
content_sha256: "61ef873ab48bc3b83cd017676e8522b107270570868018c47350af828610de72"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-deliverobjecttotinyshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Delivers objects from the self character's inventory to a tiny shop owner, opening the hand-over inventory UI and paying out currency for the delivered items on finish. * =============== * Note: * OnPlay(): Opens the inventory hand-over UI for tiny shop delivery, finishing early if self, inventory, or target are invalid. * OnTick(): Watches DeliverCount to cancel the action (0) or finish it (>0) once the UI reports a selection. * OnFinish(): Delivers the selected objects to the tiny shop and pays out the accumulated currency.
