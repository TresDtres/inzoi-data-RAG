---
document_id: "826d1634d2fd18408eb3bfed15f8cdc99593c1f9e60e967593ec78f6b6cdb566"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed"
title: "movement.set_speed"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "da9d78ec33a7f0e3dacb0bd06f692b4a9f92b0659642738af83f37b07398abfd"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-set-speed"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Get, set, or reset MaxWalkSpeed (cm/s). Default walk=190, sprint=400. action=get: returns current and default values. action=set speed=: sets MaxWalkSpeed directly (1~2000 cm/s). action=reset: restores to default walk speed (190).

# Metadata

| FieldValueDisplaySet Movement SpeedCategory`movement`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetMovementSpeed` |
| --- |
| DisplaySet Movement SpeedCategory`movement`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetMovementSpeed` |
| Category`movement`Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetMovementSpeed` |
| Access`UserCheat`Scope`B1Multicast`Tags—Aliases`SetMovementSpeed` |
| Scope`B1Multicast`Tags—Aliases`SetMovementSpeed` |
| Tags—Aliases`SetMovementSpeed` |
| Aliases`SetMovementSpeed` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), set, or resetspeedfloatno—Walk speed in cm/s (1~2000). 190=default walk, 400=default sprint. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)actionstringnogetget (default), set, or resetspeedfloatno—Walk speed in cm/s (1~2000). 190=default walk, 400=default sprint. |
| actionstringnogetget (default), set, or resetspeedfloatno—Walk speed in cm/s (1~2000). 190=default walk, 400=default sprint. |
| speedfloatno—Walk speed in cm/s (1~2000). 190=default walk, 400=default sprint. |

# Usage

```
await inzoi.cli.execute('movement.set_speed', {  entity_id: 0, // optional  action: 'get', // optional  speed: 0.0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
