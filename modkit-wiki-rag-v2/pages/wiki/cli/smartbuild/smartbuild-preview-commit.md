---
document_id: "74cee4b0a9ff2dc5aea9a3c78b359e7bbf570a4d764a35ffd772b6f4d112c4be"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit"
title: "smartbuild.preview_commit"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:16+00:00"
content_sha256: "c693fe06e2534e0704ed0af7b7302b7d13e4ee30c877b4cdc04ac113936e171b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-preview-commit"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Keep the current drag preview as a real change (site is auto-saved). Discards the snapshot. In build mode a before/after snapshot (floor-based for walls/floors, per-part FB1MaterialParams for objects) is pushed onto the Build Undo stack. In play mode the same pair is pushed onto the play-mode mini-undo stack. Ctrl+Z (Ctrl+Y / Ctrl+Shift+Z for redo) restores the original look in both modes as long as keyboard focus is not on a text editor.

# Metadata

| FieldValueDisplayCommit Drag PreviewCategory`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayCommit Drag PreviewCategory`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('smartbuild.preview_commit');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.pick_surface_at_screen](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
