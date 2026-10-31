---
document_id: "b3745c76f00d6439690d041f427e2e3b1ae08c91202982281587244dd1659888"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material"
title: "build.set_object_material"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "8b2ff5b7c16d254ef76adc984bcc130d6e90dba245dde3412791e60174d2d1de"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-object-material"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Change a game object's material preset (texture set). If material_group/material_index are omitted, a random valid preset is chosen per part. Omit part_index to apply to every part. color is optional and applied on top. Use build.get_customize_info to see available parts.

# Metadata

| FieldValueDisplaySet Object MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet Object MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity IDmaterial_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)part_indexintno—Target part index (default: all parts) |
| --- |
| entity_identityIdyes—Target game object entity IDmaterial_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)part_indexintno—Target part index (default: all parts) |
| material_groupintno—Material group index (default: random)material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)part_indexintno—Target part index (default: all parts) |
| material_indexintno—Material index within group (default: random)colorstringno—Optional tint color (hex or name)part_indexintno—Target part index (default: all parts) |
| colorstringno—Optional tint color (hex or name)part_indexintno—Target part index (default: all parts) |
| part_indexintno—Target part index (default: all parts) |

# Usage

```
await inzoi.cli.execute('build.set_object_material', {  entity_id: 0,  material_group: 0, // optional  material_index: 0, // optional  color: '', // optional  part_index: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
