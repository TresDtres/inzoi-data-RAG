---
document_id: "c90679f38b7074517dbd77227c9e3260b122fcbf2822f37426cdb8c60f8d453b"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/growth/growth-unlock-toddler-walk"
title: "growth.unlock_toddler_walk"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261021T083530Z"
captured_at: "2026-10-21T08:36:01+00:00"
content_sha256: "e65e07828aa67191c8d6d2613b31375146b5183f4a8c4c4a08b343e0ff83700d"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/growth/growth-unlock-toddler-walk"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Unlocks walking for a toddler immediately, without waiting for age progress or skill level. Fails if the target is not a toddler or already unlocked. Locking again is not supported.

# Metadata

| FieldValueDisplayUnlock Toddler WalkCategory`growth`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayUnlock Toddler WalkCategory`growth`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Category`growth`Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Access`UserCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Usage

```
await inzoi.cli.execute('growth.unlock_toddler_walk', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)
