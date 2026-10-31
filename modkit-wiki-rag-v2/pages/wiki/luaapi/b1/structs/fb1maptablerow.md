---
document_id: "524763cb852a8e2ae68e6da5db58a620ed2d4f36cda35d26b6d4b5e528736002"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1maptablerow"
title: "FB1MapTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:25+00:00"
content_sha256: "da8b7d0fbddb5ecd258a6bcfadff09644866c2e9091f25596b70d0b33d0c77d4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1maptablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Structure that defines a map data table row. Contains level name, display text IDs, currency, map image, release flags, and DLC association.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (10)

| NameTypeDescription`CharacterNameFormat`[`EB1CharacterNameFormatType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1characternameformattype)Character name format convention used in this map's region.`CurrencyId``string`ID of the currency used in this map.`DescriptionTextId``string`Text ID for the map's description.`DlcId``string`ID of the DLC package this map belongs to.`LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| --- |
| `CharacterNameFormat`[`EB1CharacterNameFormatType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1characternameformattype)Character name format convention used in this map's region.`CurrencyId``string`ID of the currency used in this map.`DescriptionTextId``string`Text ID for the map's description.`DlcId``string`ID of the DLC package this map belongs to.`LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `CurrencyId``string`ID of the currency used in this map.`DescriptionTextId``string`Text ID for the map's description.`DlcId``string`ID of the DLC package this map belongs to.`LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `DescriptionTextId``string`Text ID for the map's description.`DlcId``string`ID of the DLC package this map belongs to.`LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `DlcId``string`ID of the DLC package this map belongs to.`LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `LevelName``string`Internal level name used to identify and load this map.`MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `MapImg``UObject`Soft reference to the map preview image texture.`NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `NameTextId``string`Text ID for the map's display name.`bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `bBuildWorld``boolean`Whether this map has been built and is ready for use.`bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `bRelease``boolean`Whether this map has been released and is available to players.`bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
| `bSkipCheckParkingStation``boolean`Whether to skip the parking station check when entering this map. |
