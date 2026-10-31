---
document_id: "2181c0d30c3feddfbd4e3674df8634f5bbc79a5e1ec872369d8735ed2688fcea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-eatanddestroy"
title: "B2Action_EatAndDestroy"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "964761d6764d5905083e7d148efe641e924b767d7dbbd90a5b7c144aeaef1467"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-eatanddestroy"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Extends the eating action to destroy the consumed food object once eating finishes, or on cancellation if the remaining quantity has dropped to the lowest display tier. * =============== * Note: * OnFinish(): Forwards to Eat's OnFinish, then destroys the food object if the eat action finished successfully. * OnCanceled(): Determines whether the food should be destroyed based on its remaining quantity, forwards to Eat's OnCanceled, then destroys it if warranted.
