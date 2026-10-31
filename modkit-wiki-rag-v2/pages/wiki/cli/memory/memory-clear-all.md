---
document_id: "559730c6e06e33e77a937cb2ac57509827448e009c14cb5e00e43ae9c1f38ef1"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all"
title: "memory.clear_all"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:19+00:00"
content_sha256: "ade0f6ea546832d5e467d0f8465ea4dc804a75108cdcca9e1955e765a0b3c461"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-clear-all"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Clears all social contexts of the owner and removes the owner's memory from each target as well.

# Metadata

| FieldValueDisplayClear All MemoriesCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayClear All MemoriesCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed) |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed) |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.clear_all', {  entity_id: 0, // optional});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.remove](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
