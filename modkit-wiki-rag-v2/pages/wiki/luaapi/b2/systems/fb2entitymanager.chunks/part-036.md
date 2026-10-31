---
document_id: "c731925ae647c7391263d58693d5bbb1c203e67a380670ff264c537d760af66c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2entitymanager"
title: "FB2EntityManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "500755b63f06469211fd5859b166f8c972e661447a741fbeb875ce31b5f05de1"
chunk: 36
chunk_count: 36
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2entitymanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

tail Two.`SetIsInViewportCharacter`InViewportCharacterMap: `table<FB1EntityId, boolean>``-`Sets Is In Viewport Character.`SetLastEntityId`InLastEntityId: `integer``-`Sets Last Entity Id.`SetSpreadOutMax`InNewMax: `integer``-`Sets Spread Out Max.`Unregister`Entity: `any``-``UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `SetIsInViewportCharacter`InViewportCharacterMap: `table<FB1EntityId, boolean>``-`Sets Is In Viewport Character.`SetLastEntityId`InLastEntityId: `integer``-`Sets Last Entity Id.`SetSpreadOutMax`InNewMax: `integer``-`Sets Spread Out Max.`Unregister`Entity: `any``-``UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `SetLastEntityId`InLastEntityId: `integer``-`Sets Last Entity Id.`SetSpreadOutMax`InNewMax: `integer``-`Sets Spread Out Max.`Unregister`Entity: `any``-``UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `SetSpreadOutMax`InNewMax: `integer``-`Sets Spread Out Max.`Unregister`Entity: `any``-``UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `Unregister`Entity: `any``-``UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `UnregisterInternal`Entity: `any``-`Unregisters Internal.`ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |
| `ValidateAllEntityHierarchy`InValidateEntityType: [`EB2EntityType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitytype)`-` |

# Override points (2)

Implement these in Lua as `FB2EntityManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_RegisterCharacters`InCityName: `string`, InHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCharacterInfoList: `FB1CustomizedCharacterInfo[]``boolean`Registers Characters.`Override_RegisterHousehold`InCityName: `string`, InHouseholdInfo: [`FB1CustomizedHouseholdInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customizedhouseholdinfo)[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Registers Household. |
| --- |
| `Override_RegisterCharacters`InCityName: `string`, InHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCharacterInfoList: `FB1CustomizedCharacterInfo[]``boolean`Registers Characters.`Override_RegisterHousehold`InCityName: `string`, InHouseholdInfo: [`FB1CustomizedHouseholdInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customizedhouseholdinfo)[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Registers Household. |
| `Override_RegisterHousehold`InCityName: `string`, InHouseholdInfo: [`FB1CustomizedHouseholdInfo`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1customizedhouseholdinfo)[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Registers Household. |
