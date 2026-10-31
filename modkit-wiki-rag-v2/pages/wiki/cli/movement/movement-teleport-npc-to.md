---
document_id: "a9d1bc63b1c884bf5f64b3904416e99cf7905dfc864748734e178dd637180e1b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to"
title: "movement.teleport_npc_to"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "d7759a09f3fad6b1e538c43fdd239db42c86e1c36ab82c41359919916d7585f1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-teleport-npc-to"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Teleports a character to near another character. Unlike movement.teleport_to, neither character needs to be possessed.

# Metadata

| FieldValueDisplayTeleport NPC To NPCCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayTeleport NPC To NPCCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Character to teleporttarget_entity_identityIdyes—Destination character to teleport near |
| --- |
| entity_identityIdyes—Character to teleporttarget_entity_identityIdyes—Destination character to teleport near |
| target_entity_identityIdyes—Destination character to teleport near |

# Usage

```
await inzoi.cli.execute('movement.teleport_npc_to', {  entity_id: 0,  target_entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
