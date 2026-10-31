---
document_id: "a5ffc1e26abec80f50e8116d7e41cdad41fdd4497c580a2786f52886be1180ee"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls"
title: "build.scan_walls"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "390848d1f72b3d2c11c7a43687024be6dc4a851cdbbb76552d56b55083ee27a5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-scan-walls"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- List walls in the current site with edge keys and positions. Works in both play mode (character must be inside a building) and build mode. Use the edge_key with build.set_wall_color, build.set_wall_material or building.set_storey_wall_height. When you send it back, use 'edge_key_str' (the same value as a string): edge keys are int64 and large integers get mangled when passed as JSON numbers. building.set_storey_wall_height also accepts x/y, which is simpler still. left/right are the wall segment's endpoints in SITE-RELATIVE CENTIMETRES - the same coordinate space as building.place_object and building.construct_wall - so a point on the segment between them is exactly on the wall centre line. Those centre lines always land on 25*k+12.5cm, which is why hand-picked round coordinates never sit on a wall; building.place_object snaps doors and windows onto them for you. Returns at most 'limit' walls (200 by default) - page with 'offset', and compare 'count' against 'total' to detect truncation.

# Metadata

| FieldValueDisplayScan WallsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayScan WallsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfloor_levelintno—Filter by floor level (default: all floors)limitintno200Maximum number of walls to return in the JSON array. 0 means no limit. 'total' always reflects the true match count.offsetintno0Skip this many matching walls before filling the array (for paging) |
| --- |
| floor_levelintno—Filter by floor level (default: all floors)limitintno200Maximum number of walls to return in the JSON array. 0 means no limit. 'total' always reflects the true match count.offsetintno0Skip this many matching walls before filling the array (for paging) |
| limitintno200Maximum number of walls to return in the JSON array. 0 means no limit. 'total' always reflects the true match count.offsetintno0Skip this many matching walls before filling the array (for paging) |
| offsetintno0Skip this many matching walls before filling the array (for paging) |

# Usage

```
await inzoi.cli.execute('build.scan_walls', {  floor_level: 0, // optional  limit: 200, // optional  offset: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
