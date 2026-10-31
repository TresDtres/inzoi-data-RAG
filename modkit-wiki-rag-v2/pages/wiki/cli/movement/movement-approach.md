---
document_id: "c2c654b498c48e69241acc7c02ecffc85fe8b0aa94757a10b8bbff6637c572c3"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-approach"
title: "movement.approach"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:10+00:00"
content_sha256: "52c9a1ac3b945d32364941b2cf860d2281c2614b931c9fff5a1cdee95eb9fe48"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/movement/movement-approach"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Walks the possessed character toward the specified target entity.

# Metadata

| FieldValueDisplayApproach CharacterCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayApproach CharacterCategory`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`movement`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdyes—Target entity ID to approach |
| --- |
| entity_identityIdyes—Target entity ID to approach |

# Usage

```
await inzoi.cli.execute('movement.approach', {  entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomovement[movement.get_site_move_interaction](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-get-site-move-interaction)[movement.go_home](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-go-home)[movement.reset_zoi](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-reset-zoi)[movement.set_speed](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-set-speed)[movement.summon](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon)[movement.summon_batch](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-summon-batch)[movement.teleport](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport)[movement.teleport_npc_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-npc-to)[movement.teleport_to](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/movement/movement-teleport-to)
