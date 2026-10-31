---
document_id: "44f26c5933dc8579670819097e274e5afbee63169e06bdac6bea6b702082cb29"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2pseudosimulationmanager"
title: "FB2PseudoSimulationManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "cd9955fdc9ff80e83c8f73c1deb23f4d147a1fd6f4e018a30059437b9f3db046"
chunk: 1
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2pseudosimulationmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manager that runs tasks so that entities in the TimelineSimulateOnly state perform their timelines and other behaviors without ticking.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2PseudoSimulationManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2PseudoSimulationManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2PseudoSimulationManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2PseudoSimulationManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2PseudoSimulationManager')` |
| Require`require('Systems.B2PseudoSimulationManager')` |

# Properties (11)

| NameTypeDescription`DisableTickForSLOD2Active``boolean`Whether the B2DebugDisableTickForSLOD2 cheat is active. While active: entities newly entering SLOD2 are auto-OFF (tracked); tracked entities leaving SLOD2 are auto-ON (untracked). SimulationThread-only for both read and write, so no atomic needed.`NextTickDisabledTaskUpdateIndex``integer``NextUpdateIndex``integer``TaskKeyLookupList``FB2TimelineSimulateOnlyTaskKey[]``TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| --- |
| `DisableTickForSLOD2Active``boolean`Whether the B2DebugDisableTickForSLOD2 cheat is active. While active: entities newly entering SLOD2 are auto-OFF (tracked); tracked entities leaving SLOD2 are auto-ON (untracked). SimulationThread-only for both read and write, so no atomic needed.`NextTickDisabledTaskUpdateIndex``integer``NextUpdateIndex``integer``TaskKeyLookupList``FB2TimelineSimulateOnlyTaskKey[]``TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `NextTickDisabledTaskUpdateIndex``integer``NextUpdateIndex``integer``TaskKeyLookupList``FB2TimelineSimulateOnlyTaskKey[]``TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `NextUpdateIndex``integer``TaskKeyLookupList``FB2TimelineSimulateOnlyTaskKey[]``TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TaskKeyLookupList``FB2TimelineSimulateOnlyTaskKey[]``TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TaskListMap``table<FB2TimelineSimulateOnlyTaskKey, FB2TimelineSimulateOnlyTask>`Tasks are created in entity Init on first game load, so no saving is needed.`TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TemporarilyEnabledTickDisabledEntityMap``table<FB1EntityId, number>``TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TickDisabledByCommand``table<FB1EntityId, boolean>`Entities we disabled while the cheat is on, plus the game-time ticks at that moment. The OFF command restores exactly the entities still in the tracking map. Not a UPROPERTY (no serialization/reflection). Not preserved across City Move/save, so close each cheat cycle (ON -> OFF) within the same session. SimulationThread-only access.`TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TickDisabledTaskAccumulatedRealSeconds``number``TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TickDisabledTaskKeyLookupList``FB1EntityId[]``TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `TickDisabledTaskMap``table<FB1EntityId, FB2TickDisabledTask>``bProcessingTickDisabledTask``boolean` |
| `bProcessingTickDisabledTask``boolean` |

# Functions (11)
