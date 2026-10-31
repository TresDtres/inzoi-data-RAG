---
document_id: "54059bb55f5236d7305c39dd02af1ac454ca0b247baeb0899ce14b5ed0bc6888"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-updateaging"
title: "B2Action_UpdateAging"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "fe63110a1e5a04c42b739ad5ff7b4a80643e9294d89cff52730535a9a8d75412"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-updateaging"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Applies a pending aging update to the character's BioComponent, finishing immediately if no aging update is needed or once the update has been processed. * =============== * Note: * OnInit(): Finishes immediately if the BioComponent reports no aging update is needed. * OnPlay(): Finishes immediately without further processing. * OnFinish(): Applies the pending aging update via BioComponent::OnUpdateAgingByAction(). * OnCanceled(): Applies the pending aging update via BioComponent::OnUpdateAgingByAction() even when canceled.
