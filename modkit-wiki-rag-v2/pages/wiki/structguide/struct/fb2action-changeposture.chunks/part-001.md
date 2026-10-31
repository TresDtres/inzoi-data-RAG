---
document_id: "f20e8831f57efba52f16cf16d60d9e174a4844c0436e4937f00e0f7e95d96f0e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-changeposture"
title: "B2Action_ChangePosture"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "329105806cdc472905f7708325bdb2a2e3355db49ac466cedfcc6995d5a2c14f"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-changeposture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Drives a character's posture transition (standing, sitting, vehicle, carried, etc.), including animation/transition selection and vehicle-exit safety checks. * =============== * Param: * S1: target posture id to transition to * S2: - * F1: - * F2: - * Note: * OnInit(): resolves the target posture state/slot info and requests async preload of the posture and transition animations. * OnPlay(): starts the posture change animation and performs vehicle-exit validation. * OnFinish(): applies the resolved posture state to the character, restores animation transforms, and handles vehicle exit notifications/teleports. * OnCanceled(): stops the in-progress posture animation and clears the pending posture id. * OnTick(): accumulates elapsed posture animation time.
