---
document_id: "dd6f908897634cb8820fe7f5415ec1cf7a7d7b0a42cee67b6baa95af66218332"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/structs/fb2entity"
title: "FB2Entity"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:35+00:00"
content_sha256: "756d429a45f6ceb29f0212b8bb8b3cdc190beb1f4a5d2b915a399ddb524e16fd"
chunk: 49
chunk_count: 51
page_type: "article"
route: "wiki/luaapi/b2/structs/fb2entity"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

nums/eb2entitysigbucket)`-`Sets Significance Bucket.`SetSignificanceState`InState: [`EB2EntitySigState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitysigstate)`-`Sets Significance State.`SetSimulationLevel`InSimulationLevel: [`EB1SimulationLevel`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlevel)`-`Sets Simulation Level.`SetTickEnabled`bEnabled: `boolean``-`Intentionally non-virtual: the debug hook's SLOD2-entry path calls this during tracking-map updates, so a derived side effect (callback/re-entry) would risk map inconsistency. The restore path is separated (OnTickRestore) and called after the map update.`SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetSignificanceBucket`InBucket: [`EB2EntitySigBucket`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitysigbucket)`-`Sets Significance Bucket.`SetSignificanceState`InState: [`EB2EntitySigState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitysigstate)`-`Sets Significance State.`SetSimulationLevel`InSimulationLevel: [`EB1SimulationLevel`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlevel)`-`Sets Simulation Level.`SetTickEnabled`bEnabled: `boolean``-`Intentionally non-virtual: the debug hook's SLOD2-entry path calls this during tracking-map updates, so a derived side effect (callback/re-entry) would risk map inconsistency. The restore path is separated (OnTickRestore) and called after the map update.`SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetSignificanceState`InState: [`EB2EntitySigState`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/enums/eb2entitysigstate)`-`Sets Significance State.`SetSimulationLevel`InSimulationLevel: [`EB1SimulationLevel`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlevel)`-`Sets Simulation Level.`SetTickEnabled`bEnabled: `boolean``-`Intentionally non-virtual: the debug hook's SLOD2-entry path calls this during tracking-map updates, so a derived side effect (callback/re-entry) would risk map inconsistency. The restore path is separated (OnTickRestore) and called after the map update.`SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetSimulationLevel`InSimulationLevel: [`EB1SimulationLevel`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1simulationlevel)`-`Sets Simulation Level.`SetTickEnabled`bEnabled: `boolean``-`Intentionally non-virtual: the debug hook's SLOD2-entry path calls this during tracking-map updates, so a derived side effect (callback/re-entry) would risk map inconsistency. The restore path is separated (OnTickRestore) and called after the map update.`SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetTickEnabled`bEnabled: `boolean``-`Intentionally non-virtual: the debug hook's SLOD2-entry path calls this during tracking-map updates, so a derived side effect (callback/re-entry) would risk map inconsistency. The restore path is separated (OnTickRestore) and called after the map update.`SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetTickInterval`interval: `number``-`Sets Tick Interval.`SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetTickScale`scale: `number``-`Sets Tick Scale.`SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `SetUpdatePoolIndex`index: `integer``-`Sets Update Pool Index.`ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `ShouldProcessTick``-``boolean`Returns whether it should Process Tick.`Unsubscribe`Channel: `string``-` |
| `Unsubscribe`Channel: `string``-` |

# Override points (14)

Implement these in Lua as `FB2Entity.Override_Name = function(...) end`.
