---
document_id: "928329ed57709ea44482ad101e2fb8d679d43697258e351d0dbee96b6c3db81a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1craftingobjectspawndata"
title: "FB1CraftingObjectSpawnData"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:34+00:00"
content_sha256: "1bfb72bab8f2d407bfe6b956b840f445d259a35fb9bbd627abbd99f2cee519c6"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1craftingobjectspawndata"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines where and how a crafted object is spawned upon completing a crafting step.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (4)

| NameTypeDescription`SpawnObjectId``string`Object ID of the item to spawn (references Object or Food data).`SpawnPoint`[`EB1CraftObjectSpawnPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftobjectspawnpoint)Location where the spawned object appears (right hand, crafting slot, or inventory).`TargetFilterInteractionId``string`Target filter ID used for the interaction that receives the spawned object.`bIsCarriable``boolean`Whether the spawned object can be carried by the character. |
| --- |
| `SpawnObjectId``string`Object ID of the item to spawn (references Object or Food data).`SpawnPoint`[`EB1CraftObjectSpawnPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftobjectspawnpoint)Location where the spawned object appears (right hand, crafting slot, or inventory).`TargetFilterInteractionId``string`Target filter ID used for the interaction that receives the spawned object.`bIsCarriable``boolean`Whether the spawned object can be carried by the character. |
| `SpawnPoint`[`EB1CraftObjectSpawnPoint`](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/enums/eb1craftobjectspawnpoint)Location where the spawned object appears (right hand, crafting slot, or inventory).`TargetFilterInteractionId``string`Target filter ID used for the interaction that receives the spawned object.`bIsCarriable``boolean`Whether the spawned object can be carried by the character. |
| `TargetFilterInteractionId``string`Target filter ID used for the interaction that receives the spawned object.`bIsCarriable``boolean`Whether the spawned object can be carried by the character. |
| `bIsCarriable``boolean`Whether the spawned object can be carried by the character. |
