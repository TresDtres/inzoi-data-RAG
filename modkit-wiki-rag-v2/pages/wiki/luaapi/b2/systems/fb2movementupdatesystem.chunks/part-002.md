---
document_id: "a23f06d87ea8985f3b7d0627cbf7603ea2455147c36e775a74c1f34a97de2c5f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2movementupdatesystem"
title: "FB2MovementUpdateSystem"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:59+00:00"
content_sha256: "5e8aaeba0e819ac3a4ba82bb503911847f0e9f23bdd200a8b487b9f45135d47f"
chunk: 2
chunk_count: 2
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2movementupdatesystem"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

| FunctionParametersReturnsDescription`ClearPossessedEntity``-``-`Clears Possessed Entity.`GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`SetPossessedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Possessed Entity.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| --- |
| `ClearPossessedEntity``-``-`Clears Possessed Entity.`GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`SetPossessedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Possessed Entity.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `GetRegisteredCount``-``integer`Returns Registered Count.`IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`SetPossessedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Possessed Entity.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `IsRegistered`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`boolean`Checks whether it is registered.`SetPossessedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Possessed Entity.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `SetPossessedEntity`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Possessed Entity.`Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |

# Override points (3)

Implement these in Lua as `FB2MovementUpdateSystem.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ClearPossessedEntity``-``-`Clears Possessed Entity.`Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`Override_UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| --- |
| `Override_ClearPossessedEntity``-``-`Clears Possessed Entity.`Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`Override_UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `Override_Tick`DeltaTime: `number`, CurrentTime: `FDateTime`, GameDeltaMinutes: `number``-`Called before the Entity Tick.`Override_UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
| `Override_UnregisterComponent`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Unregisters Component. |
