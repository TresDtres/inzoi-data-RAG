---
document_id: "e792f3cc1c96a5528ff111f5f7290d764068fdb821926f61bd477ee7613bee79"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-farmingfertilizerange"
title: "B2Action_FarmingFertilizeRange"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:35+00:00"
content_sha256: "bb3b69abfccfe50905da0a934361ea1d2e336f64458fdca49240de809c0843de"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-farmingfertilizerange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Fertilizes crops on soil objects gathered in range, charging a currency cost per fertilized soil and adding nutrient stats to each crop, with amounts depending on whether the good fertilizer variant is used. * =============== * Param: * S1: - * S2: fertilizer type id compared against the good-fertilizer tag * F1: - * F2: radius used to gather soil objects around the target location * Note: * OnInit(): determines whether the good fertilizer variant is used from action S2. * OnFinish(): delegates to base, charges currency for fertilized soils, then applies nutrient stat gains to each crop.
