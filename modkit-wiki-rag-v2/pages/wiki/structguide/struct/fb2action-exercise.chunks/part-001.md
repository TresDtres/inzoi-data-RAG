---
document_id: "dc7f59a84d2f7a04fb748b1a84cdf1c5f9847bcce7d18d675456e8cf4616d951"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-exercise"
title: "B2Action_Exercise"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "4886c72018c903f702545d3472978a58e04680d6cbe8620d94bcbfbf57c09b0c"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-exercise"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays an exercise animation and applies calorie/muscle stat changes based on the configured intensity and elapsed progress. * =============== * Param: * S1: - * S2: intensity id used to look up calorie/muscle values from the exercise intensity table * F1: - * F2: - * Note: * OnInit(): captures the intensity id from action S2. * OnFinish(): applies the intensity effect if the action finished successfully, then delegates to base. * OnCanceled(): applies the intensity effect, then delegates to base.
