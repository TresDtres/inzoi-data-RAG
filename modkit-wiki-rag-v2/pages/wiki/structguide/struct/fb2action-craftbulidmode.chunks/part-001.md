---
document_id: "d2823e496e2a9a03f75a4bd44cf49b1fe8bb96121a5fa543ea9fad50a9435ae3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-craftbulidmode"
title: "B2Action_CraftBulidMode"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:32+00:00"
content_sha256: "2a92463607abf2a096250f09029799e172e961007282e2834d2dc5bd222335c3"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-craftbulidmode"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens a craft/build-mode UI (3D Printer or Furniture) for the possessed player and waits for the client to signal completion before finishing. * =============== * Param: * S1: which build mode to open, converted to EB2CraftBuildMode (Printer or Furniture) * S2: - * F1: - * F2: - * Note: * OnInit(): parses CraftBuildMode from InAction.S1, caching the raw name for debug logging if it fails to resolve. * OnPlay(): for a possessed self entity, sends the matching open-build-mode packet and subscribes to the entity's OnFinishCraftBuildMode event; cancels the interaction for other/invalid modes. * OnFinish(): unsubscribes the OnFinishCraftBuildMode delegate if a packet was sent. * OnTick(): finishes immediately if no packet was ever sent (e.g. test world or non-possessed case). * OnCanceled(): finishes immediately.
