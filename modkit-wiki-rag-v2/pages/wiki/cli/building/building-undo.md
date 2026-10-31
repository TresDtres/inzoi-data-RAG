---
document_id: "0b157e3f0f22ba2ab0f920643b76ca78e19bfda9f1e87212ebd08dc37db0dcb2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-undo"
title: "building.undo"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:51+00:00"
content_sha256: "b6ac5c14a5a3304f446532f93aa9c32960d0a2e801d3118ebd12344dcf64f221"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-undo"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Undoes the most recent build command(s). Note that building.move_object issued for several objects creates one undo step per object, while building.put_in_inventory batches them into a single step. Commands whose scope is B1Multicast (e.g. build.remove_object) are applied asynchronously and may not be in the history yet when this returns - verify with building.get_history before undoing, or you will revert the preceding command instead. The build history is normally discarded when build mode is left, so undo before build.exit_mode. ⚠ THE UNDO STACK IS SHARED WITH THE GAME UI. building.get_history lists only the commands this CLI issued, but undo walks the whole stack, so it will happily revert walls and objects a human just built by hand. Check 'foreign_steps' and 'beyond_cli_session' in the response: anything above 0 means you undid someone else's work. Undo one step at a time when you are not sure, and re-check with build.scan_objects / build.scan_walls.

# Metadata

| FieldValueDisplayBuild UndoCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayBuild UndoCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioncountintno1How many steps to undo (1-64) |
| --- |
| countintno1How many steps to undo (1-64) |

# Usage

```
await inzoi.cli.execute('building.undo', {  count: 1, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
