---
document_id: "d3685662820aa6f386326a63fce1bf0f3636f47da9ff25736c53daf8727fe4b5"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-complete"
title: "ambition.complete"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:43+00:00"
content_sha256: "f48307d426c1d72d70e14bc09e33c78c7b5d8d130b4316ce1d587db8a2b63cf7"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ambition/ambition-complete"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Instantly completes a specific ambition item on the target character (cheat; no-op in shipping builds). Use ambition.get to find item ids.

# Metadata

| FieldValueDisplayComplete AmbitionCategory`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayComplete AmbitionCategory`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`ambition`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed)ambition_item_idnameyes—Ambition item ID to complete (see ambition.get) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed)ambition_item_idnameyes—Ambition item ID to complete (see ambition.get) |
| ambition_item_idnameyes—Ambition item ID to complete (see ambition.get) |

# Usage

```
await inzoi.cli.execute('ambition.complete', {  entity_id: 0, // optional  ambition_item_id: '',});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoambition[ambition.get](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-get)[ambition.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-play)
