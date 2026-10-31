---
document_id: "a0c96fa342370d040e4e11dcbadddfc4fa7e5c3a5f7c0f4ffb9cf411edee208f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-editschooluniformmannequin"
title: "B2Action_EditSchoolUniformMannequin"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "46ae3edfd4a9698bd5b1b4a305d007d5fd72e9fa1604966afb62cdc2bd23b179"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-editschooluniformmannequin"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the appearance-edit animation at a school uniform mannequin, then requests the mannequin's uniform edit (opens the CAZ quick-fitting flow for the target mannequin). * =============== * Param: * S1: AnimId (inherited from FB2Action_PlayAnim; the edit animation to play) * S2: - * F1: - * F2: - * Note: * OnInit(): Caches the target mannequin entity id; finishes early with InvalidTargetEntity if the mannequin is not found. * OnFinish(): Sends S_EditSchoolUniformMannequin to B1 for the cached mannequin and self character to trigger the uniform edit UI.
