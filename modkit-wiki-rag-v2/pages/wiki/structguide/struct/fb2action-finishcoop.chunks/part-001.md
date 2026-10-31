---
document_id: "1d024d58ac716f68c71be81ad1984fa95914a987de3994edb3f92d6e7733d001"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-finishcoop"
title: "B2Action_FinishCoop"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:36+00:00"
content_sha256: "ebc0c44b9f6be6655b2599c1b6af2b57c53d6859627f05e22cf423e7c5016900"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-finishcoop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Ends self's currently active Coop interaction, notifying the connected coop scheduler that the coop has finished. * =============== * Note: * OnInit(): Validates that self entity exists, canceling the action otherwise. * OnPlay(): Resolves the active coop component; if a coop is playing, clears the interaction component's coop scheduler id and notifies the coop scheduler of the finish result, then finishes the action.
