---
document_id: "7fd6f570c9440f58f3548f60d33064b6f751526ff127738bf04c45a6baebb1d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-rotateto"
title: "B2Action_RotateTo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:44+00:00"
content_sha256: "33cd11eb08b4fa2b1aae6325f8baf8491b431028617c8385ae4f20997590ab12"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-rotateto"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that turns the self character in place to face the target entity, used as an auto-inserted pre-action before other interactions. * =============== * Note: * OnPlay(): While standing, computes the look-at rotation toward the target entity and plays a turn-in-place animation via motion warping. * OnFinish(): Snaps the character's location/rotation to the computed target while standing. * OnTick(): Finishes once motion warping completes.
