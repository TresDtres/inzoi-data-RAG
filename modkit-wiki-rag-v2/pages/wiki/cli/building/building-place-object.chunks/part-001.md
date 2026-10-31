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
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-place-object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Places a NEW object from the Object data table onto the current site, through the build undo/redo stack (revert with building.undo). Call build.get_site_info first and read its 'build_rules' - it states the coordinate space, the rotation space and the wall auto-alignment this command assumes. This is the only way to add furniture to an empty site - building.move_object / copy_object / put_in_inventory all require an existing entity_id. Find valid ids with data.list_rows --alias=Object, and inspect one (display name, category, price, asset) with data.table_get --alias=Object --row=. COORDINATES are in centimetres with the origin (0,0) at the site's MINIMUM CORNER; the usable range is 0..site_size from build.get_site_info 'coord_space'. Do NOT use 'site_half_extent' as the full size. SLOT SNAPPING (snap=true, default): after placing, the object is attached to a free compatible slot of an OVERLAPPING object, using the same engine path as the in-game magnet. This is how a dining chair becomes a table chair - without it the chair is only a standalone seat and 'eat together at the table' interactions never appear. Detection is by COLLISION OVERLAP, not by radius: place the chair so its box actually touches the table, then check 'snapped' in the response. When it snaps, the slot decides the final position and rotation, so 'yaw' is overridden - and so are applied_x/applied_y/applied_z, which report the position REQUESTED of the engine, not where the slot ended up putting the object. Whenever 'snapped' is true, read the real final transform back with build.scan_objects. YAW IS SITE-RELATIVE, like x and y. Sites are rotated against the world (one measured at 174.5 degrees), and everything you can query - walls, rooms, floors - lives in site space, so yaw=0 means 'parallel to the site axes', not 'parallel to the world axes'. The response reports both applied_yaw (site) and applied_world_yaw. Which way the object visually faces also depends on how its mesh is authored - measured on Chair03, yaw=0 seats face -Y (the backrest faces +Y). Prefer snapping over hand-computed yaw for slotted furniture. DOORS AND WINDOWS are aligned for you: give any x/y NEAR the wall and the command snaps the object onto that wall's centre line, turns it to lie ALONG the wall (the only two valid facings differ by 180 degrees, which is what 'flip' picks between), and cuts the opening. This is required, not a convenience - the engine only cuts an opening when the object sits within 0.1cm of the wall centre line, which is at 25*k+12.5cm, so hand-picked round coordinates never work. Use 'flip' to choose which of the two valid facings it takes, and 'max_wall_distance' to widen or tighten the search. If no wall is close enough the call FAILS instead of leaving a door floating in mid-air; pass allow_free_place=true to override that. When you omit 'z', a door is put on the wall bottom and a window at a 90cm sill. Check 'wall_aligned', 'wall_edge_key', 'wall_opening' and 'applied_yaw' in the response. STAIRS AND LADDERS are quantised to 90 degrees, because their floor/ceiling hole is cut on an axis-aligned grid and a diagonal placement would gouge a much larger hole than the object. The value actually used comes back as 'applied_yaw'. Note that this command does NOT reproduce the in-game ghost preview's stair fitting (AB1BuildModeStairs), so the stairs keep their default rise: place them where the upper floor is one storey up. The object's price is charged to the household wallet and refunded by building.undo. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayPlace ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayPlace ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters
