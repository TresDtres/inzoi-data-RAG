---
document_id: "36c63bf0d7286051883e7b92612a8839b52c142269b23bf9ddfdb0c72038fa60"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location"
title: "building.set_object_location"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "acbd76a39b9effdd71bb0a3d24bbeb878dcac32fb6f1707aee21716c14d681f3"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-object-location"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] [Object Selection] Sets the location of selected game object(s) relative to the parent site. Omitted axes keep their current value. Supports multi-selection.

# Metadata

| FieldValueDisplaySet Object LocationCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectLocation` |
| --- |
| DisplaySet Object LocationCategory`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectLocation` |
| Category`building`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectLocation` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetObjectLocation` |
| Scope`B1Multicast`Tags—Aliases`SetObjectLocation` |
| Tags—Aliases`SetObjectLocation` |
| Aliases`SetObjectLocation` |

# Parameters

| NameTypeRequiredDefaultDescriptionxfloatno—X positionyfloatno—Y positionzfloatno—Z positionentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| --- |
| xfloatno—X positionyfloatno—Y positionzfloatno—Z positionentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| yfloatno—Y positionzfloatno—Z positionentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| zfloatno—Z positionentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

# Usage

```
await inzoi.cli.execute('building.set_object_location', {  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_rotation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation)[building.set_object_scale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale)[building.set_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform)[building.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
