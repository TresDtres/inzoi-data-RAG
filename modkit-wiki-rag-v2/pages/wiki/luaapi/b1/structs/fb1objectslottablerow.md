---
document_id: "675510bb7daf6fa33b017b983af15f98fc3adf30f5b0a63ec368abc180f157ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1objectslottablerow"
title: "FB1ObjectSlotTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:36+00:00"
content_sha256: "db2a2d8181b96cd5a775869d91e39513a84910f24294760eb79d9c2ad12dde5e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1objectslottablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data table row defining an object slot, including enabled object categories, disable conditions, and overlap settings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`AllowOverlap``boolean`Whether overlapping objects are allowed in this slot.`DisableCondition`[`FB1DisableSlotCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disableslotcondition)The condition under which this slot becomes disabled.`EnableObjectCategories``string[]`The list of object categories that are allowed to use this slot.`EndOccupyScriptId``string`The script ID executed when an object stops occupying this slot.`OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| --- |
| `AllowOverlap``boolean`Whether overlapping objects are allowed in this slot.`DisableCondition`[`FB1DisableSlotCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disableslotcondition)The condition under which this slot becomes disabled.`EnableObjectCategories``string[]`The list of object categories that are allowed to use this slot.`EndOccupyScriptId``string`The script ID executed when an object stops occupying this slot.`OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| `DisableCondition`[`FB1DisableSlotCondition`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1disableslotcondition)The condition under which this slot becomes disabled.`EnableObjectCategories``string[]`The list of object categories that are allowed to use this slot.`EndOccupyScriptId``string`The script ID executed when an object stops occupying this slot.`OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| `EnableObjectCategories``string[]`The list of object categories that are allowed to use this slot.`EndOccupyScriptId``string`The script ID executed when an object stops occupying this slot.`OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| `EndOccupyScriptId``string`The script ID executed when an object stops occupying this slot.`OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| `OccupiableOverlap``boolean`Whether overlapping objects can still be occupied in this slot.`StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
| `StartOccupyScriptId``string`The script ID executed when an object starts occupying this slot. |
