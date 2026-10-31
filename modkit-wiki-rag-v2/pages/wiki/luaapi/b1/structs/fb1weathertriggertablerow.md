---
document_id: "4f8a06e0c9c87289240f7879c5606b26ef62262b661b679941f944a4ad7d8b37"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1weathertriggertablerow"
title: "FB1WeatherTriggerTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:50+00:00"
content_sha256: "5f98267e742a383c0f268ee03a7c0204a73954a5a9e341e478a66f293c4fa1ea"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1weathertriggertablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row that associates a map and trigger type with the scripts to run when a weather trigger condition starts or ends.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`EndScriptIds``string[]`List of weather script IDs executed when this trigger condition ends.`MapId``string`ID of the map where this weather trigger applies.`StartScriptIds``string[]`List of weather script IDs executed when this trigger condition starts.`SubId``string`Sub-identifier used to further specify the trigger condition based on TriggerType.`TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
| --- |
| `EndScriptIds``string[]`List of weather script IDs executed when this trigger condition ends.`MapId``string`ID of the map where this weather trigger applies.`StartScriptIds``string[]`List of weather script IDs executed when this trigger condition starts.`SubId``string`Sub-identifier used to further specify the trigger condition based on TriggerType.`TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
| `MapId``string`ID of the map where this weather trigger applies.`StartScriptIds``string[]`List of weather script IDs executed when this trigger condition starts.`SubId``string`Sub-identifier used to further specify the trigger condition based on TriggerType.`TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
| `StartScriptIds``string[]`List of weather script IDs executed when this trigger condition starts.`SubId``string`Sub-identifier used to further specify the trigger condition based on TriggerType.`TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
| `SubId``string`Sub-identifier used to further specify the trigger condition based on TriggerType.`TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
| `TriggerType`[`EB1WeatherTriggerType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1weathertriggertype)Type of weather trigger event. |
