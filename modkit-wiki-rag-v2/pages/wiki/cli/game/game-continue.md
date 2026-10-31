---
document_id: "247ef1c4843d926ea7828e1e3cdbdba65742f7416aacb5e87b71d8c5314ffefc"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-continue"
title: "game.continue"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:59+00:00"
content_sha256: "99b988ddea66a63bfeb4117fbdb08b42f2655659e0fc77fd5c3f49ea3526485b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-continue"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Loads the most recently saved (by saved_time) non-broken save. AutoSave slots are skipped by default. Saves written by a NEWER build are never chosen: loading one opens the save-version fork popup, which is on ui.dismiss's deny-list, so an automation run would deadlock there. When those are the only candidates this fails and tells you to use game.load plus ui.click_popup_button instead. Requires a live game world, so it is rejected in the no-world automation context, and is also rejected while a level move is already in flight (a second request would be swallowed silently). This is ASYNCHRONOUS: poll game.get_state until phase == 'in_game'. Fails when there is no candidate - use game.new_game instead.

# Metadata

| FieldValueDisplayContinue Last SaveCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayContinue Last SaveCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptioninclude_autosaveboolnofalseAlso consider AutoSave slots as continue candidates |
| --- |
| include_autosaveboolnofalseAlso consider AutoSave slots as continue candidates |

# Usage

```
await inzoi.cli.execute('game.continue', {  include_autosave: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
