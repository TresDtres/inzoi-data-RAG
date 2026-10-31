---
document_id: "be1830448abca20ace45cf51014086c1996e2c9cbb35b12f40f2e90ee0bc3d8d"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1croptablerow"
title: "FB1CropTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:35+00:00"
content_sha256: "6462f682f1d580c622d9f3b5346e726158edf8775a7504103e07bdab4c8c75b0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1croptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a crop type, including its temperature range, harvest behavior, object IDs for the crop and seed, and yield quality object mappings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (6)

| NameTypeDescription`CropObjectId``string`Crop's object ID Object ID of the crop plant itself.`SeedObjectId``string`Object ID of the seed used to plant this crop.`TemperatureRange`[`FB1CropTemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1croptemperaturerange)Definition of optimal and growable temperature ranges Temperature range data defining growable and optimal conditions for this crop.`YieldObjectIds``FB1YieldQualityObjectId[]`List of object IDs for each possible yield quality of this crop.`bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| --- |
| `CropObjectId``string`Crop's object ID Object ID of the crop plant itself.`SeedObjectId``string`Object ID of the seed used to plant this crop.`TemperatureRange`[`FB1CropTemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1croptemperaturerange)Definition of optimal and growable temperature ranges Temperature range data defining growable and optimal conditions for this crop.`YieldObjectIds``FB1YieldQualityObjectId[]`List of object IDs for each possible yield quality of this crop.`bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| `SeedObjectId``string`Object ID of the seed used to plant this crop.`TemperatureRange`[`FB1CropTemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1croptemperaturerange)Definition of optimal and growable temperature ranges Temperature range data defining growable and optimal conditions for this crop.`YieldObjectIds``FB1YieldQualityObjectId[]`List of object IDs for each possible yield quality of this crop.`bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| `TemperatureRange`[`FB1CropTemperatureRange`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1croptemperaturerange)Definition of optimal and growable temperature ranges Temperature range data defining growable and optimal conditions for this crop.`YieldObjectIds``FB1YieldQualityObjectId[]`List of object IDs for each possible yield quality of this crop.`bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| `YieldObjectIds``FB1YieldQualityObjectId[]`List of object IDs for each possible yield quality of this crop.`bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| `bIsAdvancedYield``boolean`Whether the harvest type is advanced (Gem / Unique) Whether this crop can produce advanced quality yields (Gem or Unique tier).`bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
| `bIsMultiHarvest``boolean`Definition of single-harvest and multi-harvest crops Whether this crop can be harvested multiple times before the plant dies. |
