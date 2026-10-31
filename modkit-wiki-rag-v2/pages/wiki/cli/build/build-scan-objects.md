---
document_id: "977c8b9a2933ca6f6a54659f3d15828833978bdb0b9d16037492cca37205ddb9"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects"
title: "build.scan_objects"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "6fb4f631506e96490295fa18b3ec94354989ed819aa60a58cb688672faa506be"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-scan-objects"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- List game objects placed in the current site with their entity IDs, table IDs, floor levels, and transforms. Works in both play mode (character must be inside a building) and build mode. Use the entity_id with build.remove_object or any build.* customization command. 'location' and 'yaw' are SITE-RELATIVE, the same space building.place_object and building.move_object take and build.scan_walls / build.scan_floors return, so you can feed them straight back in. 'world_location' and 'world_yaw' are the raw engine values; they differ because sites are rotated against the world axes (one measured at 174.5 degrees). Do not mix the two. Returns at most 'limit' objects (200 by default) - page through large sites with 'offset', and compare 'count' against 'total' to detect truncation.

# Metadata

| FieldValueDisplayScan Placed ObjectsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayScan Placed ObjectsCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfloor_levelintno—Filter by floor level (default: all floors)deletable_onlyboolno—Only include objects that can be removed (excludes dev-locked and non-deletable). Default: falsetable_id_prefixstringno—Only include objects whose table id starts with this prefix, e.g. Object_Furniture (case-insensitive)limitintno200Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count.offsetintno0Skip this many matching objects before filling the array (for paging) |
| --- |
| floor_levelintno—Filter by floor level (default: all floors)deletable_onlyboolno—Only include objects that can be removed (excludes dev-locked and non-deletable). Default: falsetable_id_prefixstringno—Only include objects whose table id starts with this prefix, e.g. Object_Furniture (case-insensitive)limitintno200Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count.offsetintno0Skip this many matching objects before filling the array (for paging) |
| deletable_onlyboolno—Only include objects that can be removed (excludes dev-locked and non-deletable). Default: falsetable_id_prefixstringno—Only include objects whose table id starts with this prefix, e.g. Object_Furniture (case-insensitive)limitintno200Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count.offsetintno0Skip this many matching objects before filling the array (for paging) |
| table_id_prefixstringno—Only include objects whose table id starts with this prefix, e.g. Object_Furniture (case-insensitive)limitintno200Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count.offsetintno0Skip this many matching objects before filling the array (for paging) |
| limitintno200Maximum number of objects to return in the JSON array. 0 means no limit. 'total' in the response always reflects the true match count.offsetintno0Skip this many matching objects before filling the array (for paging) |
| offsetintno0Skip this many matching objects before filling the array (for paging) |

# Usage

```
await inzoi.cli.execute('build.scan_objects', {  floor_level: 0, // optional  deletable_only: false, // optional  table_id_prefix: '', // optional  limit: 200, // optional  offset: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
