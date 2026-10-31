---
document_id: "137d2fcf1648763e477958309f2f56fc2a8cb9a33cc67c1befc19eafc252a7af"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object"
title: "smartbuild.preview_object"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "fa821525c0e48fc6c26eca486db2368b481ea34ff649add7718d90ae85eb7ff5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-preview-object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Temporarily apply an image to a game object's material for drag-over preview. The object's per-part FB1MaterialParams is snapshotted so smartbuild.preview_clear can restore the original look. Call smartbuild.preview_commit to keep the change or smartbuild.preview_clear to cancel. Supports path_key (reuse an already imported image) or file_path (import first). If part_index is omitted, the image is applied to every part.

# Metadata

| FieldValueDisplayPreview Object Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPreview Object Texture (Drag)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity ID (from smartbuild.pick_surface_at_screen or build.scan_objects)part_indexintno—Target part index (default: apply to every part)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| --- |
| entity_identityIdyes—Target game object entity ID (from smartbuild.pick_surface_at_screen or build.scan_objects)part_indexintno—Target part index (default: apply to every part)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| part_indexintno—Target part index (default: apply to every part)path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| path_keystringno—Existing MyTexture path key to reuse (skip import)file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| file_pathstringno—Image file path. Used when path_key is omitted.pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| pattern_scalefloatno—Optional pattern tiling. 1.0=default, larger value=more repeats (smaller pattern). Used by drag-and-drop pan/scale.pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| pattern_offset_xfloatno—Optional pattern UV offset X. 0=default. Used by drag-and-drop pan.pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |
| pattern_offset_yfloatno—Optional pattern UV offset Y. 0=default. Used by drag-and-drop pan. |

# Usage

```
await inzoi.cli.execute('smartbuild.preview_object', {  entity_id: 0,  part_index: 0, // optional  path_key: '', // optional  file_path: '', // optional  pattern_scale: 0.0, // optional  pattern_offset_x: 0.0, // optional  pattern_offset_y: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
