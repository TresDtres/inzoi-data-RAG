---
document_id: "5acbac0e896e1f5dd947f3540d50c953e1a1ebcdb4994342fe910922c195bdea"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2ship"
title: "FB2Ship"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:46+00:00"
content_sha256: "385a706a88d13cefd54005a96a671d474ca483f3d73dea335654bf0a2863ad5a"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2ship"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

cs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `OnSpawnedChildObject`InChildObject: [`FB2GameObject`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2gameobject)`-`Callback invoked on Spawned Child Object.`ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``SetDocked`InDocked: `boolean``-`Sets Docked.`SetIsAnchorDown`InIsAnchorDown: `boolean``-`Sets Is Anchor Down.`SetOwnerEntityId`InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``SetDocked`InDocked: `boolean``-`Sets Docked.`SetIsAnchorDown`InIsAnchorDown: `boolean``-`Sets Is Anchor Down.`SetOwnerEntityId`InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `SetDocked`InDocked: `boolean``-`Sets Docked.`SetIsAnchorDown`InIsAnchorDown: `boolean``-`Sets Is Anchor Down.`SetOwnerEntityId`InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `SetIsAnchorDown`InIsAnchorDown: `boolean``-`Sets Is Anchor Down.`SetOwnerEntityId`InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `SetOwnerEntityId`InOwnerId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Sets Owner Entity Id.`TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |

# Override points (4)

Implement these in Lua as `FB2Ship.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_ForcedPassengersExit``-``-``Override_GetOutAllPassengersForShipwreck`InDisasterId: `string``-`Returns Out All Passengers For Shipwreck.`Override_ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| --- |
| `Override_ForcedPassengersExit``-``-``Override_GetOutAllPassengersForShipwreck`InDisasterId: `string``-`Returns Out All Passengers For Shipwreck.`Override_ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `Override_GetOutAllPassengersForShipwreck`InDisasterId: `string``-`Returns Out All Passengers For Shipwreck.`Override_ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `Override_ProcessRidingEntityDeath`InRidingEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
| `Override_TryDisembarkingVehicle`InEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), bClearCharacterState: `boolean``boolean` |
