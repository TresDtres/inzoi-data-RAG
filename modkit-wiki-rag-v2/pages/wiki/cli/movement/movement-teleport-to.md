---
document_id: "360a40db787161efa64770e851961bd7f934ab567843a0508f74e21834be0f0c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to"
title: "movement.teleport_to"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "113c9de164e7e4571e386c6981736a95da94f51cc331b5e7248336c15d364a21"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-teleport-to"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Teleports the possessed character near the specified target entity.

# Metadata

| FieldValueDisplayTeleport To CharacterCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayTeleport To CharacterCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target entity ID to teleport to |
| --- |
| entity_identityIdyes—Target entity ID to teleport to |

# Usage

```
await inzoi.cli.execute('movement.teleport_to', {  entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)
