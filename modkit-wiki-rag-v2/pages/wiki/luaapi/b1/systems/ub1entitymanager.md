---
document_id: "92f2cedfb1c350d0db093f1445098f738e077226634cabcf846105003eefc221"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1entitymanager"
title: "UB1EntityManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:55+00:00"
content_sha256: "8220570b03cfc87f162721022d71efe45c51117756c68dab46d8bf860b3a7473"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/systems/ub1entitymanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Entity manager.

# Metadata

| FieldValueKind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| --- |
| Kind`system`EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| EnvironmentB1 - PresentationCategory`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| Category`systems`Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |
| Extends[`UB1ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/systems/ub1managerbase) |

# Properties (6)

| NameTypeDescription`CharacterMap``table<FB1EntityId, any>``EntityMap``table<FB1EntityId, FB1EntityInfo>`GC InvalidIndex mitigation: all 6 Entity TMaps switched from raw UObject* to TObjectPtr. Removes the path where GC reachability hits a dangling slot and asserts on IsValidIndex in FChunkedFixedUObjectArray::GetObjectPtr (similar to the UE-226221 pattern).`GameObjectMap``table<FB1EntityId, any>``SiteAreaMap``table<FB1EntityId, any>``SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| --- |
| `CharacterMap``table<FB1EntityId, any>``EntityMap``table<FB1EntityId, FB1EntityInfo>`GC InvalidIndex mitigation: all 6 Entity TMaps switched from raw UObject* to TObjectPtr. Removes the path where GC reachability hits a dangling slot and asserts on IsValidIndex in FChunkedFixedUObjectArray::GetObjectPtr (similar to the UE-226221 pattern).`GameObjectMap``table<FB1EntityId, any>``SiteAreaMap``table<FB1EntityId, any>``SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| `EntityMap``table<FB1EntityId, FB1EntityInfo>`GC InvalidIndex mitigation: all 6 Entity TMaps switched from raw UObject* to TObjectPtr. Removes the path where GC reachability hits a dangling slot and asserts on IsValidIndex in FChunkedFixedUObjectArray::GetObjectPtr (similar to the UE-226221 pattern).`GameObjectMap``table<FB1EntityId, any>``SiteAreaMap``table<FB1EntityId, any>``SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| `GameObjectMap``table<FB1EntityId, any>``SiteAreaMap``table<FB1EntityId, any>``SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| `SiteAreaMap``table<FB1EntityId, any>``SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| `SpawnerMap``table<FB1EntityId, any>``VehicleMap``table<FB1EntityId, any>` |
| `VehicleMap``table<FB1EntityId, any>` |
