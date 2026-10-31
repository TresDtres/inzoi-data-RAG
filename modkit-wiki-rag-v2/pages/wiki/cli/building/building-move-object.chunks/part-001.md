---
document_id: "ff651969aefaf2b032ffe45a8b4dac643d2516b2792536b690f26afe795aa009"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-move-object"
title: "building.move_object"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "a047e9daf71087f95e77d2244fcd1906e6cdc956f53d1b79ac2aa182d7697003"
chunk: 1
chunk_count: 2
page_type: "article"
route: "wiki/cli/building/building-move-object"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Moves, rotates, rescales and/or re-floors a single placed object through the build undo/redo stack (revert with building.undo). loc_x/y/z AND pitch/yaw/roll are all SITE-RELATIVE - the same space as build.scan_walls, build.scan_floors and building.place_object - because the site itself is rotated against the world axes. Scale is uniform world scale. Any omitted component keeps the object's current value. This handles ONE object per call - moving N objects needs N calls and N undo steps (unlike building.put_in_inventory, which batches into a single step). Unlike building.set_object_transform, this goes through the command stack and IS undoable. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayMove ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayMove ObjectCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target game object entity ID (from build.scan_objects)loc_xfloatno—Target X in cm from the site min corner, same space as build.scan_objects (default: current)loc_yfloatno—Target Y in cm from the site min corner, same space as build.scan_objects (default: current)loc_zfloatno—Target Z in cm above the site origin plane (default: current)pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor) clean_floor bool no true Clean up the floor slab the object leaves behind |
| --- |
| entity_identityIdyes—Target game object entity ID (from build.scan_objects)loc_xfloatno—Target X in cm from the site min corner, same space as build.scan_objects (default: current)loc_yfloatno—Target Y in cm from the site min corner, same space as build.scan_objects (default: current)loc_zfloatno—Target Z in cm above the site origin plane (default: current)pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| loc_xfloatno—Target X in cm from the site min corner, same space as build.scan_objects (default: current)loc_yfloatno—Target Y in cm from the site min corner, same space as build.scan_objects (default: current)loc_zfloatno—Target Z in cm above the site origin plane (default: current)pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| loc_yfloatno—Target Y in cm from the site min corner, same space as build.scan_objects (default: current)loc_zfloatno—Target Z in cm above the site origin plane (default: current)pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| loc_zfloatno—Target Z in cm above the site origin plane (default: current)pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| pitchfloatno—Target SITE-RELATIVE pitch in degrees (default: current)yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| yawfloatno—Target SITE-RELATIVE yaw in degrees; 0 is parallel to the site axes, which is what lines up with axis-aligned walls (default: current)rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| rollfloatno—Target SITE-RELATIVE roll in degrees (default: current)scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| scalefloatno—Uniform scale applied to all axes (default: current)scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| scale_xfloatno—Per-axis X scale; overrides 'scale'scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| scale_yfloatno—Per-axis Y scale; overrides 'scale'scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| scale_zfloatno—Per-axis Z scale; overrides 'scale'floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| floor_levelintno—Absolute target floor level (default: current floor)clean_floorboolnotrueClean up the floor slab the object leaves behind |
| clean_floorboolnotrueClean up the floor slab the object leaves behind |

# Usage
