---
document_id: "86bb1d356e77da644c75d4ce3ee7de122ead3afe180c1cad0c98660ad3baf698"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-onboardstart"
title: "B2Action_OnBoardStart"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:40+00:00"
content_sha256: "7a692ae990df890a4f01c00eb1bc920d3852ed6230e1b1f43150edba29b64839"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-onboardstart"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Starts boarding a surfboard. Sends an Enter on-board request to the character movement component's on-board handler with the posture supplied by the action data, and waits until that transition completes. * =============== * Param: * S1: PostureId applied when entering the board * S2: Board Tag * F1: - * F2: - * Note: * OnInit(): Stores Action.S1 as PostureId and clears AnimId. * CanStartCondition(): Requires a valid self character and movement component, then asks the on-board handler whether an Enter request with PostureId is currently allowed. * OnPlay(): Sends the Enter on-board request with PostureId to the on-board handler; finishes with InvalidSelfEntity if the character or movement component is missing. * OnTick(): Finishes the action once the on-board handler is no longer active; finishes with InvalidSelfEntity if the character or movement component is missing. * OnCanceled(): Handles cancellation directly instead of leaving it to the handler, since cancellation only happens on despawn and the posture was already switched when the request was sent: rolls the posture back to Swim, stops the current on-board montage and restores the anim transform, then resets the on-board handler.
