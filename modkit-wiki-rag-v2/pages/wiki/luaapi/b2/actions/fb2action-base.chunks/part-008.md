---
document_id: "62e44b61ac529fb96c2aec10c9623063593dd510e35e5147ae51b262631e225b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/actions/fb2action-base"
title: "FB2Action_Base"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:00+00:00"
content_sha256: "18b8e4824b47b20fa05140b62d5591ed910e14ab1769937b97496318e00254c1"
chunk: 8
chunk_count: 20
page_type: "article"
route: "wiki/luaapi/b2/actions/fb2action-base"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

d-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Id of the scheduled time task used for delayed Determine/Finish`bIsWaitFinishEvent``boolean`Cached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)`bMultiFlag``boolean`Set by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selection |
| `TickCalcValue``number`Accumulated tick delta time since this action started ticking`TimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Id of the scheduled time task used for delayed Determine/Finish`bIsWaitFinishEvent``boolean`Cached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)`bMultiFlag``boolean`Set by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selection |
| `TimeTaskId`[`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)Id of the scheduled time task used for delayed Determine/Finish`bIsWaitFinishEvent``boolean`Cached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)`bMultiFlag``boolean`Set by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selection |
| `bIsWaitFinishEvent``boolean`Cached copy of Action.IsWaitFinishAction taken at Init(); read directly by FB2ActionPlayer for sequencing (the IsWaitFinishAction() getter instead reads Action.IsWaitFinishAction live)`bMultiFlag``boolean`Set by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selection |
| `bMultiFlag``boolean`Set by looping actions (PlayAnim, BookRead, Eat, WaitTalkSequence) once a loop iteration completes; read/reset by FB2ActionPlayer to gate multi-interaction selection |

# Functions (47)
