---
document_id: "16adf2ed419110a563d0c33888f43884b14d85244a8d7058ce0a5480276facf5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture"
title: "smartbuild.set_object_texture"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "06f0f26fe0deba16f04e124e30e97b136af5c14a987793558cba5d75d023e98e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-set-object-texture"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Apply a user-provided PNG/JPG image as a game object's material (via inZOI MyTexture). If file_path is given, that file is used; otherwise the Windows clipboard image is tried first (CF_PNG / CF_DIBV5 / CF_DIB), and if none is present a file picker is shown. The image is registered in the user's MyTexture gallery and then applied to the target part(s). A per-part FB1MaterialParams before/after snapshot is pushed onto the Build Undo stack in build mode or the play-mode mini-undo stack in play mode, so Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the previous look. Use build.get_customize_info to see parts.

# Metadata

| FieldValueDisplaySet Object Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Object Texture (Imported Image)Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity IDfile_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.part_indexintno—Target part index (default: all parts) |
| --- |
| entity_identityIdyes—Target game object entity IDfile_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.part_indexintno—Target part index (default: all parts) |
| file_pathstringno—Absolute path to a PNG/JPG file. If omitted, the Windows clipboard image is used when available; otherwise a file dialog is opened.part_indexintno—Target part index (default: all parts) |
| part_indexintno—Target part index (default: all parts) |

# Usage

```
await inzoi.cli.execute('smartbuild.set_object_texture', {  entity_id: 0,  file_path: '', // optional  part_index: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
