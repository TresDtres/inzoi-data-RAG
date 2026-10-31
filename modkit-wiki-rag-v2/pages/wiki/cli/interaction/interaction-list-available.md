---
document_id: "0b2d36af0f39e7a79222f977847f6939ac45f2204d609f4277809a9ce06cc1e1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available"
title: "interaction.list_available"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:08+00:00"
content_sha256: "a5e12f93ddd4bea40c70e86bf24aed3efd479fe766de93fd3faa3103d98e0d3b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-list-available"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Lists all available interactions for a target entity. Returns interaction_bag_id values that can be passed to interaction.execute. For objects: lists object interactions. For characters: lists talk/social interactions.

# Metadata

| FieldValueDisplayList Available InteractionsCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayList Available InteractionsCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character performing the interaction (default: possessed)target_entity_identityIdyes—Target entity ID (object or character) to list interactions for |
| --- |
| entity_identityIdno—Character performing the interaction (default: possessed)target_entity_identityIdyes—Target entity ID (object or character) to list interactions for |
| target_entity_identityIdyes—Target entity ID (object or character) to list interactions for |

# Usage

```
await inzoi.cli.execute('interaction.list_available', {  entity_id: 0, // optional  target_entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
