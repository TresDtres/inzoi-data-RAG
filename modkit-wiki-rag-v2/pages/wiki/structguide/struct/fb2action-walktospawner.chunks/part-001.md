---
document_id: "15b471e2a69c6f82a9944da5862fbb815edbc29baa79fc9a2fdffc4ca62527f2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktospawner"
title: "B2Action_WalkToSpawner"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:53+00:00"
content_sha256: "21a522fffc708c24980680dd8f8873d9a1abb8a230f564e92169d92fa81884b3"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktospawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to a spawner location to be despawned there, periodically re-evaluating for a more natural nearby despawn spawner while both the walker and destination are visible in camera. * =============== * Note: * OnTick(): While the walker and destination are both in the AOI camera view, occasionally reselects a same-group or directionally-found nearby spawner (excluding the current one) and restarts pathing to it.
