---
document_id: "95a8003a5b01f227ae4eeeaae264d747d814716fec93a5fb3c6453b933552785"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2appearancecomponent"
title: "FB2AppearanceComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:10+00:00"
content_sha256: "46bf711af4b8105d97ce82bf03981a580588f2e6b273019447a1a90bdf7e7274"
chunk: 29
chunk_count: 36
page_type: "article"
route: "wiki/luaapi/b2/components/fb2appearancecomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

lean`Returns whether it should Use Scheduler.`TemporarilyRevertOverrideSkin``-``-``UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `SetTryOnTimeTaskId`InId: [`FB1TimeTaskId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1timetaskid)`-`Manages the mannequin try-on TimeTask.`SetWeatheringIntensity`InNewIntensity: `number``-`Sets weathering intensity. (Hair-salon temporary hair data is not stored on the component, per BL-57370: the picked PoolId goes to the co-op scope FB2CoopScheduler::CoopExtraData[SalonHair_PoolId]; the picker category goes to SelectOrRandomSalonHair's S2; and the ApplyFail fallback category is derived from the picked PoolId.)`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TemporarilyRevertOverrideSkin``-``-``UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `SetWeatheringIntensity`InNewIntensity: `number``-`Sets weathering intensity. (Hair-salon temporary hair data is not stored on the component, per BL-57370: the picked PoolId goes to the co-op scope FB2CoopScheduler::CoopExtraData[SalonHair_PoolId]; the picker category goes to SelectOrRandomSalonHair's S2; and the ApplyFail fallback category is derived from the picked PoolId.)`ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TemporarilyRevertOverrideSkin``-``-``UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `ShouldUseScheduler``-``boolean`Returns whether it should Use Scheduler.`TemporarilyRevertOverrideSkin``-``-``UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `TemporarilyRevertOverrideSkin``-``-``UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `UnregisterTemporaryAppearanceTimeTask`InType: [`EB1TemporaryChangeAppearanceType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1temporarychangeappearancetype)`-`Unregisters Temporary Appearance Time Task.`UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |
| `UpdatePregnancyBodyMorph`InGroupName: `string`, InAlpha: `number``-`Updates Pregnancy Body Morph. |

# Override points (30)

Implement these in Lua as `FB2AppearanceComponent.Override_Name = function(...) end`.
