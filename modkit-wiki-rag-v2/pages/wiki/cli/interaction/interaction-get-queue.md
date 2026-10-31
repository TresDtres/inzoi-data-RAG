---
document_id: "cde0877d9989084b363d515d1af3f92cec44f0714eeb468bf082d4d86e695747"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue"
title: "interaction.get_queue"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:07+00:00"
content_sha256: "bd6fae0d64aae355148ed7c941055f63fe558cd0ea8dc7dabf6d505049ec061f"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-get-queue"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the interaction queue status: queue count, whether it's empty, and the currently playing interaction info.

# Metadata

| FieldValueDisplayGet Interaction QueueCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Interaction QueueCategory`interaction`Access`Public`Scope`B2Authority`Tags—Aliases— |
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
await inzoi.cli.execute('interaction.get_queue', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
