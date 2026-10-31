---
document_id: "cfb0806d2e7e55ee18376969d6742aef7b08c3ca5497314e05c8bb3256c433d6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-clean"
title: "B2Action_Clean"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "4437e2d4f71aed215437962494613fd34feff4ea58fa7354156fe9ee6a7ab4ed"
chunk: 1
chunk_count: 14
page_type: "article"
route: "wiki/structguide/struct/fb2action-clean"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Extends PlayAnim to resolve a clean target (either the interaction target object or a randomly chosen indoor/outdoor site clean object) and, on finish, applies dust reduction and state changes to nearby dusty objects. * =============== * Note: * OnInit(): resolves the clean target's animation id and clean parameters (EffectiveDistance/AddingDustyValue/ChangeNormalStateObjectTag) from the target object, or from a randomly chosen indoor/outdoor site clean object, then forwards to PlayAnim's OnInit with the resolved animation id. * OnPlay(): re-resolves the target's animation id from the target object or the previously chosen indoor/outdoor object, then plays via PlayAnim. * OnFinish(): reduces dust value on nearby game objects/vehicles within EffectiveDistance and despawns soot objects or resets tagged objects to Normal state.
