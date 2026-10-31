---
document_id: "bf9a1c91483dc2c158ad09efb425a217daa2db2f699fcd57a6419272b6861cdc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-storey-wall-height"
title: "building.set_storey_wall_height"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "fcca05441889ecf7e88f89e2d519dbb948fcd2881d89fd733542e49292a457f1"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-set-storey-wall-height"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

row the scope - the whole storey still changes. Leave false unless reproducing a UI interaction.is_rootboolnofalseMarks the room as the root room of its wall graph, again only mirroring the UI selection. Does not narrow the scope. Leave false. |
| is_rootboolnofalseMarks the room as the root room of its wall graph, again only mirroring the UI selection. Does not narrow the scope. Leave false. |

# Usage

```
await inzoi.cli.execute('building.set_storey_wall_height', {  floor_level: 0,  target_height: 0.0,  x: 0.0, // optional  y: 0.0, // optional  wall_key: '', // optional  face_dir_x: 0, // optional  face_dir_y: 0, // optional  face_dir_z: 0, // optional  is_room: false, // optional  is_root: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
