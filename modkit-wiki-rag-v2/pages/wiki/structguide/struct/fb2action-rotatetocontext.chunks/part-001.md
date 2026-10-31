---
document_id: "8f339a65bcee62b014e7d762735e23e7facfb68338ef63bde3e44ec386c692fd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-rotatetocontext"
title: "B2Action_RotateToContext"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:45+00:00"
content_sha256: "b558b89ac5721f177cde52c3546c3cd09e50a3f3181820701022c9335f7b7b12"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-rotatetocontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Turns self character in place to face a target rotation/location parsed from the entity's JSON action context, without moving. * =============== * Note: * OnPlay(): Parses the action context for target rotation/feet location, then plays a turn-in-place anim toward it. * OnFinish(): Snaps self character's yaw to TargetRotation. * OnTick(): Waits for motion warping to finish, then finishes the action.
