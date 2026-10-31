---
document_id: "608b934ce68d03a0845cf5cff4f3b680a297740e0513b96ef9e61b9c7b961c52"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-changevehiclepartstate"
title: "B2Action_ChangeVehiclePartState"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:31+00:00"
content_sha256: "f5aed7559ff9a67778858eb66d2356baf7a158d7baf17782f344de859b2aad55"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-changevehiclepartstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Changes a specific vehicle part (e.g. door, trunk) to a target state and drives the state-change animation until it completes. * =============== * Param: * S1: vehicle part type enum name * S2: target part state name * F1: - * F2: - * Note: * OnInit(): resolves the vehicle part type and target state from the action params. * OnPlay(): resets elapsed time and applies the part state change on the vehicle, retrieving the total play duration. * OnTick(): accumulates elapsed time and finishes once the state-change duration has elapsed.
