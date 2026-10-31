---
document_id: "fb27c333691357862184d476d38b2b0c37182198cf548a37ca4a36ce5efa786a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-cancel-flow"
title: "game.cancel_flow"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "bcb52b99605f991c27a575b6e7ef248eb67aa62810f45d00e82bb63483147e4b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-cancel-flow"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cancels the automated new-game flow started by game.new_game. The game is NOT rolled back - it stays wherever the flow stopped, so call game.goto_lobby if you need a clean state (or just call game.new_game force=true, which cancels and returns to the lobby on its own). Safe to call when nothing is running (returns cancelled=false).

# Metadata

| FieldValueDisplayCancel Game FlowCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayCancel Game FlowCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('game.cancel_flow');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
