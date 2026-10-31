---
document_id: "0e4ceece68aa21518c1a6d5394730515a8d7d54d3a34f294696c4ddf9f85a6b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-promvote"
title: "B2Action_PromVote"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:42+00:00"
content_sha256: "70fca571abf02c9dd724c8790ce010cfbf5dc4ebc89057bd2fe402596b9b1d57"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-promvote"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that opens the prom king/queen vote UI for the player and waits for the vote result. * =============== * Param: * S1: Gender (EB1GenderType) of the candidates to vote for * S2: - * F1: - * F2: - * Note: * OnPlay(): Validates possession/school/site-event context, builds the same-gender candidate list, pauses game time, and sends the OpenPromVoteUI packet. * OnFinish(): Unpauses game time and hides the coop select UI if the vote packet was sent. * OnTick(): Finishes immediately if the vote packet was never sent. * OnCanceled(): Unless restoring, unpauses game time and hides the coop select UI.
