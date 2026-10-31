---
document_id: "d612445c1ccac2bc147304e3ed38fba14b49f20c76a9967874d8b7b7542f2c0c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-copy-object"
title: "building.copy_object"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "56cc33a87be66a922d71e3ef6a60bc6b8282d86accd7d813361fedbcbbdf7274"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-copy-object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Duplicates a placed object at an offset, through the build undo/redo stack (revert with building.undo). The copy's price is charged to the household wallet. offset_x/y/z are a SITE-RELATIVE displacement, yaw is an extra rotation, and floor_delta is a RELATIVE floor change (not an absolute floor level). grid_dx/grid_dy shift the wall grid cell the object is attached to; leaving them at 0 is only safe for free-standing objects - stairs, ladders and wall-mounted objects will end up detached from their wall if the grid offset does not match the world offset. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayCopy ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayCopy ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Source game object entity ID (from build.scan_objects)offset_xfloatno0Site-relative X displacement of the copyoffset_yfloatno0Site-relative Y displacement of the copyoffset_zfloatno0Site-relative Z displacement of the copygrid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| --- |
| entity_identityIdyes—Source game object entity ID (from build.scan_objects)offset_xfloatno0Site-relative X displacement of the copyoffset_yfloatno0Site-relative Y displacement of the copyoffset_zfloatno0Site-relative Z displacement of the copygrid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| offset_xfloatno0Site-relative X displacement of the copyoffset_yfloatno0Site-relative Y displacement of the copyoffset_zfloatno0Site-relative Z displacement of the copygrid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| offset_yfloatno0Site-relative Y displacement of the copyoffset_zfloatno0Site-relative Z displacement of the copygrid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| offset_zfloatno0Site-relative Z displacement of the copygrid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| grid_dxintno0Wall grid cell offset in X (must match offset_x for wall-attached objects)grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| grid_dyintno0Wall grid cell offset in Y (must match offset_y for wall-attached objects)yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| yawfloatno0Additional yaw rotation in degrees applied to the copyfloor_deltaintno0Floor level DELTA relative to the source object's floor |
| floor_deltaintno0Floor level DELTA relative to the source object's floor |

# Usage

```
await inzoi.cli.execute('building.copy_object', {  entity_id: 0,  offset_x: 0, // optional  offset_y: 0, // optional  offset_z: 0, // optional  grid_dx: 0, // optional  grid_dy: 0, // optional  yaw: 0, // optional  floor_delta: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
