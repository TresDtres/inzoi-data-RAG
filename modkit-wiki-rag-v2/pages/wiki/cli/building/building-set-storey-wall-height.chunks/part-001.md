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
chunk: 1
chunk_count: 3
page_type: "article"
route: "wiki/cli/building/building-set-storey-wall-height"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Changes the WALL HEIGHT OF A WHOLE STOREY, not of one wall. This is the in-game 'wall height' control that switches a building between 3.0 / 3.9 / 4.8 / 5.7m ceilings, and the wall you name is only a HANDLE for picking which building to change. SCOPE - read this before using it: on the ground floor and above, the change covers the entire CONNECTED BUILDING the wall belongs to, from the given floor_level upward; the storeys above are lifted by the same difference so they stay stacked. Below ground it covers the given level down to the lowest existing basement, connected or not. There is no way to change a single wall segment's height. It is one undo step. Pick the handle wall with x/y (site-relative centimetres near it) or with wall_key from build.scan_walls; x/y is preferred because edge keys are int64 values a JSON client can round. target_height is in CENTIMETRES - use one of the in-game presets (285/300/375/390/465/480/555/570, listed in build.get_site_info build_rules.wall_height_presets); other values are accepted but can be vetoed. The change is validated across every floor of the building, so a storey above or below can reject it. Verify the result with build.scan_floors 'heights'. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplaySet Storey Wall HeightCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Storey Wall HeightCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters
