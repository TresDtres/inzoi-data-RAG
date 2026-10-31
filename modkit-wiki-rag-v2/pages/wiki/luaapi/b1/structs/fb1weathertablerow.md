---
document_id: "ad2f945cd203abd5bb34d009b0704b9defd0649504647849a9d616124596d00a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1weathertablerow"
title: "FB1WeatherTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:50+00:00"
content_sha256: "93a99f9daf2fee4985cc67d28385fd2f0e5c791a4eb6e5a98559a2a0b7790305"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1weathertablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a weather type including its category, visual steps, shipwreck configs, and associated scripts.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`OnEndScriptIds``string[]`List of weather script IDs executed when this weather ends.`OnStartScriptIds``string[]`List of weather script IDs executed when this weather begins.`Shipwrecks``FB1ShipwreckConfig[]`List of shipwreck configurations that can be triggered by this weather.`WeatherCategory`[`EB1WeatherCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathercategory)Category of this weather entry, such as normal or disaster.`WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| --- |
| `OnEndScriptIds``string[]`List of weather script IDs executed when this weather ends.`OnStartScriptIds``string[]`List of weather script IDs executed when this weather begins.`Shipwrecks``FB1ShipwreckConfig[]`List of shipwreck configurations that can be triggered by this weather.`WeatherCategory`[`EB1WeatherCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathercategory)Category of this weather entry, such as normal or disaster.`WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| `OnStartScriptIds``string[]`List of weather script IDs executed when this weather begins.`Shipwrecks``FB1ShipwreckConfig[]`List of shipwreck configurations that can be triggered by this weather.`WeatherCategory`[`EB1WeatherCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathercategory)Category of this weather entry, such as normal or disaster.`WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| `Shipwrecks``FB1ShipwreckConfig[]`List of shipwreck configurations that can be triggered by this weather.`WeatherCategory`[`EB1WeatherCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathercategory)Category of this weather entry, such as normal or disaster.`WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| `WeatherCategory`[`EB1WeatherCategory`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathercategory)Category of this weather entry, such as normal or disaster.`WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| `WeatherSteps``FB1WeatherDetail[]`Ordered list of visual and temperature detail settings for each intensity step.`WeatherTextId``string`Text ID used to display the weather name in the UI. |
| `WeatherTextId``string`Text ID used to display the weather name in the UI. |
