---
document_id: "41974936c9f2456c2b91df6a411152204293fac145379e20ce9f58c18d8f39ed"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2missioncomponent"
title: "FB2MissionComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:14+00:00"
content_sha256: "73ca32bffebb58262fd8f291e4cfc3e6447db25f6790ab6aa7f78c0f761c2641"
chunk: 1
chunk_count: 65
page_type: "article"
route: "wiki/luaapi/b2/components/fb2missioncomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that manages missions.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MissionComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MissionComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MissionComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MissionComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2MissionComponent')` |
| Require`require('Components.B2MissionComponent')` |

# Properties (5)

| NameTypeDescription`ActiveMissionIdByCondition``table<EB1MissionCondition, FB1MissionIdList>``MissionIdByWorldMissionDtId``table<string, FB1MissionId>``MissionMap``table<FB1MissionId, FB1MissionState>``TriggersIndex``integer``TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |
| --- |
| `ActiveMissionIdByCondition``table<EB1MissionCondition, FB1MissionIdList>``MissionIdByWorldMissionDtId``table<string, FB1MissionId>``MissionMap``table<FB1MissionId, FB1MissionState>``TriggersIndex``integer``TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |
| `MissionIdByWorldMissionDtId``table<string, FB1MissionId>``MissionMap``table<FB1MissionId, FB1MissionState>``TriggersIndex``integer``TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |
| `MissionMap``table<FB1MissionId, FB1MissionState>``TriggersIndex``integer``TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |
| `TriggersIndex``integer``TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |
| `TriggersList``FB1MissionConditionTriggerList[]`Triggers are batched to a later tick or another function rather than processed immediately. Processing inside Set/Add functions could spawn additional missions after one is achieved, and if a spawned mission is the same type, it could conflict while the mission list is still being modified at trigger time; batching is for stability. |

# Functions (73)
