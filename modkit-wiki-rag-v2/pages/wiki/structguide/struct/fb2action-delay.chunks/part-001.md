---
document_id: "6151ff5ff0d2c1aa42c77b218f8fe9362b0fab65a6852fc9ea4a76aa66cfdac9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-delay"
title: "B2Action_Delay"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:32+00:00"
content_sha256: "c4bad3effebf556335511ee5cd63fded4d97569236969ef980e77d4635f4675e"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-delay"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Waits for a fixed game-time duration (converted to real seconds via the current time scale) before finishing, with no target/side effects. * =============== * Param: * S1: - * S2: - * F1: delay duration in game minutes, used to compute both ExpireTime and the progress-bar duration * F2: - * Note: * OnInit(): intentionally empty (no action-param parsing needed at init time). * OnPlay(): computes ExpireTime as the current game time plus the F1 duration. * OnCanceled(): resets ExpireTime back to epoch. * OnTick(): finishes once CurrentTime reaches ExpireTime.
