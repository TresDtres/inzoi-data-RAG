---
document_id: "f53f401661c8e7a9d7c85d35cd6f64a3eda977602d56c0bd4d281823784ea450"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-smellflower"
title: "B2Action_SmellFlower"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:46+00:00"
content_sha256: "2289207166a559479378d0a62b03c686746f1083b115bae45f596aa74b55e080"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-smellflower"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that resolves the target flower's enchant buff and applies it to the caster based on their plant preference when the smelling animation finishes. * =============== * Note: * OnInit(): Cache EnchantId from the target flower object; fail if the target flower entity is invalid. * OnFinish(): Look up the enchant table row and apply the buff matching the caster's plant preference (Like/Dislike/Common).
