---
document_id: "98c0a36d83361334913fdf9127fea6fb035cee714e1e8c9c7ea7baa92e9a8e32"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1namedata"
title: "FB1NameData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:41:32+00:00"
content_sha256: "e43be115c385d83a74fd3892c901f851811243e48d6940af873771d7d0382624"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1namedata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- A single name entry within a name pool, storing a list key, gender association, and localized display text. Used in both family name and first name pool table rows to define individual name options.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`DisplayNameTextId``string`String table key referencing the localized display text for this name.`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender this name is associated with, used to filter names during character creation.`ListKey``string`Unique list key identifying this name entry within its parent array.`bHiddenFromRandomPool``boolean`If true, this name is excluded from random name generation (e.g. reserved for special NPCs). |
| --- |
| `DisplayNameTextId``string`String table key referencing the localized display text for this name.`Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender this name is associated with, used to filter names during character creation.`ListKey``string`Unique list key identifying this name entry within its parent array.`bHiddenFromRandomPool``boolean`If true, this name is excluded from random name generation (e.g. reserved for special NPCs). |
| `Gender`[`EB1GenderType`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1gendertype)Gender this name is associated with, used to filter names during character creation.`ListKey``string`Unique list key identifying this name entry within its parent array.`bHiddenFromRandomPool``boolean`If true, this name is excluded from random name generation (e.g. reserved for special NPCs). |
| `ListKey``string`Unique list key identifying this name entry within its parent array.`bHiddenFromRandomPool``boolean`If true, this name is excluded from random name generation (e.g. reserved for special NPCs). |
| `bHiddenFromRandomPool``boolean`If true, this name is excluded from random name generation (e.g. reserved for special NPCs). |
