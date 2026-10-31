---
document_id: "965cc52867fac6b850f814cc3fac68027bd04428e349715a080e9de2b4e0d0ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-levelsequence"
title: "B2Action_LevelSequence"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "56be509315d21da5118ff1012cd900700bb50f7c2f7e38f6fd39b5ff2d850aff"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-levelsequence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a Level Sequence asset on the client (B1) for the self/target entity and waits for it to finish. * =============== * Param: * S1: LevelSequenceId to look up in UB1LevelSequenceDataAsset * S2: - * F1: - * F2: - * Note: * OnInit(): Reads the level sequence id to play from Action.S1. * OnPlay(): Finishes immediately if neither self nor target is possessed; otherwise subscribes to the finish event and sends a play-level-sequence packet to B1. * OnFinish(): Unsubscribes from the level sequence finish event if the play packet was sent. * OnTick(): Finishes the action immediately if the play packet was never sent.
