---
document_id: "ab202fe36c2ec8bb4cd9348e12db54794d7aec483477edb16fcb1f7f825199f7"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale"
title: "building.set_object_scale"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "5035836e4d011b86433fffb013de99bd19f73c1b3d3e48865e52d5426b45a797"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-object-scale"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] [Object Selection] Sets the scale of selected game object(s). Use 'scale' for uniform scaling, or 'x','y','z' for per-axis. Supports multi-selection.

# Metadata

| FieldValueDisplaySet Object ScaleCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectScale` |
| --- |
| DisplaySet Object ScaleCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectScale` |
| Category`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectScale` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectScale` |
| Scope`B1Multicast`Tags—Aliases`SetObjectScale` |
| Tags—Aliases`SetObjectScale` |
| Aliases`SetObjectScale` |

# Parameters

| NameTypeRequiredDefaultDescriptionscalefloatno—Uniform scale (used for all axes unless x/y/z specified)xfloatno—X-axis scaleyfloatno—Y-axis scalezfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| --- |
| scalefloatno—Uniform scale (used for all axes unless x/y/z specified)xfloatno—X-axis scaleyfloatno—Y-axis scalezfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| xfloatno—X-axis scaleyfloatno—Y-axis scalezfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| yfloatno—Y-axis scalezfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

# Usage

```
await inzoi.cli.execute('building.set_object_scale', {  scale: 0.0, // optional  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_location](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location)[building.set_object_rotation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation)[building.set_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform)[building.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
