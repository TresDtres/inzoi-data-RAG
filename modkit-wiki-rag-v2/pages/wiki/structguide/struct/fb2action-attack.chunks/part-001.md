---
document_id: "832fcb0cbf55e593fd1cdef1b17ee4333313a81b5d607536f5fc4940ddc684fb"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-attack"
title: "B2Action_Attack"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:28+00:00"
content_sha256: "2c00ba3378934601baf2cdcc7618b802b02243a36a6a354ed77964101e6e157d"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-attack"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays an active-mode combo attack animation, advancing and reading the attacker's combo index around the animation lookup and reporting blend-out timing so consecutive attacks don't clip. * =============== * Note: * OnInit(): advances the combo index exactly once here (before base OnInit calls GetAnimationId), so a queue-accepted-but-pre-play-canceled attack doesn't consume a combo step. * OnPlay(): pays the active-attack energy cost, after the base call and only when a montage actually resolved. Init runs while the interaction is still being set up, and the base OnPlay cancels out when SetAnim fails, so charging in either spot would bill attacks that never swing. * OnFinish(): reports this attack's played montage BlendOutTime to InteractionComponent, before base OnFinish clears the montage delegates, so the next attack waits for blend-out to finish and avoids a clipped montage tail.
