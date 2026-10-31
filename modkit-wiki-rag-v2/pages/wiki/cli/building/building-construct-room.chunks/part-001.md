---
document_id: "7c67efc255cf310feb03fb485927808d2b3a461e0b63b7531ed1f4150eb0bde8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-construct-room"
title: "building.construct_room"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "c24a321b70d7acf98dea24c877bdaf4a6b63cacb5986328459f39676d1c04456"
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-construct-room"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Builds all four walls of an axis-aligned rectangular room in ONE command and ONE undo step. PREFER THIS over four building.construct_wall calls, especially above floor_level 0. Building a room side by side does not work on upper floors: the engine resets the elevation of any room that is not closed yet, so the 2nd and 4th side silently fail to attach and you end up with 2 of 4 walls. This command runs all four sides inside one root command, so the room is already closed when that check runs. x0/y0 and x1/y1 are OPPOSITE CORNERS in centimetres, site-relative with the origin at the site's MINIMUM CORNER - the same space as build.scan_walls and building.place_object. Order does not matter; each side must be at least 50cm. Endpoints snap to the 25cm grid, so the resulting wall centre lines land on 25*k+12.5. HEIGHTS: for floor_level above 0 the storey elevation goes into 'floor_height', NOT 'base_height' - the engine resets base_height to 0, so a room built that way silently lands at ground level. Just omit floor_height and it is derived from the top of the floor below. Heights are also inherited from a wall graph the rectangle touches. wall_height defaults to 300cm (3.0m). SUCCESS IS VERIFIED: 'sides_created' and 'sides' are read back from the wall graph afterwards, and 'result_*_height' reports what the graph actually kept. Anything less than 4 sides fails loudly. Walls are free - nothing is charged. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayConstruct RoomCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayConstruct RoomCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters
