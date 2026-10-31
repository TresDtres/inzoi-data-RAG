---
document_id: "04ff4541b05ff3574abd3fd8e563aec2edf08819ac5ec26d4f1e51e4982d98c1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture"
title: "smartbuild.set_wall_texture"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "bb8b04983c6c02e0b2479d1fc4382e1e05585ba520af2536d158ea8acd85ca7e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-set-wall-texture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply a user-provided PNG/JPG image as a wall material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. Use floor_level to filter. side: front, back, or both (default). A Floor snapshot (before/after) is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look.

# Metadata

| FieldValueDisplaySet Wall Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Wall Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfile_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.edge_keyintno—Specific wall edge key (from build.scan_walls). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both)site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| --- |
| file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.edge_keyintno—Specific wall edge key (from build.scan_walls). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both)site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| edge_keyintno—Specific wall edge key (from build.scan_walls). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both)site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both)site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| sidestringnobothWhich side: front, back, or both (default: both)site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

# Usage

```
await inzoi.cli.execute('smartbuild.set_wall_texture', {  file_path: '', // optional  edge_key: 0, // optional  floor_level: 0, // optional  side: 'both', // optional  site_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
