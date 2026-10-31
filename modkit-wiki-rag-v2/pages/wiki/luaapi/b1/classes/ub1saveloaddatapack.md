---
document_id: "ea9fa934796dd79dabb32bd8001fc7d35e2268e1ea15303952217ed8f3f61a91"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1saveloaddatapack"
title: "UB1SaveLoadDataPack"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:12+00:00"
content_sha256: "9018766f29a9eddf21258a8561a12a44fbc772191508585507a858e4d003f8ff"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1saveloaddatapack"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- UObject that manages the binary save data pack, holding cached chunks and sections for serialization.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UObject` |
| Category`classes`Extends`UObject` |
| Extends`UObject` |

# Properties (5)

| NameTypeDescription`CRC32ForFile``integer`The CRC32 checksum of the entire save file for integrity validation.`SaveFileName``string`The file name of the save file.`SaveFolderName``string`The folder name under which the save file is stored.`SaveVersion``integer`The save file version; cast to EB1SaveVersion or use as a constant when reading.`SelectedCityId``string`The ID of the city that was selected when saving. |
| --- |
| `CRC32ForFile``integer`The CRC32 checksum of the entire save file for integrity validation.`SaveFileName``string`The file name of the save file.`SaveFolderName``string`The folder name under which the save file is stored.`SaveVersion``integer`The save file version; cast to EB1SaveVersion or use as a constant when reading.`SelectedCityId``string`The ID of the city that was selected when saving. |
| `SaveFileName``string`The file name of the save file.`SaveFolderName``string`The folder name under which the save file is stored.`SaveVersion``integer`The save file version; cast to EB1SaveVersion or use as a constant when reading.`SelectedCityId``string`The ID of the city that was selected when saving. |
| `SaveFolderName``string`The folder name under which the save file is stored.`SaveVersion``integer`The save file version; cast to EB1SaveVersion or use as a constant when reading.`SelectedCityId``string`The ID of the city that was selected when saving. |
| `SaveVersion``integer`The save file version; cast to EB1SaveVersion or use as a constant when reading.`SelectedCityId``string`The ID of the city that was selected when saving. |
| `SelectedCityId``string`The ID of the city that was selected when saving. |
