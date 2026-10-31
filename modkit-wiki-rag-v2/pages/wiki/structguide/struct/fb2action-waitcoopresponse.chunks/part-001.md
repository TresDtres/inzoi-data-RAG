---
document_id: "ef2cd7c2c5f4b01abdc8fc5bdc098dbd49904f168d5cfdf65807484d3dbbe1d1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waitcoopresponse"
title: "B2Action_WaitCoopResponse"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "57562c414c39bf09c5daca88c010b6bab3985c862780bb845a3cd17656faa568"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-waitcoopresponse"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Marks the character ready in its CoopComponent and waits until the coop interaction is signaled to proceed, canceling if the coop stops or the component becomes invalid. * =============== * Note: * OnInit(): Validates the self entity exists. * OnPlay(): Sets the character ready in CoopComponent if a coop is currently playing. * OnFinish(): Clears the ready and proceed flags on CoopComponent. * OnCanceled(): Clears the ready and proceed flags on CoopComponent. * OnTick(): Cancels if CoopComponent is invalid or the coop stopped playing; finishes once the coop is signaled to proceed.
