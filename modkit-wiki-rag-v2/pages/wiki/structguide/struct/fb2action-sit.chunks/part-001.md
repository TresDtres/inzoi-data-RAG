---
document_id: "bfb8310520de570f345def57262796dce7ab26c1044838cdba8939e05d6fde2f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-sit"
title: "B2Action_Sit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:46+00:00"
content_sha256: "20f5c2194451394563c2b8aec212aee2c8dbbc0752882b02c35d1b3637f09087"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-sit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Makes self character sit for a randomly rolled duration (30-45 seconds), counting down each tick until it elapses. * =============== * Note: * OnInit(): Rolls a random SitDuration and mirrors it into ProgressTime. * OnCanceled(): Treats cancellation as a normal finish (no failure reason) instead of a hard stop. * OnTick(): Counts down SitDuration each tick and finishes once it drops below zero.
