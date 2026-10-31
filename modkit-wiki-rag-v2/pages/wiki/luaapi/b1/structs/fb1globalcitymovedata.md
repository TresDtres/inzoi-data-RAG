---
document_id: "4284012f141274a42bd4e97dc5f80fa4a7cd0c3dd89ce27c2b943d5486bfc382"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1globalcitymovedata"
title: "FB1GlobalCityMoveData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:05+00:00"
content_sha256: "53fd340c9f4d04d961148009e9c5cf49296ce461f1b0b882c72dc9d160ce4270"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1globalcitymovedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Global city move data container stored in the Common Chunk. Holds all city state, Zoi move, and household move data in one place.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`AlwaysLoadedCharacterEntityIds``table<FB1EntityId, boolean>`Set of AlwaysLoaded resident Zois — stay queryable / catch-up-able from outside that city.`CityMoveHouseholdDataMap``table<FB1EntityId, FB1CityMoveHouseholdData>`Map of household city move data keyed by household entity ID.`CityMoveZoiDataMap``table<FB1EntityId, FB1CityMoveZoiData>`Map of Zoi city move data keyed by Zoi entity ID.`CityStateDataMap``table<string, FB1CityStateData>`Map of city state data keyed by city name. |
| --- |
| `AlwaysLoadedCharacterEntityIds``table<FB1EntityId, boolean>`Set of AlwaysLoaded resident Zois — stay queryable / catch-up-able from outside that city.`CityMoveHouseholdDataMap``table<FB1EntityId, FB1CityMoveHouseholdData>`Map of household city move data keyed by household entity ID.`CityMoveZoiDataMap``table<FB1EntityId, FB1CityMoveZoiData>`Map of Zoi city move data keyed by Zoi entity ID.`CityStateDataMap``table<string, FB1CityStateData>`Map of city state data keyed by city name. |
| `CityMoveHouseholdDataMap``table<FB1EntityId, FB1CityMoveHouseholdData>`Map of household city move data keyed by household entity ID.`CityMoveZoiDataMap``table<FB1EntityId, FB1CityMoveZoiData>`Map of Zoi city move data keyed by Zoi entity ID.`CityStateDataMap``table<string, FB1CityStateData>`Map of city state data keyed by city name. |
| `CityMoveZoiDataMap``table<FB1EntityId, FB1CityMoveZoiData>`Map of Zoi city move data keyed by Zoi entity ID.`CityStateDataMap``table<string, FB1CityStateData>`Map of city state data keyed by city name. |
| `CityStateDataMap``table<string, FB1CityStateData>`Map of city state data keyed by city name. |
