---
document_id: "fe49c25647d9a77c67929b4a7c01fd1929070f36a5efc287cc89e533f4e9d508"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2characterspawnmanager"
title: "FB2CharacterSpawnManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "7e4b78c42ac1961e32d743f4d89d6b02a3cdfb0a2dc381ff9f4a8b8055e51cd1"
chunk: 1
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2characterspawnmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages character spawning.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CharacterSpawnManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CharacterSpawnManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CharacterSpawnManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CharacterSpawnManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2CharacterSpawnManager')` |
| Require`require('Systems.B2CharacterSpawnManager')` |

# Properties (10)

| NameTypeDescription`CharacterIdToGroupMap``table<FB1EntityId, EB1CharacterGroupType>`Tracks which group type each character ID currently belongs to. Key to keeping data consistent when group types change at runtime.`DespawnQueue``any[]`Despawn queue. Stores IDs and remaining time of characters scheduled to despawn (e.g. due to LOD changes).`EntityManager``any`Cached entity manager instance, used to avoid repeated Instance() calls.`LastRealTimeSec``number`Stores the previous tick's time to compute a real-time-based DeltaTime.`PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| --- |
| `CharacterIdToGroupMap``table<FB1EntityId, EB1CharacterGroupType>`Tracks which group type each character ID currently belongs to. Key to keeping data consistent when group types change at runtime.`DespawnQueue``any[]`Despawn queue. Stores IDs and remaining time of characters scheduled to despawn (e.g. due to LOD changes).`EntityManager``any`Cached entity manager instance, used to avoid repeated Instance() calls.`LastRealTimeSec``number`Stores the previous tick's time to compute a real-time-based DeltaTime.`PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `DespawnQueue``any[]`Despawn queue. Stores IDs and remaining time of characters scheduled to despawn (e.g. due to LOD changes).`EntityManager``any`Cached entity manager instance, used to avoid repeated Instance() calls.`LastRealTimeSec``number`Stores the previous tick's time to compute a real-time-based DeltaTime.`PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `EntityManager``any`Cached entity manager instance, used to avoid repeated Instance() calls.`LastRealTimeSec``number`Stores the previous tick's time to compute a real-time-based DeltaTime.`PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `LastRealTimeSec``number`Stores the previous tick's time to compute a real-time-based DeltaTime.`PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `PeriodicLogTimeCounter``number`Time accumulator for periodic log output.`SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `SpawnConcurrentMaxCounter``integer``SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `SpawnQueue``FB1EntityId[]`Spawn queue. Stores IDs of characters waiting because spawn conditions are not met.`SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `SpawnedCharacterSet``table<FB1EntityId, boolean>`Master set of all currently spawned character IDs. Used for fast Contains existence checks.`SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `SpawnedCharacterTypeMap``table<EB1CharacterGroupType, table<FB1EntityId, boolean>>`Map of spawned character IDs per group type. Used by group-based logic.`SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |
| `SpawnedConcurrentCharacterSet``table<FB1EntityId, boolean>` |

# Functions (11)
