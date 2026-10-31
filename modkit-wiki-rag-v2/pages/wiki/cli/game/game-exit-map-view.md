---
document_id: "c08b256aa70a6989e257d30a010df67ab15c498992734eede575efcc82fe6e5b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-exit-map-view"
title: "game.exit_map_view"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "36b907fcdf98d7934b5d1560fef4abb1bd8ea4b00f6f744fdd1ebafa215b1dc4"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-exit-map-view"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Closes the world map overview and descends the camera into the current site, which is what actually opens the HUD and starts play. This is the manual equivalent of the game.new_game driver's 'exit_map_view' step, and of pressing the map toggle key in the client. It is needed because the move-in path (UB1MapUIHandler::OnSitePlayButtonClicked) leaves the player on the map pawn with the camera in 'Map' mode. This is ASYNCHRONOUS (a camera blend runs): poll game.get_state until phase == 'in_game'. Fails when there is no world, no player controller, when the camera mode is not 'Map' (game.get_state reports phase == 'map_view' when it is), or while another camera transition is already running. That last guard can get stuck true right after a move-in even though the map is already interactive - if retrying does not clear it, pass force=true. Success is verified after the fact (the map pawn's transition flag must have gone down), so a close request that the pawn silently ignored is reported as a failure instead of a bogus accept. The map pawn's own transition guard can also latch permanently if a close aborts partway; the error text says so, and in that case only restarting the client clears it.

# Metadata

| FieldValueDisplayExit World Map ViewCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayExit World Map ViewCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionforceboolnofalseBypass the 'camera transition in progress' guard. The flag can stay set indefinitely after a move-in; the map pawn's own ESC handler closes the map without checking it, so bypassing is safe. Only use this after a plain call has failed with that reason. |
| --- |
| forceboolnofalseBypass the 'camera transition in progress' guard. The flag can stay set indefinitely after a move-in; the map pawn's own ESC handler closes the map without checking it, so bypassing is safe. Only use this after a plain call has failed with that reason. |

# Usage

```
await inzoi.cli.execute('game.exit_map_view', {  force: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
