---
document_id: "c140626f98d9100159dbcf525421e25aad06e23b3c467c8d478b399272d8d7a7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2territorymanager"
title: "FB2TerritoryManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:45:00+00:00"
content_sha256: "a5e3f960323b9327e5297e7588e6f30ff51d695c41665bf1dd486b4a4d56e24c"
chunk: 5
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2territorymanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

ry` *(static)*InPos: `FVector``boolean`Returns whether In Water Territory.`IsInWaterTerritory2D` *(static)*InPos: `FVector``boolean`Returns whether In Water Territory2 D.`IsInWaterTerritory2DAndGetSwimHeight` *(static)*InPos: `FVector`, OutSwimHeight: `number``boolean`Returns whether In Water Territory2 DAnd Get Swim Height.`IsTickable``-``boolean`Returns whether Tickable.`OnMinuteChanged``-``-`Callback invoked on Minute Changed.`ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `IsInWaterTerritory2D` *(static)*InPos: `FVector``boolean`Returns whether In Water Territory2 D.`IsInWaterTerritory2DAndGetSwimHeight` *(static)*InPos: `FVector`, OutSwimHeight: `number``boolean`Returns whether In Water Territory2 DAnd Get Swim Height.`IsTickable``-``boolean`Returns whether Tickable.`OnMinuteChanged``-``-`Callback invoked on Minute Changed.`ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `IsInWaterTerritory2DAndGetSwimHeight` *(static)*InPos: `FVector`, OutSwimHeight: `number``boolean`Returns whether In Water Territory2 DAnd Get Swim Height.`IsTickable``-``boolean`Returns whether Tickable.`OnMinuteChanged``-``-`Callback invoked on Minute Changed.`ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `IsTickable``-``boolean`Returns whether Tickable.`OnMinuteChanged``-``-`Callback invoked on Minute Changed.`ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `OnMinuteChanged``-``-`Callback invoked on Minute Changed.`ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `ShowTerritoryAoIRegion`bInShow: `boolean``-``ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |

# Override points (6)

Implement these in Lua as `FB2TerritoryManager.Override_Name = function(...) end`.

| FunctionParametersReturnsDescription`Override_B2LuaProfilingTest``-``-``Override_FindGatheringTerritoryCenter` *(static)*InTerritoryId: `string`, InCurrentLocation: `FVector``FVector`Finds and returns Gathering Territory Center.`Override_OnMinuteChanged``-``-`Callback invoked on Minute Changed.`Override_ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| --- |
| `Override_B2LuaProfilingTest``-``-``Override_FindGatheringTerritoryCenter` *(static)*InTerritoryId: `string`, InCurrentLocation: `FVector``FVector`Finds and returns Gathering Territory Center.`Override_OnMinuteChanged``-``-`Callback invoked on Minute Changed.`Override_ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `Override_FindGatheringTerritoryCenter` *(static)*InTerritoryId: `string`, InCurrentLocation: `FVector``FVector`Finds and returns Gathering Territory Center.`Override_OnMinuteChanged``-``-`Callback invoked on Minute Changed.`Override_ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `Override_OnMinuteChanged``-``-`Callback invoked on Minute Changed.`Override_ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `Override_ShowTerritory`InTypeName: `string`, bInShow: `boolean``-``Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `Override_ShowTerritoryAoIRegion`bInShow: `boolean``-``Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
| `Override_ShowTerritoryCachedBounds`InTypeName: `string`, bInShow: `boolean``-` |
