---
document_id: "376244c4488939666383d3450165633f524577a629517d2364d2ff856ab61657"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-get"
title: "ambition.get"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:35:43+00:00"
content_sha256: "eef3e3fac8cca612ae6306f7414b1de5aa44c4240586dbad4ac2ac41f9d3b787"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/ambition/ambition-get"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the target character's ambition state: currently playing ambition item, current step, completed count, all-completed flag, and playable ambition item ids.

# Metadata

| FieldValueDisplayGet AmbitionCategory`ambition`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet AmbitionCategory`ambition`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`ambition`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('ambition.get', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsoambition[ambition.complete](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-complete)[ambition.play](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/ambition/ambition-play)
