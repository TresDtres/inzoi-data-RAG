---
document_id: "4e01edfa87c1b3d269490143f5ba3d44cb9622e6e183c10f2a081cd7b988bd81"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-cleandusty"
title: "B2Action_CleanDusty"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "277823c3ca8209413ae83b20ef75f4fb13a0d474965ffc71ce082eb9479d61d2"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-cleandusty"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Cleans dust/soot from nearby actors within range, despawning fully-cleaned soot objects and resetting tagged objects back to their normal state. * =============== * Param: * S1: object tag that, when present, marks the object to be reset to its Normal state after cleaning * S2: - * F1: extra distance added to the data asset's WalkToDirtyPlaceOffsetDistance to compute the effective cleaning radius * F2: dusty value applied to nearby actors' DustyComponent * Note: * OnInit(): computes EffectiveDistance/AddingDustyValue/ChangeNormalStateObjectTag from the action params. * OnPlay(): finishes immediately (no walk/anim time needed). * OnFinish(): scans nearby game objects/vehicles within EffectiveDistance, adds dust to them, and (for CleanDusty) despawns fully-cleaned soot objects or resets tagged objects to Normal state.
