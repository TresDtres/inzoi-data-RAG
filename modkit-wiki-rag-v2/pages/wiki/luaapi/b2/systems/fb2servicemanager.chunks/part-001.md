---
document_id: "e166cc15b9bde0cca30b2b3719c41327b3a400ebde6f97864582d67b795f5248"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2servicemanager"
title: "FB2ServiceManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "e46aed7927af4fa2f44ed5c01d95ac0eda20b4c13ef7b418a060b57576300fb0"
chunk: 1
chunk_count: 11
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2servicemanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages facility services.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ServiceManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ServiceManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ServiceManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ServiceManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2ServiceManager')` |
| Require`require('Systems.B2ServiceManager')` |

# Properties (8)

| NameTypeDescription`ExecuteContextMap``table<string, FB2ExecuteContextList>``NextCheckTimeOutTicks``integer``SelectContextMap``table<string, FB2SelectContextList>``SelectExecuteConnections``FB1ServiceSelectExecuteConnection[]`Connection between the selection context and the execution context.`ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| --- |
| `ExecuteContextMap``table<string, FB2ExecuteContextList>``NextCheckTimeOutTicks``integer``SelectContextMap``table<string, FB2SelectContextList>``SelectExecuteConnections``FB1ServiceSelectExecuteConnection[]`Connection between the selection context and the execution context.`ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `NextCheckTimeOutTicks``integer``SelectContextMap``table<string, FB2SelectContextList>``SelectExecuteConnections``FB1ServiceSelectExecuteConnection[]`Connection between the selection context and the execution context.`ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `SelectContextMap``table<string, FB2SelectContextList>``SelectExecuteConnections``FB1ServiceSelectExecuteConnection[]`Connection between the selection context and the execution context.`ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `SelectExecuteConnections``FB1ServiceSelectExecuteConnection[]`Connection between the selection context and the execution context.`ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `ServiceJobLookupTable``table<FB1EntityId, string>`Job info of service Zois.`ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `ServiceJobPool``table<string, FB2JobEntityPool>`Zoi info per service job group [JobId, list of service Zois].`ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `ServiceRoleTable``table<FB1EntityId, string>`Role info of service Zois. Elements are added when a service starts and removed when it ends.`SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |
| `SpawnContexts``table<FB1ServiceContextId, FB2ServiceSpawnContext>` |

# Functions (24)
