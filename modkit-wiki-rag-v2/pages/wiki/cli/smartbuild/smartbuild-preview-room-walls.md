---
document_id: "4c6323164f827eab4d0ee1a039cbbd2ffe088766d1a8033e51b97aad9d896965"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls"
title: "smartbuild.preview_room_walls"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "0ccbdad348cc5533b044e8ffd1a3511bf7b1a335c52e53ca2b41b7cc66adb970"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-preview-room-walls"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Temporarily apply an image to ALL interior walls of a room for drag-over preview (Shift modifier). The floor is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change. Supports path_key (reuse an already imported image) or file_path (import first), plus the same pattern_scale/offset args as smartbuild.preview_wall.

# Metadata

| FieldValueDisplayPreview Room Walls Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPreview Room Walls Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfloor_levelintyes—Floor level that owns the target roomroom_indexintyes—Room index on the floor (from smartbuild.pick_surface_at_screen wall hits)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| --- |
| floor_levelintyes—Floor level that owns the target roomroom_indexintyes—Room index on the floor (from smartbuild.pick_surface_at_screen wall hits)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| room_indexintyes—Room index on the floor (from smartbuild.pick_surface_at_screen wall hits)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

# Usage

```
await inzoi.cli.execute('smartbuild.preview_room_walls', {  floor_level: 0,  room_index: 0,  path_key: '', // optional  file_path: '', // optional  pattern_scale: 0.0, // optional  pattern_offset_x: 0.0, // optional  pattern_offset_y: 0.0, // optional  site_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
