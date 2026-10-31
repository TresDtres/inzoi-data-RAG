---
document_id: "8b5d88d5e77f637d6e8057202024516af4bcf029854eaafe9686217cfc158ebd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-harvest"
title: "B2Action_Harvest"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:37+00:00"
content_sha256: "5f87ba5eac4a6a5f7ff5d128bee07d4bf737e81708d708b3e9e217fd22900a36"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-harvest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Harvests a single crop entity or every crop growing on a soil plot, then generates the resulting yield objects into the harvester's inventory. * =============== * Note: * OnInit(): Determines whether the target entity is a soil plot (harvest all children) or a single crop. * OnFinish(): Runs the harvest and spawns/grants the resulting yield objects.
