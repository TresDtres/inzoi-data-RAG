---
document_id: "ffaef572637b9ad26d1a1a5885d7ae0cde41b39ad1525a8044d46ae48edcca01"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-bookread"
title: "B2Action_BookRead"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "a4d50ea9df08a53f9baeac0c0dd1c355026a9034c6fb7d627ae20b41aa28e6b5"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-bookread"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays synchronized reader/book loop montages while a character reads a carriable book object, accumulating elapsed reading time until the book's total read time (or homework progress) completes, then finishes with the book's finish script. * =============== * Param: * S1: RootAnimId - animation id played on the reading character (self) * S2: BookAnimId - animation id played on the book object (target) * F1: - * F2: - * Note: * OnInit(): resolves BookDtId/BookAnimId, queues async anim loads for both self and the book, and computes ProgressTime. * OnPlay(): resets loop/tick state, runs the book's start script, and starts the Default-section loop montage. * OnFinish(): runs the book's finish script, notifies FB2MissionComponent of the completed read, and resets the root montage delegates. * OnCanceled(): plays the End section montage if the loop hadn't already reached End. * OnTick(): accumulates elapsed reading ticks while in the Loop section and finishes (via End section) once total read time or homework progress completes.
