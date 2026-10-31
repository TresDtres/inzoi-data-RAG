---
document_id: "c39033b5b7b6438294b69fe1ab29ac1aab0534a01eeab8d1da80d7c41249ae42"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktosite"
title: "B2Action_WalkToSite"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:50:34+00:00"
content_sha256: "459b6a3d031753b712bd50f696d6d58beed4e00cbebbf998c2a2006827f6c353"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktosite"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Moves the character to a target Site's designated walk-to entry point, handling schedule/commute detection and sprinting when running late. * =============== * Param: * S1: Explicit destination site id, or the "{SCHEDULE}" sentinel for a schedule-driven site walk * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves an explicit target site from Action.S1 if present, and determines whether this is a commute/schedule action, including a Crowd-type exception that still counts as a commute unless the character is a pure crowd/customer visitor. * OnTick(): Enables sprint when the schedule is running late (outside a custom-schedule goto-site move) and finishes once the path follower is no longer active. * SetParams(): Targets the site's walk-to entry point, except for a site-visit crowd which targets a spot inside the site so it walks in without stopping at the entrance. * OnFinish(): Disables sprint before finishing. * OnCanceled(): Disables sprint before canceling.
