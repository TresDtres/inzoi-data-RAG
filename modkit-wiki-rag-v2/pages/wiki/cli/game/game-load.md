---
document_id: "60e0d2a2dba01a95ca282ca0c0cecc8a2900569e72147046b23430888f26bdbf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-load"
title: "game.load"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "b477e04065a725dbfaa294a23536515bab50860706611a9e3a08664b37fc56ee"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-load"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Loads a specific save slot. This is ASYNCHRONOUS and returns as soon as the request is accepted: poll game.get_state until phase == 'in_game'. Callable from the lobby or from inside a running game (the current session is torn down and replaced). When 'file' is omitted it defaults to the folder name, then falls back to the matching entry from the save list (auto saves use a different file name than their folder). Rejected while a level move is already in flight - a second request would be swallowed silently, so poll game.get_state until the first one finishes instead of retrying immediately.

# Metadata

| FieldValueDisplayLoad SaveCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayLoad SaveCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionfolderstringyes—Save folder name from game.list_savesfilestringno—Save file name. Omit to resolve it automatically from the folder. |
| --- |
| folderstringyes—Save folder name from game.list_savesfilestringno—Save file name. Omit to resolve it automatically from the folder. |
| filestringno—Save file name. Omit to resolve it automatically from the folder. |

# Usage

```
await inzoi.cli.execute('game.load', {  folder: '',  file: '', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
