---
document_id: "0cbb221e7a64315da7d41c53c0da36641b0dd4662fd28f5e80b2a2914f624130"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1citygraphpointquery"
title: "FB1CityGraphPointQuery"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:28+00:00"
content_sha256: "3c94d61485f77dfb4047019ca6fe3ff6c69b477f0ebe23ad1729f73dc9f108dc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1citygraphpointquery"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Input parameters for a city graph lane point query, specifying the city, search position, range, traffic category, and lane exclusion criteria.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category filter for lanes included in the query results.`City``string`Name of the city to search within.`CityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the city for faster runtime lookup.`ExcludeLaneFlags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Lane flag mask used to exclude lanes with matching flags from the results.`Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| --- |
| `Category`[`EB1CityGraphCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphcategory)Traffic category filter for lanes included in the query results.`City``string`Name of the city to search within.`CityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the city for faster runtime lookup.`ExcludeLaneFlags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Lane flag mask used to exclude lanes with matching flags from the results.`Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `City``string`Name of the city to search within.`CityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the city for faster runtime lookup.`ExcludeLaneFlags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Lane flag mask used to exclude lanes with matching flags from the results.`Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `CityId`[`FB1EntityId`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1entityid)Entity ID of the city for faster runtime lookup.`ExcludeLaneFlags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Lane flag mask used to exclude lanes with matching flags from the results.`Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `ExcludeLaneFlags`[`EB1CityGraphLaneFlags`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1citygraphlaneflags)Lane flag mask used to exclude lanes with matching flags from the results.`Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `Position``FVector`World-space center position of the query search area.`Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `Range``FVector`Half-extents of the box search range around the query position.`bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
| `bExcludePeriodic``boolean`Whether to exclude lanes affected by crosswalks or traffic signals from the results. |
