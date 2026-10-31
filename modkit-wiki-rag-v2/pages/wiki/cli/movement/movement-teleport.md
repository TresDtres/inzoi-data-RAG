---
document_id: "107025e0d1c490be3cbb4f968678c6e8b106179fee8ef1ac2a3166a4d6084102"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport"
title: "movement.teleport"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "758eb0e30c84242958d4c218658cf31da9aee9c89df89181c256e77433ac24c1"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-teleport"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Teleports the specified character to a destination site or world coordinates.

# Metadata

| FieldValueDisplayTeleportCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`Teleport`, `world.teleport` |
| --- |
| DisplayTeleportCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`Teleport`, `world.teleport` |
| Category`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`Teleport`, `world.teleport` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`Teleport`, `world.teleport` |
| Scope`B2Authority`Tags—Aliases`Teleport`, `world.teleport` |
| Tags—Aliases`Teleport`, `world.teleport` |
| Aliases`Teleport`, `world.teleport` |

# Parameters

| NameTypeRequiredDefaultDescriptiondestinationstringno—Destination site ID, or FVector string like 'X=-1 Y=-2 Z=-3'xfloatno—World X coordinate (requires y and z)yfloatno—World Y coordinate (requires x and z)zfloatno—World Z coordinate (requires x and y)entity_identityIdno—Target entity ID (default: possessed) |
| --- |
| destinationstringno—Destination site ID, or FVector string like 'X=-1 Y=-2 Z=-3'xfloatno—World X coordinate (requires y and z)yfloatno—World Y coordinate (requires x and z)zfloatno—World Z coordinate (requires x and y)entity_identityIdno—Target entity ID (default: possessed) |
| xfloatno—World X coordinate (requires y and z)yfloatno—World Y coordinate (requires x and z)zfloatno—World Z coordinate (requires x and y)entity_identityIdno—Target entity ID (default: possessed) |
| yfloatno—World Y coordinate (requires x and z)zfloatno—World Z coordinate (requires x and y)entity_identityIdno—Target entity ID (default: possessed) |
| zfloatno—World Z coordinate (requires x and y)entity_identityIdno—Target entity ID (default: possessed) |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('movement.teleport', {  destination: '', // optional  x: 0.0, // optional  y: 0.0, // optional  z: 0.0, // optional  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
