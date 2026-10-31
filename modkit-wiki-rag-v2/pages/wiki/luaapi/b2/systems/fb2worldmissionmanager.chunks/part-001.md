---
document_id: "84ca2380a3cc8f7bb502f600713b6a574e1be600df0c5ba80acba33f59127025"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2worldmissionmanager"
title: "FB2WorldMissionManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:01+00:00"
content_sha256: "b3fad70bd4e85e8f78800c7d86650e8e09dc0b47a77d9d8e2dbef6cac6ba966e"
chunk: 1
chunk_count: 4
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2worldmissionmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages world missions.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldMissionManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldMissionManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldMissionManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldMissionManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2WorldMissionManager')` |
| Require`require('Systems.B2WorldMissionManager')` |

# Properties (9)

| NameTypeDescription`ActiveMissionIdByCondition``table<EB1MissionCondition, FB1MissionId[]>``CachedCharacterWorldMissions``string[]``CachedMissionCount``table<FB1EntityId, FB1MissionCountMap>``CharacterMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| --- |
| `ActiveMissionIdByCondition``table<EB1MissionCondition, FB1MissionId[]>``CachedCharacterWorldMissions``string[]``CachedMissionCount``table<FB1EntityId, FB1MissionCountMap>``CharacterMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `CachedCharacterWorldMissions``string[]``CachedMissionCount``table<FB1EntityId, FB1MissionCountMap>``CharacterMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `CachedMissionCount``table<FB1EntityId, FB1MissionCountMap>``CharacterMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `CharacterMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `CompletedWorldMissionDtKey``string[]``FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `FamilyMissionRecorder``table<FB1EntityId, FB1MissionRecorder>``MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `MissionMap``table<FB1MissionId, FB1WorldMissionChecker>``WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `WorldMissionRecorder`[`FB1MissionRecorder`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1missionrecorder)`bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |
| `bIsAlreadyUpdated``boolean`Prevents Day and Hour from being updated together. |

# Functions (11)
