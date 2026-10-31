---
document_id: "d1d5535030dbe6ca9a814df831144be4e3ef482615956d5f482367251fb2a715"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-coop"
title: "B2Action_Coop"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "0cafc300139abadc471a5e34b87baf26e6315742602ad2b6ea83857bae88e961"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-coop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Starts a resolved Coop (or Talk) between self and target, dispatching to the Talk system or the CoopScheduler system depending on CoopType, and reports the result via a toast message. * =============== * Param: * S1: coop id to start * S2: coop type name, converted to EB1CoopType * F1: - * F2: - * Note: * OnInit(): reads CoopId/CoopType from the action params. * OnPlay(): resolves any missing CoopId/CoopType from the current interaction's coop-start info (or zoi-group-rotation coop id), then attempts to start the coop/talk, canceling the interaction on failure. * OnFinish()/OnCanceled(): push a toast message reporting LastCoopResult.
