---
document_id: "7bc3ab2be99fabeffb583f99438b7fe1d2a646381edb0f312ae3809123ff7bcd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-construct-wall"
title: "building.construct_wall"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "f42eed76f9c9215afe56230e74a6100a179571d3671c0912de82957fb6f1b8e7"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-construct-wall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

oneWall decoration row id |
| base_heightfloatno—Ground-floor FOUNDATION height in cm (default 0). Do NOT use this for a storey elevation: the engine resets base_height to 0 on any room that is not closed yet, so an upper floor set this way ends up at ground level. Use floor_height.floor_heightfloatno—STOREY ELEVATION in cm - the Z the walls stand on, and the field that actually carries height for floor_level above 0. Omit it and it is taken from the top of the floor below ('top_height' in build.scan_floors), or inherited from a wall this segment joins.is_halfboolnofalseBuild a half-height wallis_railingboolnofalseBuild a railing instead of a wallis_deleteboolnofalseDelete the wall segment instead of building itwall_deconamenoNoneWall decoration row id |
| floor_heightfloatno—STOREY ELEVATION in cm - the Z the walls stand on, and the field that actually carries height for floor_level above 0. Omit it and it is taken from the top of the floor below ('top_height' in build.scan_floors), or inherited from a wall this segment joins.is_halfboolnofalseBuild a half-height wallis_railingboolnofalseBuild a railing instead of a wallis_deleteboolnofalseDelete the wall segment instead of building itwall_deconamenoNoneWall decoration row id |
| is_halfboolnofalseBuild a half-height wallis_railingboolnofalseBuild a railing instead of a wallis_deleteboolnofalseDelete the wall segment instead of building itwall_deconamenoNoneWall decoration row id |
| is_railingboolnofalseBuild a railing instead of a wallis_deleteboolnofalseDelete the wall segment instead of building itwall_deconamenoNoneWall decoration row id |
| is_deleteboolnofalseDelete the wall segment instead of building itwall_deconamenoNoneWall decoration row id |
| wall_deconamenoNoneWall decoration row id |

# Usage

```
await inzoi.cli.execute('building.construct_wall', {  start_x: 0.0,  start_y: 0.0,  end_x: 0.0,  end_y: 0.0,  floor_level: 0, // optional  wall_height: 0.0, // optional  base_height: 0.0, // optional  floor_height: 0.0, // optional  is_half: false, // optional  is_railing: false, // optional  is_delete: false, // optional  wall_deco: 'None', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
