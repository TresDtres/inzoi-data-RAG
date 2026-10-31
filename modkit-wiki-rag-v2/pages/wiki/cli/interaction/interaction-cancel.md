---
document_id: "5838aa9ac08d64a5e7dfe89d004a35ee73899e22af3e191cd467094b9a851ca8"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-cancel"
title: "interaction.cancel"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:06+00:00"
content_sha256: "0e84d222bb688eda78d8e0adf63186eae293e4217aff4a008710f613ce08bb57"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/interaction/interaction-cancel"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Cancels the currently playing interaction. Does NOT disable autonomy (unlike zoi.freeze). The character will proceed to the next queued interaction or go idle.

# Metadata

| FieldValueDisplayCancel Current InteractionCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayCancel Current InteractionCategory`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`interaction`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Character entity ID (default: possessed) |
| --- |
| entity_identityIdno—Character entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('interaction.cancel', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsointeraction[interaction.clear_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-clear-queue)[interaction.execute](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-execute)[interaction.get_current](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-current)[interaction.get_queue](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-get-queue)[interaction.list_available](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-list-available)[interaction.search](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/interaction/interaction-search)
