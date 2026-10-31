---
document_id: "1ea70d2c64a498de7579115af07f2f2fad83ab5954f39ac676c65c6be12e3fc3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-changeoutfitcategory"
title: "B2Action_ChangeOutfitCategory"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "0e5e01f32765dfee406a92568fd5fee57b41df70722337304adac35b01cbf697"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-changeoutfitcategory"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Adds or removes the currently equipped outfit for an entire outfit category, rather than a single costume id. * =============== * Param: * S1: outfit category enum name * S2: "Remove" selects removal instead of applying the outfit. "Manual" marks a user-directed change (closet menu). * F1: - * F2: - * Note: * OnInit(): resolves the outfit category enum, the remove flag and the manual flag from the action params. * OnPlay(): removes or changes the costume for the resolved outfit category via the appearance component, then finishes immediately. * A manual change keeps the Action reason so that situational rules never treat it as a rule-driven change.
