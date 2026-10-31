---
document_id: "1baecf6b76a9277e553de9309f7cea2c75afe57ee59851287b76f27bed8f9802"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-option"
title: "building.set_option"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "b140d3251c01a0431017972031102451e001c60bef2f5de44689ad9c07009afd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-option"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Sets one or more build mode options at once. All parameters are optional; only specified options are changed.

# Metadata

| FieldValueDisplaySet Build OptionsCategory`building`Access`UserCheat`Scope`B1Standalone`Tags—Aliases`SetBuildOption` |
| --- |
| DisplaySet Build OptionsCategory`building`Access`UserCheat`Scope`B1Standalone`Tags—Aliases`SetBuildOption` |
| Category`building`Access`UserCheat`Scope`B1Standalone`Tags—Aliases`SetBuildOption` |
| Access`UserCheat`Scope`B1Standalone`Tags—Aliases`SetBuildOption` |
| Scope`B1Standalone`Tags—Aliases`SetBuildOption` |
| Tags—Aliases`SetBuildOption` |
| Aliases`SetBuildOption` |

# Parameters

| NameTypeRequiredDefaultDescriptionfree_locationboolno—Allow free object placement without snappinggrid_snapboolno—Snap objects to gridobject_snapboolno—Snap objects to other objectsuniform_scalingboolno—Scale all axes uniformlysmart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| --- |
| free_locationboolno—Allow free object placement without snappinggrid_snapboolno—Snap objects to gridobject_snapboolno—Snap objects to other objectsuniform_scalingboolno—Scale all axes uniformlysmart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| grid_snapboolno—Snap objects to gridobject_snapboolno—Snap objects to other objectsuniform_scalingboolno—Scale all axes uniformlysmart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| object_snapboolno—Snap objects to other objectsuniform_scalingboolno—Scale all axes uniformlysmart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| uniform_scalingboolno—Scale all axes uniformlysmart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| smart_guideboolno—Show smart alignment guidesdelete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| delete_modeboolno—Enable delete modecontinuous_placementboolno—Place objects continuously |
| continuous_placementboolno—Place objects continuously |

# Usage

```
await inzoi.cli.execute('building.set_option', {  free_location: false, // optional  grid_snap: false, // optional  object_snap: false, // optional  uniform_scaling: false, // optional  smart_guide: false, // optional  delete_mode: false, // optional  continuous_placement: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsobuilding[building.edit_all_site](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-edit-all-site)[building.get_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-object-transform)[building.get_options](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-get-options)[building.set_object_location](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-location)[building.set_object_rotation](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-rotation)[building.set_object_scale](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-scale)[building.set_object_transform](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-object-transform)[building.show_studio_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-studio-category)[building.show_user_dev_category](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-show-user-dev-category)[building.unlock_site_area](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-unlock-site-area)
