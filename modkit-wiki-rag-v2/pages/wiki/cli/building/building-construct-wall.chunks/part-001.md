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
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-construct-wall"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Builds a SINGLE wall segment between two site-relative points on the given floor. To build a whole rectangular room use building.construct_room instead - it is one undo step and it is the ONLY reliable way above floor_level 0, because the engine resets the elevation of a room that is not closed yet and the sides you add later then fail to attach. COORDINATES are in centimetres with the origin (0,0) at the site's MINIMUM CORNER, and the usable range is 0..site_size - call build.get_site_info and read 'coord_space' first. Do NOT use 'site_half_extent' as the full size; it is half, and using it confines the build to one quadrant. Endpoints snap to a 25cm grid. Goes through the build undo/redo stack (revert with building.undo). Wall construction is NOT charged to the household wallet - walls are free by game policy, unlike objects placed with building.place_object. Set is_delete=true to remove the segment instead. HEIGHTS: the storey elevation for floor_level above 0 lives in 'floor_height', NOT 'base_height' - the engine resets base_height to 0 on any room that is not closed yet, so anything you put there is thrown away and the wall lands at ground level. Omit floor_height and it is derived from the top of the floor below. When the new segment touches an existing wall, all three heights are inherited from that wall's graph instead, exactly as the in-game ghost wall does. The values actually used come back as applied_base_height / applied_floor_height / applied_wall_height, and wall_height defaults to 300cm (3.0m). SUCCESS IS VERIFIED against the wall graph after the fact: 'wall_created' and 'segment_wall_count' report whether a wall really exists in the requested span, so a rejected wall fails loudly instead of returning committed=true with nothing built. Requires phase == 'ready' (see build.get_mode_state). Partial failure of nested sub-commands is not detectable; verify the result with build.scan_walls.

# Metadata

| FieldValueDisplayConstruct WallCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayConstruct WallCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters
