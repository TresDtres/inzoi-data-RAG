---
document_id: "04a3e7eda50a5bf40679fe66855f16ed52e11173621c6daf9814def01a5b0fb8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-material"
title: "build.set_material"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "76e157fc672a7e55596100cafca0e396bd8499675f1345ec21d5dee9bf84a466"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/build/build-set-material"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Set individual material parameters on a game object part. Specify only the parameters you want to change. Use build.get_customize_info to see available parts.

# Metadata

| FieldValueDisplaySet MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| --- |
| DisplaySet MaterialCategory`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Category`build`Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Multicast`TagsExperimentalAliases— |
| Scope`B1Multicast`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity IDpart_indexintno0Part index (default: 0)colorstringno—Base color (hex or name)roughnessfloatno—Roughness (0~1)metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset index material_index int no — Material index within group |
| --- |
| entity_identityIdyes—Target game object entity IDpart_indexintno0Part index (default: 0)colorstringno—Base color (hex or name)roughnessfloatno—Roughness (0~1)metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| part_indexintno0Part index (default: 0)colorstringno—Base color (hex or name)roughnessfloatno—Roughness (0~1)metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| colorstringno—Base color (hex or name)roughnessfloatno—Roughness (0~1)metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| roughnessfloatno—Roughness (0~1)metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| metallicfloatno—Metallic (0~1)specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| specularfloatno—Specular (0~1)opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| opacityfloatno—Opacity (0~1)pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| pattern_colorstringno—Pattern color (hex or name)pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| pattern_scalefloatno—Pattern scaleemissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| emissive_colorstringno—Emissive color (hex or name)emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| emissive_multifloatno—Emissive multipliermaterial_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| material_groupintno—Material group preset indexmaterial_indexintno—Material index within group |
| material_indexintno—Material index within group |

# Usage

```
await inzoi.cli.execute('build.set_material', {  entity_id: 0,  part_index: 0, // optional  color: '', // optional  roughness: 0.0, // optional  metallic: 0.0, // optional  specular: 0.0, // optional  opacity: 0.0, // optional  pattern_color: '', // optional  pattern_scale: 0.0, // optional  emissive_color: '', // optional  emissive_multi: 0.0, // optional  material_group: 0, // optional  material_index: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuild[build.get_customize_info](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-get-customize-info)[build.remove_object](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-remove-object)[build.reset_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-reset-material)[build.scan_floors](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-floors)[build.scan_objects](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-objects)[build.scan_walls](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-scan-walls)[build.set_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-color)[build.set_floor_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-color)[build.set_floor_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-floor-material)[build.set_object_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-object-material)[build.set_wall_color](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-color)[build.set_wall_material](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/build/build-set-wall-material)
