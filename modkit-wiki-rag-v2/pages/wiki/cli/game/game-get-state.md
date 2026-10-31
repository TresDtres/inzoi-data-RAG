---
document_id: "bb98bc2781741528b727238347a69a5b018fc5b392d629d61890978833f4bd1e"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-get-state"
title: "game.get_state"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "ef0af3cf191c25c9428efe82c6e54ecd751d887e7ff77141e27de68b0bea31ba"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-get-state"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Master polling command for game-flow automation: reports which stage the client is in (boot / lobby / character_customize / family_edit / city_select / loading / site_select / map_view / in_game), what is blocking the screen, and a one-line 'next_hint' telling you what to do next. Poll this after every asynchronous command (game.new_game, game.load, game.continue, game.move_in) until phase reaches the value you want. The 'flow' object is present only while a game.new_game driver is running.

# Metadata

| FieldValueDisplayGet Game Flow StateCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGet Game Flow StateCategory`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`Public`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

- This command takes no parameters.

# Usage

```
await inzoi.cli.execute('game.get_state');
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
