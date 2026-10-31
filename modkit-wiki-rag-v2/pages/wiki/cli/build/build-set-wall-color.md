---
document_id: "c8a4e8067623d69cc39c84be1064ac1aed911cc973106ec6434a831d1060b1a6"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color"
title: "build.set_wall_color"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "86797b8204859d95b1d16cf1308c535f982f936e8b7eb6001b9c475dbf2d7e14"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-wall-color"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change wall color. Works in both play mode (character must be inside a building) and build mode. Specify edge_key for a single wall (from build.scan_walls), or omit to apply to all walls. Use floor_level to filter. side: front, back, or both (default).

# Metadata

| FieldValueDisplaySet Wall ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Wall ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncolorstringyes—Color value: hex (#0000FF) or name (blue)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| --- |
| colorstringyes—Color value: hex (#0000FF) or name (blue)edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| edge_keystringno—Specific wall edge key (the 'edge_key_str' field of build.scan_walls - send the digits as a STRING, because large int64 keys get mangled when passed as JSON numbers). Omit for all walls.floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| floor_levelintno—Filter by floor level (default: all floors)sidestringnobothWhich side: front, back, or both (default: both) |
| sidestringnobothWhich side: front, back, or both (default: both) |

# Usage

```
await inzoi.cli.execute('build.set_wall_color', {  color: '',  edge_key: '', // optional  floor_level: 0, // optional  side: 'both', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
