---
document_id: "f8ee246562c57db8e99194263cd79bc822ebc124eeba83ef446dc52b1b600c80"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-pick-surface-at-screen"
title: "smartbuild.pick_surface_at_screen"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:15+00:00"
content_sha256: "5b68c83ae4b7846754c38930cead3dcca042d1dc2d2e6cd9686a3030079cac41"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/smartbuild/smartbuild-pick-surface-at-screen"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Ray-cast from a screen pixel and return what is under it. Drills through trees/foliage/blocking volumes using manual multi-step tracing on Visibility then GameObject channels. Target priority (first match wins): character > game object > wall/floor/ceiling. Used by drag-and-drop and other tools that need a surface or clothed body part under a cursor. Returns JSON with target="character"|"object"|"wall"|"floor"|"ceiling"|"none" and per-target fields: character={entity_id,bone,garment_type}, object={entity_id,part_index}, wall={floor_level,edge_key,side}, floor/ceiling={floor_level,room_index,is_ceil}. garment_type is auto-resolved from the hit bone and the character's equipped outfit (outer-first: hat>scarf, gloves>top, shoes>socks, etc.). On miss, reason is set and debug fields (hit_actor/hit_component/channel/step) are included. If x/y are omitted, the current mouse viewport position is used. Works in both play mode and build mode.

# Metadata

| FieldValueDisplayPick Surface At ScreenCategory`smartbuild`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPick Surface At ScreenCategory`smartbuild`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`smartbuild`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionxfloatno—Screen X pixel (viewport-local). If omitted, the current mouse position is used.yfloatno—Screen Y pixel (viewport-local). If omitted, the current mouse position is used. |
| --- |
| xfloatno—Screen X pixel (viewport-local). If omitted, the current mouse position is used.yfloatno—Screen Y pixel (viewport-local). If omitted, the current mouse position is used. |
| yfloatno—Screen Y pixel (viewport-local). If omitted, the current mouse position is used. |

# Usage

```
await inzoi.cli.execute('smartbuild.pick_surface_at_screen', {  x: 0.0, // optional  y: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsosmartbuild[smartbuild.import_and_place_mesh](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-import-and-place-mesh)[smartbuild.preview_clear](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-clear)[smartbuild.preview_commit](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-commit)[smartbuild.preview_floor](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-floor)[smartbuild.preview_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-object)[smartbuild.preview_room_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-room-walls)[smartbuild.preview_wall](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-preview-wall)[smartbuild.set_floor_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-floor-texture)[smartbuild.set_object_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-object-texture)[smartbuild.set_wall_texture](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-set-wall-texture)[smartbuild.shape](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/smartbuild/smartbuild-shape)
