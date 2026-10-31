---
document_id: "ee6cad5b8d5dc829452c43646275147f3fbfd9da6e1332018d8cb9b180885159"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb1freelanceactiveorderdata"
title: "B1FreelanceActiveOrderData"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:54:45+00:00"
content_sha256: "31f655430bd43e2bdab766dee5b07db28d6044d56db43d003d99b1d713bc9957"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/structguide/struct/fb1freelanceactiveorderdata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Active order data used in UI widgets and packets, representing an order currently in progress. * Template data (title, description) is looked up via TemplateId in B1; * time display is calculated from StartedTimeTicks/ExpireTimeTicks in B1; * text formatting (client, recipient, request target, sites) is resolved via B1FreelanceUIHelper::FormatOrderText.
