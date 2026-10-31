---
document_id: "353120831376ba38aa2c0c0dc524c95d17d146ac7ede974d6885e9500f1b389f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-teleportto"
title: "B2Action_TeleportTo"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "50fc79cb1fee06fa4bf0d74acd04df269b8dfda376c738275d36f362df614d9a"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-teleportto"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Action that teleports a character to a resolved destination entity (home site, social event site, freelance client site, or a named map position) or the interaction's target entity, handling vehicle dismount and situational outfit change. * =============== * Param: * S1: Destination keyword ("{Home}", "{SocialEvent}", "{FreelanceOrder}") or a named map position id; empty falls back to the interaction's target entity * S2: - * F1: - * F2: - * Note: * OnInit(): Resolve TeleportTargetEntityId (or NonTargetLocation for a named map position) from Action.S1's special keyword, falling back to the interaction's target entity. * OnPlay(): Resolve the final destination location from the target entity/site or NonTargetLocation, dismount from any ridden vehicle, apply situational outfit if needed, then teleport the character.
