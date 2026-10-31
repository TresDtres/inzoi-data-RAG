---
document_id: "fb088313331634f70b74e2a93c8d70bab5ac93e92605b9ccc4efb70f1e449152"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktocompany"
title: "B2Action_WalkToCompany"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "5a627601a140f1d12200a81a418791b61f2acea765ec3cf72601ac9ba6016a31"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktocompany"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Commute WalkTo for a character's Business career: walks to the company/workplace site's entry point and always treats the walk as a commute action. * =============== * Note: * OnInit(): Marks this walk as a commute action (bIsCommuteAction). * OnTick(): Mirrors the sibling site-visit action's finish handling — since the base OnPlay's SLOD teleport shortcut clears the path without reaching the base's Playing/MotionWarping finish states, this directly finishes once the path follower becomes inactive.
