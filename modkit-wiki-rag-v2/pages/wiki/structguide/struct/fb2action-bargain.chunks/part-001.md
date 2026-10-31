---
document_id: "d7d48f41cd9396c4d0e6521f4e3406f51f0ee05cca687bbb4f7733d3672c40ec"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bargain"
title: "B2Action_Bargain"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "006f54c0141f30e67473d0d2e49c7c04e5cc2e47c60e18dba5356e8208042063"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-bargain"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Drives one side (initiator or seller/responder) of an ongoing bargain Coop, issuing the matching start command on play and monitoring the shared scheduler until the bargain concludes. * =============== * Note: * OnInit(): resolves this character's CoopComponent-connected FB2CoopScheduler_Bargain and caches the seller entity id; fails if self and seller possession states are mismatched. * OnPlay(): issues StartResponse if self is the seller being bargained with, or StartInitiate if self started the bargain. * OnTick(): finishes the action once the cached bargain scheduler reports the bargain as finished.
