---
document_id: "b4ff1b968bef1f752ebfd8c8fefb2a91f69319334f0cc5a5104d9b9192d3bcfa"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material"
title: "build.set_wall_material"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "3e56496908c3efaff7e4037c9c485f6691781e4dec29966b31a37dd174aa5d54"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-wall-material"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change wall material preset. If material_group/material_index are omitted, a random valid preset is chosen. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. color is optional and applied on top.

# Metadata

| FieldValueDisplaySet Wall MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Wall MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmaterial_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| --- |
| material_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| colorstringno—Optional tint color (hex or name)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| sidestringnobothWhich side: front, back, or both (default: both) |

# Usage

```
await inzoi.cli.execute('build.set_wall_material', {  material_group: 0, // optional  material_index: 0, // optional  color: '', // optional  edge_key: '', // optional  floor_level: 0, // optional  side: 'both', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)
