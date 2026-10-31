---
document_id: "8202c448547714e7e783eadd23ef8d5176a4c7d5486395edc7c1ac72f4c06d62"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waitselecttalkspace"
title: "B2Action_WaitSelectTalkSpace"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "794a0a43019d564eb420d71cae03f1c90e485e2eabf8f907d1b4c50ec01cbdc7"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-waitselecttalkspace"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Waits while the character selects/enters a talk space, monitoring TalkComponent state and canceling on timeout, then hands off to talk sequence waiting once a talk instance is assigned. * =============== * Note: * OnInit(): Caches Self and initializes TimeOutDuration. * OnPlay(): Records StartedTime and notifies TalkComponent that the character is waiting to select a talk space. * OnTick(): Cancels if Self/TalkComponent is invalid or not talking has finished; on TalkInstanceId change notifies TalkComponent of talk sequence waiting; cancels on timeout; finishes once the talk proceeds. * OnFinish(): Clears TalkComponent's talk-proceed flag.
