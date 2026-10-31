---
document_id: "ea83c642ac46d625f3442dd2888cab79de78e99cf316479cdc7ff70a9e7a88cf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditionstate"
title: "FB1MissionConditionState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "192cf1fc0602dbefaf13077f7e54a0ebaaaa6344e86d2ced57b09ba4481e4821"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1missionconditionstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime state of a single mission condition, tracking current progress toward the goal count. Stores the condition type, current count, goal count, and comparison operator.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison operator used to evaluate whether the condition is satisfied.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of mission condition being tracked.`CurrentCount``integer`Current accumulated count toward completing the condition.`GoalCount``integer`Target count required to complete this condition. |
| --- |
| `CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison operator used to evaluate whether the condition is satisfied.`ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of mission condition being tracked.`CurrentCount``integer`Current accumulated count toward completing the condition.`GoalCount``integer`Target count required to complete this condition. |
| `ConditionType`[`EB1MissionCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missioncondition)Type of mission condition being tracked.`CurrentCount``integer`Current accumulated count toward completing the condition.`GoalCount``integer`Target count required to complete this condition. |
| `CurrentCount``integer`Current accumulated count toward completing the condition.`GoalCount``integer`Target count required to complete this condition. |
| `GoalCount``integer`Target count required to complete this condition. |
