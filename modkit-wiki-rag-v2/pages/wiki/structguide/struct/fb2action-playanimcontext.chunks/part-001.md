---
document_id: "f35a5caffc09f1a6584d83353be661b9ff8904885b4d85bae1d779b018938c2a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-playanimcontext"
title: "B2Action_PlayAnimContext"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:41+00:00"
content_sha256: "a05a903556f00ea13b0e496203199157ceed8f008a6a8169e97f6a9d995ef055"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-playanimcontext"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Resolves the animation to play from a Coop action context (rather than a fixed anim id) and plays it, looping/replaying sections until the coop-driven playback completes. * =============== * Note: * OnInit(): Resolves the entity to animate from Action.BaseObject. * OnPlay(): Parses the Coop action context for the anim id, resolves montage params, and starts playback.
