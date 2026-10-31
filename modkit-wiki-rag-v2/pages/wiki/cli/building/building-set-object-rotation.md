---
document_id: "03e60d307207fbcc6d46990dd3a1be4808524837755cb37f251e9a5d3d27330f"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation"
title: "building.set_object_rotation"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "bf86c8f1dec04971e7636cef8c3a985af59c6262692830c4c9a079d402ddb83c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-object-rotation"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] [Object Selection] Sets the rotation of selected game object(s). Omitted axes keep their current value. Supports multi-selection.

# Metadata

| FieldValueDisplaySet Object RotationCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectRotation` |
| --- |
| DisplaySet Object RotationCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectRotation` |
| Category`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectRotation` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectRotation` |
| Scope`B1Multicast`Tags—Aliases`SetObjectRotation` |
| Tags—Aliases`SetObjectRotation` |
| Aliases`SetObjectRotation` |

# Parameters

| NameTypeRequiredDefaultDescriptionpitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| --- |
| pitchfloatno—Pitch (degrees)yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| yawfloatno—Yaw (degrees)rollfloatno—Roll (degrees)entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| rollfloatno—Roll (degrees)entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

# Usage

```
await inzoi.cli.execute('building.set_object_rotation', {  pitch: 0.0, // optional  yaw: 0.0, // optional  roll: 0.0, // optional  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_location](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location)[building.set_object_scale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale)[building.set_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform)[building.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
