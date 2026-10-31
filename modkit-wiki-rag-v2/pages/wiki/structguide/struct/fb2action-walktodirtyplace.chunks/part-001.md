---
document_id: "8722b088239b37f141cd7365a7b0e67a7639f38c8be72ed733de5508d6cf1447"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktodirtyplace"
title: "B2Action_WalkToDirtyPlace"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "6a9892c56ccaadabb508fd2bb8c01e7332d8afc5cce3f2f59fd6a06b50138623"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktodirtyplace"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to the dirtiest reachable location within its current site to prepare for cleaning. * =============== * Param: * S1: - * S2: - * F1: - * F2: Distance tolerance kept from the chosen dirty location, used only by variants that skip the clean-tool check (otherwise the tool's CleanRange) * Note: * OnInit(): Cache the site dirty-place offset distance and the distance tolerance from the action params.
