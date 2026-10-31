---
document_id: "42694f04328fee01c20baac64520cd6b336999c14e196a085fe14db00a7bbb52"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-embark"
title: "B2Action_Embark"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "9b8aecea5b02ff7341aafcbd387f3a75deca8c21f70be7000f1c462102e92728"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-embark"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Handles a character boarding a ship, occupying a target seat slot and either shifting into another occupied seat or teleporting into position. * =============== * Note: * OnInit(): validates self character/posture and target ship exist; cancels the interaction if the character would occupy the seat it already rides. * OnPlay(): resolves and occupies the target seat slot, then either shifts the character into it or teleports/embarks the character into position.
