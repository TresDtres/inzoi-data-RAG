---
document_id: "088327c1eb69f84ba64cf89549d35b9943dce1560d98c987ab7ce9cbc24257b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-site-info"
title: "build.get_site_info"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "ce9b94352fb31bba812c02f9da71535e7385cd07f520cc9adcd27df731327ad3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-get-site-info"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- CALL THIS FIRST when you are about to build anything. It returns an aggregate summary of the current site - type, size, floor range, counts - plus a 'build_rules' block that states the conventions the rest of the build CLI assumes: which coordinate space x/y/z and yaw use, how doors and windows auto-align to walls, which field carries a storey's elevation (floor_height, not base_height), the default and preset wall heights, and the floor_height to use for the next floor up. Reading it once saves you from the mistakes those rules describe. Read 'coord_space' before placing anything: site coordinates are in CENTIMETRES, the origin (0,0) is the site's MINIMUM CORNER (not the centre), and the usable range is coord_space.min..coord_space.max, which equals 0..site_size. Note that 'site_half_extent' is the distance from the origin to the site centre, so it is HALF of site_size - using it as the full size confines everything to one quadrant. The wall grid snaps to 25cm. Works in both play mode (character must be inside a building) and build mode. This command AGGREGATES only. For per-object / per-wall / per-room enumeration use build.scan_objects, build.scan_walls and build.scan_floors with limit/offset. detail=floors adds a per-floor breakdown with up to 32 rooms per floor. NOTE: counts.floors is the number of allocated floor structures, which the engine grows on demand and never releases - it does not go back down after building.undo. Use floor_min/floor_max for the range of floors that actually contain something.

# Metadata

| FieldValueDisplayGet Site InfoCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Site InfoCategory`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`build`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiondetailstringnosummarysummary (default) or floorsfloor_levelintno—Restrict every count and the floors breakdown to a single floor level |
| --- |
| detailstringnosummarysummary (default) or floorsfloor_levelintno—Restrict every count and the floors breakdown to a single floor level |
| floor_levelintno—Restrict every count and the floors breakdown to a single floor level |

# Usage

```
await inzoi.cli.execute('build.get_site_info', {  detail: 'summary', // optional  floor_level: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
