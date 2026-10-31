---
document_id: "93c4f797cbcf8fd8443a4b76a0b5ff2f1ebba2c0fbf9d28ad53e121d13315c29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-harvestrange"
title: "B2Action_HarvestRange"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:38+00:00"
content_sha256: "394496ee5572ef57edc7ef9b0745964e066e65ab0f7fce0c2d5cf057548b2006"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-harvestrange"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Range-based harvest action that gathers every harvestable crop from soil plots within radius, then generates the resulting yield objects for the harvester's inventory. * =============== * Param: * S1: - * S2: - * F1: - * F2: radius used to gather soil objects around the target location * Note: * OnFinish(): Runs the harvest over the collected crop entities and grants the resulting yield objects.
