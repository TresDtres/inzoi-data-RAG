---
document_id: "547200a9b440a1c354ee454d56f9d77b2372ad935fa557f140abe221c18d8820"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform"
title: "building.get_object_transform"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "86bf6f9521d7663717976158a0b7e4287bf564b96d1ea3356530706d80a7bd3c"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-get-object-transform"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] [Object Selection] Returns the current location, rotation, and scale of selected game object(s). Supports multi-selection.

# Metadata

| FieldValueDisplayGet Object TransformCategory`building`Access`Public`Scope`B1Standalone`Tags—Aliases`GetObjectTransform` |
| --- |
| DisplayGet Object TransformCategory`building`Access`Public`Scope`B1Standalone`Tags—Aliases`GetObjectTransform` |
| Category`building`Access`Public`Scope`B1Standalone`Tags—Aliases`GetObjectTransform` |
| Access`Public`Scope`B1Standalone`Tags—Aliases`GetObjectTransform` |
| Scope`B1Standalone`Tags—Aliases`GetObjectTransform` |
| Tags—Aliases`GetObjectTransform` |
| Aliases`GetObjectTransform` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| --- |
| entity_identityIdno—Target entity ID (optional, defaults to selected object)entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |
| entity_idsstringno—Comma-separated entity IDs for batch operation (e.g. 123,456,789) |

# Usage

```
await inzoi.cli.execute('building.get_object_transform', {  entity_id: 0, // optional  entity_ids: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_location](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location)[building.set_object_rotation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation)[building.set_object_scale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale)[building.set_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform)[building.set_option](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
