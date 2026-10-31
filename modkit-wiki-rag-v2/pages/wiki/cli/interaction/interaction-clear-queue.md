---
document_id: "36e8b5f6337d1ab13d211a6d8dc1c5b3861ba328f28e3fb34dc5c494812be86c"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue"
title: "interaction.clear_queue"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "91ff46d201cd501fb51af9b71282cd5a3a4620c0f0bd6a96ab239da3529028eb"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-clear-queue"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Clears all queued interactions. By default keeps the currently playing interaction; set cancel_current=true to also cancel it.

# Metadata

| FieldValueDisplayClear Interaction QueueCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayClear Interaction QueueCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed)cancel_currentboolnofalseAlso cancel the currently playing interaction |
| --- |
| entity_identityIdno—Character entity ID (default: possessed)cancel_currentboolnofalseAlso cancel the currently playing interaction |
| cancel_currentboolnofalseAlso cancel the currently playing interaction |

# Usage

```
await inzoi.cli.execute('interaction.clear_queue', {  entity_id: 0, // optional  cancel_current: false, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.cancel](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
