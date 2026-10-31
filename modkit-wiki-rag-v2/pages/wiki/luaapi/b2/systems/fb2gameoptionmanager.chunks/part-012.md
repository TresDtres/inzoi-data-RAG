---
document_id: "9fcb51930e82fb28aa924826e804452b5a4c43aef9243046f688b0748994dec9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2gameoptionmanager"
title: "FB2GameOptionManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:58+00:00"
content_sha256: "53da012af265bad92c4f3e293c488eae3621957971937a0235a5f508898c852b"
chunk: 12
chunk_count: 12
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2gameoptionmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

InteractionLevel`InLevel: `integer``-`Sets Recommended Interaction Level.`SetSimulationPreset`InPreset: [`EB1SimulationPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationpreset)`-`Links the simulation preset; the top-priority input for deciding the SLOD2 spread-out interval.`SetTeleportToDestinationPopup`InTeleportToDestinationPopup: `boolean``-`Sets Teleport To Destination Popup.`SetTemperatureEffect`InLevel: [`EB1TemperatureEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperatureeffect)`-`Sets Temperature Effect. |
| `SetSimulationPreset`InPreset: [`EB1SimulationPreset`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationpreset)`-`Links the simulation preset; the top-priority input for deciding the SLOD2 spread-out interval.`SetTeleportToDestinationPopup`InTeleportToDestinationPopup: `boolean``-`Sets Teleport To Destination Popup.`SetTemperatureEffect`InLevel: [`EB1TemperatureEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperatureeffect)`-`Sets Temperature Effect. |
| `SetTeleportToDestinationPopup`InTeleportToDestinationPopup: `boolean``-`Sets Teleport To Destination Popup.`SetTemperatureEffect`InLevel: [`EB1TemperatureEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperatureeffect)`-`Sets Temperature Effect. |
| `SetTemperatureEffect`InLevel: [`EB1TemperatureEffect`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temperatureeffect)`-`Sets Temperature Effect. |

# Override points (2)

Implement these in Lua as `FB2GameOptionManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_AdjustPlayFamilyAutoSchedule`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_OnChangePossessHouseholdEntityId`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Entity Id. |
| --- |
| `Override_AdjustPlayFamilyAutoSchedule`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-``Override_OnChangePossessHouseholdEntityId`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Entity Id. |
| `Override_OnChangePossessHouseholdEntityId`InPrevHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid), InCurrHouseholdEntityId: [`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)`-`Callback invoked on Change Possess Household Entity Id. |
