---
document_id: "fffe26a03de0e8276302d341f084c1079ade20b49cb332b229a8dd68c56cc07f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-teleporttonearesthomespawner"
title: "B2Action_TeleportToNearestHomeSpawner"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "b5acd3324c65e1377bdeaa3bce2569b5487a8adaf203315198e9ce1adc4cb339"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-teleporttonearesthomespawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Teleport action for school bus drop-off: moves the character to the nearest Service spawner (e.g. a curb-side taxi stop) resolved from its home site, falling back to the home/current site's entry point (WalkToSitePoint -> CirculationSpawn) if no spawner is found. * =============== * Note: * OnInit(): Resolves the teleport destination (To) from the home site, or falls back to the current site if resolution fails. * OnPlay(): Disembarks from any current vehicle, applies situational outfit, and teleports the character to To.
