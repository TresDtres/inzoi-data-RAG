---
document_id: "3e51b6e6d80833a2fe5c81c044f72f556015fd7c89e39e6f603ccf8aca4de91b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-launchsetclass"
title: "B2Action_LaunchSetClass"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "a7e682967e0191f27f45771ca5ae96567dfb728c8c47b4324b724e07e2a173d4"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-launchsetclass"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Opens the school set-class UI so the possessed character can pick which enrolled teen Zois belong to the given class, then assigns the selected Zois to that class on the school entity. * =============== * Param: * S1: Class Id * S2: - * F1: - * F2: - * Note: * OnInit(): Resolves the school entity from the target's site and parses ClassId from Action.S1. * OnPlay(): Sends the open set-class UI packet with the enrolled teen candidates, subscribes to the select/cancel completion events, then pauses the simulation while the UI is open. * OnTick(): Nothing; this action waits for the UI callbacks. The pause stops the simulation clock, so this action must never rely on in-game time to finish. * OnFinish(): If the open-UI packet was sent, resumes the simulation, unsubscribes from the events and sends the hide-UI packet. * OnCanceled(): Same cleanup as OnFinish(), skipped when the cancellation itself comes from a restore (bRestore). * OnB2PreBeginPlay(): Cancels the interaction when restored mid-play, because the UI is gone and the selection callbacks no longer exist.
