---
document_id: "0010bc35b6d08b97a4f20cc329541bb95e1c4dc32d2cc01f09c496b8e0eed905"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material"
title: "build.set_floor_material"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "40e9f98b6caf66afc789c84075bb68940669a5a5f65705894dcdd715616d574f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-floor-material"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change floor (or ceiling) material preset. If material_group/material_index are omitted, a random valid preset is chosen. Specify floor_level/room_index to narrow the target; omit both to apply to every room. target: floor (default) or ceiling.

# Metadata

| FieldValueDisplaySet Floor MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Floor MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmaterial_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| --- |
| material_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| colorstringno—Optional tint color (hex or name)floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| floor_levelintno—Filter by floor level (default: all floors)room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| room_indexintno—Room index within floor (from build.scan_floors). Omit for all rooms.targetstringnofloorfloor (default) or ceiling |
| targetstringnofloorfloor (default) or ceiling |

# Usage

```
await inzoi.cli.execute('build.set_floor_material', {  material_group: 0, // optional  material_index: 0, // optional  color: '', // optional  floor_level: 0, // optional  room_index: 0, // optional  target: 'floor', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
