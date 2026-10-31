---
document_id: "3c5bcab290c300e12bb4915031bf198cf41266159b0c748db0e4f3a68cf8d46c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-farmingpullweedrange"
title: "B2Action_FarmingPullWeedRange"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:35+00:00"
content_sha256: "97947dd987717297bad087f2f84d93a01b96161a8cc742a5b513d97584c73c6c"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-farmingpullweedrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Applies weed-pulling progress to each non-Normal-state soil object gathered in range, increasing its soil weed level stat up to a configured maximum. * =============== * Note: * OnFinish(): delegates to base, then increases the soil weed level stat on each in-range soil entity below the max threshold.
