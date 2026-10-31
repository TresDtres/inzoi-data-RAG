---
document_id: "cd5fcefca0058a20ec8e5a5f43feba4a35d3157c2b149908055a27a7ca86ee18"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waittalksequence"
title: "B2Action_WaitTalkSequence"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:49+00:00"
content_sha256: "40f8fd342e03ba5033fdb9d4fa5ebbab362302277da5c9032afa1fb6923936fb"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-waittalksequence"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Waits for the character's turn in an ongoing talk sequence, reporting readiness to the talk instance (immediately or once multi-interaction slots allow) and canceling on timeout or ending when the talk finishes. * =============== * Param: * S1: "True"/"False" string indicating whether this is the character's first talk in the sequence (IsFirstTalk) * S2: - * F1: - * F2: - * Note: * OnInit(): Caches Self, initializes TimeOutDuration, and sets IsFirstTalk from Action.S1. * OnPlay(): Records StartedTime and, if eligible for multi-interaction talk, sets bMultiFlag. * OnTick(): Cancels if Self/TalkComponent is invalid; finishes if talking ended; on TalkInstanceId change reports waiting to the talk instance; cancels on timeout; reports waiting once if not already reported and not in multi-interaction mode; finishes once the talk proceeds. * OnFinish(): Clears TalkComponent's talk-proceed flag; if never reported to the talk instance, leaves the talk to cancel it.
