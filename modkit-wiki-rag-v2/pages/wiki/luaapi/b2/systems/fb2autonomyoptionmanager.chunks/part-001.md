---
document_id: "d3e55836d0774fe196d2ee5d4d94d8748c896c726a2d19eed808a0baf14ea5ce"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2autonomyoptionmanager"
title: "FB2AutonomyOptionManager"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:44:57+00:00"
content_sha256: "263fed8f0db63a4961f7a794a62eccd89eb1e7ddbb7b6be874fdf3b337e475c5"
chunk: 1
chunk_count: 9
page_type: "article"
route: "wiki/luaapi/b2/systems/fb2autonomyoptionmanager"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Manages autonomy option settings.

# Metadata

| FieldValueKind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AutonomyOptionManager')` |
| --- |
| Kind`system`EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AutonomyOptionManager')` |
| EnvironmentB2 - SimulationCategory`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AutonomyOptionManager')` |
| Category`systems`Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AutonomyOptionManager')` |
| Extends[`FB2ManagerBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b2/systems/fb2managerbase)Require`require('Systems.B2AutonomyOptionManager')` |
| Require`require('Systems.B2AutonomyOptionManager')` |

# Properties (3)

| NameTypeDescription`GlobalOption`[`FB1AutonomyOption`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1autonomyoption)`bActiveMode``boolean`Whether active mode is on. The suppression target is always the currently controlled character, so it is derived in IsActiveModeSuppressed. Not a UPROPERTY, so it is excluded from the CBOR save snapshot and initialized to false on load.`bFollowGlobalAutonomy``boolean` |
| --- |
| `GlobalOption`[`FB1AutonomyOption`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1autonomyoption)`bActiveMode``boolean`Whether active mode is on. The suppression target is always the currently controlled character, so it is derived in IsActiveModeSuppressed. Not a UPROPERTY, so it is excluded from the CBOR save snapshot and initialized to false on load.`bFollowGlobalAutonomy``boolean` |
| `bActiveMode``boolean`Whether active mode is on. The suppression target is always the currently controlled character, so it is derived in IsActiveModeSuppressed. Not a UPROPERTY, so it is excluded from the CBOR save snapshot and initialized to false on load.`bFollowGlobalAutonomy``boolean` |
| `bFollowGlobalAutonomy``boolean` |

# Functions (19)
