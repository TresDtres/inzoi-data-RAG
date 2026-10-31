---
document_id: "ee13f3730d78de6fa36f932543dde8ec4d6bf931e68ffe825d31996bbdb46c4a"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count"
title: "memory.get_unread_count"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "1abd9da15ce8e48867f307b7c5f266bdced8cb13c97bd1471f5e70055ef4201a"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-get-unread-count"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Returns the number of unread memories for the target character.

# Metadata

| FieldValueDisplayGet Unread Memory CountCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayGet Unread Memory CountCategory`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`Public`Scope`B2Authority`Tags—Aliases— |
| Access`Public`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Target entity ID (default: possessed) |
| --- |
| entity_identityIdno—Target entity ID (default: possessed) |

# Returns

Returns a JSON object with the following fields:

| FieldTypeRequiredDescription`entity_id`entityIdyesOwner entity id`unread_count`intyesNumber of unread memories |
| --- |
| `entity_id`entityIdyesOwner entity id`unread_count`intyesNumber of unread memories |
| `unread_count`intyesNumber of unread memories |

# Usage

```
await inzoi.cli.execute('memory.get_unread_count', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
