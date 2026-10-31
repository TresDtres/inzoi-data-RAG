---
document_id: "f52c7c3f83c97daae49c99d56d3e0201d026f968ea22a34b3f75c9224926865c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-coopselect"
title: "B2Action_CoopSelect"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "8626fb8e9219397304cd30cb47b488d87a1194fb2c37c0ad8b92c984099b7755"
chunk: 1
chunk_count: 8
page_type: "article"
route: "wiki/structguide/struct/fb2action-coopselect"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Resolves the coop to start and, when the requester is a possessed/user-triggered Zoi, opens a coop-select (or birthday-blow) UI to let the player pick participants before starting the coop; otherwise starts the coop directly. * =============== * Param: * S1: coop id override * S2: - * F1: - * F2: - * Note: * OnInit(): reads the CoopId override from the action params. * OnPlay(): resolves CoopId/InteractionBagId, and either starts the coop directly (non-possessed, non-user-triggered, or zoi-group cases) or pauses the game and opens the coop-select / birthday-blow UI, subscribing to the character's zoi-selection events. * OnFinish()/OnCanceled(): unless restoring, reports LastCoopResult via toast, unpauses the game, unsubscribes from selection events, and hides the coop-select UI if it was shown. * OnTick(): finishes immediately if no selection UI packet was ever sent.
