---
document_id: "1fac65c13b0cf178967210bd14aa3ddd8634f30b0d6301777a6937d2ae192d2b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walkto"
title: "B2Action_WalkTo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:50+00:00"
content_sha256: "05013d10fcf77afc64e3d5e94078e384857cc1e624f722592783e0918284d0d0"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-walkto"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Base action for walking a character along a found path to a target entity or location; * drives path-finding, path-following state, turn animations, SLOD-based commute/despawn teleport shortcuts, and arrival/overlap handling. Most concrete WalkTo variants subclass this. * =============== * Param: * S1: "{SCHEDULE}" marker enabling scheduled-walk SLOD teleport timing * S2: "Sprint" marker enabling sprint for this walk * F1: Offset distance to stop short of the target (also overridden internally for burning targets) * F2: - * Note: * OnInit(): Detects the Sprint(S2)/"{SCHEDULE}"(S1) markers, caches bIsCommuteAction, and sets OffsetDistance from F1. * OnPlay(): Chooses between an immediate SLOD teleport (commute/disaster-despawn) or a normal RequestPath(), then handles the direct-move popup timing and the "sitting" fail case. * OnFinish()/OnCanceled(): Stop path following/sprint/move-over and notify the walker (B1) that WalkTo ended. * OnTick(): Drives the path-following state machine (PathFollowing -> MotionWarping -> Finished), scheduled-teleport timing, SLOD-based commute/despawn teleport, and heavy-rain sprint updates.
