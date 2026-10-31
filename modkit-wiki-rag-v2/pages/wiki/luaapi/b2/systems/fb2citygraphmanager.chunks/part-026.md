---
document_id: "c3ffba38b67a32a951be271e90dce688bc21e42e958315fe79c81199c32cea8a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2citygraphmanager"
title: "FB2CityGraphManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "bbe41a0a8df7c650ad6c3e0dfa4866ed014f2b022cf0e692eeca1b13a64ac8a1"
chunk: 26
chunk_count: 26
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2citygraphmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

nteger`, InAdvancedDistance: `number`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`, OutPoint: [`FB1CityGraphDetailPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphdetailpoint)`boolean``Reset``-``-``SetLanePointsFlag`InLanePointIndices: `integer[]`, InFlag: `integer``-`Sets Lane Points Flag.`SetLaneState`InLaneIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Lane State.`SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |
| `QueryProjectedLanePoint`InLaneIndex: `integer`, InTargetLaneIndex: `integer`, InAdvancedDistance: `number`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`, OutPoint: [`FB1CityGraphDetailPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphdetailpoint)`boolean``Reset``-``-``SetLanePointsFlag`InLanePointIndices: `integer[]`, InFlag: `integer``-`Sets Lane Points Flag.`SetLaneState`InLaneIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Lane State.`SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |
| `Reset``-``-``SetLanePointsFlag`InLanePointIndices: `integer[]`, InFlag: `integer``-`Sets Lane Points Flag.`SetLaneState`InLaneIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Lane State.`SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |
| `SetLanePointsFlag`InLanePointIndices: `integer[]`, InFlag: `integer``-`Sets Lane Points Flag.`SetLaneState`InLaneIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Lane State.`SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |
| `SetLaneState`InLaneIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Lane State.`SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |
| `SetRoadState`InRoadIndex: `integer`, InState: [`EB1CityGraphLaneState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanestate)`-`Sets Road State. |

# Override points (4)

Implement these in Lua as `FB2CityGraphManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_CalculateLaneOffset`InLaneIndex: `integer`, InAdvanceDistance: `number`, InRatio: `number``number``Override_QueryAccessible`InLaneIndex: `integer`, InNextRoadIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`, InNextLaneIndex: `integer``boolean``Override_QueryLaneLink`InLaneIndex: `integer`, InNextLaneIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`[`EB1CityGraphLaneLinkQueryFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanelinkqueryflag)`Override_Reset``-``-` |
| --- |
| `Override_CalculateLaneOffset`InLaneIndex: `integer`, InAdvanceDistance: `number`, InRatio: `number``number``Override_QueryAccessible`InLaneIndex: `integer`, InNextRoadIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`, InNextLaneIndex: `integer``boolean``Override_QueryLaneLink`InLaneIndex: `integer`, InNextLaneIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`[`EB1CityGraphLaneLinkQueryFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanelinkqueryflag)`Override_Reset``-``-` |
| `Override_QueryAccessible`InLaneIndex: `integer`, InNextRoadIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`, InNextLaneIndex: `integer``boolean``Override_QueryLaneLink`InLaneIndex: `integer`, InNextLaneIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`[`EB1CityGraphLaneLinkQueryFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanelinkqueryflag)`Override_Reset``-``-` |
| `Override_QueryLaneLink`InLaneIndex: `integer`, InNextLaneIndex: `integer`, InCategory: [`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory), InMatchType: `EB1CityGraphCategoryMatchType`[`EB1CityGraphLaneLinkQueryFlag`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlanelinkqueryflag)`Override_Reset``-``-` |
| `Override_Reset``-``-` |
