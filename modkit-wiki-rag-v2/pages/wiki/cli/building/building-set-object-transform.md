---
document_id: "e47a35223162117d980186d1509ffb9acf17f19ec1fe7ff152c208bf678fa891"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform"
title: "building.set_object_transform"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "7979c2c3afe9e9419134e143fa8d500a496f76644b6001192317c79afed9c90e"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-object-transform"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] [Object Selection] Sets location, rotation, and/or scale of selected game object(s) relative to the parent site in one call. All parameters are optional; omitted values keep their current state. Supports multi-selection.

# Metadata

| FieldValueDisplaySet Object TransformCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectTransform` |
| --- |
| DisplaySet Object TransformCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectTransform` |
| Category`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectTransform` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectTransform` |
| Scope`B1Multicast`Tags—Aliases`SetObjectTransform` |
| Tags—Aliases`SetObjectTransform` |
| Aliases`SetObjectTransform` |

# Parameters

| NameTypeRequiredDefaultDescriptionloc_xfloatno—X positionloc_yfloatno—Y positionloc_zfloatno—Z positionpitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| --- |
| loc_xfloatno—X positionloc_yfloatno—Y positionloc_zfloatno—Z positionpitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| loc_yfloatno—Y positionloc_zfloatno—Z positionpitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| loc_zfloatno—Z positionpitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| pitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| rollfloatno—Roll (degrees)scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| scalefloatno—Uniform scalescale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| scale_xfloatno—X-axis scalescale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| scale_yfloatno—Y-axis scalescale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| scale_zfloatno—Z-axis scaleentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

# Usage

```
await inzoi.cli.execute('building.set_object_transform', {  loc_x: 0.0, // optional  loc_y: 0.0, // optional  loc_z: 0.0, // optional  pitch: 0.0, // optional  yaw: 0.0, // optional  roll: 0.0, // optional  scale: 0.0, // optional  scale_x: 0.0, // optional  scale_y: 0.0, // optional  scale_z: 0.0, // optional  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_location](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location)[building.set_object_rotation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation)[building.set_object_scale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale)[building.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
