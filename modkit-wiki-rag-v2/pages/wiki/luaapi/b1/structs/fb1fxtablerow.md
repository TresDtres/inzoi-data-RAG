---
document_id: "9250b703c07d984c0f73d8b0ba47cd575b8521efd529add1309c693867b05567"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1fxtablerow"
title: "FB1FxTableRow"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:57+00:00"
content_sha256: "8c998ea144e94d8f0686808ecd9cffe22651993e629819360e5061ba3326db51"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1fxtablerow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Table row defining a single FX entry, including the FX object class, an optional animation montage for sequence-based effects, and an optional spawner ID for world-placed FX.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| EnvironmentB1 - PresentationCategory`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Category`structs`Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |
| Extends[`FB1TableRowBase`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1tablerowbase) |

# Properties (3)

| NameTypeDescription`AnimMontage``UAnimMontage`Optional AnimMontage for sequence-based FX (like AB1Fireworks) If set, will extract FX events from AnimNotifies Optional animation montage used to drive sequence-based FX via AnimNotify events.`FxObject``any``SpawnerId``string`Optional spawner ID for world-placed FX If None() -> spawn on target entity (existing behavior) If valid -> spawn at AB1FXSpawnActor location Optional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location. |
| --- |
| `AnimMontage``UAnimMontage`Optional AnimMontage for sequence-based FX (like AB1Fireworks) If set, will extract FX events from AnimNotifies Optional animation montage used to drive sequence-based FX via AnimNotify events.`FxObject``any``SpawnerId``string`Optional spawner ID for world-placed FX If None() -> spawn on target entity (existing behavior) If valid -> spawn at AB1FXSpawnActor location Optional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location. |
| `FxObject``any``SpawnerId``string`Optional spawner ID for world-placed FX If None() -> spawn on target entity (existing behavior) If valid -> spawn at AB1FXSpawnActor location Optional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location. |
| `SpawnerId``string`Optional spawner ID for world-placed FX If None() -> spawn on target entity (existing behavior) If valid -> spawn at AB1FXSpawnActor location Optional spawner ID; if None, the FX spawns on the target entity; if valid, spawns at the AB1FXSpawnActor location. |
