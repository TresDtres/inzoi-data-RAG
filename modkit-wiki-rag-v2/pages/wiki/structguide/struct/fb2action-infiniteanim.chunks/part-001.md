---
document_id: "7147e17c0ec9e9b810d812169561e1dccbc47dd1503a70b71e398e9d66caf801"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-infiniteanim"
title: "B2Action_InfiniteAnim"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:38+00:00"
content_sha256: "08fc316333add099ee0b76954459ab3c1bc76426fcc59f21ea7c0b509af710fa"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-infiniteanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a looping animation indefinitely (until externally canceled), with a safety timeout that force-finishes it after a fixed in-game duration. Only startable by direct user input. * =============== * Note: * OnPlay(): Verifies the action was triggered by user input, computes a 6 in-game hour safety timeout (MaxTime), sets infinite LoopCount, then starts playback. * OnTick(): Force-finishes the action once MaxTime has elapsed.
