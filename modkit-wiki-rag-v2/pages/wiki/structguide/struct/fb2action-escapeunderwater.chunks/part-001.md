---
document_id: "d06878d1a4df9c4e441e62f44f189c4e3bf6ff724608cc3bb47963c56903c5de"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-escapeunderwater"
title: "B2Action_EscapeUnderwater"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:34+00:00"
content_sha256: "0c05251525ff5232922f857f16e3a7f42722aea1da2a3b0444ca5d8e7f04cfb7"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-escapeunderwater"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Emergency escape from an underwater(Dive) situation, without any surfacing animation, motion warp or the * DiveHandler exit flow. It teleports the character to the nearest water surface (current XY, just below the * surface; no collision/overlap resolution) with an upright rotation (pitch/roll leveled, Yaw kept), so the character * instantly appears upright and swimming (not diving) at the surface. To hide the teleport / idle-swap, a * possessed character first requests a "fade from black"(blink) - the screen snaps to black on that frame and * fades back in - then teleports the same tick under the black (S_ScreenFadeInOut -> B1 PlayFromBlack). * Non-possessed characters skip the fade and teleport immediately (nothing to mask). Everything happens in * OnPlay with no wait, so it is safe against game-time pause, possess changes and overlapping triggers. * Forced by the stat-crisis monitor, distinct from the normal player-driven dive exit. * =============== * Param: * S1: - * S2: - * F1: - * F2: - * Note: * OnPlay(): finishes immediately if no longer underwater; otherwise (possessed) requests the blink then teleports the same tick under the black, or (non-possessed) teleports immediately, and finishes.
