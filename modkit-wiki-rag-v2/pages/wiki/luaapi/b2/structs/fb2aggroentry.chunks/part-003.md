---
document_id: "45f5d9ac5b894a88066660b4422c8313367a0c7dc9b36cb3ee116a47832b3011"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2aggroentry"
title: "FB2AggroEntry"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:30+00:00"
content_sha256: "5880b45926e7ed9d8b9cbfb61d09a169dc9bfea0832b00a0ff54bc4714162177"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2aggroentry"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

 to false when an entry is updated via AddAggro (a new attack resumes the chase). Disappears together with the entry if it naturally decays away. |
| `bChasingActionRunning``boolean`Whether a chase Action is in progress. At most one entry within a Source is true.`bPickupDecisionMade``boolean`Auto-pickup target decision cache; decided once per engagement session to prevent flicker. Whether the pickup target/decision was already made this engagement. Reset to false on ragdoll so it is re-decided on the next chase.`bUserAborted``boolean`The user (player) intentionally canceled the chase interaction. While true, chasing is not restarted even if the aggro entry survives. Reset to false when an entry is updated via AddAggro (a new attack resumes the chase). Disappears together with the entry if it naturally decays away. |
| `bPickupDecisionMade``boolean`Auto-pickup target decision cache; decided once per engagement session to prevent flicker. Whether the pickup target/decision was already made this engagement. Reset to false on ragdoll so it is re-decided on the next chase.`bUserAborted``boolean`The user (player) intentionally canceled the chase interaction. While true, chasing is not restarted even if the aggro entry survives. Reset to false when an entry is updated via AddAggro (a new attack resumes the chase). Disappears together with the entry if it naturally decays away. |
| `bUserAborted``boolean`The user (player) intentionally canceled the chase interaction. While true, chasing is not restarted even if the aggro entry survives. Reset to false when an entry is updated via AddAggro (a new attack resumes the chase). Disappears together with the entry if it naturally decays away. |
