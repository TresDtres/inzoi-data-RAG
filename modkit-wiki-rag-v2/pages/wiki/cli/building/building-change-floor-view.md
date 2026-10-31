---
document_id: "715e3a2390badd4fb19977b6f7eb56a77690566e0a868fdc10f50e0761e886bd"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/building/building-change-floor-view"
title: "building.change_floor_view"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:49+00:00"
content_sha256: "2a2689056410f3b3f2eafaf234ef95bc8ae5bd1d60a6e8514527a462c65fefbc"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/building/building-change-floor-view"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- [Build Mode Only] Moves the build mode floor view up or down by 'delta' levels - the CLI equivalent of pressing PgUp/PgDn. Prefer building.set_floor_view when you know which floor you want; this one exists for stepping. Like set_floor_view it is a VIEW state, not an undoable edit, and the result is clamped to the site's existing floor range. Requires phase == 'ready' (see build.get_mode_state).

# Metadata

| FieldValueDisplayChange Floor ViewCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayChange Floor ViewCategory`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`building`Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`ScriptCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptiondeltaintno1How many levels to move: +1 goes one floor up, -1 one floor down |
| --- |
| deltaintno1How many levels to move: +1 goes one floor up, -1 one floor down |

# Usage

```
await inzoi.cli.execute('building.change_floor_view', {  delta: 1, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
