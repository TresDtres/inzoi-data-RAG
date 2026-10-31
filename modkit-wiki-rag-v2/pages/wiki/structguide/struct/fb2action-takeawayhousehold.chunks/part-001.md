---
document_id: "126c9a112bc25bd1c6bea78f9a7c527823ed241b32f55a7afd92063d886f620a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-takeawayhousehold"
title: "B2Action_TakeAwayHousehold"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "06956a7a20c7add566055849aed194e6dadea9e34feaa50fc8bdd51fff3a451e"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/structguide/struct/fb2action-takeawayhousehold"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that lets a household member take ownership of a household object away from its site, restricted to characters belonging to the site's owning household. * =============== * Note: * OnInit(): Validate self character, target object, and site are valid and that self belongs to the site's owning household; cancel the interaction otherwise, then delegate to PickUp's init. * OnFinish(): On successful finish, reset the target object's state to Normal and transfer its ownership to the self character.
