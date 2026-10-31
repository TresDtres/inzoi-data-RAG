---
document_id: "07c91ad6a2b5944701afb4a4b8a8e1f13d89f201a05333ac62271c3a0113b732"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktohome"
title: "B2Action_WalkToHome"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:51+00:00"
content_sha256: "9c9bfdfd738bd2be539f7a528a889f0869407d0b9a94581a86a647643b346acf"
chunk: 1
chunk_count: 18
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktohome"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character home, either by despawning at a spawner point or by walking into a residence site, with SLOD-based teleport shortcuts while off-camera. * =============== * Note: * OnInit(): Mark this walk as a commute-type action. * OnFinish(): Move the walker to NpcWait state after arriving home via a despawn spawner. * OnTick(): Detect spawner arrival, and drive SLOD-based teleport shortcuts (direct spawner teleport, or residence teleport-then-repath) once held off-camera long enough.
