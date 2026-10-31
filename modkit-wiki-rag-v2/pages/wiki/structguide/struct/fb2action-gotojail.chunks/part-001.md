---
document_id: "c888085f813f49bb87eb6122eccc66af23ca7400471248c849400a6da8fae5a0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/structguide/struct/fb2action-gotojail"
title: "B2Action_GoToJail"
section: "wiki/structguide"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:57:37+00:00"
content_sha256: "2614eebfc2ea735647eaef4bad4259f523e61db8a9875002ea7f18903c51eb12"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/structguide/struct/fb2action-gotojail"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

- Description * =============== * Sends self to jail as a crime punishment, validating a jail location exists before teleporting and cleaning up character state via B2CrimeHelper. * =============== * Note: * OnInit(): Validates self entity exists and a jail location is defined, canceling the action otherwise. * OnPlay(): Runs B2CrimeHelper::SendToJail (vehicle exit/state cleanup/teleport/post-processing) and cancels with a mapped reason on failure, otherwise finishes.
