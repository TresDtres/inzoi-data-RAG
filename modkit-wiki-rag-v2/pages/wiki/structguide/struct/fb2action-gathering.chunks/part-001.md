---
document_id: "14c535f97ba18d52e393e38e0cee24b27703cba48b2bd2cc7809eae1e78d86de"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-gathering"
title: "B2Action_Gathering"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:36+00:00"
content_sha256: "34a97bbac1d6cb47f77d3acadd4faaf36f4b91979aee47d6f7dcfff3243b0cd3"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-gathering"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the gathering animation against a target gatherable object and, on successful finish, grants the harvested reward to self's inventory and destroys the gatherable object. * =============== * Note: * OnInit(): Resolves self character and target gatherable object, finishing early if either is invalid. * OnFinish(): On successful result, adds the gathering reward to self's inventory and destroys the target gatherable object, then delegates to base.
