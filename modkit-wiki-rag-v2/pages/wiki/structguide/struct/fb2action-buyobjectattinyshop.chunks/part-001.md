---
document_id: "3cb45bcf28d7798d6ca0415f9545415ce15930c4360da1ed11e8ff9e7ddd7e21"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-buyobjectattinyshop"
title: "B2Action_BuyObjectAtTinyShop"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "3478c8d500f9f2c101ace31939231347136c51dd7b87921035a9be96131ac0ed"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-buyobjectattinyshop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Executes the purchase-and-pickup flow for buying a game object directly from a tiny shop, playing a pick-up animation for carriable objects before applying the purchase. * =============== * Note: * OnInit(): resolves the grab id, gender/age-dependent pick-up animation, and montage name for carriable target objects, and requests their async preload. * OnPlay(): plays the pick-up montage for carriable objects, otherwise executes the BuyObjectAtTinyShop script directly.
