---
document_id: "d2c8797bcdfc15bdd903667245dd3b31e1b2f63e19249832ae0a9512bce4d3a5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktoaggrochase"
title: "B2Action_WalkToAggroChase"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "7a4b1372b3bbeeb2bcf57840080b9276d4a2afed3b6887d33649c1df515318f3"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktoaggrochase"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Aggro-system chase variant of WalkTo: re-resolves the source's current top aggro target every tick and switches to it immediately, always sprints via EB1SprintReason::Aggro, and only re-paths on a target switch or when a periodic interval has elapsed and the target has moved beyond a threshold (idle targets are left alone to avoid visible path-follower stutter). OffsetDistance defaults to UB1AggroDataAsset but is overridden by the top aggro reason's TableRow when positive. * Design doc: [https://krafton.atlassian.net/wiki/spaces/ProjectBLUE/pages/1027320098](https://krafton.atlassian.net/wiki/spaces/ProjectBLUE/pages/1027320098) * =============== * Note: * OnInit(): Enables sprint (Aggro reason), resolves the initial top target/offset distance, and requests an immediate umbrella re-evaluation. * OnTick(): Re-paths immediately on target switch, or periodically when the target has moved past the threshold (skipped near arrival); otherwise throttles re-pathing. * OnFinish(): Clears the Aggro sprint and notifies the aggro manager of arrival (FireArrival). * OnCanceled(): Clears the Aggro sprint; notifies the manager of a user-abort (no re-chase) or a normal chase-end (auto re-chase next cycle) depending on the cancel reason.
