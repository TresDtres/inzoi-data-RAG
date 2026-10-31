---
document_id: "38fcdd984d093d9fd548a8dd230de21d67091da72ca23419bc10ebbcc308347e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-onboardend"
title: "B2Action_OnBoardEnd"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "3b30e5a7341322fb2c4f7b15b921c2ce599040322217b28feb96252cb1a5d255"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-onboardend"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Ends boarding a surfboard. Sends an Exit on-board request to the character movement component's on-board handler using the character's current posture, and waits until that transition completes. * =============== * Param: * S1: - * S2: - * F1: - * F2: - * Note: * OnInit(): Delegates to FB2Action_Base::OnInit(); no extra data is read from the action. * CanStartCondition(): Requires a valid self character and movement component, then asks the on-board handler whether an Exit request with the character's current posture is currently allowed. * OnPlay(): Sends the Exit on-board request built from the character's current posture to the on-board handler; finishes with InvalidSelfEntity if the character or movement component is missing. * OnTick(): Finishes the action once the on-board handler is no longer active; finishes with InvalidSelfEntity if the character or movement component is missing. * OnCanceled(): Handles cancellation directly instead of leaving it to the handler, since cancellation only happens on despawn: stops the current on-board montage, restores the anim transform, and resets the on-board handler. Posture is left untouched because the handler already switched it to Swim when the request was sent.
