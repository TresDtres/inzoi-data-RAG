---
document_id: "cc03ff0428fdc679207a46a3d14a1cf4140eee06eee0d4b95c0320deea7e5f49"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-surfing"
title: "B2Action_Surfing"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "4b224f6eb776a6b2e9cde6bb32824a398b21a289f95e84b95e34cd16e3fcd652"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-surfing"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Keeps a character riding a wave while on a surfboard. Turns on the on-board handler's surfing flag and stays active until B1 reports that surfing has ended. * =============== * Param: * S1: - * S2: - * F1: - * F2: - * Note: * OnInit(): Delegates to FB2Action_Base::OnInit(); no extra data is read from the action. * OnB2PreBeginPlay(): When the action was already playing at restore time, sets bRestore and cancels the interaction so surfing is not resumed from a save. * CanStartCondition(): Requires a valid self character and movement component, an inactive on-board handler (boarding/disembarking must not be in progress, because the posture check alone can pass during those transitions), and the Surf posture on the posture component. * OnPlay(): Turns on the on-board handler's surfing flag; finishes with InvalidSelfEntity if the character or movement component is missing. * OnTick(): Finishes the action once the on-board handler reports surfing has stopped, since the surf progress itself is driven by B1 and only reported back through that flag; finishes with InvalidSelfEntity if the character or movement component is missing. * OnCanceled(): Turns the on-board handler's surfing flag off, unless the action is being torn down by a restore (bRestore). * OnFinish(): Does nothing beyond the restore guard, because normal termination is already driven by B1 notifying B2 that surfing ended.
