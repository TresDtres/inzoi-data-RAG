---
document_id: "d55b2d989e650acf10a151e6719cb55bd24f55a5e470ae710b168aaa8f434800"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-diewithanim"
title: "B2Action_DieWithAnim"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:33+00:00"
content_sha256: "95af7c407324ec82db01b7836d6713ee82219f6aab02a8f9baa8380146093d65"
chunk: 1
chunk_count: 13
page_type: "article"
route: "wiki/structguide/struct/fb2action-diewithanim"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays the death animation montage and, once playback reaches the montage's loop section, hides the character and triggers the life system's death confirmation before finishing. * =============== * Note: * OnInit(): Resolves gender/age/posture info to find the death montage, records its loop section time, and flags whether a loop-section notify is expected. * OnFinish(): Forwards to PlayAnim's OnFinish, then requests the character's death if the loop-section notify hasn't already handled it. * OnTick(): Forwards to PlayAnim's OnTick and calls NotifyDeath() once playback progress reaches the montage's loop section time.
