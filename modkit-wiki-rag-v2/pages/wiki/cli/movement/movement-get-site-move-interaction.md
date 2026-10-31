---
document_id: "c93761e8f40fa9536225998df3a3030a5571e17419f3862c147d05b6f35dfdc4"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction"
title: "movement.get_site_move_interaction"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "0ff03f75f90e96e336dc8dd6969fd90a5d1f1b13155918825a3066ca53587b8d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-get-site-move-interaction"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns an interaction.execute descriptor for walking a single character to a target site without creating a Zoi group.

# Metadata

| FieldValueDisplayGet Site Move InteractionCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Site Move InteractionCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionsite_idnameno—Target site IDtarget_entity_identityIdno—Target site entity IDentity_identityIdno—Character entity ID (default: possessed) |
| --- |
| site_idnameno—Target site IDtarget_entity_identityIdno—Target site entity IDentity_identityIdno—Character entity ID (default: possessed) |
| target_entity_identityIdno—Target site entity IDentity_identityIdno—Character entity ID (default: possessed) |
| entity_identityIdno—Character entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('movement.get_site_move_interaction', {  site_id: '', // optional  target_entity_id: 0, // optional  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
