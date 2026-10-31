---
document_id: "b8e5c96794bce09cf081648c09b3ea8bfee10112ceb0e491f93bac6c787a3a58"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/luaapi/b1/structs/fb1characterbodyinfo"
title: "FB1CharacterBodyInfo"
section: "wiki/luaapi"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:40:20+00:00"
content_sha256: "6a5cad987e9d48231ec7054d1d412fb9e6a6a045d643617455e3ceb460d1f2fc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/luaapi/b1/structs/fb1characterbodyinfo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Defines character body settings, including the body mesh, animation instance, appearance preset, and foot-type mesh mappings.

# Metadata

| FieldValueKind`struct`EnvironmentB1 - PresentationCategory`structs` |
| --- |
| Kind`struct`EnvironmentB1 - PresentationCategory`structs` |
| EnvironmentB1 - PresentationCategory`structs` |
| Category`structs` |

# Properties (7)

| NameTypeDescription`AppearancePresetId``string`Identifier for the appearance preset used by this body.`BodyMesh``FSoftObjectPath`Soft reference to the body mesh.`FootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh indexed by foot type.`SoftAnimInstance``FSoftClassPath`Soft reference to the animation instance class. Used for JSON/CBOR serialization and async loading in RefreshBody. Stored as a path (not TSoftClassPtr) because reflection-based snapshot resolves TSoftClassPtr via FindObject, which is fatal during GC.`StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| --- |
| `AppearancePresetId``string`Identifier for the appearance preset used by this body.`BodyMesh``FSoftObjectPath`Soft reference to the body mesh.`FootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh indexed by foot type.`SoftAnimInstance``FSoftClassPath`Soft reference to the animation instance class. Used for JSON/CBOR serialization and async loading in RefreshBody. Stored as a path (not TSoftClassPtr) because reflection-based snapshot resolves TSoftClassPtr via FindObject, which is fatal during GC.`StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `BodyMesh``FSoftObjectPath`Soft reference to the body mesh.`FootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh indexed by foot type.`SoftAnimInstance``FSoftClassPath`Soft reference to the animation instance class. Used for JSON/CBOR serialization and async loading in RefreshBody. Stored as a path (not TSoftClassPtr) because reflection-based snapshot resolves TSoftClassPtr via FindObject, which is fatal during GC.`StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `FootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh indexed by foot type.`SoftAnimInstance``FSoftClassPath`Soft reference to the animation instance class. Used for JSON/CBOR serialization and async loading in RefreshBody. Stored as a path (not TSoftClassPtr) because reflection-based snapshot resolves TSoftClassPtr via FindObject, which is fatal during GC.`StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `SoftAnimInstance``FSoftClassPath`Soft reference to the animation instance class. Used for JSON/CBOR serialization and async loading in RefreshBody. Stored as a path (not TSoftClassPtr) because reflection-based snapshot resolves TSoftClassPtr via FindObject, which is fatal during GC.`StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `StockingFootTypeMesh``table<EB1FootType, FSoftObjectPath>`Foot Mesh used when stockings are worn. Falls back to FootTypeMesh if entry is missing.`ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `ToeMesh``FSoftObjectPath`Toe Mesh for main-body overlay when stockings are worn (single mesh — no per-stocking variants).`bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
| `bMergeBodyMesh``boolean`Flag indicating whether the body mesh is merged by sections. |
