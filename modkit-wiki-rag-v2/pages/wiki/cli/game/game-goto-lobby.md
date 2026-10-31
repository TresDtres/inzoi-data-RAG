---
document_id: "8e61f6b398e5a8d1641c51a56fa3ec74b62af547692900c488d19f2e3ae8bcd8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-goto-lobby"
title: "game.goto_lobby"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "670906fa3f546bb0bb44b240f2d3fc267ae02e8015acc3591664c921f8d78749"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-goto-lobby"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Ends the current game session and returns to the main menu WITHOUT any confirmation popup. With save=true the game is saved first and the transition happens when the save completes; a slot name is generated (UTC YYYYMMDD-HHMMSS) when the session never had one, so the SaveAs modal is not opened. The returned 'slot' is that slot NAME and CANNOT be fed to game.load: game.load takes a save FOLDER, and the folder name is produced by a separate timestamp call inside the save routine, so it can differ by a second. Discover the folder afterwards with game.list_saves (newest entry) instead. This is ASYNCHRONOUS: poll game.get_state until is_lobby == true. Fails when already in the lobby.

# Metadata

| FieldValueDisplayGo To LobbyCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayGo To LobbyCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionsaveboolnofalseSave the current game before leaving. WARNING: the engine's save-complete path for 'go to lobby' sleeps 1 second on the game thread, so expect a ~1s hitch. |
| --- |
| saveboolnofalseSave the current game before leaving. WARNING: the engine's save-complete path for 'go to lobby' sleeps 1 second on the game thread, so expect a ~1s hitch. |

# Usage

```
await inzoi.cli.execute('game.goto_lobby', {  save: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
