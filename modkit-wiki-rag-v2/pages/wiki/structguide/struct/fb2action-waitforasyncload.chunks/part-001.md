---
document_id: "53ea9f28ad4abde288b5d924fae5cc15b8530b2c022cc8ca5a9772d52f5e16fc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-waitforasyncload"
title: "B2Action_WaitForAsyncLoad"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:48+00:00"
content_sha256: "e821191bb3949633fcceb37e19b8c067308892c93281da899fc06f4dd36a578a"
chunk: 1
chunk_count: 7
page_type: "article"
route: "wiki/structguide/struct/fb2action-waitforasyncload"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Auto-inserted action that waits for a pending async load (and, if part of a coop, for the coop's shared pending-load signal) before finishing. * =============== * Note: * OnPlay(): sets up the same subscriptions via InitializeSetting(), finishing immediately if the load already completed. * OnCanceled(): finishes immediately without waiting further.
