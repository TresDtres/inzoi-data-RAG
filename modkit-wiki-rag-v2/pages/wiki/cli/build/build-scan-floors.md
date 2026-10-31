---
document_id: "472ffc6cb8480e92376f61ccbc431f0abab23a993f5078951dc748f18755d158"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors"
title: "build.scan_floors"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "ef23d67f20907ebd2db121395027a28e16d6274b14996472c85ead71e9e88a79"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-scan-floors"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- List floors and rooms in the current site with room indices, positions and wall-graph heights. Works in both play mode (character must be inside a building) and build mode. Use room_index with build.set_floor_color / build.set_floor_material. 'heights' gives each wall graph's base_height / floor_height / wall_height plus the derived bottom_height (base+floor, the Z the walls stand on) and top_height. That is where you read the elevation to pass as base_height when starting a room on a floor above 0 with building.construct_wall - later segments of the same room inherit it automatically. Room node coordinates are in SITE-RELATIVE CENTIMETRES, the same space as building.place_object. Paging applies to ROOMS, not floors: at most 'limit' rooms (200 by default) are listed across all floors, so compare 'count' against 'total_rooms' to detect truncation. room_index stays stable across pages.

# Metadata

| FieldValueDisplayScan FloorsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayScan FloorsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfloor_levelintno—Filter by floor level (default: all floors)limitintno200Maximum number of rooms to list across all floors. 0 means no limit. 'total_rooms' always reflects the true match count.offsetintno0Skip this many matching rooms before filling the arrays (for paging) |
| --- |
| floor_levelintno—Filter by floor level (default: all floors)limitintno200Maximum number of rooms to list across all floors. 0 means no limit. 'total_rooms' always reflects the true match count.offsetintno0Skip this many matching rooms before filling the arrays (for paging) |
| limitintno200Maximum number of rooms to list across all floors. 0 means no limit. 'total_rooms' always reflects the true match count.offsetintno0Skip this many matching rooms before filling the arrays (for paging) |
| offsetintno0Skip this many matching rooms before filling the arrays (for paging) |

# Usage

```
await inzoi.cli.execute('build.scan_floors', {  floor_level: 0, // optional  limit: 200, // optional  offset: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
