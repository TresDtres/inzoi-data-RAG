---
document_id: "4c56ce1736f4132366925566a14e00dba0f434bc21f3a8964b32f8ed3b37f626"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1cityeditobjectpositiontypespawninfo"
title: "FB1CityEditObjectPositionTypeSpawnInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:26+00:00"
content_sha256: "50981936c61a98569bca57d648a20f8f29b3dd05ed66b494ab12c2f29a56ceeb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1cityeditobjectpositiontypespawninfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Associates object type spawn asset infos and world transforms for a given position type, defining what spawns at each location for city edit objects.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (2)

| NameTypeDescription`TransformList``FTransform[]`List of world transforms at which city edit objects may spawn.`VATAssetList``table<string, FB1CityEditObjectTypeSpawnAssetInfo>`object type Map from object type name to its VAT spawn asset info for this position type. |
| --- |
| `TransformList``FTransform[]`List of world transforms at which city edit objects may spawn.`VATAssetList``table<string, FB1CityEditObjectTypeSpawnAssetInfo>`object type Map from object type name to its VAT spawn asset info for this position type. |
| `VATAssetList``table<string, FB1CityEditObjectTypeSpawnAssetInfo>`object type Map from object type name to its VAT spawn asset info for this position type. |
