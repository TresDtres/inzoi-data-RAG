---
document_id: "351525dfffb6c8c90b90393c51624623b3fe52442cdd100f041d7c69261d847e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-makedusty"
title: "B2Action_MakeDusty"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:39+00:00"
content_sha256: "f036f44a5ba1def76ce287cc7ca1c18e41387d697f942dc1eaaeb28d82dfd978"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-makedusty"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Adds dust to nearby actors without performing the soot despawn / normal-state-reset cleanup that CleanDusty does. * =============== * Param: * S1: - (handled by FB2Action_CleanDusty::OnInit via Super call) * S2: - * F1: - (handled by FB2Action_CleanDusty::OnInit via Super call) * F2: dusty value applied to nearby actors' DustyComponent * Note: * OnInit(): calls Super::OnInit() then overrides AddingDustyValue from the action params and clears ChangeNormalStateObjectTag (this action never resets object state).
