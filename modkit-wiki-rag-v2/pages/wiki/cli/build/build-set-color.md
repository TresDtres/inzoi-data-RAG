---
document_id: "91bc902a40a37866f38552cb4ef59286cff4e79ca2350e4b23e5277c210721fc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color"
title: "build.set_color"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:48+00:00"
content_sha256: "f7e5880439496c38cd176574e7e93ad9c15abb2c8af57946fda80abc6a6fb3d0"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-color"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change the color of a game object. Supports hex (#FF0000) or named colors (red, blue, green, white, black, yellow, cyan, magenta, orange, pink, brown, gray). If part_index is omitted, applies to all parts.

# Metadata

| FieldValueDisplaySet ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet ColorCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity IDcolorstringyes—Color value: hex (#0000FF) or name (blue)part_indexintno—Part index to apply to (default: all parts) |
| --- |
| entity_identityIdyes—Target game object entity IDcolorstringyes—Color value: hex (#0000FF) or name (blue)part_indexintno—Part index to apply to (default: all parts) |
| colorstringyes—Color value: hex (#0000FF) or name (blue)part_indexintno—Part index to apply to (default: all parts) |
| part_indexintno—Part index to apply to (default: all parts) |

# Usage

```
await inzoi.cli.execute('build.set_color', {  entity_id: 0,  color: '',  part_index: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
