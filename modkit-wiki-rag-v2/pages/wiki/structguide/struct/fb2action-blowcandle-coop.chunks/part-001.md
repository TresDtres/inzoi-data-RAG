---
document_id: "c4cb0898243350ead4791f7dffafe5cf4ade2f237b4261cf859cd5216b47a42a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle-coop"
title: "B2Action_BlowCandle_Coop"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "0589be544dd2c1a67fa028d59d962cabb66af1f9653a83b9a8bdb824297a8b8a"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-blowcandle-coop"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Coop birthday candle-blowing action for a newborn/infant: the guardian (self, host) is the actor, while the baby and other Coop targets are the growth recipients. Completes immediately on play, then applies growth to targets on finish. * =============== * Note: * OnPlay(): finishes immediately with no additional playback delay. * OnFinish(): delegates to ApplyBirthdayGrowthToTarget(), which only proceeds if self is the Coop scheduler's host, resets the cake state, and triggers Coop birthday growth (plus celebration Howling) on every other Coop target.
