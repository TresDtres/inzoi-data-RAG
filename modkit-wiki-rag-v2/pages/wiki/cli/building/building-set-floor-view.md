---
document_id: "686c8e34b0b4005490bb9e571f18eedd6d71a7288f289366300700fa86e0095b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-set-floor-view"
title: "building.set_floor_view"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:50+00:00"
content_sha256: "0d7e288c9839ecb3cbcfba0fd64e556f6399e76ccbdb1bae69280c4c934d3bad"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-set-floor-view"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Switches which floor the build mode is showing and editing, the same state the PgUp/PgDn keys and the up/down floor buttons on the build toolbar change. This is the value build.get_mode_state reports as 'customizing_floor', and it decides which floor's walls and objects are visible and clickable. Note that it is a VIEW state, not an edit: it is not undoable and building.undo will not move it. It does NOT change where building.place_object or building.construct_wall build - those take their own floor_level - but you normally want the two to agree before taking a screenshot. Levels outside the site's existing floor range are clamped; check 'clamped' and 'customizing_floor' in the response. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplaySet Floor ViewCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplaySet Floor ViewCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfloor_levelintyes—Absolute floor level to view (0 is the ground floor; negatives are basements) |
| --- |
| floor_levelintyes—Absolute floor level to view (0 is the ground floor; negatives are basements) |

# Usage

```
await inzoi.cli.execute('building.set_floor_view', {  floor_level: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
