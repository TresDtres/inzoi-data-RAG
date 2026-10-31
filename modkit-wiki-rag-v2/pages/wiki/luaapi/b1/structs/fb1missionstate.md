---
document_id: "90c8fc90c257f4e3da4c0a44f09c2f5da30e9abb93e1b21fe25459dfc5a9676d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionstate"
title: "FB1MissionState"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:28+00:00"
content_sha256: "9bdc17b34c5eaa1643fa9e132caa64d6d70117cd1088028eb21939957b77a7e3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1missionstate"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime state of a mission instance, tracking its type, conditions, and completion status. Links a mission data table entry to its live per-character progress.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`ConditionStates``FB1MissionConditionState[]`Array of runtime condition states tracking progress for each mission condition.`MissionDtId``string`Mission state and information Data table row ID referencing this mission's definition.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)Use contents information Classification of the mission (e.g., Hope, Ambition, WorkMission).`MissionTypeId``string`Identifier of the content category this mission belongs to (e.g., ambition ID or job ID).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| --- |
| `ConditionStates``FB1MissionConditionState[]`Array of runtime condition states tracking progress for each mission condition.`MissionDtId``string`Mission state and information Data table row ID referencing this mission's definition.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)Use contents information Classification of the mission (e.g., Hope, Ambition, WorkMission).`MissionTypeId``string`Identifier of the content category this mission belongs to (e.g., ambition ID or job ID).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `MissionDtId``string`Mission state and information Data table row ID referencing this mission's definition.`MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)Use contents information Classification of the mission (e.g., Hope, Ambition, WorkMission).`MissionTypeId``string`Identifier of the content category this mission belongs to (e.g., ambition ID or job ID).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `MissionType`[`EB1MissionType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1missiontype)Use contents information Classification of the mission (e.g., Hope, Ambition, WorkMission).`MissionTypeId``string`Identifier of the content category this mission belongs to (e.g., ambition ID or job ID).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `MissionTypeId``string`Identifier of the content category this mission belongs to (e.g., ambition ID or job ID).`TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `TargetEntityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the specific target associated with this mission, if any. (Note: FB1MissionConditionData is not saved data, so it cannot hold this; include it in a future refactor.)`bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `bIsActive``boolean`Whether this mission is currently active and accepting progress updates.`bIsFinished``boolean`Whether this mission has been completed. |
| `bIsFinished``boolean`Whether this mission has been completed. |
