---
document_id: "28f89bc9a17cd6dc4253363ef0c7c2feb3632351258c2e76f2406447e023ec9b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh"
title: "smartbuild.import_and_place_mesh"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "c179e215f79c2c3b6f81b937825debe20a06799fb8c240c0ce7365e3c3149d9e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-import-and-place-mesh"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Runtime-import a 3D mesh file (.glb/.gltf) and spawn it at the world location under the given screen pixel. Used by the file drag-and-drop controller for mesh drops. Import is asynchronous: the CLI returns immediately with status="import_started" and the spawn happens after Interchange completes (a few hundred ms typically). On a hit miss (e.g. drop on sky) the actor is not spawned and a log line is emitted. FBX is not supported in this version (no runtime FBX parser); convert to .glb first.

# Metadata

| FieldValueDisplayImport And Place Mesh (Drop)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayImport And Place Mesh (Drop)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfile_pathstringyes—Absolute path to a .glb or .gltf file.xfloatyes—Screen X pixel (viewport-local) where the user dropped the file.yfloatyes—Screen Y pixel (viewport-local) where the user dropped the file.yawfloatno0Yaw rotation in degrees applied to the spawned actor (default 0). |
| --- |
| file_pathstringyes—Absolute path to a .glb or .gltf file.xfloatyes—Screen X pixel (viewport-local) where the user dropped the file.yfloatyes—Screen Y pixel (viewport-local) where the user dropped the file.yawfloatno0Yaw rotation in degrees applied to the spawned actor (default 0). |
| xfloatyes—Screen X pixel (viewport-local) where the user dropped the file.yfloatyes—Screen Y pixel (viewport-local) where the user dropped the file.yawfloatno0Yaw rotation in degrees applied to the spawned actor (default 0). |
| yfloatyes—Screen Y pixel (viewport-local) where the user dropped the file.yawfloatno0Yaw rotation in degrees applied to the spawned actor (default 0). |
| yawfloatno0Yaw rotation in degrees applied to the spawned actor (default 0). |

# Usage

```
await inzoi.cli.execute('smartbuild.import_and_place_mesh', {  file_path: '',  x: 0.0,  y: 0.0,  yaw: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
