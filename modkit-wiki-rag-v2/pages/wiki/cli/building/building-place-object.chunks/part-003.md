---
document_id: "b4cc9669a4907c72f94fdabb3761fbf052207f16b419f1893532051e809555d4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-place-object"
title: "building.place_object"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "d6c031edcc017510e3af0983fd523e4f73571153e37ad225c1f73a83524abfc4"
chunk: 3
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-place-object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

(+yaw turns site +X toward site +Y), the same space as x/y. yaw=0 is parallel to the site's own axes, so it lines up with axis-aligned walls even though the site itself is rotated in the world. Ignored when the object snaps into a slot or is aligned to a wall; quantised to 90 degrees for stairs and ladders.scalefloatno1Uniform scale (must be positive)snapboolnotrueAttach to a free compatible slot of an overlapping object (in-game magnet behaviour). Set false to force a standalone free placement.flipboolnofalseFor doors/windows: take the opposite of the two valid facings (adds 180 degrees to the wall normal).max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| yawfloatno0SITE-RELATIVE Z rotation in degrees (+yaw turns site +X toward site +Y), the same space as x/y. yaw=0 is parallel to the site's own axes, so it lines up with axis-aligned walls even though the site itself is rotated in the world. Ignored when the object snaps into a slot or is aligned to a wall; quantised to 90 degrees for stairs and ladders.scalefloatno1Uniform scale (must be positive)snapboolnotrueAttach to a free compatible slot of an overlapping object (in-game magnet behaviour). Set false to force a standalone free placement.flipboolnofalseFor doors/windows: take the opposite of the two valid facings (adds 180 degrees to the wall normal).max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| scalefloatno1Uniform scale (must be positive)snapboolnotrueAttach to a free compatible slot of an overlapping object (in-game magnet behaviour). Set false to force a standalone free placement.flipboolnofalseFor doors/windows: take the opposite of the two valid facings (adds 180 degrees to the wall normal).max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| snapboolnotrueAttach to a free compatible slot of an overlapping object (in-game magnet behaviour). Set false to force a standalone free placement.flipboolnofalseFor doors/windows: take the opposite of the two valid facings (adds 180 degrees to the wall normal).max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| flipboolnofalseFor doors/windows: take the opposite of the two valid facings (adds 180 degrees to the wall normal).max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| max_wall_distancefloatno200For doors/windows: how far (cm) x/y may be from a wall centre line and still snap onto it. 0 disables the distance limit.allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| allow_free_placeboolnofalseFor doors/windows: place at the raw x/y even when no wall is found, accepting that no opening is cut. Off by default because the result is always visually broken.assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| assembled_parts_00intno0Assembled part variant index 0 (for modular objects)assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| assembled_parts_01intno0Assembled part variant index 1assembled_parts_02intno0Assembled part variant index 2 |
| assembled_parts_02intno0Assembled part variant index 2 |

# Usage

```
await inzoi.cli.execute('building.place_object', {  object_table_id: '',  x: 0.0,  y: 0.0,  z: 0.0, // optional  floor_level: 0, // optional  yaw: 0, // optional  scale: 1, // optional  snap: true, // optional  flip: false, // optional  max_wall_distance: 200, // optional  allow_free_place: false, // optional  assembled_parts_00: 0, // optional  assembled_parts_01: 0, // optional  assembled_parts_02: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
