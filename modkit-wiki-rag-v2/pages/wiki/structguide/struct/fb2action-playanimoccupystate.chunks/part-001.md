---
document_id: "184269f8feb451982a07cbb274120b6911f7fee38e343546f05c870e6880c219"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playanimoccupystate"
title: "B2Action_PlayAnimOccupyState"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:41+00:00"
content_sha256: "4b7f36e2b3c9dc97c46cf144aac7f2b11f844dd69fecd360cc1679e66bb91cb8"
chunk: 1
chunk_count: 12
page_type: "article"
route: "wiki/structguide/struct/fb2action-playanimoccupystate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays an anim tied to a target's occupy state and reacts if the target's state group changes mid-playback, canceling the interaction and optionally queuing a reaction interaction. * =============== * Note: * OnPlay(): Captures the target's current state group id and subscribes to its one-shot state change delegate. * OnFinish()/OnCanceled(): Unsubscribe from the target's state change delegate.
