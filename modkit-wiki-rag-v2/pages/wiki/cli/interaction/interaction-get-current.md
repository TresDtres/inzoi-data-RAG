---
document_id: "825c888997a0d30530663e23faac85fcce7284177489a345413494c8badcdca2"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current"
title: "interaction.get_current"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "135e3311dbd181a3017aea33f8a62a3ae41e5aba79779f7bfc012c58e34abd1d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-get-current"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns information about the character's currently playing interaction: interaction_bag_id, state (Waiting/StandBy/Playing), action_type, target, remaining time, and queue count.

# Metadata

| FieldValueDisplayGet Current InteractionCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Current InteractionCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed) |
| --- |
| entity_identityIdno—Character entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('interaction.get_current', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
