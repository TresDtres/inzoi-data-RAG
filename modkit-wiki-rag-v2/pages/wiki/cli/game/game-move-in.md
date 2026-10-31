---
document_id: "f74a392f0255c6a9469d113837972184747d3ae80fe287abdfa0a6014276b5e8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/game/game-move-in"
title: "game.move_in"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:00+00:00"
content_sha256: "52f2379d85dcd4ae313fa4de437d12d7884aa0e053f9091d4095037c5a6ac52f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/game/game-move-in"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Moves the newly registered household into a residence site during the initial site selection, possesses a character and starts play. Requires map_mode == 'select_init_house' and a registered household; otherwise it fails with the exact reason. This is ASYNCHRONOUS. The move-in ends on the world map overview, so poll game.get_state until phase == 'map_view' and then call game.exit_map_view; phase reaches 'in_game' after that. (game.new_game does the exit_map_view step for you.) With mortgage=true any site is affordable because the shortfall is taken as a loan. ONE SHOT PER REGISTERED HOUSEHOLD: sending the packet consumes the registration, exactly like the shipped UI path. If the request is rejected (bad site_id, server refusal) the map stays in 'select_init_house' and this command may be retried after 5 seconds - it then reuses the cached household id. Once the move-in actually succeeds there is no way back: run game.goto_lobby and then game.new_game to start over. game.new_game already performs this step; use this command only for manual control.

# Metadata

| FieldValueDisplayMove Into SiteCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| --- |
| DisplayMove Into SiteCategory`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Category`game`Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Access`UserCheat`Scope`B1Standalone`TagsExperimentalAliases— |
| Scope`B1Standalone`TagsExperimentalAliases— |
| TagsExperimentalAliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionsite_idnameyes—Residence site id from game.list_move_in_sites.mortgageboolnotrueTake a mortgage for the shortfall so any site can be bought.family_optionstringnoObjectSaveEB1FamilyMoveFamilyOption enumerator name: ObjectSave \| ObjectSell \| ObjectIgnore.site_optionstringnoObjectPreserveEB1FamilyMoveSiteOption enumerator name: ObjectPreserve \| ObjectEmpty \| SiteClear \| Mortgage. |
| --- | --- | --- | --- | --- | --- |
| site_idnameyes—Residence site id from game.list_move_in_sites.mortgageboolnotrueTake a mortgage for the shortfall so any site can be bought.family_optionstringnoObjectSaveEB1FamilyMoveFamilyOption enumerator name: ObjectSave \| ObjectSell \| ObjectIgnore.site_optionstringnoObjectPreserveEB1FamilyMoveSiteOption enumerator name: ObjectPreserve \| ObjectEmpty \| SiteClear \| Mortgage. |
| mortgageboolnotrueTake a mortgage for the shortfall so any site can be bought.family_optionstringnoObjectSaveEB1FamilyMoveFamilyOption enumerator name: ObjectSave \| ObjectSell \| ObjectIgnore.site_optionstringnoObjectPreserveEB1FamilyMoveSiteOption enumerator name: ObjectPreserve \| ObjectEmpty \| SiteClear \| Mortgage. |
| family_optionstringnoObjectSaveEB1FamilyMoveFamilyOption enumerator name: ObjectSave \| ObjectSell \| ObjectIgnore.site_optionstringnoObjectPreserveEB1FamilyMoveSiteOption enumerator name: ObjectPreserve \| ObjectEmpty \| SiteClear \| Mortgage. |
| site_optionstringnoObjectPreserveEB1FamilyMoveSiteOption enumerator name: ObjectPreserve \| ObjectEmpty \| SiteClear \| Mortgage. |

# Usage

```
await inzoi.cli.execute('game.move_in', {  site_id: '',  mortgage: true, // optional  family_option: 'ObjectSave', // optional  site_option: 'ObjectPreserve', // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
