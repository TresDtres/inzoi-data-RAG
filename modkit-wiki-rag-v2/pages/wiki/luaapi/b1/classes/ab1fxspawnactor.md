---
document_id: "731b31d3c17ef2a41df0bb54b6d4e9aba6b832ed941c8bcdb4e4308d3419708b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ab1fxspawnactor"
title: "AB1FXSpawnActor"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:34+00:00"
content_sha256: "44de98397b81fc95cfeafef6c8cd632256dbd73eeda9a4aa050f4f2a47ef9ec9"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ab1fxspawnactor"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- AB1FXSpawnActor - World-placed actor for spawning FX at specific locations Usage: 1. Place in world at desired FX spawn location 2. Set unique SpawnerId (e.g., "Fireworks_Plaza_01") 3. Reference SpawnerId in Fx.json data table 4. Scripts can trigger FX at this location Supports two modes: - Simple FX: Single FXObject spawned instantly - AnimMontage: Sequence of FX from AnimNotify events (fireworks, cherry blossoms, etc.)

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| EnvironmentB1 - PresentationCategory`classes`Extends`AActor` |
| Category`classes`Extends`AActor` |
| Extends`AActor` |

# Properties (4)

| NameTypeDescription`ExtractedEvents``FB1MontageFXEvent[]``SpawnRootComponent``any`Visual preview in editor`SpawnerId``string`Spawner identification - uses FName for consistency with project patterns`SpriteComponent``any`Billboard for easy selection |
| --- |
| `ExtractedEvents``FB1MontageFXEvent[]``SpawnRootComponent``any`Visual preview in editor`SpawnerId``string`Spawner identification - uses FName for consistency with project patterns`SpriteComponent``any`Billboard for easy selection |
| `SpawnRootComponent``any`Visual preview in editor`SpawnerId``string`Spawner identification - uses FName for consistency with project patterns`SpriteComponent``any`Billboard for easy selection |
| `SpawnerId``string`Spawner identification - uses FName for consistency with project patterns`SpriteComponent``any`Billboard for easy selection |
| `SpriteComponent``any`Billboard for easy selection |

# Functions (1)

| FunctionParametersReturnsDescription`OnOneShotNiagaraSystemFinished`InNiagaraComponent: `UNiagaraComponent``-`Callback invoked on One Shot Niagara System Finished. |
| --- |
| `OnOneShotNiagaraSystemFinished`InNiagaraComponent: `UNiagaraComponent``-`Callback invoked on One Shot Niagara System Finished. |
