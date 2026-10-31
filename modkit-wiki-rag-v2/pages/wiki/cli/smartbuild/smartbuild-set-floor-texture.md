---
document_id: "bf634da0e80b52d9da0dcddb0ae6cf18e18199195f784832fd184878b5d4c46e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture"
title: "smartbuild.set_floor_texture"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "e668ec2ef1e50d0b8a19071be544a8fa14c586daaa774357a291f682918f1d47"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-set-floor-texture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply a user-provided PNG/JPG image as a floor (or ceiling) material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. Specify floor_level and/or room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling. A Floor snapshot (before/after) is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look.

# Metadata

| FieldValueDisplaySet Floor/Ceiling Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Floor/Ceiling Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfile_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceilingsite_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| --- |
| file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceilingsite_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceilingsite_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceilingsite_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| targetstringnofloorfloor (default) or ceilingsite_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

# Usage

```
await inzoi.cli.execute('smartbuild.set_floor_texture', {  file_path: '', // optional  floor_level: 0, // optional  room_index: 0, // optional  target: 'floor', // optional  site_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
