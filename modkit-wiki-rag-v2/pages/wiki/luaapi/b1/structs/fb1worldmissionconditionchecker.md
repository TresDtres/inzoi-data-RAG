---
document_id: "e610d8d0c3e99bce8b5d5b8add1bd4e4c59de980e2d759e85c5153aead284f0f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1worldmissionconditionchecker"
title: "FB1WorldMissionConditionChecker"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:52+00:00"
content_sha256: "11e538227df22fbbc160d21f2dfd960b73a43233dd71cc09eb0225bef9e927c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1worldmissionconditionchecker"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime checker for a single world mission condition, tracking its current count and completion state. Part of FB1WorldMissionChecker which groups all conditions for a world mission.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (3)

| NameTypeDescription`CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison operator used to evaluate whether this condition is satisfied.`Condition`[`FB1MissionConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata)The condition definition being tracked by this checker.`CurrentCount``integer`Current accumulated count for this condition. |
| --- |
| `CompareType`[`EB1CompareType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1comparetype)Comparison operator used to evaluate whether this condition is satisfied.`Condition`[`FB1MissionConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata)The condition definition being tracked by this checker.`CurrentCount``integer`Current accumulated count for this condition. |
| `Condition`[`FB1MissionConditionData`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionconditiondata)The condition definition being tracked by this checker.`CurrentCount``integer`Current accumulated count for this condition. |
| `CurrentCount``integer`Current accumulated count for this condition. |
