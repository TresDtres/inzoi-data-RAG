---
document_id: "a3ad6a7d63d552c33cd401ffe231b62a6d9c32d5361a13ebd13233eeccb8918f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waittalkpositioning"
title: "B2Action_WaitTalkPositioning"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:49+00:00"
content_sha256: "9a2cb75ae5b7bbc235d43669397ccb1d7184b5752c57002996a96b26d875c5ca"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-waittalkpositioning"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Waits while the character positions itself for a talk, monitoring TalkComponent state and canceling if talk ends or times out, then hands off to talk sequence waiting once a talk instance is assigned. * =============== * Note: * OnInit(): Caches Self and initializes TimeOutDuration. * OnPlay(): Records StartedTime and notifies TalkComponent that the character is waiting on talk positioning. * OnTick(): Cancels if Self/TalkComponent is invalid or talking has ended; on TalkInstanceId change notifies TalkComponent of talk sequence waiting; cancels on timeout; finishes once the talk proceeds. * OnFinish(): Clears TalkComponent's talk-proceed flag.
