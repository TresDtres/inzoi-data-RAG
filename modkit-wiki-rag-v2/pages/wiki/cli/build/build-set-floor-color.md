---
document_id: "3a8b0b80522d65e510fb2e6a33c5a3936e786765879ba077cb1aae35f0841cf8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color"
title: "build.set_floor_color"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "6bf741373eb98ad7e6f9828eb0969c0ac7595bcc22e4d57fd5deb86de5d215d5"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-floor-color"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change floor (or ceiling) color. Works in both play mode (character must be inside a building) and build mode. Specify floor_level and/or room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling.

# Metadata

| FieldValueDisplaySet Floor ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Floor ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncolorstringyes—Color value: hex (#0000FF) or name (blue)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| --- |
| colorstringyes—Color value: hex (#0000FF) or name (blue)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| targetstringnofloorfloor (default) or ceiling |

# Usage

```
await inzoi.cli.execute('build.set_floor_color', {  color: '',  floor_level: 0, // optional  room_index: 0, // optional  target: 'floor', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
