---
document_id: "8835e53dc5479e12d1436b18ff98cf92b68a79b56119bc344b3a3ef82aa3df38"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2sitepathfindingcomponent"
title: "FB2SitePathFindingComponent"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:15+00:00"
content_sha256: "6946c4a938897375cf630a277dc723573da5c05e792d55e5e712a3059f12a0fa"
chunk: 1
chunk_count: 6
page_type: "article"
route: "wiki/luaapi/b2/components/fb2sitepathfindingcomponent"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Component that handles pathfinding within a site.

# Metadata

| FieldValueKind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2SitePathFindingComponent')` |
| --- |
| Kind`component`EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2SitePathFindingComponent')` |
| EnvironmentB2 - SimulationCategory`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2SitePathFindingComponent')` |
| Category`components`Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2SitePathFindingComponent')` |
| Extends[`FB2Component`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/components/fb2component)Require`require('Components.B2SitePathFindingComponent')` |
| Require`require('Components.B2SitePathFindingComponent')` |

# Properties (18)

| NameTypeDescription`ExecutingPathFollowingCharacters``FB1EntityId[]``GiftBoxPoints``FVector[]``GridMaxX``integer``GridMaxY``integer``MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| --- |
| `ExecutingPathFollowingCharacters``FB1EntityId[]``GiftBoxPoints``FVector[]``GridMaxX``integer``GridMaxY``integer``MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `GiftBoxPoints``FVector[]``GridMaxX``integer``GridMaxY``integer``MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `GridMaxX``integer``GridMaxY``integer``MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `GridMaxY``integer``MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `MaxFloor``integer``MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `MinFloor``integer``OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `OutermostInsideCityGraphLocations``FVector[]``OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `OutlineInfos``FB1SitePathFindOutlineInfo[]``PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `PathfindingGrid2``table<integer, FB1FloorPathFindGrid>``ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `ReplacingOutlinePoints``FVector[]``SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `SubZoneGraph``FB2SubZoneGraph``VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `VehiclePoint``FVector``XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `XCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `YCollisionBitArrayMap``table<integer, FB1PathFindGridBitArray>``ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `ZoneGraphNodeArray``FB1ZoneGraphNode[]``ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `ZoneGraphZoneInfoMap``table<integer, FB1ZoneGraphZoneInfo>``bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `bOnlyReachableByWarp``boolean``bUseVehiclePoint``boolean` |
| `bUseVehiclePoint``boolean` |

# Functions (23)
