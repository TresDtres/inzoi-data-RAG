---
document_id: "2ac29eefff2141cab2c80280bf399263c2b61f1427b85cd103c8924669393690"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-changeposturesit"
title: "B2Action_ChangePostureSit"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:30+00:00"
content_sha256: "2d96315ae4356a5e6a7ac766aa869ebedfbf7e4775d7f065c12e65224a472149"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-changeposturesit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Specializes ChangePosture to automatically resolve and sit into an available sit posture on the target object, instead of using an explicitly supplied posture id. * =============== * Note: * OnInit(): resolves an available sit posture on the target and computes the posture state/slot info, requesting async animation preload; overrides the base class's action-param-driven posture resolution.
