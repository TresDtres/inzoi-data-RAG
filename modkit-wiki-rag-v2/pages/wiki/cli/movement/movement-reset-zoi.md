---
document_id: "c7b353cde6fd1052b7530b01e0cf687ac866011d056fea65a25c8328beac269a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi"
title: "movement.reset_zoi"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "ece8e6732a1f9f019ac6d333e6e66ed7b297b352b70b9f2e0b5644c8156f5eb7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-reset-zoi"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Force-recovers a stuck/bugged character: clears current+queued interactions, stops action/anim, resets movement/path, releases grab, clears buffs, disembarks vehicle. By default also teleports to a safe spawn (home/nearest spawner); pass teleport=false to reset in place. Pass gated=true to use the player-facing rescue instead (gates infant/dying, fade/toast, deferred).

# Metadata

| FieldValueDisplayReset ZoiCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ResetZoi` |
| --- |
| DisplayReset ZoiCategory`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ResetZoi` |
| Category`movement`Access`UserCheat`Scope`B2Authority`Tags—Aliases`ResetZoi` |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases`ResetZoi` |
| Scope`B2Authority`Tags—Aliases`ResetZoi` |
| Tags—Aliases`ResetZoi` |
| Aliases`ResetZoi` |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)teleportboolnotrueAlso teleport to a safe spawn (default: true; ignored if gated)gatedboolnofalseUse the player-facing rescue (gates infant/dying, fade/toast, deferred). Overrides teleport. |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)teleportboolnotrueAlso teleport to a safe spawn (default: true; ignored if gated)gatedboolnofalseUse the player-facing rescue (gates infant/dying, fade/toast, deferred). Overrides teleport. |
| teleportboolnotrueAlso teleport to a safe spawn (default: true; ignored if gated)gatedboolnofalseUse the player-facing rescue (gates infant/dying, fade/toast, deferred). Overrides teleport. |
| gatedboolnofalseUse the player-facing rescue (gates infant/dying, fade/toast, deferred). Overrides teleport. |

# Usage

```
await inzoi.cli.execute('movement.reset_zoi', {  entity_id: 0, // optional  teleport: true, // optional  gated: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.approach](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach)[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
