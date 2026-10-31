---
document_id: "be46ccbc49644bb340645510e544596e694dee05278a5bb020b38843cbaeb3bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waitzoigroupmove"
title: "B2Action_WaitZoiGroupMove"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:49+00:00"
content_sha256: "fc0b9ae9831e457267a6b4bd91a0914410e81fdd3b8c15de871883c91828cecb"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/structguide/struct/fb2action-waitzoigroupmove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Plays a looping wait animation while the character is held by a Zoi group move coop scheduler, finishing once the scheduler no longer reports it as waiting. * =============== * Note: * OnInit(): Resolves the connected coop scheduler via SetupAction() and cancels the interaction on failure. * OnPlay(): Re-resolves the coop scheduler if needed and registers this character as waiting via CoopScheduler->NotifyWait(). * OnTick(): Cancels the interaction if the coop scheduler is invalid, otherwise finishes once the scheduler no longer reports this character as waiting. * OnMontageSectionFinished(): Skips the parent's loop-count bookkeeping because the scheduler decides when the wait ends, but keeps the cancel-time jump out of the montage Loop section. * OnMontageBlendingOutStarted(): Replays the wait montage while the scheduler still reports this character as waiting, so a montage without a Loop section cannot end the wait on its own. * TickCanceledWatchdog(): Force-finishes a canceled wait that never left the montage Loop section, so the character cannot stay occupied forever.
