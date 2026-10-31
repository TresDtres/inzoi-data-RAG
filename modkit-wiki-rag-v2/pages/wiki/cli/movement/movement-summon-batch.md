---
document_id: "73a1285aa973f21595dbdcb0920d00aacd35c55ef5138a31045bf673d78f36bf"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch"
title: "movement.summon_batch"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "959fd2a887f637c0a166a251f37d8478a6c5784742ea314434efab9f694f0f06"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-summon-batch"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Teleports multiple characters to near the possessed character. Possessed character is automatically excluded.

# Metadata

| FieldValueDisplaySummon Multiple CharactersCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplaySummon Multiple CharactersCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_idsstringyes—Comma-separated entity IDs to summon |
| --- |
| entity_idsstringyes—Comma-separated entity IDs to summon |

# Usage

```
await inzoi.cli.execute('movement.summon_batch', {  entity_ids: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
