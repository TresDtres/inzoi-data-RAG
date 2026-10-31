---
document_id: "9d06334b1d996b3b04f591cb4a4d4551c388968aa1839935bc747142552bad68"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1agingtablerow"
title: "FB1AgingTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:09+00:00"
content_sha256: "1181852cca71953ca280f01e36eb88c2e84ee1fadd6cdc72614c16b21362756a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1agingtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A table row struct that stores data for each aging stage. It includes information such as stat ranges, appearance presets, taxes, and more for each age stage.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (7)

| NameTypeDescription`AppearancePreset``table<EB1GenderType, string>`Preset appearances based on gender type.`ContentAvailableSlot``table<string, integer>`Map defining available content slots for this age stage.`DescTextId``string`ID for the description text used in UI.`DisplayTextId``string`ID for the display text used in UI.`StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| --- |
| `AppearancePreset``table<EB1GenderType, string>`Preset appearances based on gender type.`ContentAvailableSlot``table<string, integer>`Map defining available content slots for this age stage.`DescTextId``string`ID for the description text used in UI.`DisplayTextId``string`ID for the display text used in UI.`StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `ContentAvailableSlot``table<string, integer>`Map defining available content slots for this age stage.`DescTextId``string`ID for the description text used in UI.`DisplayTextId``string`ID for the display text used in UI.`StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `DescTextId``string`ID for the description text used in UI.`DisplayTextId``string`ID for the display text used in UI.`StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `DisplayTextId``string`ID for the display text used in UI.`StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `StandardWeight``table<EB1GenderType, number>`Standard weight based on gender type.`TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `TaxPerPerson``integer`Tax amount per person in this age stage.`TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
| `TimeToNextAge``integer`Time required to transition to the next age stage (in seconds). |
