---
document_id: "8d990734ca1d160f7dc9e870ec4eb570b378f3c1b8aa3f357b6ed6fc1bf31199"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-grabconditionalinventoryobject"
title: "B2Action_GrabConditionalInventoryObject"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:37+00:00"
content_sha256: "e3e3596a518e3edcfed696cc43dc4e37019fa5ccdbcf06d4dde5f1cad5e37a7b"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-grabconditionalinventoryobject"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Grabs an object from self's inventory that matches a condition (by object id or object tag), or reuses one already held in hand if it matches. * =============== * Param: * S1: Selection type - B1Inventory::ObjectId or B1Inventory::ObjectTag * S2: Object id or tag value to match against, depending on S1 * F1: - * F2: - * Note: * OnPlay(): Finishes immediately if a matching object is already held in either hand; otherwise resolves anim/hand setup via SetupAnim and delegates to base OnPlay.
