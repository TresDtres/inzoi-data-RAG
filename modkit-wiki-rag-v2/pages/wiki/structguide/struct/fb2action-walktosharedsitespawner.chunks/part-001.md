---
document_id: "9190f2da3bd37286052eb2fbba588dc8f41bbd0c61c9c2cf2dfbcad7b456b91e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-walktosharedsitespawner"
title: "B2Action_WalkToSharedSiteSpawner"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:52+00:00"
content_sha256: "c44a120b1c1c153f4b4c85867e651a5a81fad2c7de21d4506f6aea5fa3b17bd2"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-walktosharedsitespawner"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Walks the character to a shared site spawner point near its current or nearest site, optionally teleporting to a linked school site's spawner point on arrival. * =============== * Param: * S1: MeshSpawnTag id, validated as a foreign key. Not read by this action * S2: Fixed usage of the target boarding point (EB1SharedSpawnGroupUsage). Unset or unrecognized values fall back to Common * F1: Index into the nearest shared site spawner group's ServiceSpawners array * F2: Enables teleport-on-finish mode when greater than zero * Note: * OnInit(): Sets bTeleportMode from Action.F2. * OnFinish(): Teleports the walker to the resolved school site location when in teleport mode.
