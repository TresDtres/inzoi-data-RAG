---
document_id: "0135dc35cfc040d62930339a975b3dbca3672c4e2186ebc6d40024170c4b1159"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-startdive"
title: "B2Action_StartDive"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:47+00:00"
content_sha256: "11489258636709b75158f4955bab0e71fa416c62ae5ad2887d0bffa8af48577a"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-startdive"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Toggles a character's posture between Swim and Dive by driving FB2CharacterMovementComponent's * existing FB2DiveHandler (montage playback, costume swap, snapshot restore all stay in DiveHandler). * This action is a thin orchestration wrapper so the dive toggle participates in the standard * Interaction/Action queue (cancel/merge/wait-finish) instead of bypassing it. * =============== * Param: * S1: - * S2: - * F1: - * F2: - * Note: * CanStartCondition(): re-checks the guards previously in FB2Character::TryChangeDivePosture() (grabbed baby/character, riding vehicle, ragdoll, in-water check). * OnPlay(): determines Enter/Exit from the character's current posture category and calls FB2CharacterMovementComponent::RequestDiveProcess(); finishes immediately if DiveHandler already completed synchronously (Exit, non-SLOD0 Enter, missing montage). * OnTick(): polls DiveHandler completion (montage blend-out finished) and finishes once done. * OnCanceled(): force-resets DiveHandler if it is still mid-dive.
