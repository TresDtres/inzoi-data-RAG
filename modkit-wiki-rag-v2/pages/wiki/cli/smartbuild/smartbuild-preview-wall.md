---
document_id: "d613b0761a69685df95d4b94a3ac1cf6d5fb341a9a37c357b2ed016c0ec7123e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall"
title: "smartbuild.preview_wall"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "07e903b2d44b967c3ce795cdc924c0856345d73beed628f78966a5926138210a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-preview-wall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Temporarily apply an image to a wall for drag-over preview. The floor is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change or smartbuild.preview_clear to cancel. Supports path_key (reuse an already imported image) or file_path (import first).

# Metadata

| FieldValueDisplayPreview Wall Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPreview Wall Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionedge_keyintyes—Target wall edge key (from build.scan_walls or smartbuild.pick_surface_at_screen)floor_levelintyes—Floor level of the target wallsidestringnobothWhich side: front, back, or both (default)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| --- |
| edge_keyintyes—Target wall edge key (from build.scan_walls or smartbuild.pick_surface_at_screen)floor_levelintyes—Floor level of the target wallsidestringnobothWhich side: front, back, or both (default)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| floor_levelintyes—Floor level of the target wallsidestringnobothWhich side: front, back, or both (default)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| sidestringnobothWhich side: front, back, or both (default)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan.site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |
| site_idstringno—Optional. Target site (from smartbuild.pick_surface_at_screen). Default: current site. |

# Usage

```
await inzoi.cli.execute('smartbuild.preview_wall', {  edge_key: 0,  floor_level: 0,  side: 'both', // optional  path_key: '', // optional  file_path: '', // optional  pattern_scale: 0.0, // optional  pattern_offset_x: 0.0, // optional  pattern_offset_y: 0.0, // optional  site_id: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
