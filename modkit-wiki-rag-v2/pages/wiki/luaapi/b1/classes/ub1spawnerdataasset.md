---
document_id: "4953ca98981e9c44d028c46ae0223d485b478b8905ea64ead0f72d92e1a2172f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/classes/ub1spawnerdataasset"
title: "UB1SpawnerDataAsset"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:38:21+00:00"
content_sha256: "c14d31d5dcf68bbe5cc2486395f3067fab7409f6dad153f2fbb2ceff24fe4b73"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/classes/ub1spawnerdataasset"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Data asset for the spawner system, mapping spawner types to actor paths and configuring mesh spawner behavior.

# Metadata

| FieldValueKind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| --- |
| Kind`class`EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| EnvironmentB1 - PresentationCategory`classes`Extends`UB1DataAssetBase` |
| Category`classes`Extends`UB1DataAssetBase` |
| Extends`UB1DataAssetBase` |

# Properties (4)

| NameTypeDescription`MaxSpawnIndex``integer`The maximum spawn index used by the spawner to cycle through spawn points.`MeshDescription``table<string, FB1MeshSpawnDescription>`A map of mesh IDs to their spawn description configurations.`MeshSpawnerVisibilityDelay``integer`The delay in in-game minutes before a default concealment mesh appears after the cinematic mesh disappears.`SpawnerActorPath``table<EB1SpawnerType, UObject>`A map of spawner types to their corresponding actor soft object paths. |
| --- |
| `MaxSpawnIndex``integer`The maximum spawn index used by the spawner to cycle through spawn points.`MeshDescription``table<string, FB1MeshSpawnDescription>`A map of mesh IDs to their spawn description configurations.`MeshSpawnerVisibilityDelay``integer`The delay in in-game minutes before a default concealment mesh appears after the cinematic mesh disappears.`SpawnerActorPath``table<EB1SpawnerType, UObject>`A map of spawner types to their corresponding actor soft object paths. |
| `MeshDescription``table<string, FB1MeshSpawnDescription>`A map of mesh IDs to their spawn description configurations.`MeshSpawnerVisibilityDelay``integer`The delay in in-game minutes before a default concealment mesh appears after the cinematic mesh disappears.`SpawnerActorPath``table<EB1SpawnerType, UObject>`A map of spawner types to their corresponding actor soft object paths. |
| `MeshSpawnerVisibilityDelay``integer`The delay in in-game minutes before a default concealment mesh appears after the cinematic mesh disappears.`SpawnerActorPath``table<EB1SpawnerType, UObject>`A map of spawner types to their corresponding actor soft object paths. |
| `SpawnerActorPath``table<EB1SpawnerType, UObject>`A map of spawner types to their corresponding actor soft object paths. |
