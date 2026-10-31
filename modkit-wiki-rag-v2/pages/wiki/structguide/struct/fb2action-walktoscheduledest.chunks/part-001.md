---
document_id: "23fe948db19c9b2c75b2881443ee555afb7f2940608a3a00a3f5150162690834"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktoscheduledest"
title: "B2Action_WalkToScheduleDest"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:52+00:00"
content_sha256: "38e14681bc009078ba76bbedc1a80f3d381ace8deb3120bf2023107861c8b5be"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktoscheduledest"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Moves the character to the current CustomSchedule slot's destination, either a RoomPurpose location or another Site (GotoOtherSite). * =============== * Note: * OnInit(): Marks this action as a commute action, since WalkToScheduleDest is always a schedule-driven destination move. * OnTick(): Disables sprint; on arrival, resumes a pending stage-2 room move via RequestPath if a cross-site room move is still needed, otherwise finishes the action. * OnFinish(): Disables sprint before finishing. * OnCanceled(): Disables sprint before canceling.
