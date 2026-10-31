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
chunk: 1
chunk_count: 5
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2territorymanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages territories.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TerritoryManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TerritoryManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TerritoryManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TerritoryManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2TerritoryManager')` |
| Require`require('Systems.B2TerritoryManager')` |

# Properties (6)

| NameTypeDescription`DrawCachedBoundsTypeList``table<EB1TerritoryType, boolean>``DrawTerritoryTypeList``table<EB1TerritoryType, boolean>``EntityInMissionTerritoryMap``table<FB1EntityId, any>`Maps an entity to the mission territory it belongs to. An entity belongs to only one mission territory at a time.`TerritoryAoiMap``table<FIntVector2, table<EB1TerritoryType, any[]>>`<AOI, <TerritoryType, Territories>>`TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| --- |
| `DrawCachedBoundsTypeList``table<EB1TerritoryType, boolean>``DrawTerritoryTypeList``table<EB1TerritoryType, boolean>``EntityInMissionTerritoryMap``table<FB1EntityId, any>`Maps an entity to the mission territory it belongs to. An entity belongs to only one mission territory at a time.`TerritoryAoiMap``table<FIntVector2, table<EB1TerritoryType, any[]>>`<AOI, <TerritoryType, Territories>>`TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| `DrawTerritoryTypeList``table<EB1TerritoryType, boolean>``EntityInMissionTerritoryMap``table<FB1EntityId, any>`Maps an entity to the mission territory it belongs to. An entity belongs to only one mission territory at a time.`TerritoryAoiMap``table<FIntVector2, table<EB1TerritoryType, any[]>>`<AOI, <TerritoryType, Territories>>`TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| `EntityInMissionTerritoryMap``table<FB1EntityId, any>`Maps an entity to the mission territory it belongs to. An entity belongs to only one mission territory at a time.`TerritoryAoiMap``table<FIntVector2, table<EB1TerritoryType, any[]>>`<AOI, <TerritoryType, Territories>>`TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| `TerritoryAoiMap``table<FIntVector2, table<EB1TerritoryType, any[]>>`<AOI, <TerritoryType, Territories>>`TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| `TerritoryMap``table<EB1TerritoryType, any[]>`Full list of territories.`bDrawAoIRegion``boolean` |
| `bDrawAoIRegion``boolean` |

# Functions (21)
