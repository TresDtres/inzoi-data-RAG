---
document_id: "d3d3c4c146f2a13627e5e23212b86fe30f9efb6ceffcaaa8045e1230bfdb65a4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cityseasonweathertablerow"
title: "FB1CitySeasonWeatherTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:29+00:00"
content_sha256: "64eecc17ad0ff1dc05db8317eda58f23cd77c2aedb2d4e2967f66038d7293b48"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cityseasonweathertablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that defines the city-specific seasonal weather configuration, including the starting temperature and all season entries.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (2)

| NameTypeDescription`Seasons``FB1SeasonConfig[]`List of season configurations defining the weather and temperature behavior per season for this city.`StartFirstTemperature``integer`Initial temperature at the start of the first season for this city. |
| --- |
| `Seasons``FB1SeasonConfig[]`List of season configurations defining the weather and temperature behavior per season for this city.`StartFirstTemperature``integer`Initial temperature at the start of the first season for this city. |
| `StartFirstTemperature``integer`Initial temperature at the start of the first season for this city. |
