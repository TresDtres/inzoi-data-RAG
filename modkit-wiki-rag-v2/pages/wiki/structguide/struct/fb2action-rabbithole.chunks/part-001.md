---
document_id: "572bc4e618d19da8e3dad8cf6af56f371499b8dc271a625d6e324ef4cc88bdf7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-rabbithole"
title: "B2Action_RabbitHole"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:43+00:00"
content_sha256: "428d905a0cbe62fa961069647bd21f9b9fe3912dfb357b8c028d162fb961b4ee"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-rabbithole"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that hides the character (like disappearing into a rabbit hole) and reappears once a target finish time is reached. * =============== * Param: * S1: RabbitHoleId (FB1RabbitHoleTableRow id) * S2: - * F1: Absolute finish time in HHMM format (used when F2 is not set) * F2: Duration in minutes from the current time; when > 0, overrides the F1-derived finish time * Note: * OnInit(): Resolves RabbitHoleId/FinishTime from Action.S1/F1/F2 and validates against the RabbitHole table. * OnPlay(): Computes FinishTick via SetParams(), marks the character as in the rabbit hole, runs the start script, and hides the character. * OnFinish(): Restores Motive stats toward their buffered minimum, clears the rabbit hole state, runs the finish script, and unhides the character. * OnCanceled(): Same stat restoration as OnFinish, clears the rabbit hole state with a cancel reason, runs the cancel script, and unhides the character. * OnTick(): Finishes the action once CurrentTime passes FinishTick.
