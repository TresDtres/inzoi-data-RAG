---
document_id: "3e3fb2b6e8ec52127c85ca27fc6add2ac696a50ac60b00eacb6464b3bbc7219e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-binocular"
title: "B2Action_Binocular"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "92a93f0d0e38cd8c894abd2b90174e058813ae7f7682bf6626933f977c215ede"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-binocular"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Binocular observation animation. Loops indefinitely only when the possessed character selected the * interaction directly, so that BlueClient owns the view duration. Autonomy, schedule, coop and every * other character play F1 loops and finish like an ordinary interaction. * =============== * Param: * S1: AnimId - animation played on Self * F1: LoopCount - applies unless the possessed character selected this directly * Note: * OnPlay(): user-selected and possessed only. Sets LoopCount to -1 and arms the safety deadline. * OnTick(): finishes the loop when possession is lost or the deadline passes.
