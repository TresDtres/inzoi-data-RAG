---
document_id: "8862b5d0a18eab401ebc8f39c0a8bda83f7eb087b6b2fc1cd881f7dff7823ed0"
source: "wiki"
url: "https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-remove"
title: "memory.remove"
section: "wiki/cli"
breadcrumb: []
snapshot: "20261008T064820Z"
captured_at: "2026-10-08T06:49:20+00:00"
content_sha256: "b97de758c567035eb40333dff4cba5a7707d1a06072afce79524b691e9f6723b"
chunk: 1
chunk_count: 1
page_type: "article"
route: "wiki/cli/memory/memory-remove"
breadcrumb_status: "not_present_in_source"
classification_basis: "official_url_path"
---

# Overview

- Removes the social context (memory) with target_entity_id from the owner character.

# Metadata

| FieldValueDisplayRemove MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| --- |
| DisplayRemove MemoryCategory`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Category`memory`Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Access`ScriptCheat`Scope`B2Authority`Tags—Aliases— |
| Scope`B2Authority`Tags—Aliases— |
| Tags—Aliases— |
| Aliases— |

# Parameters

| NameTypeRequiredDefaultDescriptionentity_identityIdno—Owner entity ID (default: possessed)target_entity_identityIdyes—Target entity of the social context to remove |
| --- |
| entity_identityIdno—Owner entity ID (default: possessed)target_entity_identityIdyes—Target entity of the social context to remove |
| target_entity_identityIdyes—Target entity of the social context to remove |

# Returns

- Return shape is not declared for this command.

# Usage

```
await inzoi.cli.execute('memory.remove', {  entity_id: 0, // optional  target_entity_id: 0,});
```

[←Back to Command FinderSearch and filter all 318 CLI documents](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/commands)See alsomemory[memory.add](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add)[memory.add_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-add-milestone)[memory.clear_all](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-clear-all)[memory.get_milestones](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-milestones)[memory.get_social_contexts](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-social-contexts)[memory.get_unread_count](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-get-unread-count)[memory.has_memory](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-memory)[memory.has_milestone](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-has-milestone)[memory.mark_read](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-mark-read)[memory.solve](https://mod-docs.playinzoi.com/docs/modkit-docs/wiki/cli/memory/memory-solve)
