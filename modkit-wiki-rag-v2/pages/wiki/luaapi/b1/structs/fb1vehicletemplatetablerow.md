---
document_id: "c23b7aace10fb2c88137d048254c2584232399b1867ca65208578d3da94cf4be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicletemplatetablerow"
title: "FB1VehicleTemplateTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:43:48+00:00"
content_sha256: "184fd046415b5b3e5a8d7b699523a0870110757073ad49fad97b1be45d3aba42"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1vehicletemplatetablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a vehicle template including its crash mass level, part list, and asset description.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (5)

| NameTypeDescription`AssetDescription`[`FB1VehicleAssetDescription`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleassetdescription)Physical dimension data for this vehicle template.`CrashMassLevel``integer`Virtual mass level used to determine accident severity when two vehicles collide.`ObjectSelectionId``string`ID referencing the object selection set used to identify this vehicle template.`PartList``FB1VehiclePart[]`List of vehicle part definitions that make up this template.`PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
| --- |
| `AssetDescription`[`FB1VehicleAssetDescription`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1vehicleassetdescription)Physical dimension data for this vehicle template.`CrashMassLevel``integer`Virtual mass level used to determine accident severity when two vehicles collide.`ObjectSelectionId``string`ID referencing the object selection set used to identify this vehicle template.`PartList``FB1VehiclePart[]`List of vehicle part definitions that make up this template.`PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
| `CrashMassLevel``integer`Virtual mass level used to determine accident severity when two vehicles collide.`ObjectSelectionId``string`ID referencing the object selection set used to identify this vehicle template.`PartList``FB1VehiclePart[]`List of vehicle part definitions that make up this template.`PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
| `ObjectSelectionId``string`ID referencing the object selection set used to identify this vehicle template.`PartList``FB1VehiclePart[]`List of vehicle part definitions that make up this template.`PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
| `PartList``FB1VehiclePart[]`List of vehicle part definitions that make up this template.`PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
| `PartMap``table<EB1VehiclePartType, FB1VehiclePartCache>`Map of part types to cached part data; populated during OnPostJsonDataLoad. |
