---
document_id: "af5e96bba3589ac5cece516ceb4f108c9b62e4de5604826efefeb31722751b3a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-changecostume"
title: "B2Action_ChangeCostume"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "57496da62b9cc7c374d8706d636264a3f0674141008b2cc7cbd78c3bf8f69b11"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-changecostume"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Adds or removes a specific costume item on the character's appearance, identified by costume data id. * =============== * Param: * S1: costume data id to apply or remove * S2: "Remove" tag name selects removal instead of applying the costume * F1: - * F2: - * Note: * OnInit(): reads CostumeId and the remove flag from the action params. * OnPlay(): removes or changes the costume via the appearance component, then finishes immediately.
