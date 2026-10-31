---
document_id: "0903a198b87419d8c2b7d83ed4c1c09f8cac7b61024310aed422e8f73c821f44"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-blowcandle"
title: "B2Action_BlowCandle"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:29+00:00"
content_sha256: "bedae1487c78dd68dc2bb3370fc7f6e74674a912464ba36f74bed5d672b53c3a"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-blowcandle"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Solo birthday candle-blowing action: completes immediately on play, then on finish resets the cake's state and triggers birthday growth for self. * =============== * Note: * OnPlay(): finishes immediately with no additional playback delay. * OnFinish(): resets the target cake's state to Normal, triggers solo birthday growth on self's BioComponent, and broadcasts a celebration Howling to nearby characters.
