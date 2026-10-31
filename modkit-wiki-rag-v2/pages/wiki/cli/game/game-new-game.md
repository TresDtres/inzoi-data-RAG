---
document_id: "58dc94ac773cb7c18ecd3522eb80dcab8bc0a1623f93e77caa7c4d03114fb4da"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-new-game"
title: "game.new_game"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "04b4af644f9f37ea900745d66a0113fb89f76c2019d21c1506700aa33591a649"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-new-game"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Starts a fully automated new game from the lobby: clicks New Game, randomizes the first character at the requested age, creates the family, submits the approval document, picks a city, waits for the level to load, moves into a residence site and enters play. This is ASYNCHRONOUS and returns as soon as the flow is accepted. Poll game.get_state: 'flow.step' tracks progress and 'phase' becomes 'in_game' when finished. Each step has a timeout (120s by default, 600s for level load and in-game entry) and there is NO automatic retry - on timeout flow.step becomes 'failed' and flow.last_error explains where it stopped. The one exception is the final 'dismiss_intro_ui' step: the game is already playable there, so a timeout still ends as flow.step == 'done' and only records the reason in flow.last_error. Must be called from the lobby, or with force=true from anywhere (the flow then returns to the lobby by itself first).

# Metadata

| FieldValueDisplayStart New Game (Automated)Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayStart New Game (Automated)Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionmap_idnameno—Target city id (Map table row id). Omit to use the first released playable city.site_idnameno—Residence site to move into. Omit to auto-pick the cheapest affordable one (same ordering as game.list_move_in_sites).growth_stepstringnoYouthEB1GrowthStep enumerator name for the created character. Default 'Youth' (young adult). NOTE: 'Adult' means middle-aged, not young adult.family_namestringno—Family name. Omit to let the game use the first member's surname.mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| --- |
| map_idnameno—Target city id (Map table row id). Omit to use the first released playable city.site_idnameno—Residence site to move into. Omit to auto-pick the cheapest affordable one (same ordering as game.list_move_in_sites).growth_stepstringnoYouthEB1GrowthStep enumerator name for the created character. Default 'Youth' (young adult). NOTE: 'Adult' means middle-aged, not young adult.family_namestringno—Family name. Omit to let the game use the first member's surname.mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| site_idnameno—Residence site to move into. Omit to auto-pick the cheapest affordable one (same ordering as game.list_move_in_sites).growth_stepstringnoYouthEB1GrowthStep enumerator name for the created character. Default 'Youth' (young adult). NOTE: 'Adult' means middle-aged, not young adult.family_namestringno—Family name. Omit to let the game use the first member's surname.mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| growth_stepstringnoYouthEB1GrowthStep enumerator name for the created character. Default 'Youth' (young adult). NOTE: 'Adult' means middle-aged, not young adult.family_namestringno—Family name. Omit to let the game use the first member's surname.mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| family_namestringno—Family name. Omit to let the game use the first member's surname.mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| mortgageboolnotrueTake a mortgage when the household cannot afford the site, so any site can be moved into.dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| dismiss_intro_uiboolnotrueAutomatically close the intro cat-talk / coach marks / popups after entering play.forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |
| forceboolnofalseCancel an already running flow and restart. Also allows starting from outside the lobby: the flow then goes back to the lobby itself (flow.step == 'wait_lobby', 120s timeout) before clicking New Game. Without it, a non-lobby phase is rejected. |

# Usage

```
await inzoi.cli.execute('game.new_game', {  map_id: '', // optional  site_id: '', // optional  growth_step: 'Youth', // optional  family_name: '', // optional  mortgage: true, // optional  dismiss_intro_ui: true, // optional  force: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
